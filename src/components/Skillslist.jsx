import Skill from "./Skill.jsx";

export const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];
export default function Skillslist() {
  return (
    <div>
      {skills.map(({ skill, color, level }) => (
        <div key={skill} className="skill-list">
          <Skill skill={skill} color={color} level={level} />
        </div>
      ))}
    </div>
  );
}
