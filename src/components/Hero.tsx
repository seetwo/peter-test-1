
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="py-20 flex flex-col-reverse md:flex-row items-center justify-between">
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
          Make Better Decisions with Advanced Analytics Tools
        </h1>
        <p className="text-xl text-slate-600 max-w-lg">
          Our suite of professional analysis tools helps you gain insights, track performance, and achieve better results.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Get Started <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline">
            View Demo
          </Button>
        </div>
        <div className="flex items-center text-sm pt-4">
          <p className="text-slate-500">
            Trusted by over <span className="font-bold">10,000+</span> professionals
          </p>
        </div>
      </div>
      
      <div className="md:w-1/2 mb-10 md:mb-0">
        <div className="bg-white p-4 rounded-xl shadow-2xl">
          <img 
            src="/placeholder.svg" 
            alt="Analytics Dashboard" 
            className="w-full rounded-lg shadow"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
