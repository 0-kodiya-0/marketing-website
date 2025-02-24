"use client"

import Image from "next/image";
import MyIcon from "@/public/icons/Fusion Transparent.png";
import NavDropdown from "./NavDropdown";
import { navigationItems } from "./routes.conf";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";
import ContentContainer from "@/layouts/ContentContainer";
import PageLayout from "@/layouts/PageLayout";
import UnderConstructionBanner from "../stats/UnderConstructionBanner";

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 h-16 bg-background/80 backdrop-blur-sm border-b border-border/40">
            <UnderConstructionBanner showDismissButton />
            <PageLayout>
                <ContentContainer className="h-full">
                    <div className="flex h-full items-center justify-between">
                        {/* Left section - Logo */}
                        <div className="flex items-center">
                            <Link
                                href="/"
                                className="inline-flex items-center justify-center rounded-md p-2 text-foreground hover:text-blue-accent transition-colors"
                                aria-label="FusionSpace Home"
                            >
                                <div className="relative h-10 w-10">
                                    <Image
                                        src={MyIcon.src}
                                        alt="FusionSpace Logo"
                                        fill
                                        sizes="40px"
                                        priority
                                        className="object-contain"
                                    />
                                </div>
                            </Link>
                        </div>

                        {/* Center section - Navigation */}
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                            <div className="hidden md:flex items-center space-x-2">
                                {navigationItems.map((item) => (
                                    <NavDropdown key={item.href} item={item} />
                                ))}
                            </div>
                        </div>

                        {/* Right section */}
                        <div className="flex items-center space-x-4">
                            <ThemeToggle />
                            <Link
                                href="/signin"
                                className="text-sm font-medium text-foreground hover:text-blue-accent transition-colors"
                            >
                                Sign in
                            </Link>
                            <Link
                                href="/signup"
                                className="rounded-md bg-blue-accent px-4 py-2 text-sm font-medium text-white hover:bg-blue-accent-hover transition-colors shadow-sm"
                            >
                                Sign up
                            </Link>
                        </div>
                    </div>
                </ContentContainer>
            </PageLayout>
        </nav>
    );
}

export default Navbar;