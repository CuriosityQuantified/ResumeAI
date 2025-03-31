import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { FileText, Download, Edit, Share2, ThumbsUp, ThumbsDown, MessageSquare } from "lucide-react"
import Link from "next/link"

export default function ResumePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2 font-semibold">
            <FileText className="h-5 w-5 text-primary" />
            <span>ResumeAI</span>
          </div>
          <nav className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/dashboard">Dashboard</Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/profile">Profile</Link>
            </Button>
            <Button size="sm">Create Resume</Button>
          </nav>
        </div>
      </header>

      <main className="flex-1 container py-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Senior Frontend Developer Resume</h1>
            <p className="text-muted-foreground">Tech Solutions Inc.</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Edit className="h-4 w-4 mr-1" /> Edit
            </Button>
            <Button variant="outline" size="sm">
              <Share2 className="h-4 w-4 mr-1" /> Share
            </Button>
            <Button size="sm">
              <Download className="h-4 w-4 mr-1" /> Download
            </Button>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="grid w-full max-w-md grid-cols-2">
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="feedback">AI Feedback</TabsTrigger>
              </TabsList>

              <TabsContent value="preview" className="mt-6">
                <Card className="bg-white p-8 shadow-md">
                  <CardContent className="p-0">
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
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Skills</h3>
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
                          <Badge key={index} variant="outline" className="bg-primary/5 text-primary border-primary/20">
                            {skill}
                          </Badge>
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

                      <div>
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
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="feedback" className="mt-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-6">
                      <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                        <div className="flex items-start gap-2 mb-2">
                          <ThumbsUp className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                          <div>
                            <h3 className="font-medium text-green-800">Strengths</h3>
                            <ul className="mt-2 space-y-2">
                              <li className="flex gap-2">
                                <span className="text-green-800">✓</span>
                                <span>Strong skills alignment with job requirements (90% match)</span>
                              </li>
                              <li className="flex gap-2">
                                <span className="text-green-800">✓</span>
                                <span>Quantified achievements with specific metrics</span>
                              </li>
                              <li className="flex gap-2">
                                <span className="text-green-800">✓</span>
                                <span>Clear and concise professional summary</span>
                              </li>
                              <li className="flex gap-2">
                                <span className="text-green-800">✓</span>
                                <span>Relevant experience highlighted for the target role</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
                        <div className="flex items-start gap-2 mb-2">
                          <ThumbsDown className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                          <div>
                            <h3 className="font-medium text-amber-800">Areas for Improvement</h3>
                            <ul className="mt-2 space-y-2">
                              <li className="flex gap-2">
                                <span className="text-amber-800">!</span>
                                <span>Consider adding more details about Next.js experience (key requirement)</span>
                              </li>
                              <li className="flex gap-2">
                                <span className="text-amber-800">!</span>
                                <span>Include examples of team collaboration and leadership</span>
                              </li>
                              <li className="flex gap-2">
                                <span className="text-amber-800">!</span>
                                <span>Add information about experience with CI/CD pipelines</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                        <div className="flex items-start gap-2 mb-2">
                          <MessageSquare className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                          <div>
                            <h3 className="font-medium text-blue-800">ATS Optimization Tips</h3>
                            <ul className="mt-2 space-y-2">
                              <li className="flex gap-2">
                                <span className="text-blue-800">•</span>
                                <span>Include "Next.js" in your work experience descriptions</span>
                              </li>
                              <li className="flex gap-2">
                                <span className="text-blue-800">•</span>
                                <span>Add "UI/UX collaboration" as mentioned in the job description</span>
                              </li>
                              <li className="flex gap-2">
                                <span className="text-blue-800">•</span>
                                <span>Consider mentioning experience with Agile development methodologies</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          <div>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-medium mb-4">Resume Details</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-sm font-medium">Created</span>
                    <span className="text-sm">March 15, 2025</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-sm font-medium">Last Updated</span>
                    <span className="text-sm">March 15, 2025</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-sm font-medium">Format</span>
                    <span className="text-sm">Professional</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-sm font-medium">ATS Score</span>
                    <div className="flex items-center">
                      <span className="text-sm font-medium text-green-600">85/100</span>
                      <Badge className="ml-2 bg-green-100 text-green-800 hover:bg-green-100">Good</Badge>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Skills Match</span>
                    <div className="flex items-center">
                      <span className="text-sm font-medium text-green-600">90%</span>
                      <Badge className="ml-2 bg-green-100 text-green-800 hover:bg-green-100">Excellent</Badge>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t">
                  <h3 className="text-lg font-medium mb-4">Actions</h3>
                  <div className="space-y-3">
                    <Button className="w-full" variant="outline">
                      <Edit className="mr-2 h-4 w-4" /> Edit Resume
                    </Button>
                    <Button className="w-full" variant="outline">
                      <Share2 className="mr-2 h-4 w-4" /> Share Resume
                    </Button>
                    <Button className="w-full">
                      <Download className="mr-2 h-4 w-4" /> Download PDF
                    </Button>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t">
                  <h3 className="text-lg font-medium mb-4">Missing Information</h3>
                  <div className="space-y-2">
                    <div className="p-3 bg-amber-50 border border-amber-200 rounded-md text-sm">
                      <p className="font-medium text-amber-800">CI/CD Experience</p>
                      <p className="text-amber-700 mt-1">Add details about your experience with CI/CD pipelines</p>
                      <Button size="sm" variant="outline" className="mt-2 h-8 text-xs">
                        Add Information
                      </Button>
                    </div>
                    <div className="p-3 bg-amber-50 border border-amber-200 rounded-md text-sm">
                      <p className="font-medium text-amber-800">Next.js Projects</p>
                      <p className="text-amber-700 mt-1">Include specific Next.js projects you've worked on</p>
                      <Button size="sm" variant="outline" className="mt-2 h-8 text-xs">
                        Add Information
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

