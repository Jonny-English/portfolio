"use client";

import { projects } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function ProjectList() {
    return (
        <div className="space-y-6 animate-in slide-in-from-bottom-5 fade-in duration-500 w-full">
            <div className="flex items-baseline justify-between">
                <h2 className="text-2xl font-serif text-primary">Selected Projects</h2>
                <span className="text-xs text-secondary font-mono">{projects.length} PROJECTS</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projects.map((project) => (
                    <Link
                        key={project.id}
                        href={project.link || "#"}
                        className="group block relative"
                    >
                        <div className="relative overflow-hidden rounded-xl border border-border bg-surface hover:bg-surface-hover transition-colors h-full flex flex-col">
                            {/* Minimal Placeholder for Image */}
                            <div className={cn("h-32 w-full opacity-80 transition-opacity group-hover:opacity-100", project.image || 'bg-border/50')} />

                            <div className="p-4 flex-1 flex flex-col">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-medium text-primary group-hover:text-accent transition-colors">{project.title}</h3>
                                    <ArrowUpRight size={16} className="text-secondary group-hover:text-accent opacity-0 group-hover:opacity-100 transition-all -translate-y-1 translate-x-1 group-hover:translate-x-0 group-hover:translate-y-0" />
                                </div>
                                <p className="text-sm text-secondary mb-4 line-clamp-2 flex-1">{project.description}</p>

                                <div className="flex gap-2 flex-wrap">
                                    {project.stack.slice(0, 3).map(tick => (
                                        <span key={tick} className="text-[10px] uppercase tracking-wider text-secondary/70 border border-border px-1.5 py-0.5 rounded">
                                            {tick}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
