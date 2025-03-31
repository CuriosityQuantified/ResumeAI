import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"
import Link from "next/link"
import "./globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="flex min-h-screen flex-col bg-gradient-to-b from-background to-muted/20">
            <header className="sticky top-0 z-10 border-b bg-background/80 backdrop-blur-md">
              <div className="container flex h-16 items-center justify-between py-4">
                <div className="flex items-center gap-2 font-semibold">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-md">
                    <FileText className="h-4 w-4" />
                  </div>
                  <Link href="/" className="text-xl tracking-tight hover:opacity-80 transition-opacity">
                    <span>ResumeAI</span>
                  </Link>
                </div>
                <nav className="flex items-center gap-1 md:gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    asChild
                    className="rounded-full px-4 transition-all duration-200 hover:bg-muted"
                  >
                    <Link href="/dashboard">Dashboard</Link>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    asChild
                    className="rounded-full px-4 transition-all duration-200 hover:bg-muted"
                  >
                    <Link href="/experience">Experience</Link>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    asChild
                    className="rounded-full px-4 transition-all duration-200 hover:bg-muted"
                  >
                    <Link href="/generate">Generate Resume</Link>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    asChild
                    className="rounded-full px-4 transition-all duration-200 hover:bg-muted"
                  >
                    <Link href="/profile">Profile</Link>
                  </Button>
                </nav>
              </div>
            </header>
            <main className="flex-1">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'

export const metadata = {
      generator: 'v0.dev'
    };
