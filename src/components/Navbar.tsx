
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-2 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm"
          : "py-4 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 font-bold text-2xl transition-transform duration-300 hover:scale-105"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-ipl-blue to-ipl-red">
            IPL Stats
          </span>
          <span className="text-sm font-light opacity-70 mt-1">Symphony</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            to="/"
            className="font-medium hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300 after:bg-primary"
          >
            Home
          </Link>
          <Link
            to="/points-table"
            className="font-medium hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300 after:bg-primary"
          >
            Points Table
          </Link>
          <Link
            to="/players"
            className="font-medium hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300 after:bg-primary"
          >
            Players
          </Link>
          <Link
            to="/teams"
            className="font-medium hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300 after:bg-primary"
          >
            Teams
          </Link>
          <Link
            to="/compare"
            className="font-medium hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300 after:bg-primary"
          >
            Compare
          </Link>
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-9 h-9 rounded-full"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background md:hidden pt-16">
          <nav className="container mx-auto px-4 py-8 flex flex-col items-center gap-6 text-lg">
            <Link
              to="/"
              className="w-full py-3 text-center font-medium hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/points-table"
              className="w-full py-3 text-center font-medium hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Points Table
            </Link>
            <Link
              to="/players"
              className="w-full py-3 text-center font-medium hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Players
            </Link>
            <Link
              to="/teams"
              className="w-full py-3 text-center font-medium hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Teams
            </Link>
            <Link
              to="/compare"
              className="w-full py-3 text-center font-medium hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Compare
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
