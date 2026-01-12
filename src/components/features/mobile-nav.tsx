"use client";

import * as React from "react";
import { Menu, X } from "lucide-react";
import { Sidebar } from "./sidebar";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { profile } from "@/data/profile";

export function MobileNav() {
    const [isOpen, setIsOpen] = React.useState(false);
    const pathname = usePathname();

    // 当路由变化时关闭菜单
    React.useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <>
            {/* Mobile Header */}
            <div className="md:hidden flex items-center justify-between p-4 border-b border-border sticky top-0 bg-build/80 backdrop-blur-md z-30">
                <span className="font-serif font-medium text-lg">{profile.name}</span>
                <button
                    onClick={() => setIsOpen(true)}
                    className="p-2 -mr-2 text-secondary hover:text-primary transition-colors"
                    aria-label="Open menu"
                >
                    <Menu size={24} />
                </button>
            </div>

            {/* Drawer Overlay & Content */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
                        />

                        {/* Drawer */}
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed inset-y-0 left-0 w-[280px] bg-build border-r border-border z-50 p-6 shadow-2xl md:hidden flex flex-col"
                        >
                            <div className="flex justify-between items-center mb-8">
                                <span className="font-serif font-medium text-lg">Menu</span>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 -mr-2 text-secondary hover:text-primary transition-colors"
                                    aria-label="Close menu"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            {/* Reuse Sidebar Logic/Layout inside */}
                            <div className="flex-1">
                                <Sidebar />
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
