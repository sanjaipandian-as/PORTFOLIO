import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaPython,
} from "react-icons/fa";
import {
  SiNodedotjs,
  SiMongodb,
  SiDocker,
  SiMysql,
  SiCplusplus,
  SiReact,
} from "react-icons/si";

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full bg-gradient-to-b from-gray-200 to-white py-20"
    >
      <div className="text-center">
        <h2 className="inline-block border-4 border-black px-8 py-3 text-xl font-bold tracking-widest uppercase mb-6">
          SKILLS
        </h2>
      </div>

      <div className="max-w-[900px] mx-auto space-y-16 mt-16 px-8">
        <div>
          <h3 className="text-sm font-bold mb-10 tracking-widest uppercase text-left">
            USING NOW:
          </h3>
          <div className="grid grid-cols-4 gap-x-8 gap-y-10 justify-items-center">
            <Skill icon={<FaHtml5 size={50} className="text-orange-500" />} label="HTML5" />
            <Skill icon={<FaCss3Alt size={50} className="text-blue-500" />} label="CSS3" />
            <Skill icon={<FaJsSquare size={50} className="text-yellow-400" />} label="JAVASCRIPT" />
            <Skill icon={<FaReact size={50} className="text-sky-500" />} label="REACT" />
            <Skill icon={<SiNodedotjs size={50} className="text-green-600" />} label="NODEJS" />
            <Skill icon={<FaGitAlt size={50} className="text-orange-600" />} label="GIT" />
            <Skill icon={<FaGithub size={50} className="text-gray-800" />} label="GITHUB" />
            <Skill icon={<SiMongodb size={50} className="text-green-700" />} label="MONGODB" />
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold mb-10 tracking-widest uppercase text-left">
            LEARNING:
          </h3>
          <div className="grid grid-cols-4 gap-x-8 gap-y-10 justify-items-center">
            <Skill icon={<SiMysql size={50} className="text-sky-600" />} label="MySQL" />
            <Skill icon={<SiDocker size={50} className="text-sky-400" />} label="DOCKER" />
            <Skill icon={<SiReact size={50} className="text-sky-500" />} label="REACT NATIVE" />
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold mb-10 tracking-widest uppercase text-left">
            OTHER SKILLS:
          </h3>
          <div className="grid grid-cols-4 gap-x-6 gap-y-6 justify-items-center">
            <Skill icon={<FaPython size={50} className="text-blue-400" />} label="PYTHON" />
            <Skill icon={<FaJava size={50} className="text-red-600" />} label="JAVA" />
            <Skill icon={<SiCplusplus size={50} className="text-blue-500" />} label="C++" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Skill = ({ icon, label }) => (
  <div className="flex flex-col items-center space-y-3 w-20">
    {icon}
    <span className="text-xs tracking-wide text-center uppercase">{label}</span>
  </div>
);

export default Skills;