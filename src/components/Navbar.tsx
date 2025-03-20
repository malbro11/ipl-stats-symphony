
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerClose
} from "@/components/ui/drawer";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string, e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    
    // If on homepage, scroll to the section
    if (location.pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If not on homepage, navigate to homepage and then scroll after a delay
      window.location.href = `/#${sectionId}`;
    }
  };

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
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            to="/"
            className="font-medium hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300 after:bg-primary"
          >
            Home
          </Link>
          <a
            href="#points-table"
            onClick={(e) => scrollToSection("points-table", e)}
            className="font-medium hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300 after:bg-primary"
          >
            Points Table
          </a>
          <a
            href="#top-performers"
            onClick={(e) => scrollToSection("top-performers", e)}
            className="font-medium hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300 after:bg-primary"
          >
            Top Players
          </a>
          <a
            href="#player-comparison"
            onClick={(e) => scrollToSection("player-comparison", e)}
            className="font-medium hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300 after:bg-primary"
          >
            Compare
          </a>
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Button with Drawer */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Drawer>
            <DrawerTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="w-9 h-9 rounded-full"
                aria-label="Toggle menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </DrawerTrigger>
            <DrawerContent className="p-0">
              <div className="p-4 border-b">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold">Menu</span>
                  <DrawerClose asChild>
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <X className="h-5 w-5" />
                    </Button>
                  </DrawerClose>
                </div>
              </div>
              <nav className="flex flex-col p-4">
                <Link
                  to="/"
                  className="w-full py-3 text-center font-medium hover:text-primary transition-colors"
                >
                  Home
                </Link>
                <a
                  href="#points-table"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("points-table");
                    document.querySelector('[data-state="closed"]')?.click();
                  }}
                  className="w-full py-3 text-center font-medium hover:text-primary transition-colors"
                >
                  Points Table
                </a>
                <a
                  href="#top-performers"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("top-performers");
                    document.querySelector('[data-state="closed"]')?.click();
                  }}
                  className="w-full py-3 text-center font-medium hover:text-primary transition-colors"
                >
                  Top Players
                </a>
                <a
                  href="#player-comparison"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("player-comparison");
                    document.querySelector('[data-state="closed"]')?.click();
                  }}
                  className="w-full py-3 text-center font-medium hover:text-primary transition-colors"
                >
                  Compare
                </a>
              </nav>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </header>
  );
}
