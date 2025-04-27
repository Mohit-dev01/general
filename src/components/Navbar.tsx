import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { GraduationCap } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const isMobile = useIsMobile();
  const [scrolled, setScrolled] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#services" },
    { name: "About Us", href: "#about" },
  ];

  const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
  >(({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-indigo-500/10 hover:text-indigo-400 focus:bg-indigo-500/10 focus:text-indigo-400",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-xs leading-snug text-gray-400">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  });
  ListItem.displayName = "ListItem";

  const NavLinks = () => (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <a
            href="#"
            className="text-gray-200 hover:text-indigo-400 transition-colors font-medium px-3 py-2 text-sm"
          >
            Home
          </a>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <a
            href="#services"
            className="text-gray-200 hover:text-indigo-400 transition-colors font-medium px-3 py-2 text-sm"
          >
            Services
          </a>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <a
            href="#about"
            className="text-gray-200 hover:text-indigo-400 transition-colors font-medium px-3 py-2 text-sm"
          >
            About Us
          </a>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );

  const MobileMenu = () => (
    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="md:hidden bg-gray-800/50 border-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-200"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-gray-900 text-gray-200 border-gray-800">
        <div className="flex flex-col gap-6 mt-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-xl font-medium text-gray-200 hover:text-indigo-400 transition-colors"
              onClick={() => setIsSheetOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-950/90 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto py-4 px-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group">
          <div className="relative overflow-hidden rounded-full p-1 transition-all duration-300 bg-gradient-to-r from-indigo-600 to-blue-600 group-hover:shadow-lg">
            <div className="w-8 h-8 bg-gray-950 rounded-full flex items-center justify-center transition-all group-hover:scale-95">
              <span className="text-indigo-400 font-bold text-sm group-hover:text-white">
                {import.meta.env.VITE_CONSULTANCY_LOGO}
              </span>
            </div>
          </div>
          <span className="font-bold text-white text-lg font-playfair tracking-wide">
            {import.meta.env.VITE_CONSULTANCY_FIRST_NAME}{" "}
            <span className="text-indigo-400">
              {import.meta.env.VITE_CONSULTANCY_LAST_NAME}
            </span>
          </span>
        </a>

        {isMobile ? (
          <MobileMenu />
        ) : (
          <div className="flex items-center gap-8">
            <NavLinks />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
