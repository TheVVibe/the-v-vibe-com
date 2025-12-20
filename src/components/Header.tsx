"use client";

import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight">
          <img className="w-60" src="/static/logo/logo.png" alt="TheVVibe" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <Link href="/category/top-tech" className="hover:text-foreground transition-colors">Top Tech</Link>
          <Link href="/category/home-essentials" className="hover:text-foreground transition-colors">Home</Link>
          <Link href="/category/lifestyle" className="hover:text-foreground transition-colors">Lifestyle</Link>
          <Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link>
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b border-border p-4 shadow-lg animate-in slide-in-from-top-2">
          <nav className="flex flex-col gap-4 text-sm font-medium">
            <Link
              href="/category/top-tech"
              className="p-2 hover:bg-surface rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Top Tech
            </Link>
            <Link
              href="/category/home-essentials"
              className="p-2 hover:bg-surface rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/category/lifestyle"
              className="p-2 hover:bg-surface rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Lifestyle
            </Link>
            <Link
              href="/blog"
              className="p-2 hover:bg-surface rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
