
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

interface ToolCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  isPremium: boolean;
}

const ToolCard = ({ title, description, icon, isPremium }: ToolCardProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <CardHeader className="space-y-1 bg-slate-50 pb-4">
        <div className="flex justify-between items-center">
          <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
            {icon}
          </div>
          {isPremium && (
            <Badge variant="outline" className="border-amber-500 text-amber-500">
              PREMIUM
            </Badge>
          )}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <CardDescription className="text-sm text-slate-600 min-h-[60px]">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="border-t p-4 bg-slate-50">
        <Button variant="ghost" size="sm" className="w-full justify-between">
          Learn more 
          <ChevronRight className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ToolCard;
