import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom"; // Import Link

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            {/* Updated Logo */}
            <a href="/" className="flex items-center">
              <img
                src="/bettingpros-logo.svg"
                alt="BettingPros"
                className="h-8 w-auto" // Adjust height (h-8) as needed
              />
            </a>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {/* These links still use href for potential section scrolling */}
            <a
              href="#tools"
              className="text-slate-700 hover:text-blue-600 transition-colors"
            >
              Tools
            </a>
            <a
              href="#features"
              className="text-slate-700 hover:text-blue-600 transition-colors"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-slate-700 hover:text-blue-600 transition-colors"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-slate-700 hover:text-blue-600 transition-colors"
            >
              Resources
            </a>
          </nav>

          {/* Updated Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/login">Log in</Link>
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700" asChild>
              <Link to="/signup">Sign up</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={toggleMenu}>
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden bg-white border-t border-slate-200 absolute w-full left-0 right-0 transition-all duration-300 ease-in-out",
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        )}
      >
        <div className="container mx-auto px-4 py-4 space-y-4">
          <a
            href="#tools"
            className="block py-2 px-4 text-slate-700 hover:bg-slate-100 rounded-md"
          >
            Tools
          </a>
          <a
            href="#features"
            className="block py-2 px-4 text-slate-700 hover:bg-slate-100 rounded-md"
          >
            Features
          </a>
          <a
            href="#pricing"
            className="block py-2 px-4 text-slate-700 hover:bg-slate-100 rounded-md"
          >
            Pricing
          </a>
          <a
            href="#"
            className="block py-2 px-4 text-slate-700 hover:bg-slate-100 rounded-md"
          >
            Resources
          </a>
          {/* Updated Mobile Buttons */}
          <div className="pt-4 space-y-2">
            <Button variant="outline" className="w-full justify-center" asChild>
              <Link to="/https://www.bettingpros.com/accounts/signin/">Log in</Link>
            </Button>
            <Button
              className="w-full justify-center bg-blue-600 hover:bg-blue-700"
              asChild
            >
              <Link to="/https://www.bettingpros.com/accounts/signup/">Sign up</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;