"use client";

import { projects } from "@/data/projects";
import { posts } from "@/data/writing";
import { useLanguage } from "@/components/providers/language-provider";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

export default function Home() {
  const { t } = useLanguage();

  const featuredProjects = projects.filter(p => p.featured || true).slice(0, 3);
  const latestPosts = posts.slice(0, 5);
  const heroPost = posts[0]; // Assume first post is "Cover Story"

  return (
    <div className="space-y-16 pb-20 pt-8 animate-in fade-in duration-700">

      {/* Magazine Cover Section */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 border-b border-border pb-12">
        {/* Main Feature (Left 8 cols) */}
        <section className="md:col-span-8 space-y-6">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-accent" />
            <h2 className="text-xs font-medium uppercase tracking-wider text-secondary">Featured Writing</h2>
          </div>

          <Link href={`/writing/${heroPost.slug}`} className="group block space-y-4">
            <div className="aspect-[16/9] bg-surface border border-border rounded-xl relative overflow-hidden shadow-sm">
              {/* Placeholder for cover image */}
              <div className="absolute inset-0 bg-surface flex items-center justify-center text-secondary/30 text-4xl font-serif">
                Briefing
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-serif font-medium text-primary group-hover:text-accent transition-colors leading-tight">
              {heroPost.title}
            </h1>
            <p className="text-lg text-secondary leading-relaxed font-serif">
              {heroPost.excerpt}
            </p>
            <div className="flex items-center gap-2 text-xs font-sans uppercase tracking-widest text-secondary group-hover:text-primary transition-colors">
              Read Article <ArrowUpRight size={12} />
            </div>
          </Link>
        </section>

        {/* Sidebar: Recent Updates (Right 4 cols) */}
        <aside className="md:col-span-4 space-y-8 pl-0 md:pl-8 md:border-l border-border">
          <div className="space-y-4">
            <div className="border-t border-accent pt-2">
              <h3 className="font-sans font-medium text-lg text-primary">Recent Updates</h3>
            </div>
            <div className="space-y-6">
              {latestPosts.slice(1).map(post => (
                <Link key={post.slug} href={`/writing/${post.slug}`} className="block group">
                  <h4 className="font-serif font-medium text-lg text-primary group-hover:text-accent leading-snug mb-1">
                    {post.title}
                  </h4>
                  <p className="text-sm text-secondary line-clamp-2 mb-1">{post.excerpt}</p>
                  <span className="text-[10px] uppercase text-secondary/60">{post.date}</span>
                </Link>
              ))}
            </div>
            <Link href="/writing" className="inline-block text-xs font-bold text-accent hover:underline mt-2">
              View all updates →
            </Link>
          </div>
        </aside>
      </div>


      {/* Section: Projects */}
      <section>
        <div className="border-t border-border pt-1 mb-8">
          <div className="w-8 h-1 bg-accent mb-4 rounded-full" />
          <div className="flex justify-between items-baseline">
            <h2 className="text-2xl font-serif font-medium text-primary">Key Projects</h2>
            <Link href="/projects" className="text-sm font-sans font-medium text-accent hover:underline">
              See all work
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProjects.map(project => (
            <Link key={project.id} href={project.link || "#"} className="group block h-full">
              <div className="aspect-[3/2] bg-surface relative overflow-hidden mb-4 border border-border">
                <div className={cn("absolute inset-0 opacity-90 transition-opacity group-hover:opacity-100", project.image)} />
              </div>
              <div className="space-y-2">
                <h4 className="font-serif font-bold text-lg text-primary group-hover:text-accent transition-colors leading-tight">
                  {project.title}
                </h4>
                <div className="flex gap-2 flex-wrap mb-2">
                  {project.stack.slice(0, 2).map(tech => (
                    <span key={tech} className="text-[9px] uppercase tracking-wider font-bold text-accent border border-accent/20 px-1 rounded-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-secondary font-serif leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}
