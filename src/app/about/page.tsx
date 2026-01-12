"use client";

import { useLanguage } from "@/components/providers/language-provider";
import { profile } from "@/data/profile";

export default function AboutPage() {
    const { t } = useLanguage();

    return (
        <div className="max-w-3xl mx-auto py-12 space-y-12 mb-20 animate-in fade-in slide-in-from-bottom-4 duration-500">

            <div className="space-y-6">
                <h1 className="text-4xl font-serif text-primary">{t("nav.about")}</h1>
                <p className="text-lg text-secondary leading-relaxed max-w-2xl">
                    {profile.bio}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <section className="space-y-4">
                    <h2 className="font-serif text-xl text-primary border-b border-border/50 pb-2">Experience</h2>
                    <ul className="space-y-6">
                        <li className="flex gap-4">
                            <span className="text-secondary font-mono text-sm pt-1 w-20 flex-shrink-0">2023-2027</span>
                            <div>
                                <h3 className="font-medium text-primary">软件工程本科</h3>
                                <p className="text-sm text-secondary">四川·成都</p>
                            </div>
                        </li>
                    </ul>
                </section>

                <section className="space-y-4">
                    <h2 className="font-serif text-xl text-primary border-b border-border/50 pb-2">Connect</h2>
                    <ul className="space-y-3">
                        <li>
                            <a href={profile.social.email} className="flex items-center gap-3 text-secondary hover:text-primary transition-colors group">
                                <span className="text-sm group-hover:underline decoration-accent underline-offset-4">Email</span>
                            </a>
                        </li>
                        <li>
                            <a href={profile.social.github} target="_blank" className="flex items-center gap-3 text-secondary hover:text-primary transition-colors group">
                                <span className="text-sm group-hover:underline decoration-accent underline-offset-4">GitHub</span>
                            </a>
                        </li>
                        <li>
                            <a href={profile.social.twitter} target="_blank" className="flex items-center gap-3 text-secondary hover:text-primary transition-colors group">
                                <span className="text-sm group-hover:underline decoration-accent underline-offset-4">X / Twitter</span>
                            </a>
                        </li>
                        <li>
                            <a href={profile.social.linkedin} target="_blank" className="flex items-center gap-3 text-secondary hover:text-primary transition-colors group">
                                <span className="text-sm group-hover:underline decoration-accent underline-offset-4">LinkedIn</span>
                            </a>
                        </li>
                    </ul>
                </section>
            </div>

            <section className="bg-surface/50 border border-border p-6 rounded-xl">
                <h2 className="font-medium mb-4 text-primary">技术栈</h2>
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
                        <span key={tag} className="px-3 py-1.5 bg-build text-sm rounded-md text-secondary border border-border/50 shadow-sm">
                            {tag}
                        </span>
                    ))}
                </div>
            </section>
        </div>
    );
}
