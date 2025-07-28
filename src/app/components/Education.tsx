export default function Education() {
  return (
    <section id="education" className="py-20 bg-[#141f1f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-white text-4xl font-bold mb-4">Education</h2>
          <div className="w-24 h-1 bg-[#dcf3f3] mx-auto"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            My academic background and educational achievements
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 bg-[#141f1f] px-4 min-h-[72px] py-2 rounded-lg border border-[#2b4040] hover:border-[#dcf3f3] transition-colors duration-300">
            <div className="flex flex-col justify-center">
              <p className="text-white text-base font-medium leading-normal line-clamp-1">BS in Software Engineering, University of Agriculture, Faisalabad</p>
              <p className="text-[#9dbebe] text-sm font-normal leading-normal line-clamp-2">2014 – 2018 | CGPA: 3.03</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 