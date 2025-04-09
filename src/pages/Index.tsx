
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Check, Star, BarChart3, Calculator, PieChart, LineChart, Calendar, TrendingUp } from "lucide-react";
import Hero from "@/components/Hero";
import FeatureSection from "@/components/FeatureSection";
import PricingSection from "@/components/PricingSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ToolCard from "@/components/ToolCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <Hero />
        
        <section id="tools" className="py-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-800">Complete Toolkit for Advanced Analysis</h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
              Our comprehensive suite of tools gives you everything you need to make data-driven decisions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ToolCard 
              title="Data Analyzer" 
              description="Analyze trends with our powerful data visualization tool"
              icon={<BarChart3 className="h-6 w-6" />}
              isPremium={false}
            />
            <ToolCard 
              title="Advanced Calculator" 
              description="Perform complex calculations with our specialized formulas"
              icon={<Calculator className="h-6 w-6" />}
              isPremium={true}
            />
            <ToolCard 
              title="Projection System" 
              description="See future trends with our AI-powered projection system"
              icon={<LineChart className="h-6 w-6" />}
              isPremium={true}
            />
            <ToolCard 
              title="Statistics Hub" 
              description="Access comprehensive statistics in one centralized location"
              icon={<PieChart className="h-6 w-6" />}
              isPremium={false}
            />
            <ToolCard 
              title="Trend Tracker" 
              description="Monitor market movements and identify key patterns"
              icon={<TrendingUp className="h-6 w-6" />}
              isPremium={true}
            />
            <ToolCard 
              title="Event Scheduler" 
              description="Stay organized with our integrated calendar system"
              icon={<Calendar className="h-6 w-6" />}
              isPremium={false}
            />
          </div>
          
          <div className="flex justify-center mt-10">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Explore All Tools <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>
        
        <FeatureSection />
        
        <PricingSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
