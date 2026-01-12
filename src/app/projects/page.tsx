"use client";

import * as React from "react";
import { projects } from "@/data/projects";
import { ArrowUpRight, Search } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function ProjectsPage() {
    const [filter, setFilter] = React.useState("All");
    const [search, setSearch] = React.useState("");

    // 获取所有唯一标签
    const allTags = ["All", ...Array.from(new Set(projects.flatMap((p) => p.stack)))];

    const filteredProjects = projects.filter((project) => {
        const matchesFilter = filter === "All" || project.stack.includes(filter);
        const matchesSearch =
            project.title.toLowerCase().includes(search.toLowerCase()) ||
            project.description.toLowerCase().includes(search.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    return (
        <div className="max-w-4xl mx-auto py-12 space-y-12 mb-20">

            {/* Header */}
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h1 className="text-4xl font-serif text-primary">Projects</h1>
                <p className="text-secondary text-lg max-w-2xl">
                    Here is a selection of my recent work, ranging from web applications to design systems.
                </p>
            </div>

            {/* Controls */}
            <div className="flex flex-col md:flex-row gap-4 sticky top-4 z-10 bg-build/80 backdrop-blur-md py-4 -my-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary" size={18} />
                    <input
                        type="text"
                        placeholder="Search projects..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full bg-surface border border-border rounded-xl pl-10 pr-4 py-2 text-primary focus:outline-none focus:ring-1 focus:ring-accent/50 transition-shadow"
                    />
                </div>
                <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
                    {allTags.slice(0, 5).map((tag) => ( // 仅显示前 5 个标签避免拥挤，实际项目可做更复杂的 Select
                        <button
                            key={tag}
                            onClick={() => setFilter(tag)}
                            className={cn(
                                "px-3 py-2 rounded-lg text-sm whitespace-nowrap border transition-colors",
                                filter === tag
                                    ? "bg-primary text-build border-primary"
                                    : "bg-surface text-secondary border-border hover:border-primary/50"
                            )}
                        >
                            {tag}
                        </button>
                    ))}
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-bottom-12 duration-700 delay-200">
                {filteredProjects.length > 0 ? (
                    filteredProjects.map((project, index) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            key={project.id}
                        >
                            <Link
                                href={project.link || "#"}
                                className="group block h-full"
                            >
                                <div className="relative overflow-hidden rounded-xl border border-border bg-surface hover:bg-surface-hover transition-colors h-full flex flex-col hover:shadow-md">
                                    <div className={cn("h-48 w-full opacity-90 transition-opacity group-hover:opacity-100", project.image || 'bg-gray-100')} />

                                    <div className="p-6 flex-1 flex flex-col">
                                        <div className="flex justify-between items-start mb-3">
                                            <h3 className="text-xl font-serif font-medium text-primary group-hover:text-accent transition-colors">{project.title}</h3>
                                            <ArrowUpRight size={18} className="text-secondary group-hover:text-accent transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                        </div>
                                        <p className="text-secondary mb-6 flex-1 leading-relaxed">{project.description}</p>

                                        <div className="flex flex-wrap gap-2 mt-auto">
                                            {project.stack.map(tech => (
                                                <span key={tech} className="text-xs text-secondary/80 bg-build px-2 py-1 rounded border border-border group-hover:border-accent/30 transition-colors">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))
                ) : (
                    <div className="col-span-full py-20 text-center text-secondary">
                        No projects found matching your criteria.
                    </div>
                )}
            </div>
        </div>
    );
}
