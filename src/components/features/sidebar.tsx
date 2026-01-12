"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "@/data/profile";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";
import { Home, WalletCards, BookOpen, User, Send } from "lucide-react";

import { useLanguage } from "@/components/providers/language-provider";

export function Sidebar() {
    const pathname = usePathname();
    const { t } = useLanguage();

    const navItems = [
        { label: t("nav.home"), href: "/", icon: Home },
        { label: t("nav.projects"), href: "/projects", icon: WalletCards },
        { label: t("nav.writing"), href: "/writing", icon: BookOpen },
        { label: t("nav.about"), href: "/about", icon: User },
    ];

    return (
        <nav className="flex flex-col h-full justify-between">
            <div className="space-y-8">
                {/* Profile Header */}
                <div>
                    <h1 className="font-serif text-xl font-medium tracking-tight text-primary">
                        {profile.name}
                    </h1>
                    <p className="text-sm text-secondary mt-1">{profile.role}</p>
                </div>

                {/* Navigation */}
                <div className="space-y-1">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors",
                                    isActive
                                        ? "bg-surface-hover text-primary font-medium"
                                        : "text-secondary hover:bg-surface-hover hover:text-primary"
                                )}
                            >
                                <item.icon size={18} />
                                <span>{item.label}</span>
                            </Link>
                        );
                    })}
                </div>
            </div>

            {/* Footer / Settings */}
            <div className="space-y-4">
                <div className="pt-4 border-t border-border">
                    <h3 className="text-xs font-semibold text-secondary uppercase tracking-wider mb-3 px-3">Connect</h3>
                    <div className="space-y-1">
                        <a href={profile.social.github} target="_blank" className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-secondary hover:text-primary hover:bg-surface-hover transition-colors">
                            Github
                        </a>
                        <a href={profile.social.twitter} target="_blank" className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-secondary hover:text-primary hover:bg-surface-hover transition-colors">
                            X / Twitter
                        </a>
                    </div>
                </div>

                <div className="flex items-center justify-between px-3 pt-2">
                    <span className="text-xs text-secondary">© 2026</span>
                    <ThemeToggle />
                </div>
            </div>
        </nav>
    );
}
