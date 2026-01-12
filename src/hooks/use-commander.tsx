"use client";

import * as React from "react";
import { Message } from "@/components/features/message-bubble";
import { AboutCard } from "@/components/content/about-card";
import { ProjectList } from "@/components/content/project-list";
import { WritingList } from "@/components/content/writing-list";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/components/providers/language-provider";

// 初始欢迎消息
export const INITIAL_MESSAGE: Message = {
    id: "init-1",
    role: "system",
    content: (
        <div>
            <p>Hello! I'm Alex. Welcome to my digital garden.</p>
            <p className="mt-2">You can navigate by typing commands like <code className="bg-surface-hover px-1 rounded border border-border">/projects</code>, <code className="bg-surface-hover px-1 rounded border border-border">/about</code>, or simply chatting with me.</p>
        </div>
    )
};

export function useCommander() {
    const [messages, setMessages] = React.useState<Message[]>([INITIAL_MESSAGE]);
    const { setTheme } = useTheme();
    const { setLanguage, t } = useLanguage();
    const router = useRouter();

    const handleCommand = (text: string) => {
        // 1. 添加用户消息
        const userMsg: Message = {
            id: Date.now().toString(),
            role: "user",
            content: text,
        };

        // 乐观更新：先显示用户消息
        setMessages((prev) => [...prev, userMsg]);

        // 2. 解析指令并生成系统回复
        // 为了模拟自然感，稍微延迟一下回复
        setTimeout(() => {
            const cmd = text.trim().toLowerCase();
            let systemContent: React.ReactNode = "";

            // 简单的命令路由
            if (cmd === "/about" || cmd.includes("who are you") || cmd === "关于") {
                systemContent = <AboutCard />;
            } else if (cmd === "/projects" || cmd.includes("work") || cmd.includes("portfolio") || cmd === "项目") {
                systemContent = <ProjectList />;
            } else if (cmd === "/writing" || cmd.includes("blog") || cmd.includes("post") || cmd === "文章") {
                systemContent = <WritingList />;
            } else if (cmd === "/contact" || cmd.includes("email") || cmd.includes("hello") || cmd === "联系") {
                systemContent = (
                    <div>
                        <p>{t("cmd.intro")}</p>
                        <div className="mt-4 p-4 bg-surface border border-border rounded-xl">
                            <p className="font-mono text-secondary">hello@example.com</p>
                        </div>
                    </div>
                );
            } else if (cmd.startsWith("/theme")) {
                if (cmd.includes("dark")) {
                    setTheme("dark");
                    systemContent = `${t("cmd.theme")} Dark Mode.`;
                } else if (cmd.includes("light")) {
                    setTheme("light");
                    systemContent = `${t("cmd.theme")} Light Mode.`;
                } else {
                    systemContent = "Usage: /theme [dark|light]";
                }
            } else if (cmd.startsWith("/lang")) {
                if (cmd.includes("en")) {
                    setLanguage("en");
                    systemContent = "Language switched to English.";
                } else if (cmd.includes("zh") || cmd.includes("cn")) {
                    setLanguage("zh");
                    systemContent = "语言已切换为中文。";
                } else {
                    systemContent = "Usage: /lang [en|zh]";
                }
            } else if (cmd === "/clear") {
                setMessages([INITIAL_MESSAGE]);
                return; // 特殊处理：清空不追加新消息
            } else {
                // 默认回复
                systemContent = (
                    <div>
                        <p>{t("cmd.unknown")}</p>
                        <ul className="mt-2 space-y-1 list-disc list-inside text-secondary">
                            <li>/about</li>
                            <li>/projects</li>
                            <li>/writing</li>
                            <li>/contact</li>
                            <li>/lang [en|zh]</li>
                        </ul>
                    </div>
                );
            }

            const systemMsg: Message = {
                id: (Date.now() + 1).toString(),
                role: "system",
                content: systemContent
            };

            setMessages((prev) => [...prev, systemMsg]);

        }, 300); // 300ms 延迟模拟思考
    };

    return {
        messages,
        handleCommand
    };
}
