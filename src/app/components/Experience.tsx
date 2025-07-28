export default function Experience() {
  const experiences = [
    {
      company: "Nestosh LLC",
      position: "Senior Shopify Developer",
      duration: "2022 - Present",
      description: "Lead Shopify developer specializing in custom theme development, performance optimization, and headless Shopify implementations. Managed portfolio of 20+ high-traffic stores.",
      achievements: [
        "Developed 20+ custom Shopify themes with 95+ Lighthouse scores",
        "Increased average conversion rates by 40% through UX optimization",
        "Built headless Shopify solutions reducing page load times by 65%",
        "Mentored 3 junior developers in Shopify best practices"
      ],
      technologies: ["Shopify", "Liquid", "Shopify CLI", "Storefront API", "GraphQL", "Performance Optimization"]
    },
    {
      company: "Codility Solution",
      position: "Shopify Developer",
      duration: "2020 - 2021",
      description: "Specialized in Shopify theme customization, app development, and third-party integrations. Worked with fashion, electronics, and subscription-based businesses.",
      achievements: [
        "Customized 16+ Shopify themes for diverse industries",
        "Developed 3 custom Shopify apps for inventory and analytics",
        "Integrated 50+ third-party services and payment gateways",
        "Achieved 100% client satisfaction across all projects"
      ],
      technologies: ["Shopify Admin API", "Liquid", "JavaScript", "Tailwind CSS", "Bootstrap", "REST API", "Webhooks"]
    },
    {
      company: "Image Garments",
      position: "Frontend Developer",
      duration: "2019 - 2020",
      description: "Provided Shopify development services to small and medium businesses. Focused on theme customization, performance optimization, and conversion rate improvement.",
      achievements: [
        "Completed 10+ Shopify projects for various clients",
        "Improved average page load speed by 50% across all projects",
        "Implemented advanced features like subscription boxes and multi-language support",
        "Maintained 5-star client rating on all platforms"
      ],
      technologies: ["Shopify", "Liquid", "JavaScript", "HTML", "CSS3", "Bootstrap", "Responsive Design", "SEO"]
    },
    // {
    //   company: "Web Development Agency",
    //   position: "Frontend Developer",
    //   duration: "2018 - 2019",
    //   description: "Started career focusing on frontend development with emphasis on e-commerce platforms. Gained expertise in responsive design and user experience optimization.",
    //   achievements: [
    //     "Developed 12+ responsive e-commerce websites",
    //     "Implemented accessibility features meeting WCAG 2.1 standards",
    //     "Optimized websites for mobile-first user experience",
    //     "Learned Shopify platform fundamentals and best practices"
    //   ],
    //   technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Shopify Basics", "WordPress"]
    // }
  ];

  return (
    <section id="experience" className="py-20 bg-[#141f1f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-white text-4xl font-bold mb-4">Work Experience</h2>
          <div className="w-24 h-1 bg-[#dcf3f3] mx-auto"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            My professional journey in web development and digital solutions
          </p>
        </div>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#2b4040]"></div>
              
              {/* Timeline dot */}
              <div className="absolute left-6 top-6 w-4 h-4 bg-[#dcf3f3] rounded-full border-4 border-[#141f1f]"></div>
              
              <div className="ml-16">
                <div className="bg-[#2b4040] rounded-lg p-8 hover:shadow-lg transition duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{exp.position}</h3>
                      <p className="text-[#dcf3f3] font-medium">{exp.company}</p>
                    </div>
                    <span className="text-gray-400 text-sm font-medium mt-2 md:mt-0">{exp.duration}</span>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start">
                          <svg className="w-4 h-4 text-[#dcf3f3] mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                          </svg>
                          <span className="text-gray-300 text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-[#1a2a2a] text-[#dcf3f3] text-xs rounded-full font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 