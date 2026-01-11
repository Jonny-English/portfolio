"use client";

import * as React from "react";

type Language = "en" | "zh";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = React.createContext<LanguageContextType | undefined>(undefined);

const translations = {
    en: {
        "nav.home": "Home",
        "nav.projects": "Projects",
        "nav.writing": "Writing",
        "nav.about": "About",
        "hero.greeting": "Hello, I'm Alex.",
        "hero.role": "Product Designer & Frontend Developer.",
        "hero.bio": "I craft minimal and intuitive digital experiences. Inspired by the clarity of tools like Claude.",
        "section.featured": "Featured Projects",
        "section.latest": "Latest Writing",
        "btn.more": "View All",
    },
    zh: {
        "nav.home": "首页",
        "nav.projects": "项目",
        "nav.writing": "写作",
        "nav.about": "关于",
        "hero.greeting": "你好，我是 Alex。",
        "hero.role": "产品设计师 & 前端开发者。",
        "hero.bio": "我致力于构建极简且直观的数字体验。灵感源自像 Claude 这样清晰的工具。",
        "section.featured": "精选项目",
        "section.latest": "最新文章",
        "btn.more": "查看全部",
    },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = React.useState<Language>("en");
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        const saved = localStorage.getItem("language") as Language;
        if (saved && (saved === "en" || saved === "zh")) {
            setLanguage(saved);
        }
        setMounted(true);
    }, []);

    const handleSetLanguage = (lang: Language) => {
        setLanguage(lang);
        localStorage.setItem("language", lang);
    };

    const t = (key: string) => {
        // @ts-expect-error - simple key access
        return translations[language][key] || key;
    };

    // Prevent mismatch on first render
    // logic moved: we must provide context always, or children making useLanguage calls will fail.
    // We can return the provider, but maybe delay showing specific localized content if strictly needed,
    // but for the Sidebar, it needs the context functions immediately.

    // Simplest fix: Render provider always. 
    // To avoid hydration mismatch on text, we can use a "isClient" check inside the components using t(),
    // OR we just accept a quick flash.
    // But better: use the 'mounted' state to determine if we show children or a loader, 
    // BUT we must allow children to execute useLanguage() if they are rendered.

    // Actually, the previous code returned <div className="invisible">{children}</div> WITHOUT Provider.
    // That was the bug.

    return (
        <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
            {mounted ? children : <div className="invisible">{children}</div>}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = React.useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
