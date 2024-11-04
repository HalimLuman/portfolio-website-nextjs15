
## <a name="introduction">Startup Showcase Platform</a>  
  
A dynamic platform where you can create and showcase your startup, allowing others to explore, search, and view detailed information. Featuring sections for popular startups, editor picks, and more, this platform is designed to highlight the best ideas and support startup visibility.  
  
  
## <a name="features">🌟 Features</a>  
  
- **Create and Showcase Startups**: Easily upload your startup, add details, and display it for others to explore.<br/> 
- **Search and Discover**: Users can search for startups based on keywords, categories, or popularity.<br/> 
- **Curated Sections**: Popular startups, editor picks, and highlighted content managed directly from Sanity CMS.<br/>  
- **Secure Authentication**: Seamless login and signup with NextAuth.<br/> 
- **Error Monitoring**: Sentry integration for real-time error tracking and user experience improvements.<br/> 
  
## <a name ='tech-stack'>🛠️ Tech Stack</a>
**[Next.js 15](https://nextjs.org/)** : Primary framework utilizing the latest features for fast rendering and user experience.<br/> 
**[TypeScript](https://www.typescriptlang.org/)** : Main language for improved code quality and type safety.<br/> 
**[Tailwind CSS](https://tailwindcss.com/)** : Styling framework for a responsive, modern UI.<br/> 
**[shadcn/ui](https://ui.shadcn.dev/)**  : Prebuilt components for consistent and sleek design.<br/> 
**[Sanity CMS](https://www.sanity.io/)** : Content management for easy updates to curated sections.<br/> 
**[NextAuth](https://next-auth.js.org/)** : User authentication and authorization system.<br/> 
 **[Sentry](https://sentry.io/)** : Real-time error tracking and performance monitoring.<br/> 
## <a name="quick-start">🤸 Quick Start</a>  

Make sure you have the following installed on your machine:  
  
- [Git](https://git-scm.com/)  
- [Node.js](https://nodejs.org/en)  
- [npm](https://www.npmjs.com/) (Node Package Manager)  
  
**Cloning the Repository**  
  
```bash  
git clone https://github.com/HalimLuman/portfolio-website-nextjs15
```  
  
  
```bash  
npm install
```  
  
**Set Up Environment Variables**  
  
```env  
NEXT_PUBLIC_SANITY_PROJECT_ID=  
NEXT_PUBLIC_SANITY_DATASET=  
NEXT_PUBLIC_SANITY_API_VERSION='vX'  
SANITY_TOKEN=  
  
AUTH_SECRET= AUTH_GITHUB_ID=  
AUTH_GITHUB_SECRET=  
```  
**Running the Project**  
  
```bash  
npm run dev
```  
  
Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.  
