# 🚀 Emir Kale - Personal Portfolio

A modern, highly interactive, and performant personal portfolio website built with the latest web technologies. This project showcases my skills, experience, and projects with a focus on immersive 3D experiences, smooth animations, and a seamless user interface.

## ✨ Features

- **Next.js 15 App Router**: Leveraging the latest Next.js features for optimal performance and SEO.
- **3D Interactive Experiences**: Built with `Three.js` and `@react-three/fiber` for a stunning hero section and floating shapes.
- **Smooth Animations**: Powered by `Framer Motion` and `GSAP` for fluid, engaging micro-interactions and scroll animations.
- **Smooth Scrolling**: Implemented using `Lenis` for a premium, native-feeling scroll experience.
- **Modern Styling**: Styled with `Tailwind CSS` for a sleek, responsive, and highly customizable UI.
- **AI Chat Integration**: An interactive AI chat component (`AIChat.tsx`) to engage visitors.
- **Internationalization (i18n)**: Multi-language support to reach a global audience.
- **Admin Dashboard**: A dedicated secure area (`/admin`) to manage projects, CVs, and settings dynamically.

## 🛠️ Tech Stack

- **Framework**: Next.js 15, React 18
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion, GSAP
- **3D Graphics**: Three.js, React Three Fiber, React Three Drei
- **Scrolling**: Lenis
- **Language**: TypeScript

## 📁 Project Structure

- `app/` - Next.js App Router containing the main site (`(main)`) and the Admin Dashboard (`admin`).
- `components/` - Reusable React components divided into logic areas (`sections`, `three`, `admin`, `providers`).
- `lib/` - Core utilities, data sources, and i18n configurations.
- `data/` - JSON files storing project and dictionary information.
- `public/` - Static assets, images, and documents (ignored in the repo for size optimization).

## 🚀 Getting Started

### Prerequisites

Ensure you have Node.js installed (v18 or higher recommended).

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/EmirKale/Portfolio-Personal.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Portfolio-Personal
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
