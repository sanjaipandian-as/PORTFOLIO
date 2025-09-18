import Design from '../assets/Design.png';
import Development from '../assets/Devolopment.png';
import Maintenance from '../assets/Maintence.png';
import Separateblock from "../assets/separatorBlack1.png";

const About = () => {
  return (
    <section id="about" className="w-full bg-gray-100 py-20 text-center font-sans text-gray-800">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="inline-block border-4 border-black px-8 py-3 text-xl font-bold tracking-widest uppercase mb-10">
          About Me
        </h2>
        
        <p className="max-w-4xl mx-auto mb-16 leading-relaxed text-gray-600">
         A results-driven web developer with a strong focus on crafting scalable, user-centric applications while leveraging modern technologies and emerging innovations.
        </p>

        <div className="flex justify-center items-center gap-4 mb-20">
          <span className="h-6 w-px bg-black"></span>
          <a href="#explore" className="uppercase text-sm font-semibold tracking-widest">
            Explore
          </a>
          <span className="h-6 w-px bg-black"></span>
        </div>

        <img src={Separateblock} alt="Section separator" className="mx-auto w-48" />

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-20 max-w-4xl mx-auto mt-20">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1 mb-4">
              <img src={Design} alt="Design icon" className="w-10 h-10 opacity-100" />
              <h3 className="text-lg font-bold uppercase tracking-widest">Design</h3>
            </div>
            <p className="text-gray-600 text-sm max-w-xs leading-relaxed text-center">
              I can design the site based on your needs and suggestions. I can
              also design the site from scratch and consult you during the job.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1 mb-4">
              <img src={Development} alt="Development icon" className="w-10 h-10 opacity-100" />
              <h3 className="text-lg font-bold uppercase tracking-widest">Development</h3>
            </div>
            <p className="text-gray-600 text-sm max-w-xs leading-relaxed text-center">
              Transforming concepts into robust, scalable, and high-performance applications through clean, efficient code.
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-20">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1 mb-4">
              <img src={Maintenance} alt="Maintenance icon" className="w-10 h-10 opacity-100" />
              <h3 className="text-lg font-bold uppercase tracking-widest">Maintenance</h3>
            </div>
            <p className="text-gray-600 text-sm max-w-xs leading-relaxed text-center">
              Ensuring reliability, security, and continuous improvement to keep projects running seamlessly over time.
            </p>
          </div>
        </div>

        <img src={Separateblock} alt="Section separator" className="mx-auto mt-20 w-48" />

        
      </div>
    </section>
  );
};

export default About;