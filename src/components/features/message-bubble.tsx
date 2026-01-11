"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { User, Bot } from "lucide-react";

export interface Message {
    id: string;
    role: "user" | "system";
    content: React.ReactNode;
}

interface MessageBubbleProps {
    message: Message;
}

export function MessageBubble({ message }: MessageBubbleProps) {
    const isUser = message.role === "user";

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            layout
            className={cn(
                "flex w-full mb-8",
                isUser ? "justify-end" : "justify-start"
            )}
        >
            <div className={cn("flex max-w-[90%] md:max-w-2xl gap-3", isUser ? "flex-row-reverse" : "flex-row")}>
                {/* Avatar */}
                <div
                    className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1",
                        isUser ? "bg-accent/10 text-accent" : "bg-surface-hover text-secondary"
                    )}
                >
                    {isUser ? <User size={16} /> : <Bot size={18} />}
                </div>

                {/* Content Bubble */}
                <div
                    className={cn(
                        "relative px-4 py-2 rounded-2xl",
                        isUser
                            ? "bg-surface-hover text-primary rounded-tr-sm"
                            : "bg-transparent text-primary pl-0"
                    )}
                >
                    {isUser ? (
                        <p className="whitespace-pre-wrap leading-relaxed">{message.content}</p>
                    ) : (
                        <div className="prose prose-neutral dark:prose-invert max-w-none">
                            {message.content}
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
