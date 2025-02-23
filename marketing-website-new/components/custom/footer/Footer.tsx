"use client";
import { useTheme } from "next-themes"; // Import useTheme for theme detection
import React from "react";
import Link from "next/link";
import { FooterProps } from "./footer.types";
import { Facebook, Twitter, Youtube } from "lucide-react";
import ContentContainer from "@/layouts/ContentContainer";
import { footerSections } from "./routes.conf";

// Import both PNG logos
import LightLogo from "@/public/icons/logo-transparent lightmode.png"; 
import DarkLogo from "@/public/icons/logo-transparent darkmode.png"; 

const Footer: React.FC<FooterProps> = ({ className = "" }) => {
    const { theme } = useTheme(); // Get current theme

    return (
        <footer className={`w-full border-t border-border-color bg-background py-12 md:py-16 ${className}`}>
            <ContentContainer>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Left Section - Logo & Links */}
                    <div className="md:col-span-1">
                        <Link href="/" className="inline-flex items-center text-xl font-semibold text-foreground">
                            <img 
                                src={theme === "dark" ? DarkLogo.src : LightLogo.src} 
                                alt="Logo" 
                                className="h-150 w-auto md:h-150" 
                            />
                        </Link>
                    </div>

                    {/* Footer Sections - Centered */}
                    <div className="grid grid-cols-1 md:col-span-1 md:grid-cols-3">
                        {footerSections.map((section) => (
                            <div key={section.title} className="w-full">
                                <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                                    {section.title}
                                </h3>
                                <ul className="mt-4 space-y-3">
                                    {section.links.map((link) => (
                                        <li key={link.href}>
                                            <Link
                                                href={link.href}
                                                className="text-sm text-muted-foreground transition-colors hover:text-blue-accent"
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Right Section - Newsletter Subscription */}
                    <div className="md:col-span-1">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                            Subscribe to our Newsletter
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                            Get the latest updates and news directly to your inbox.
                        </p>
                        <form className="mt-4 flex items-center space-x-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full p-2 rounded-md border border-border-color bg-input text-foreground"
                            />
                            <button
                                type="submit"
                                className="px-4 py-2 bg-blue-accent text-white rounded-md hover:bg-blue-accent-hover transition-colors"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-12 flex flex-col items-start justify-between border-t border-border-color pt-8 md:flex-row">
                    <p className="mb-4 text-sm text-muted-foreground md:mb-0">
                        © {new Date().getFullYear()} FusionSpace. All rights reserved.
                    </p>

                    {/* Social Links */}
                    <div className="flex space-x-6">
                        <Link
                            href="https://twitter.com"
                            className="text-muted-foreground hover:text-blue-accent transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Twitter className="h-5 w-5" />
                        </Link>
                        <Link
                            href="https://facebook.com"
                            className="text-muted-foreground hover:text-blue-accent transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Facebook className="h-5 w-5" />
                        </Link>
                        <Link
                            href="https://youtube.com"
                            className="text-muted-foreground hover:text-blue-accent transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Youtube className="h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </ContentContainer>
        </footer>
    );
};

export default Footer;