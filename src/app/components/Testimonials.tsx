import Image from 'next/image';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Mike Calpito",
      position: "CEO, TechStart Inc",
      content: "Saqlain was very professional and cooperative in achieving our needs for this project. Would def work with him again",
      rating: 5,
      avatar: "https://www.upwork.com/profile-portraits/c1TMFA2fMzTRpBjcTWkilI2okAMoZv6AIeB1aetyaZ47ea6Uq0Fqv2pGVJ4UG9LnCe"
    },
    {
      name: "Gideon Gitonga",
      position: "Founder, Digital Solutions",
      content: "Outstanding Work and Professionalism! This was our second project with Saqlain and working with him was an absolute pleasure. He exceeded our expectations by delivering a high-quality, user-friendly website that met all our requirements. The communication throughout the project was seamless, and he consistently provided valuable suggestions to improve the site's functionality and design. The project was completed on time, and any adjustments I requested were implemented quickly and efficiently. I highly recommend Saqlain to anyone looking for a skilled and reliable developer. I look forward to collaborating again in the future!",
      rating: 5,
      avatar: "https://www.upwork.com/profile-portraits/c1BsEh8iDsqoMWOMRdNr3VvaotIFNYN65RD3Sudit2KJKpLYFO_LZ6TOfXrgkaL20L"
    },
    {
      name: "Nick Taylor",
      position: "Marketing Director, Fashion Brand",
      content: "Saqlain's expertise in Shopify development is unmatched. He created a custom theme that perfectly represents our brand and provides an excellent shopping experience for our customers.",
      rating: 5,
      avatar: "https://www.upwork.com/profile-portraits/c1qULnXHfOkfdn9WT9xN1xKVEbxjVdFnwq08XVjEnECquOslBO6iHKJQ25TSLA_T60"
    },
    {
      name: "Eliott Nazarian",
      position: "CTO, E-Commerce Platform",
      content: "Saqlain is a true professional who consistently delivers high-quality work. His technical skills combined with his understanding of business needs make him an invaluable partner.",
      rating: 5,
      avatar: "https://www.upwork.com/profile-portraits/c1ckZhHA1ygOQ6JW8-o78BRPZTDktp2nj5nuTcCSphRUgW_7FMiPxtWKCQHW4xkgXj"
    },
    {
      name: "Ivy Maniulit",
      position: "Product Manager, Startup",
      content: "The mobile app Saqlain developed for us is flawless. His attention to detail and commitment to delivering the best user experience is remarkable. Highly recommended!",
      rating: 5,
      avatar: "https://www.upwork.com/profile-portraits/c1yHWlzWSFORm7BTYm4FE-Avvkxox5jaE208FTslKE0scAubHpxWGc8y2YF0DHp8qA"
    },
    {
      name: "Robert Kim",
      position: "Director, Digital Agency",
      content: "Saqlain's ability to understand complex requirements and translate them into elegant solutions is impressive. He's reliable, communicative, and always delivers on time.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-400'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-[#1a2a2a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-white text-4xl font-bold mb-4">Client Testimonials</h2>
          <div className="w-24 h-1 bg-[#dcf3f3] mx-auto"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            What my clients say about working with me
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-[#2b4040] rounded-lg p-8 hover:shadow-lg transition duration-300">
              <div className="flex items-center mb-6">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-white font-semibold">{testimonial.name}</h3>
                  <p className="text-[#dcf3f3] text-sm">{testimonial.position}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {renderStars(testimonial.rating)}
              </div>
              
              <blockquote className="text-gray-300 text-sm leading-relaxed italic">
                &ldquo;{testimonial.content}&rdquo;
              </blockquote>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-[#2b4040] rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-white text-2xl font-bold mb-4">Ready to work together?</h3>
            <p className="text-gray-300 mb-6">
              Let&apos;s discuss your project and see how I can help bring your ideas to life
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3 bg-[#dcf3f3] text-[#141f1f] font-semibold rounded-full hover:bg-white transition duration-300"
            >
              Get In Touch
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 