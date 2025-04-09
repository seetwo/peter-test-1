
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search, Menu, X, User } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-black border-b border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img 
                src="/lovable-uploads/4c3f4030-28ec-4536-ac31-f650c28ce125.png" 
                alt="BettingPros Logo" 
                className="h-8" 
              />
            </a>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-white hover:text-gray-300 transition-colors font-medium">
              Tools
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors font-medium">
              Pricing
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors font-medium">
              Articles
            </a>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="bg-white text-black px-4 py-1 rounded text-sm w-36"
              />
              <Search className="h-4 w-4 absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
            <Button variant="ghost" size="sm" className="text-white">
              <User className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={toggleMenu} className="text-white">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={cn(
        "md:hidden bg-black border-t border-gray-800 absolute w-full left-0 right-0 transition-all duration-300 ease-in-out",
        isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
      )}>
        <div className="container mx-auto px-4 py-4 space-y-4">
          <a href="#" className="block py-2 px-4 text-white hover:bg-gray-800 rounded-md">
            Tools
          </a>
          <a href="#" className="block py-2 px-4 text-white hover:bg-gray-800 rounded-md">
            Pricing
          </a>
          <a href="#" className="block py-2 px-4 text-white hover:bg-gray-800 rounded-md">
            Articles
          </a>
          <div className="pt-4">
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Search"
                className="bg-white text-black px-4 py-2 rounded text-sm w-full"
              />
              <Search className="h-4 w-4 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
