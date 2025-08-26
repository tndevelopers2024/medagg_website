import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Chatbot from './components/internal_components/chatbot';
import PAE_Treatmentpage from './pages/PAE_Treatmentpage';
import GAE_Treatmentpage from './pages/GAE_Treatmentpage';
import Thyroid_Nodule_Ablation_Treatmentpage from './pages/Thyroid_Nodule_Ablation_Treatmentpage';
import About from './pages/About';
import Varicocele_embolization from './pages/Varicocele_embolization';
import VaricoseVeinPage from './pages/varicosevein';
import Blog from './pages/Blog';
import BlogPost from './components/blog/BlogPost';
import FTE from './pages/FTE';
import ContactUsPage from './pages/contact_us_page';
import UAEPage from './pages/uae';
import BreastNoduleVAEPage from './pages/Breast_Nodule_VAE';


function App() {
  return (
    <div className='min-h-screen bg-pink-50 flex flex-col'>
      <main className='flex-grow'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pae' element={<PAE_Treatmentpage />} />
          <Route path='/gae' element={<GAE_Treatmentpage />} />
          <Route path='/thyroid' element={<Thyroid_Nodule_Ablation_Treatmentpage />} />
          <Route path='/about' element={<About />} />
                    <Route path='/varicocele-embolization' element={<Varicocele_embolization />} />
          <Route path='/varicose-vein' element={<VaricoseVeinPage />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/fte' element={<FTE />} />
          <Route path='/blog/:slug' element={<BlogPost />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/uae" element={<UAEPage />} />
          <Route path="/breast-nodule-vae" element={<BreastNoduleVAEPage />} />
        </Routes>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;
