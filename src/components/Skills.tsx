import { skills } from "../utils/Data";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={index} title={skill.title} level={skill.level} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Skills;
