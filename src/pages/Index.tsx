
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Check, Clipboard, Search, Calculator, Target, Lightbulb, Users } from "lucide-react";
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
            <h2 className="text-3xl font-bold text-slate-800">Complete Toolkit for Smarter Betting</h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
              Our comprehensive suite of tools gives you everything you need to make data-driven betting decisions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ToolCard 
              title="Bet Tracker" 
              description="Sync sportsbook accounts or manually input bets to monitor performance and ROI"
              icon={<Clipboard className="h-6 w-6" />}
              isPremium={false}
            />
            <ToolCard 
              title="Prop Bet Analyzer" 
              description="Find the best value prop bets with our powerful analysis engine and cheat sheets"
              icon={<Target className="h-6 w-6" />}
              isPremium={true}
            />
            <ToolCard 
              title="Odds Comparison" 
              description="Instantly compare live odds from top sportsbooks across spreads, totals, and moneylines"
              icon={<Search className="h-6 w-6" />}
              isPremium={false}
            />
            <ToolCard 
              title="Betting Calculators" 
              description="Quickly calculate parlay payouts, convert odds formats, and determine potential winnings"
              icon={<Calculator className="h-6 w-6" />}
              isPremium={false}
            />
            <ToolCard 
              title="Expert Picks & Analysis" 
              description="Access daily picks, predictions, and in-depth analysis from verified betting experts"
              icon={<Lightbulb className="h-6 w-6" />}
              isPremium={true}
            />
            <ToolCard 
              title="Consensus Picks" 
              description="Gauge market sentiment by seeing how the public and sharps are betting on games"
              icon={<Users className="h-6 w-6" />}
              isPremium={true}
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
