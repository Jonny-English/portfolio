export interface Post {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    tags: string[];
    content?: string; // Markdown content, could be loaded separately
}

export const posts: Post[] = [
    {
        slug: "future-of-interface",
        title: "界面的未来：从点击到对话",
        excerpt: "探讨随着 LLM 的发展，GUI 将如何向 LUI (Language User Interface) 演变，以及设计师面临的新挑战。",
        date: "2025-10-12",
        readTime: "8 min",
        tags: ["Design", "AI"]
    },
    {
        slug: "minimalism-in-2026",
        title: "2026 年的极简主义设计趋势",
        excerpt: "极简主义不再只是白底黑字，而是关于隐喻、质感与微交互的更深层表达。",
        date: "2025-08-24",
        readTime: "5 min",
        tags: ["Design", "Trends"]
    },
    {
        slug: "react-server-components",
        title: "深入理解 React Server Components",
        excerpt: "在实际项目中应用 RSC 的心得体会，以及它如何改变我们构建 Web 应用的方式。",
        date: "2025-05-15",
        readTime: "12 min",
        tags: ["Development", "React"]
    },
    {
        slug: "building-accessible-web",
        title: "构建无障碍 Web 应用的检查清单",
        excerpt: "从语义化 HTML 到 ARIA 标签，确保你的产品能被所有人使用。",
        date: "2024-12-03",
        readTime: "6 min",
        tags: ["Accessibility", "Dev"]
    },
    {
        slug: "color-theory-for-devs",
        title: "写给开发者的色彩理论",
        excerpt: "如何不依赖设计工具，仅用代码逻辑选出和谐的配色方案。",
        date: "2024-09-21",
        readTime: "7 min",
        tags: ["Design System"]
    },
    {
        slug: "why-writes",
        title: "为什么我要开始写作",
        excerpt: "写作是思考的整理，也是与世界异步交流的最佳方式。",
        date: "2024-06-10",
        readTime: "4 min",
        tags: ["Personal"]
    }
];
