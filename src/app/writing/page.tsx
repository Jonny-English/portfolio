"use client";

import * as React from "react";
import { posts } from "@/data/writing";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function WritingPage() {
    return (
        <div className="max-w-3xl mx-auto py-12 space-y-12 mb-20 animate-in fade-in slide-in-from-bottom-4 duration-500">

            <div className="space-y-4">
                <h1 className="text-4xl font-serif text-primary">Writing</h1>
                <p className="text-secondary text-lg">
                    Thoughts on design, development, and the future of interfaces.
                </p>
            </div>

            <div className="relative border-l border-border pl-8 space-y-12">
                {posts.map((post) => (
                    <div key={post.slug} className="relative group">
                        {/* Timeline dot */}
                        <div className="absolute -left-[37px] top-1.5 w-3 h-3 rounded-full bg-border group-hover:bg-accent transition-colors border-2 border-build" />

                        <Link href="/writing" className="block space-y-3">
                            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2">
                                <h2 className="text-xl font-medium text-primary group-hover:text-accent transition-colors">
                                    {post.title}
                                </h2>
                                <span className="text-sm font-mono text-secondary tabular-nums flex-shrink-0">
                                    {post.date}
                                </span>
                            </div>
                            <p className="text-secondary leading-relaxed max-w-2xl">
                                {post.excerpt}
                            </p>
                            <div className="flex items-center gap-3 text-xs text-secondary/70">
                                <span className="uppercase tracking-wider">{post.readTime} read</span>
                                <span>•</span>
                                <div className="flex gap-2">
                                    {post.tags.map(tag => (
                                        <span key={tag} className="bg-surface-hover px-1.5 py-0.5 rounded">#{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
