
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const PricingSection = () => {
  return (
    <section id="pricing" className="py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-slate-800">Simple, Transparent Pricing</h2>
        <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
          Choose the plan that's right for you. All plans include a 14-day free trial.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Free Plan */}
        <Card className="border border-slate-200 overflow-hidden">
          <CardHeader className="bg-slate-50 pb-6">
            <CardTitle className="text-2xl font-bold">Free</CardTitle>
            <CardDescription className="text-slate-500">For individuals and small teams</CardDescription>
            <div className="mt-4">
              <span className="text-4xl font-bold text-slate-800">$0</span>
              <span className="text-slate-600 ml-2">/month</span>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="mr-3 mt-1">
                  <Check className="h-5 w-5 text-green-500" />
                </div>
                <span className="text-slate-600">Access to basic analysis tools</span>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1">
                  <Check className="h-5 w-5 text-green-500" />
                </div>
                <span className="text-slate-600">View public statistics and trends</span>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1">
                  <Check className="h-5 w-5 text-green-500" />
                </div>
                <span className="text-slate-600">3 saved reports</span>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1">
                  <Check className="h-5 w-5 text-green-500" />
                </div>
                <span className="text-slate-600">Community support</span>
              </li>
              <li className="flex items-start opacity-50">
                <div className="mr-3 mt-1">
                  <X className="h-5 w-5 text-slate-400" />
                </div>
                <span className="text-slate-500">Advanced calculators</span>
              </li>
              <li className="flex items-start opacity-50">
                <div className="mr-3 mt-1">
                  <X className="h-5 w-5 text-slate-400" />
                </div>
                <span className="text-slate-500">AI predictions</span>
              </li>
              <li className="flex items-start opacity-50">
                <div className="mr-3 mt-1">
                  <X className="h-5 w-5 text-slate-400" />
                </div>
                <span className="text-slate-500">API access</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter className="bg-slate-50 flex justify-center border-t p-6">
            <Button variant="outline" size="lg" className="w-full">
              Get Started
            </Button>
          </CardFooter>
        </Card>
        
        {/* Premium Plan */}
        <Card className="border-2 border-blue-500 overflow-hidden relative">
          <div className="absolute top-0 right-0">
            <Badge className="rounded-tl-none rounded-br-none bg-blue-500">
              RECOMMENDED
            </Badge>
          </div>
          <CardHeader className="bg-blue-50 pb-6">
            <CardTitle className="text-2xl font-bold">Premium</CardTitle>
            <CardDescription className="text-slate-500">For professionals and businesses</CardDescription>
            <div className="mt-4">
              <span className="text-4xl font-bold text-slate-800">$29</span>
              <span className="text-slate-600 ml-2">/month</span>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="mr-3 mt-1">
                  <Check className="h-5 w-5 text-green-500" />
                </div>
                <span className="text-slate-600">Everything in Free</span>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1">
                  <Check className="h-5 w-5 text-green-500" />
                </div>
                <span className="text-slate-600">Access to all premium tools</span>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1">
                  <Check className="h-5 w-5 text-green-500" />
                </div>
                <span className="text-slate-600">Advanced calculators & projections</span>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1">
                  <Check className="h-5 w-5 text-green-500" />
                </div>
                <span className="text-slate-600">AI-powered predictions</span>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1">
                  <Check className="h-5 w-5 text-green-500" />
                </div>
                <span className="text-slate-600">Unlimited saved reports</span>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1">
                  <Check className="h-5 w-5 text-green-500" />
                </div>
                <span className="text-slate-600">API access & data exports</span>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1">
                  <Check className="h-5 w-5 text-green-500" />
                </div>
                <span className="text-slate-600">Priority customer support</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter className="bg-blue-50 flex justify-center border-t p-6">
            <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
              Start Free Trial
            </Button>
          </CardFooter>
        </Card>
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-slate-600 mb-4">
          Need a custom solution for your enterprise?
        </p>
        <Button variant="outline">Contact Sales</Button>
      </div>
    </section>
  );
};

export default PricingSection;
