const express = require('express');
const cors = require('cors');
const NodeCache = require('node-cache');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;

// Initialize cache with 60 seconds TTL
const cache = new NodeCache({ stdTTL: 60 });

// CORS configuration
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:5173', 'http://localhost:5174'],
  credentials: true
}));

app.use(express.json());

// WordPress REST API base URL
const WP_BASE_URL = process.env.WORDPRESS_BASE_URL || 'https://your-wordpress-site.com/wp-json/wp/v2';

// Helper function to make WordPress API requests
async function fetchFromWordPress(endpoint, queryParams = {}) {
  const { default: fetch } = await import('node-fetch');
  
  const url = new URL(`${WP_BASE_URL}${endpoint}`);
  
  // Add query parameters
  Object.keys(queryParams).forEach(key => {
    if (queryParams[key] !== undefined && queryParams[key] !== null) {
      url.searchParams.append(key, queryParams[key]);
    }
  });

  try {
    const response = await fetch(url.toString());
    
    if (!response.ok) {
      throw new Error(`WordPress API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return {
      data,
      totalPages: response.headers.get('X-WP-TotalPages'),
      total: response.headers.get('X-WP-Total')
    };
  } catch (error) {
    console.error('WordPress API fetch error:', error);
    throw error;
  }
}

// Route: Get all posts with pagination, search, category, and tag filters
app.get('/api/posts', async (req, res) => {
  try {
    const {
      page = 1,
      per_page = 10,
      search,
      category,
      tag,
    } = req.query;

    // Create cache key based on query parameters
    const cacheKey = `posts_${JSON.stringify(req.query)}`;
    const cachedData = cache.get(cacheKey);

    if (cachedData) {
      return res.json(cachedData);
    }

    const queryParams = {
      page,
      per_page,
      orderby: 'date',
      order: 'desc',
      _embed: true // Include embedded data (featured images, authors, etc.)
    };

    if (search) queryParams.search = search;
    if (category) queryParams.categories = category;
    if (tag) queryParams.tags = tag;

    const result = await fetchFromWordPress('/posts', { ...queryParams, type: 'post' });

    // Process posts to extract relevant data
    const processedPosts = result.data.map(post => ({
      id: post.id,
      title: post.title.rendered,
      slug: post.slug,
      excerpt: post.excerpt.rendered,
      content: post.content.rendered,
      date: post.date,
      modified: post.modified,
      status: post.status,
      link: post.link,
      featuredImage: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || null,
      featuredImageAlt: post._embedded?.['wp:featuredmedia']?.[0]?.alt_text || '',
      author: {
        name: post._embedded?.author?.[0]?.name || 'Unknown',
        id: post._embedded?.author?.[0]?.id || null
      },
      categories: post._embedded?.['wp:term']?.[0] || [],
      tags: post._embedded?.['wp:term']?.[1] || []
    }));

    const responseData = {
      posts: processedPosts,
      pagination: {
        currentPage: parseInt(page),
        totalPages: parseInt(result.totalPages) || 1,
        total: parseInt(result.total) || 0,
        perPage: parseInt(per_page)
      }
    };

    // Cache the response
    cache.set(cacheKey, responseData);

    res.json(responseData);
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({
      error: 'Failed to fetch posts',
      message: error.message
    });
  }
});

// Route: Get single post by slug
app.get('/api/posts/:slug', async (req, res) => {
  try {
    const { slug } = req.params;
    const cacheKey = `post_${slug}`;
    const cachedData = cache.get(cacheKey);

    if (cachedData) {
      return res.json(cachedData);
    }

    const result = await fetchFromWordPress('/posts', {
      slug,
      _embed: true
    });

    if (!result.data || result.data.length === 0) {
      return res.status(404).json({
        error: 'Post not found',
        message: `No post found with slug: ${slug}`
      });
    }

    const post = result.data[0];
    const processedPost = {
      id: post.id,
      title: post.title.rendered,
      slug: post.slug,
      excerpt: post.excerpt.rendered,
      content: post.content.rendered,
      date: post.date,
      modified: post.modified,
      status: post.status,
      link: post.link,
      featuredImage: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || null,
      featuredImageAlt: post._embedded?.['wp:featuredmedia']?.[0]?.alt_text || '',
      author: {
        name: post._embedded?.author?.[0]?.name || 'Unknown',
        id: post._embedded?.author?.[0]?.id || null
      },
      categories: post._embedded?.['wp:term']?.[0] || [],
      tags: post._embedded?.['wp:term']?.[1] || []
    };

    // Cache the response
    cache.set(cacheKey, processedPost);

    res.json(processedPost);
  } catch (error) {
    console.error('Error fetching post:', error);
    res.status(500).json({
      error: 'Failed to fetch post',
      message: error.message
    });
  }
});

// Route: Get all categories
app.get('/api/categories', async (req, res) => {
  try {
    const cacheKey = 'categories';
    const cachedData = cache.get(cacheKey);

    if (cachedData) {
      return res.json(cachedData);
    }

    const result = await fetchFromWordPress('/categories', {
      per_page: 100, // Get more categories
      orderby: 'name',
      order: 'asc'
    });

    const processedCategories = result.data.map(category => ({
      id: category.id,
      name: category.name,
      slug: category.slug,
      description: category.description,
      count: category.count
    }));

    // Cache the response
    cache.set(cacheKey, processedCategories);

    res.json(processedCategories);
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({
      error: 'Failed to fetch categories',
      message: error.message
    });
  }
});

// Route: Get all tags
app.get('/api/tags', async (req, res) => {
  try {
    const cacheKey = 'tags';
    const cachedData = cache.get(cacheKey);

    if (cachedData) {
      return res.json(cachedData);
    }

    const result = await fetchFromWordPress('/tags', {
      per_page: 100, // Get more tags
      orderby: 'name',
      order: 'asc'
    });

    const processedTags = result.data.map(tag => ({
      id: tag.id,
      name: tag.name,
      slug: tag.slug,
      description: tag.description,
      count: tag.count
    }));

    // Cache the response
    cache.set(cacheKey, processedTags);

    res.json(processedTags);
  } catch (error) {
    console.error('Error fetching tags:', error);
    res.status(500).json({
      error: 'Failed to fetch tags',
      message: error.message
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    wordpress_url: WP_BASE_URL
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({
    error: 'Internal server error',
    message: err.message
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 WordPress API Proxy Server running on http://localhost:${PORT}`);
  console.log(`📝 WordPress Base URL: ${WP_BASE_URL}`);
  console.log(`🔄 Cache TTL: 60 seconds`);
});

module.exports = app;
