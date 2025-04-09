
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Twitter, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img 
              src="/lovable-uploads/4c3f4030-28ec-4536-ac31-f650c28ce125.png" 
              alt="BettingPros Logo" 
              className="h-8 mb-4" 
            />
            <p className="text-gray-400 mb-4">
              Expert sports betting picks, predictions, and analysis.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Tools & Features</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Bet Tracker</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Prop Bet Cheat Sheet</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Leaderboards</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">AI Predictions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Line Movement</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Subscribe to our newsletter</h3>
            <p className="text-gray-400 mb-4">
              Get daily betting picks and predictions.
            </p>
            <div className="flex space-x-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-gray-800 border-gray-700 text-white" 
              />
              <Button className="bg-[#ff7bed] hover:bg-[#e06bd3] text-black">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} BettingPros. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Terms of Use
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Responsible Gaming
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
