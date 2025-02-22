"use client"

import Link from "next/link";
import React from "react";
import { NavItem } from "./types";
import { ChevronDown } from "lucide-react";

const NavDropdown = ({ item }: { item: NavItem }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div className="relative group" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
            <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground hover:text-blue-accent transition-colors">
                {item.label}
                {item.children && <ChevronDown className="w-4 h-4" />}
            </button>

            {item.children && isOpen && (
                <div className="absolute left-0 z-10 w-64 p-4 mt-1 space-y-2 bg-background border border-border-color rounded-lg shadow-lg">
                    {item.children.map((child) => (
                        <Link
                            key={child.href}
                            href={child.href}
                            className="block p-2 text-sm hover:bg-card-hover rounded-md transition-colors"
                        >
                            <div className="font-medium">{child.label}</div>
                            {child.description && (
                                <div className="text-xs text-muted">{child.description}</div>
                            )}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default NavDropdown;