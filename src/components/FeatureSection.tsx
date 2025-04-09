
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChartLineUp, BarChart2, Laptop, Database, Share2, ShieldCheck } from "lucide-react";

const FeatureSection = () => {
  return (
    <section id="features" className="py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-slate-800">Advanced Features</h2>
        <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
          Our platform offers a wide range of features designed to help you make data-driven decisions.
        </p>
      </div>
      
      <Tabs defaultValue="analytics" className="max-w-4xl mx-auto">
        <TabsList className="grid grid-cols-3 mb-8 h-auto p-1">
          <TabsTrigger value="analytics" className="py-3 data-[state=active]:bg-blue-50 data-[state=active]:text-blue-600">
            <ChartLineUp className="mr-2 h-4 w-4" />
            Analytics
          </TabsTrigger>
          <TabsTrigger value="insights" className="py-3 data-[state=active]:bg-blue-50 data-[state=active]:text-blue-600">
            <BarChart2 className="mr-2 h-4 w-4" />
            Insights
          </TabsTrigger>
          <TabsTrigger value="integration" className="py-3 data-[state=active]:bg-blue-50 data-[state=active]:text-blue-600">
            <Share2 className="mr-2 h-4 w-4" />
            Integration
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="analytics" className="border rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-slate-800">Real-time Analytics</h3>
              <p className="text-slate-600">
                Track performance metrics in real-time with our advanced analytics dashboard. Visualize trends and identify opportunities instantly.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <span className="bg-green-100 p-1 rounded-full mr-2">
                    <ChartLineUp className="h-4 w-4 text-green-600" />
                  </span>
                  <span className="text-slate-700">Custom reporting dashboards</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-green-100 p-1 rounded-full mr-2">
                    <ChartLineUp className="h-4 w-4 text-green-600" />
                  </span>
                  <span className="text-slate-700">Advanced data visualization</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-green-100 p-1 rounded-full mr-2">
                    <ChartLineUp className="h-4 w-4 text-green-600" />
                  </span>
                  <span className="text-slate-700">Trend analysis tools</span>
                </li>
              </ul>
            </div>
            <div className="bg-slate-100 rounded-lg overflow-hidden">
              <img src="/placeholder.svg" alt="Analytics Dashboard" className="w-full h-full object-cover" />
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="insights" className="border rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-slate-800">AI-Powered Insights</h3>
              <p className="text-slate-600">
                Let our AI analyze your data to uncover hidden patterns and provide actionable recommendations.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <span className="bg-amber-100 p-1 rounded-full mr-2">
                    <BarChart2 className="h-4 w-4 text-amber-600" />
                  </span>
                  <span className="text-slate-700">Predictive analytics</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-amber-100 p-1 rounded-full mr-2">
                    <BarChart2 className="h-4 w-4 text-amber-600" />
                  </span>
                  <span className="text-slate-700">Sentiment analysis</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-amber-100 p-1 rounded-full mr-2">
                    <BarChart2 className="h-4 w-4 text-amber-600" />
                  </span>
                  <span className="text-slate-700">Anomaly detection</span>
                </li>
              </ul>
            </div>
            <div className="bg-slate-100 rounded-lg overflow-hidden">
              <img src="/placeholder.svg" alt="AI Insights" className="w-full h-full object-cover" />
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="integration" className="border rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-slate-800">Seamless Integration</h3>
              <p className="text-slate-600">
                Connect with your favorite tools and services for a streamlined workflow and enhanced productivity.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <span className="bg-blue-100 p-1 rounded-full mr-2">
                    <Share2 className="h-4 w-4 text-blue-600" />
                  </span>
                  <span className="text-slate-700">API access</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-blue-100 p-1 rounded-full mr-2">
                    <Share2 className="h-4 w-4 text-blue-600" />
                  </span>
                  <span className="text-slate-700">Webhooks support</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-blue-100 p-1 rounded-full mr-2">
                    <Share2 className="h-4 w-4 text-blue-600" />
                  </span>
                  <span className="text-slate-700">Third-party integrations</span>
                </li>
              </ul>
            </div>
            <div className="bg-slate-100 rounded-lg overflow-hidden">
              <img src="/placeholder.svg" alt="Integrations" className="w-full h-full object-cover" />
            </div>
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
        <Card className="bg-white shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <div className="rounded-full bg-blue-100 p-3 mr-4">
                <Laptop className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800">User-Friendly Interface</h3>
            </div>
            <p className="text-slate-600">
              Intuitive design that makes complex analysis accessible to everyone, regardless of technical skill.
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-white shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <div className="rounded-full bg-blue-100 p-3 mr-4">
                <Database className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800">Comprehensive Data</h3>
            </div>
            <p className="text-slate-600">
              Access to extensive datasets and metrics to support your analysis and decision-making process.
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-white shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <div className="rounded-full bg-blue-100 p-3 mr-4">
                <ShieldCheck className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800">Secure Platform</h3>
            </div>
            <p className="text-slate-600">
              Enterprise-grade security ensuring your data is protected and private at all times.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FeatureSection;
