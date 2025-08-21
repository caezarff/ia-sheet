"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Menu, MessageCircleDashed, Plus, Mic, AudioWaveform } from "lucide-react"

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false)
  const chatHistory = [
    { id: 1, title: "Como criar um componente React", date: "Hoje" },
    { id: 2, title: "Explicação sobre TypeScript", date: "Ontem" },
    { id: 3, title: "Dúvidas sobre Next.js", date: "2 dias atrás" },
    { id: 4, title: "Configuração do Tailwind", date: "3 dias atrás" },
  ]

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="lg">
            Abrir Chat AI
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[90vw] sm:w-[450px] max-w-md p-0 border-0">
          <div className="flex flex-col h-full bg-white">
            {/* Header */}
            <div className="flex items-center justify-between p-4">
              <Button variant="ghost" size="sm" className="p-2">
                <Menu className="h-4 w-4 text-gray-600" />
              </Button>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-900">ChatGPT</span>
                <span className="text-sm text-gray-500">5 Thinking</span>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="p-2">
                    <MessageCircleDashed className="h-4 w-4 text-gray-600" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-64">
                  <div className="px-2 py-1.5 text-sm font-medium text-gray-900 border-b">Histórico de Chats</div>
                  {chatHistory.map((chat) => (
                    <DropdownMenuItem key={chat.id} className="flex flex-col items-start p-3">
                      <div className="font-medium text-sm text-gray-900 truncate w-full">{chat.title}</div>
                      <div className="text-xs text-gray-500 mt-1">{chat.date}</div>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex items-center justify-center px-6">
              <h2 className="text-xl text-gray-900 text-center font-normal">What's on your mind today?</h2>
            </div>

            {/* Input Area */}
            <div className="p-4">
              <div className="relative">
                <div className="flex items-center bg-gray-50 rounded-full border border-gray-200 px-4 py-3">
                  <Button variant="ghost" size="sm" className="p-1 mr-2">
                    <Plus className="h-4 w-4 text-gray-500" />
                  </Button>
                  <Input
                    placeholder="Ask anything"
                    className="flex-1 border-0 bg-transparent text-sm placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0 p-0"
                  />
                  <div className="flex items-center gap-2 ml-2">
                    <Button variant="ghost" size="sm" className="p-1">
                      <Mic className="h-4 w-4 text-gray-500" />
                    </Button>
                    <Button variant="ghost" size="sm" className="p-1">
                      <AudioWaveform className="h-4 w-4 text-gray-500" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
