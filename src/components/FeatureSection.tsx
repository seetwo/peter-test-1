
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clipboard, Target, Search, Calculator, Lightbulb, Users } from "lucide-react";

const FeatureSection = () => {
  return (
    <section id="features" className="py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-slate-800">Advanced Features</h2>
        <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
          Our platform offers a wide range of features designed to help you make data-driven betting decisions.
        </p>
      </div>
      
      <Tabs defaultValue="tracker" className="max-w-4xl mx-auto">
        <TabsList className="grid grid-cols-3 mb-8 h-auto p-1">
          <TabsTrigger value="tracker" className="py-3 data-[state=active]:bg-blue-50 data-[state=active]:text-blue-600">
            <Clipboard className="mr-2 h-4 w-4" />
            Bet Tracker
          </TabsTrigger>
          <TabsTrigger value="props" className="py-3 data-[state=active]:bg-blue-50 data-[state=active]:text-blue-600">
            <Target className="mr-2 h-4 w-4" />
            Prop Analysis
          </TabsTrigger>
          <TabsTrigger value="odds" className="py-3 data-[state=active]:bg-blue-50 data-[state=active]:text-blue-600">
            <Search className="mr-2 h-4 w-4" />
            Odds Comparison
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="tracker" className="border rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-slate-800">Bet Tracker</h3>
              <p className="text-slate-600">
                Keep track of all your bets in one place. Monitor your performance, analyze your ROI, and identify your strongest betting categories.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <span className="bg-green-100 p-1 rounded-full mr-2">
                    <Clipboard className="h-4 w-4 text-green-600" />
                  </span>
                  <span className="text-slate-700">Sync with sportsbook accounts</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-green-100 p-1 rounded-full mr-2">
                    <Clipboard className="h-4 w-4 text-green-600" />
                  </span>
                  <span className="text-slate-700">Manual bet entry</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-green-100 p-1 rounded-full mr-2">
                    <Clipboard className="h-4 w-4 text-green-600" />
                  </span>
                  <span className="text-slate-700">Performance analytics</span>
                </li>
              </ul>
            </div>
            <div className="bg-slate-100 rounded-lg overflow-hidden">
              <img src="/placeholder.svg" alt="Bet Tracker Dashboard" className="w-full h-full object-cover" />
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="props" className="border rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-slate-800">Prop Bet Analyzer</h3>
              <p className="text-slate-600">
                Find the best value prop bets with our powerful analysis engine and detailed cheat sheets across all major sports.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <span className="bg-amber-100 p-1 rounded-full mr-2">
                    <Target className="h-4 w-4 text-amber-600" />
                  </span>
                  <span className="text-slate-700">Player prop valuations</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-amber-100 p-1 rounded-full mr-2">
                    <Target className="h-4 w-4 text-amber-600" />
                  </span>
                  <span className="text-slate-700">Historical performance data</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-amber-100 p-1 rounded-full mr-2">
                    <Target className="h-4 w-4 text-amber-600" />
                  </span>
                  <span className="text-slate-700">Value bet indicators</span>
                </li>
              </ul>
            </div>
            <div className="bg-slate-100 rounded-lg overflow-hidden">
              <img src="/placeholder.svg" alt="Prop Bet Analysis" className="w-full h-full object-cover" />
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="odds" className="border rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-slate-800">Odds Comparison</h3>
              <p className="text-slate-600">
                Instantly compare odds from multiple sportsbooks to ensure you always get the best line for your bets.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <span className="bg-blue-100 p-1 rounded-full mr-2">
                    <Search className="h-4 w-4 text-blue-600" />
                  </span>
                  <span className="text-slate-700">Live odds updates</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-blue-100 p-1 rounded-full mr-2">
                    <Search className="h-4 w-4 text-blue-600" />
                  </span>
                  <span className="text-slate-700">Line movement tracking</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-blue-100 p-1 rounded-full mr-2">
                    <Search className="h-4 w-4 text-blue-600" />
                  </span>
                  <span className="text-slate-700">Best odds highlighting</span>
                </li>
              </ul>
            </div>
            <div className="bg-slate-100 rounded-lg overflow-hidden">
              <img src="/placeholder.svg" alt="Odds Comparison Tool" className="w-full h-full object-cover" />
            </div>
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
        <Card className="bg-white shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <div className="rounded-full bg-blue-100 p-3 mr-4">
                <Calculator className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800">Betting Calculators</h3>
            </div>
            <p className="text-slate-600">
              Quickly calculate parlay payouts, convert odds formats, and determine potential winnings for any bet type.
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-white shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <div className="rounded-full bg-blue-100 p-3 mr-4">
                <Lightbulb className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800">Expert Picks & Analysis</h3>
            </div>
            <p className="text-slate-600">
              Access daily picks, predictions, and in-depth analysis from our team of verified betting experts.
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-white shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <div className="rounded-full bg-blue-100 p-3 mr-4">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800">Consensus Picks</h3>
            </div>
            <p className="text-slate-600">
              See how the public and sharps are betting on games to gauge market sentiment and identify value opportunities.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FeatureSection;
