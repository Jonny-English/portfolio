export interface Project {
    id: string;
    title: string;
    description: string;
    role: string;
    stack: string[];
    year: string;
    link?: string;
    image?: string; // Color code or image path
    featured?: boolean;
}

export const projects: Project[] = [
    {
        id: "1",
        title: "ZenTask",
        description: "一个极简主义的任务管理工具，专注于心流状态的维持。采用 React Tech Stack 构建。",
        role: "Product Design & Frontend",
        stack: ["React", "TypeScript", "TailwindCSS"],
        year: "2025",
        link: "#",
        image: "bg-orange-100", // 使用 Tailwind 颜色类作为占位
        featured: true
    },
    {
        id: "2",
        title: "Echo Notes",
        description: "基于语音输入的智能笔记应用，自动总结与分类。",
        role: "UI/UX Design",
        stack: ["Figma", "Next.js", "OpenAI API"],
        year: "2024",
        link: "#",
        image: "bg-blue-100",
        featured: true
    },
    {
        id: "3",
        title: "Lumina Design System",
        description: "为企业级 SaaS 产品构建的综合设计系统，包含 50+ 组件。",
        role: "Lead Designer",
        stack: ["Storybook", "React", "Tokens Studio"],
        year: "2024",
        link: "#",
        image: "bg-purple-100"
    },
    {
        id: "4",
        title: "Vortex Analytics",
        description: "数据可视化仪表盘，用于实时监控服务器性能。",
        role: "Frontend Developer",
        stack: ["D3.js", "Vue", "Node.js"],
        year: "2023",
        link: "#",
        image: "bg-emerald-100"
    },
    {
        id: "5",
        title: "Mono Portfolio",
        description: "单色风格的摄影师作品集网站模板。",
        role: "Full Stack",
        stack: ["Astro", "TailwindCSS"],
        year: "2023",
        link: "#",
        image: "bg-stone-100"
    },
    {
        id: "6",
        title: "TypeFlow",
        description: "专注于排版阅读体验的长文博客主题。",
        role: "Developer",
        stack: ["Hugo", "SCSS"],
        year: "2022",
        link: "#",
        image: "bg-gray-100"
    }
];
