"use client";
import { useTheme } from "next-themes";
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
    const { theme } = useTheme(); // Get the current theme

    return (
        <footer className={`w-full border-t border-border-color bg-background py-12 md:py-16 ${className}`}>
            <ContentContainer>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    {/* Brand Section - Left aligned */}
                    <div className="md:col-span-1">
                        <Link href="/" className="inline-flex items-center text-xl font-semibold text-foreground">
                            {/* Dynamically switch the logo based on the theme */}
                            <img 
                                src={theme === "dark" ? DarkLogo.src : LightLogo.src} 
                                alt="Logo" 
                                
                            />
                        </Link>
                        <p className="mt-4 text-sm text-muted-foreground">
                            Empowering productivity through intelligent workspace solutions.
                        </p>
                    </div>

                    {/* Footer Sections - Right aligned */}
                    <div className="grid grid-cols-1 gap-8 md:col-span-3 md:grid-cols-3 md:justify-items-end">
                        {footerSections.map((section) => (
                            <div key={section.title} className="w-full md:text-right">
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
                </div>

                {/* Bottom Section */}
                <div className="mt-12 flex flex-col items-center justify-between border-t border-border-color pt-8 md:flex-row">
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
                            <span className="sr-only">Twitter</span>
                            <Twitter className="h-5 w-5" />
                        </Link>
                        <Link
                            href="https://facebook.com"
                            className="text-muted-foreground hover:text-blue-accent transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="sr-only">Facebook</span>
                            <Facebook className="h-5 w-5" />
                        </Link>
                        <Link
                            href="https://youtube.com"
                            className="text-muted-foreground hover:text-blue-accent transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="sr-only">YouTube</span>
                            <Youtube className="h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </ContentContainer>
        </footer>
    );
};

export default Footer;
