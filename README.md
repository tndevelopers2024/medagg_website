# React + Vite

<<<<<<< HEAD

=======
>>>>>>> origin/main
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Website

This project is a modern React web application built with Vite and styled using Tailwind CSS. It features a Home page with sections for services, testimonials, navigation, and a fully integrated AI-powered Chatbot.

## Features

- **React + Vite**: Fast development and build tooling.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **Home Page**: Includes Hero, Services, Testimonials, Navbar, and Footer components.
- **AI Chatbot**: A virtual clinical assistant (Dr. Medagg) is available on the Home page to answer medical inquiries, book consultations, and provide information about services and insurance.

## Getting Started

### Prerequisites
- Node.js (v16 or higher recommended)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd Website-main
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the App
Start the development server:
```bash
npm run dev
# or
yarn dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure
- `src/pages/Home.jsx`: Main landing page, renders all homepage sections and the Chatbot.
- `src/components/internal_components/chatbot.jsx`: The AI Chatbot component.
- `src/App.js`: App entry point.

## Chatbot Usage
The chatbot appears on the Home page. Users can interact with Dr. Medagg for medical questions, appointment scheduling, and more. The chatbot supports quick replies and provides helpful information about the clinic's services.

## License
MIT
