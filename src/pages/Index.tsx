
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Section 1: Bet Tracking / Dashboard */}
          <section className="bg-[#67b7ff] p-8 rounded-md text-center">
            <h2 className="text-3xl font-bold text-black mb-8">Bet Tracking / Dashboard and Book Sync</h2>
            <div className="space-y-2">
              <div className="bg-[#ff7bed] py-2 px-4 rounded-md">
                <p className="text-black font-medium">Advanced Analytics Dashboard</p>
              </div>
              <div className="bg-[#ff7bed] py-2 px-4 rounded-md">
                <p className="text-black font-medium">Sync to Sportsbook Accounts</p>
              </div>
            </div>
          </section>

          {/* Section 2: Prop Bet Cheat Sheet */}
          <section className="bg-[#67b7ff] p-8 rounded-md text-center">
            <h2 className="text-3xl font-bold text-black mb-8">Prop Bet Cheat Sheet</h2>
            <div className="bg-[#ff7bed] py-2 px-4 rounded-md">
              <p className="text-black font-medium">Ready-made expert tips for winning prop bets</p>
            </div>
          </section>

          {/* Section 3: Leaderboards and Follows */}
          <section className="bg-[#67b7ff] p-8 rounded-md text-center">
            <h2 className="text-3xl font-bold text-black mb-8">Leaderboards and Follows</h2>
            <div className="space-y-2">
              <div className="bg-[#ff7bed] py-2 px-4 rounded-md">
                <p className="text-black font-medium">Follow top handicappers</p>
              </div>
              <div className="bg-[#ff7bed] py-2 px-4 rounded-md">
                <p className="text-black font-medium">Compare your results on the leaderboards</p>
              </div>
            </div>
          </section>

          {/* Section 4: AI */}
          <section className="bg-[#67b7ff] p-8 rounded-md text-center">
            <h2 className="text-3xl font-bold text-black mb-8">AI !!</h2>
            <div className="space-y-2">
              <div className="bg-[#ff7bed] py-2 px-4 rounded-md">
                <p className="text-black font-medium">AI-powered betting predictions</p>
              </div>
              <div className="bg-[#ff7bed] py-2 px-4 rounded-md">
                <p className="text-black font-medium">Custom AI betting assistants</p>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
