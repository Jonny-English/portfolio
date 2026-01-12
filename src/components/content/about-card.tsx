"use client";

import { Card } from "@/components/ui/card";
import { profile } from "@/data/profile";
import { Badge } from "lucide-react";

export function AboutCard() {
    return (
        <div className="space-y-6 animate-in slide-in-from-bottom-5 fade-in duration-500">
            <div className="space-y-4">
                <h2 className="text-2xl font-serif text-primary">About Me</h2>
                <p className="text-secondary leading-relaxed max-w-2xl text-base md:text-lg">
                    {profile.bio}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-surface border border-border p-4 rounded-xl">
                    <h3 className="font-medium mb-2 text-primary">Experience</h3>
                    <ul className="space-y-3">
                        <li className="flex gap-3 text-sm">
                            <span className="text-secondary w-20 text-right font-mono">2023-2027</span>
                            <span>软件工程本科 四川·成都</span>
                        </li>
                    </ul>
                </div>
                <div className="bg-surface border border-border p-4 rounded-xl">
                    <h3 className="font-medium mb-2 text-primary">技术栈</h3>
                    <div className="flex flex-wrap gap-2">
                        {[
                            "AI",
                            "C++",
                            "Python",
                            "Data Structures and Algorithms",
                            "Computer Organization and Architecture",
                            "Operating Systems",
                            "Computer Networks",
                        ].map(tag => (
                            <span key={tag} className="px-2 py-1 bg-surface-hover text-xs rounded text-secondary border border-border">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
