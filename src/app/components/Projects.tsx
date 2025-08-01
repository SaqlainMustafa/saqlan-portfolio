import Image from 'next/image';

export default function Projects() {
  const projects = [
    {
      title: "Silent Moment Massage SPA",
      description: " Fully responsive design from Figma. Integrated Mindbody booking. Used custom schema, metafields, and mobile-first layout strategy.",
      technologies: ["Liquid", "Shopify API", "JavaScript", "CSS3", "Responsive Design"],
      image: "/images/silent.png",
    },

     {
      title: "G Form",
      description: "Client provided an existing site and a Figma design. We rebuilt the store from scratch using the Dawn theme, implementing custom product templates and modular sections. The site was made fully responsive and optimized for performance.",
      technologies: ["Liquid", "Javascript", "Bootstrap", "Klaviyo", "CSS3", "REST API"],
      image: "/images/g-from.png",
      link: "https://g-form.com/"
    },
    {
      title: "Bata Shoes",
      description: "Transformed Figma into a React + Polaris-based Shopify theme. Collaborated on UX improvements, page speed, and admin flexibility.",
      technologies: ["Shopify Storefront API",  "GraphQL", "Tailwind CSS"],
      image: "/images/bata.png",
      link: "https://www.bata.com.pk/"
    },
    {
      title: "Jackson Guitars",
      description: "Built custom product templates and modular sections. Used metafields for product-based content control. Fully responsive and performance-optimized.",
      technologies: ["Liquid", "Shopify Subscriptions", "Webhooks", "REST API"],
      // image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      image: "/images/jackson.png",
      link: "https://intl.jacksonguitars.com/"
    },

    {
      title: "Custom Shopify Theme - Dawn Enhanced",
      description: "Enhanced Dawn theme with custom sections, advanced product filtering, mega menu, and performance optimizations. Achieved 95+ Lighthouse scores.",
      technologies: ["Dawn Theme", "Liquid", "Shopify CLI", "Performance Optimization"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-[#1a2a2a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-white text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-[#dcf3f3] mx-auto"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and expertise in web development
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-[#2b4040] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group transform hover:-translate-y-2 hover:scale-105">
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700 ease-out"
                />
                <div className="absolute bg-black bg-opacity-40 group-hover:bg-opacity-10 transition duration-500"></div>
                <div className="absolute bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
              </div>
              <div className="p-6 relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#dcf3f3] to-[#2b4040] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#dcf3f3] transition duration-300">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed group-hover:text-gray-200 transition duration-300">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-[#dcf3f3] text-[#141f1f] text-xs rounded-full font-medium transform group-hover:scale-105 transition duration-300 hover:bg-white">
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link}
                  className="inline-flex items-center text-[#dcf3f3] hover:text-white transition duration-300 font-medium group-hover:translate-x-1"
                >
                  View Project
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 