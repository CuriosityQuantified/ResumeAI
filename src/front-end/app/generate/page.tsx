"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import {
  ChevronDown,
  ChevronUp,
  Upload,
  LinkIcon,
  Send,
  ZoomIn,
  ZoomOut,
  Download,
  Share2,
  ArrowUp,
  ArrowDown,
  Settings,
  Sparkles,
} from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Slider } from "@/components/ui/slider"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function GenerateResumePage() {
  const [jobDescriptionOpen, setJobDescriptionOpen] = useState(true)
  const [zoomLevel, setZoomLevel] = useState(100)
  const [chatHeight, setChatHeight] = useState(200)
  const [messages, setMessages] = useState([
    {
      role: "system",
      content:
        "I've analyzed the job description and created a tailored resume based on your experience. Is there anything specific you'd like me to adjust?",
    },
    { role: "user", content: "Can you highlight my React experience more prominently?" },
    {
      role: "system",
      content:
        "I've updated the resume to emphasize your React experience, particularly in your most recent role. I've also added a dedicated 'Code Projects' section to showcase your expertise.",
    },
  ])
  const [newMessage, setNewMessage] = useState("")
  const messagesEndRef = useRef(null)
  const [isLoading, setIsLoading] = useState(false)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { role: "user", content: newMessage }])
      setNewMessage("")
      setIsLoading(true)

      // Simulate AI response
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            role: "system",
            content: "I've made those adjustments to your resume. The changes are now reflected in the preview above.",
          },
        ])
        setIsLoading(false)
      }, 1500)
    }
  }

  const increaseChatHeight = () => {
    setChatHeight((prev) => Math.min(prev + 50, 500))
  }

  const decreaseChatHeight = () => {
    setChatHeight((prev) => Math.max(prev - 50, 100))
  }

  return (
    <div className="container py-6 relative">
      <div className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight mb-2">Generate Resume</h1>
        <p className="text-muted-foreground">Create a tailored resume based on your experience and a job description</p>
      </div>

      <div className="space-y-6">
        <Collapsible
          open={jobDescriptionOpen}
          onOpenChange={setJobDescriptionOpen}
          className="border rounded-xl shadow-sm overflow-hidden transition-all duration-200 hover:shadow-md"
        >
          <CollapsibleTrigger className="w-full">
            <div className="flex justify-between items-center p-4 cursor-pointer hover:bg-muted/50 w-full text-left">
              <h2 className="text-xl font-semibold">Job Description</h2>
              {jobDescriptionOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent className="p-4 pt-0 border-t">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="job-url">Job Posting URL</Label>
                <div className="flex gap-2">
                  <Input
                    id="job-url"
                    placeholder="https://example.com/job-posting"
                    className="flex-1 rounded-lg border-muted-foreground/20"
                  />
                  <Button className="rounded-lg shadow-sm transition-all hover:shadow-md bg-gradient-to-r from-primary to-primary/90">
                    <LinkIcon className="h-4 w-4 mr-2" /> Fetch
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Upload Job Description</Label>
                <div className="border-2 border-dashed rounded-lg p-6 text-center transition-colors hover:bg-muted/30 cursor-pointer">
                  <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-sm font-medium">Drag & drop a file or click to browse</p>
                  <p className="text-xs text-muted-foreground mt-1">Supports PDF, DOCX, and TXT files</p>
                  <Button variant="outline" className="mt-4 rounded-lg shadow-sm hover:shadow-md transition-all">
                    Browse Files
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="job-description">Or Paste Job Description</Label>
                <Textarea
                  id="job-description"
                  placeholder="Paste the full job description here..."
                  rows={8}
                  className="rounded-lg resize-none border-muted-foreground/20 focus-visible:ring-offset-1"
                />
              </div>

              <Button className="w-full rounded-lg shadow-sm transition-all hover:shadow-md bg-gradient-to-r from-primary to-primary/90">
                <Sparkles className="h-4 w-4 mr-2" /> Process Job Posting
              </Button>
            </div>
          </CollapsibleContent>
        </Collapsible>

        <div className="grid gap-6">
          <div className="border rounded-xl shadow-md overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b bg-background/80 backdrop-blur-sm">
              <h2 className="text-xl font-semibold">Resume Preview</h2>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 bg-muted/50 p-1 rounded-full">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 rounded-full"
                          onClick={() => setZoomLevel(Math.max(50, zoomLevel - 10))}
                        >
                          <ZoomOut className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>Zoom Out</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  <Slider
                    value={[zoomLevel]}
                    min={50}
                    max={150}
                    step={10}
                    onValueChange={(value) => setZoomLevel(value[0])}
                    className="w-24"
                  />

                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 rounded-full"
                          onClick={() => setZoomLevel(Math.min(150, zoomLevel + 10))}
                        >
                          <ZoomIn className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>Zoom In</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  <span className="text-sm font-medium">{zoomLevel}%</span>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="rounded-full shadow-sm hover:shadow-md transition-all">
                    <Download className="h-4 w-4 mr-1" /> Download
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-full shadow-sm hover:shadow-md transition-all">
                    <Share2 className="h-4 w-4 mr-1" /> Share
                  </Button>
                </div>
              </div>
            </div>

            <ScrollArea className="h-[500px] border-b bg-gray-100">
              <div className="flex justify-center p-4">
                <div
                  className="bg-white shadow-lg mx-auto my-4 relative"
                  style={{
                    transform: `scale(${zoomLevel / 100})`,
                    transformOrigin: "top center",
                    width: "8.5in",
                    height: "11in",
                    maxWidth: "100%",
                    padding: "0.5in",
                    boxSizing: "border-box",
                    border: "1px solid #ddd",
                    boxShadow: "0 4px 24px rgba(0, 0, 0, 0.08)",
                  }}
                >
                  {/* Page 1 content - editable */}
                  <div
                    contentEditable={true}
                    suppressContentEditableWarning={true}
                    className="w-full h-full overflow-hidden focus:outline-none"
                  >
                    <div className="border-b pb-4 mb-4">
                      <h2 className="text-2xl font-bold text-gray-800">John Doe</h2>
                      <p className="text-lg text-gray-600">Senior Frontend Developer</p>
                      <div className="flex flex-wrap gap-2 mt-2 text-sm text-gray-600">
                        <span>john.doe@example.com</span>
                        <span>•</span>
                        <span>(123) 456-7890</span>
                        <span>•</span>
                        <span>San Francisco, CA</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Professional Summary</h3>
                      <p className="text-gray-700">
                        Experienced Frontend Developer with 7+ years of expertise in building responsive web
                        applications using React, TypeScript, and modern JavaScript frameworks. Proven track record of
                        delivering high-quality, user-centric solutions that drive business growth and enhance user
                        experience.
                      </p>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Code Projects</h3>
                      <p className="text-gray-700 mb-2">
                        Specialized in building complex React applications with modern architecture patterns:
                      </p>
                      <ul className="list-disc pl-5 text-gray-700 space-y-1">
                        <li>Developed a component library with 50+ reusable React components</li>
                        <li>Implemented state management using Redux and Context API</li>
                        <li>Created custom React hooks for shared functionality</li>
                        <li>Built responsive UIs with React and Tailwind CSS</li>
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">Skills</h3>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "React",
                          "TypeScript",
                          "JavaScript",
                          "Next.js",
                          "CSS/SCSS",
                          "Tailwind CSS",
                          "Redux",
                          "GraphQL",
                          "Jest",
                          "CI/CD",
                        ].map((skill, index) => (
                          <span
                            key={index}
                            className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-sm border border-blue-200"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">Work Experience</h3>

                      <div className="mb-4">
                        <div className="flex justify-between mb-1">
                          <h4 className="font-medium text-gray-800">Lead Frontend Developer</h4>
                          <span className="text-sm text-gray-600">Jan 2022 - Present</span>
                        </div>
                        <p className="text-gray-600 mb-2">TechCorp Inc., San Francisco, CA</p>
                        <ul className="list-disc pl-5 text-gray-700 space-y-1">
                          <li>
                            Led a team of 5 frontend developers in building a complex SaaS platform using React and
                            TypeScript
                          </li>
                          <li>Implemented a component library that reduced development time by 30%</li>
                          <li>Optimized application performance, improving load times by 45%</li>
                          <li>Collaborated with UX designers to implement responsive designs across all devices</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 text-xs text-gray-400">Page 1</div>
                </div>
              </div>

              {/* Page 2 */}
              <div className="flex justify-center p-4">
                <div
                  className="bg-white shadow-lg mx-auto my-4 relative"
                  style={{
                    transform: `scale(${zoomLevel / 100})`,
                    transformOrigin: "top center",
                    width: "8.5in",
                    height: "11in",
                    maxWidth: "100%",
                    padding: "0.5in",
                    boxSizing: "border-box",
                    border: "1px solid #ddd",
                    boxShadow: "0 4px 24px rgba(0, 0, 0, 0.08)",
                  }}
                >
                  {/* Page 2 content - editable */}
                  <div
                    contentEditable={true}
                    suppressContentEditableWarning={true}
                    className="w-full h-full overflow-hidden focus:outline-none"
                  >
                    <div className="mb-6">
                      <div className="mb-4">
                        <div className="flex justify-between mb-1">
                          <h4 className="font-medium text-gray-800">Frontend Developer</h4>
                          <span className="text-sm text-gray-600">Mar 2019 - Dec 2021</span>
                        </div>
                        <p className="text-gray-600 mb-2">WebSolutions Co., San Jose, CA</p>
                        <ul className="list-disc pl-5 text-gray-700 space-y-1">
                          <li>Developed and maintained multiple client-facing web applications</li>
                          <li>Migrated legacy applications from jQuery to React, improving maintainability</li>
                          <li>Implemented automated testing with Jest, achieving 85% code coverage</li>
                          <li>Collaborated with backend developers to design and implement RESTful APIs</li>
                        </ul>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">Education</h3>
                      <div className="flex justify-between mb-1">
                        <h4 className="font-medium text-gray-800">Bachelor of Science in Computer Science</h4>
                        <span className="text-sm text-gray-600">2015 - 2019</span>
                      </div>
                      <p className="text-gray-600">University of California, Berkeley</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Certifications</h3>
                      <ul className="list-disc pl-5 text-gray-700 space-y-1">
                        <li>AWS Certified Developer - Associate</li>
                        <li>React Advanced Patterns and Practices</li>
                        <li>Google UX Design Professional Certificate</li>
                      </ul>
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 text-xs text-gray-400">Page 2</div>
                </div>
              </div>
            </ScrollArea>

            <div className="p-4">
              <div className="border rounded-xl shadow-sm overflow-hidden">
                <div className="border-b p-3 flex justify-between items-center bg-muted/30">
                  <h3 className="font-medium">Chat with AI Assistant</h3>
                  <div className="flex gap-1">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6 rounded-full"
                            onClick={increaseChatHeight}
                          >
                            <ArrowUp className="h-4 w-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>Increase Height</TooltipContent>
                      </Tooltip>
                    </TooltipProvider>

                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6 rounded-full"
                            onClick={decreaseChatHeight}
                          >
                            <ArrowDown className="h-4 w-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>Decrease Height</TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>
                <ScrollArea style={{ height: `${chatHeight}px` }} className="p-3">
                  <div className="space-y-4">
                    {messages.map((message, index) => (
                      <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                        <div
                          className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                            message.role === "user"
                              ? "bg-gradient-to-r from-primary to-primary/90 text-primary-foreground shadow-md"
                              : "bg-muted shadow-sm"
                          }`}
                        >
                          {message.content}
                        </div>
                      </div>
                    ))}
                    {isLoading && (
                      <div className="flex justify-start">
                        <div className="max-w-[80%] rounded-2xl px-4 py-2 bg-muted shadow-sm">
                          <div className="flex space-x-2 items-center">
                            <div
                              className="w-2 h-2 rounded-full bg-muted-foreground/40 animate-bounce"
                              style={{ animationDelay: "0ms" }}
                            ></div>
                            <div
                              className="w-2 h-2 rounded-full bg-muted-foreground/40 animate-bounce"
                              style={{ animationDelay: "150ms" }}
                            ></div>
                            <div
                              className="w-2 h-2 rounded-full bg-muted-foreground/40 animate-bounce"
                              style={{ animationDelay: "300ms" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>
                </ScrollArea>
                <div className="border-t p-3 bg-background">
                  <div className="flex gap-2">
                    <Textarea
                      placeholder="Ask a question or provide feedback..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                          e.preventDefault()
                          handleSendMessage()
                        }
                        // Shift+Enter will naturally create a new line
                      }}
                      className="min-h-[40px] max-h-[120px] resize-none rounded-xl border-muted-foreground/20 focus-visible:ring-offset-1"
                      style={{ height: "auto" }}
                    />
                    <Button
                      onClick={handleSendMessage}
                      className="self-end rounded-full h-10 w-10 p-0 shadow-sm hover:shadow-md transition-all bg-gradient-to-r from-primary to-primary/90"
                      disabled={isLoading}
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all bg-gradient-to-r from-primary to-primary/90 p-0">
              <Settings className="h-6 w-6" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Resume Settings</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}

