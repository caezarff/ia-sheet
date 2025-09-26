"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { PanelRight } from "lucide-react";
import ChatBotDemo from "@/components/ia-chat";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="lg">
            <PanelRight className="h-4 w-4 text-gray-600" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[450px] p-2 rounded-2xl">
          <ChatBotDemo />
        </SheetContent>
      </Sheet>
    </div>
  );
}
