export const profileData = [
  {
    name: "Seng Lyhour",
    bio: `I'm Seng Lyhour, a full-stack software development student based in Phnom Penh, Cambodia.
        I focus on building functional, user-centric web applications and actively expanding my technical skillset.
        If there is a complex routing or deployment issue to solve, chances are I'll build a system around it and ship it.
        My main tech stack is React, TypeScript, Tailwind, Next.js, and Laravel. My go-to tools are Docker, Git, and Vercel, and I am currently diving deep into PHP.`,
  },
];
export default function Intro() {
  return (
    <div>
      {profileData.map(({ name, bio }) => (
        <div key={name}>
          <h2 className="text-4xl font-bold py-5">{name}</h2>
          <p className="text-xl font-medium">{bio}</p>
        </div>
      ))}
    </div>
  );
}
