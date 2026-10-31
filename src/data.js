// Poori website ka content yahin se aata hai. Sirf is file ko edit karo.

export const profile = {
  name: "Shivam Jangid",
  role: "MERN Stack Developer",
  intro:
    "I build full web apps with MongoDB, Express, React and Node.js, from the database to the screen.",
  about: [
    "I am a MERN stack developer who likes turning an idea into a working product. I design the data, write the API, and build the interface people actually use.",
    "I care about clean code, fast pages and apps that stay easy to change. I am open to full-time roles, freelance work and good collaborations.",
  ],
  email: "shivamjangid6375@gmail.com",
  phone: "6375820830",
  phoneDisplay: "+91 63758 20830",
  // Apne links yahan daalo. Khali chhodoge to button nahi dikhega.
  github: "",
  linkedin: "",
  resume: "", // e.g. "/resume.pdf" (file ko public/ folder me rakho)
};

export const skillGroups = [
  { title: "Frontend", items: ["React", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Redux Toolkit"] },
  { title: "Backend", items: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "Socket.io"] },
  { title: "Database", items: ["MongoDB", "Mongoose", "MongoDB Atlas"] },
  { title: "Tools", items: ["Git", "GitHub", "Postman", "VS Code", "Vercel", "Render"] },
];

// Ye 3 sample projects hain. Apne real projects se replace kar lo.
export const projects = [
  {
    title: "ShopSphere",
    type: "E-commerce app",
    description:
      "Online store with product search, cart, secure login, order history and an admin panel to manage products.",
    stack: ["React", "Redux", "Node.js", "Express", "MongoDB"],
    live: "",
    code: "",
  },
  {
    title: "ChatterBox",
    type: "Real-time chat app",
    description:
      "One-to-one and group chat with live typing status, online users and saved message history.",
    stack: ["React", "Socket.io", "Express", "MongoDB"],
    live: "",
    code: "",
  },
  {
    title: "TaskFlow",
    type: "Task manager",
    description:
      "Kanban-style board where teams create tasks, assign people, set deadlines and track progress.",
    stack: ["React", "Node.js", "JWT", "MongoDB"],
    live: "",
    code: "",
  },
];
