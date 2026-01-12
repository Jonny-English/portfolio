"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "@/data/profile";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/providers/language-provider";

// ...imports

export function Navbar() {
    const pathname = usePathname();
    const { t } = useLanguage();

    const navItems = [
        { label: t("nav.home"), href: "/" },
        { label: t("nav.projects"), href: "/projects" },
        { label: t("nav.writing"), href: "/writing" },
        { label: t("nav.about"), href: "/about" },
    ];

    return (
        <header className="sticky top-0 z-50 w-full bg-build border-b border-border/40 supports-[backdrop-filter]:bg-build/80 backdrop-blur-md">
            <div className="container max-w-5xl mx-auto flex h-16 items-center justify-between px-4 md:px-12">

                {/* Logo (Clean Text) */}
                <div className="flex items-center gap-2">
                    <Link href="/" className="font-serif text-lg font-medium tracking-tight text-primary hover:opacity-80 transition-opacity">
                        {profile.name}
                    </Link>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "text-sm transition-all duration-200",
                                    isActive
                                        ? "text-primary font-medium"
                                        : "text-secondary hover:text-primary"
                                )}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>

                {/* Right Actions */}
                <div className="flex items-center gap-2">
                    <ThemeToggle className="hover:bg-transparent hover:text-accent" />
                </div>
            </div>
        </header>
    );
}
