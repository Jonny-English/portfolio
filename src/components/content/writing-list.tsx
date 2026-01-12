"use client";

import { posts } from "@/data/writing";
import Link from "next/link";

export function WritingList() {
    return (
        <div className="space-y-6 animate-in slide-in-from-bottom-5 fade-in duration-500 w-full">
            <h2 className="text-2xl font-serif text-primary">Writing</h2>

            <div className="flex flex-col border-t border-border">
                {posts.map((post) => (
                    <Link
                        key={post.slug}
                        href="/writing"
                        className="group py-4 border-b border-border flex flex-col md:flex-row md:items-baseline justify-between gap-2 hover:bg-surface-hover/50 transition-colors -mx-4 px-4 rounded-lg"
                    >
                        <div>
                            <h3 className="font-medium text-primary text-lg group-hover:text-accent transition-colors">
                                {post.title}
                            </h3>
                            <p className="text-sm text-secondary mt-1">{post.excerpt}</p>
                        </div>

                        <div className="flex items-center gap-4 text-xs font-mono text-secondary flex-shrink-0 mt-2 md:mt-0">
                            <span>{post.date}</span>
                            <span>{post.readTime}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
