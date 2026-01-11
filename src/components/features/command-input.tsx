"use client";

import * as React from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface CommandInputProps {
    onSend: (command: string) => void;
    isLoading?: boolean;
}

export function CommandInput({ onSend, isLoading }: CommandInputProps) {
    const [input, setInput] = React.useState("");
    const inputRef = React.useRef<HTMLInputElement>(null);

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            if (input.trim()) {
                onSend(input.trim());
                setInput("");
            }
        }
    };

    return (
        <div className="w-full max-w-3xl mx-auto mt-4 px-2 mb-20 md:mb-0">
            <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-border to-border/50 rounded-2xl -z-10 group-focus-within:ring-2 ring-accent/20 transition-all opacity-0 group-focus-within:opacity-100" />
                <div className="relative bg-surface rounded-2xl border border-border flex items-center shadow-sm group-focus-within:border-accent/50 group-focus-within:shadow-md transition-all duration-300">
                    <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Asking for /about, /projects, or say hello..."
                        className="flex-1 bg-transparent px-4 py-4 md:py-5 outline-none text-base md:text-lg text-primary placeholder:text-secondary/50"
                        autoFocus
                        disabled={isLoading}
                    />
                    <div className="pr-3">
                        <button
                            onClick={() => {
                                if (input.trim()) {
                                    onSend(input.trim());
                                    setInput("");
                                }
                            }}
                            disabled={!input.trim() || isLoading}
                            className={cn(
                                "p-2 rounded-xl transition-all duration-200 flex items-center justify-center",
                                input.trim()
                                    ? "bg-accent text-white hover:bg-accent/90 shadow-sm"
                                    : "bg-surface-hover text-secondary cursor-not-allowed"
                            )}
                        >
                            <ArrowUp size={20} />
                        </button>
                    </div>
                </div>
                <div className="absolute -bottom-6 left-4 flex gap-3 text-xs text-secondary/70 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-500">
                    <span>Commands:</span>
                    <span className="bg-surface-hover px-1.5 py-0.5 rounded border border-border">/projects</span>
                    <span className="bg-surface-hover px-1.5 py-0.5 rounded border border-border">/writing</span>
                    <span className="bg-surface-hover px-1.5 py-0.5 rounded border border-border">/about</span>
                </div>
            </div>
        </div>
    );
}
