export type List = {
  heading: string;
  techs: string[];
  description: string;
  videoSrc: string;
};

export const lists: List[] = [
  {
    heading: "Web design & development",
    techs: [
      "Creative web design",
      "Web development",
      "Copywriting",
      "E-commerce",
      "Wordpress",
    ],
    description:
      "Crafting digital experiences where beauty meets ROI, turning heads and unlocking revenue potential with every click.",
    videoSrc: "/home/services/0.mp4",
  },
  {
    heading: "AI & Blockchain",
    techs: ["Solana", "Automization", "ETHEREUM","Generation"],
    description:
      "Building custom AI frameworks and secure Blockchain infrastructure for brands who demand market dominance and refuse to operate within outdated boundaries.",
    videoSrc: "/home/services/2.mp4",
  },
  {
    heading: "Branding",
    techs: ["Brand strategy", "Tone of voice", "Visual identity"],
    description:
      "t all starts with your brand. We use sound strategic thinking to create or elevate your brand identity, from your visuals to your voice.",
    videoSrc: "/home/services/1.mp4",
  }
  
];
