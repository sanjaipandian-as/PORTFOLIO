import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaPython,
} from "react-icons/fa";
import {
  SiNodedotjs,
  SiMongodb,
  SiTypescript,
  SiMysql,
  SiCplusplus,
  SiReact,
  SiDocker,
} from "react-icons/si";

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full bg-gradient-to-b from-gray-200 to-white py-20 text-center"
    >
      {/* Title */}
      <h2 className="inline-block text-lg font-semibold tracking-widest border border-black px-8 py-2 mb-16">
        SKILLS
      </h2>

      <div className="space-y-16">
        {/* USING NOW */}
        <div>
          <h3 className="text-sm font-medium mb-10 tracking-widest uppercase">
            USING NOW:
          </h3>
          <div className="grid grid-cols-4 gap-x-8 gap-y-10 justify-items-center max-w-[900px] mx-auto">
            <Skill icon={<FaHtml5 size={50} className="text-orange-500" />} label="HTML5" />
            <Skill icon={<FaCss3Alt size={50} className="text-blue-500" />} label="CSS3" />
            <Skill icon={<FaJsSquare size={50} className="text-yellow-400" />} label="JAVASCRIPT" />
            <Skill icon={<FaReact size={50} className="text-sky-500" />} label="REACT" />
            <Skill icon={<FaBootstrap size={50} className="text-purple-600" />} label="BOOTSTRAP" />
            <Skill icon={<FaGitAlt size={50} className="text-orange-600" />} label="GIT" />
            <Skill icon={<FaGithub size={50} className="text-gray-800" />} label="GITHUB" />
            <Skill icon={<SiMongodb size={50} className="text-green-700" />} label="MONGODB" />
          </div>
        </div>

        {/* LEARNING */}
        <div>
          <h3 className="text-sm font-medium mb-10 tracking-widest uppercase">
            LEARNING:
          </h3>
          <div className="grid grid-cols-4 gap-x-8 gap-y-10 justify-items-center max-w-[900px] mx-auto">
            <Skill icon={<SiNodedotjs size={50} className="text-green-600" />} label="NODEJS" />
            <Skill icon={<SiMysql size={50} className="text-sky-600" />} label="MySQL" />
            
            <Skill icon={<SiDocker size={50} className="text-sky-400" />} label="DOCKER" />
            <Skill icon={<SiReact size={50} className="text-sky-500" />} label="REACT NATIVE" />
          </div>
        </div>

        {/* OTHER SKILLS */}
        <div>
          <h3 className="text-sm font-medium mb-10 tracking-widest uppercase">
            OTHER SKILLS:
          </h3>
          <div className="grid grid-cols-4 gap-x-6 gap-y-6 justify-items-center max-w-[900px] mx-auto">
            <Skill icon={<FaPython size={50} className="text-blue-400" />} label="PYTHON" />
            <Skill icon={<FaJava size={50} className="text-red-600" />} label="JAVA" />
            <Skill icon={<SiCplusplus size={50} className="text-blue-500" />} label="C++" />
          </div>
        </div>
      </div>
    </section>
  );
};

// Small component for each skill
const Skill = ({ icon, label }) => (
  <div className="flex flex-col items-center space-y-3 w-20">
    {icon}
    <span className="text-xs tracking-wide text-center">{label}</span>
  </div>
);

export default Skills;
