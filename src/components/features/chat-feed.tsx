"use client";

import * as React from "react";
import { Message, MessageBubble } from "./message-bubble";

interface ChatFeedProps {
    messages: Message[];
}

export function ChatFeed({ messages }: ChatFeedProps) {
    const bottomRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
        <div className="flex-1 w-full overflow-y-auto pb-4 scroll-smooth">
            <div className="flex flex-col container max-w-3xl mx-auto">
                {messages.map((msg) => (
                    <MessageBubble key={msg.id} message={msg} />
                ))}
                <div ref={bottomRef} className="h-4" />
            </div>
        </div>
    );
}
