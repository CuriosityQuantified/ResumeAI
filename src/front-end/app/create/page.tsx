import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { FileText, Upload, Linkedin, ArrowRight, ArrowLeft, CheckCircle } from "lucide-react"
import Link from "next/link"
import { ResumeCreationStepper } from "@/components/resume-creation-stepper"

export default function CreateResumePage() {
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
            <Button size="sm" variant="outline">
              Cancel
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-1 container py-6">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8">
            <h1 className="text-2xl font-bold tracking-tight mb-2">Create Tailored Resume</h1>
            <p className="text-muted-foreground">
              Follow the steps below to generate a resume tailored to your target job
            </p>
          </div>

          <ResumeCreationStepper currentStep={1} />

          <div className="mt-8">
            <Tabs defaultValue="data" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="data">1. Data Input</TabsTrigger>
                <TabsTrigger value="job">2. Job Description</TabsTrigger>
                <TabsTrigger value="generate">3. Generate Resume</TabsTrigger>
              </TabsList>

              <TabsContent value="data" className="mt-6 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Import Your Professional Data</CardTitle>
                    <CardDescription>Add your professional experience to create an accurate resume</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <Card className="border-dashed">
                        <CardHeader>
                          <div className="flex items-center gap-2">
                            <Linkedin className="h-5 w-5 text-[#0077B5]" />
                            <CardTitle className="text-base">LinkedIn Import</CardTitle>
                          </div>
                          <CardDescription>Import your profile data directly from LinkedIn</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <Button className="w-full" variant="outline">
                            Connect LinkedIn
                          </Button>
                        </CardContent>
                      </Card>

                      <Card className="border-dashed">
                        <CardHeader>
                          <div className="flex items-center gap-2">
                            <Upload className="h-5 w-5 text-primary" />
                            <CardTitle className="text-base">Upload Resume</CardTitle>
                          </div>
                          <CardDescription>Upload an existing resume to extract information</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <Button className="w-full" variant="outline">
                            Upload PDF or DOCX
                          </Button>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="border-t pt-6">
                      <h3 className="text-lg font-medium mb-4">Additional Information</h3>
                      <div className="space-y-4">
                        <div className="grid gap-4 md:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input id="name" placeholder="John Doe" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="title">Professional Title</Label>
                            <Input id="title" placeholder="Senior Frontend Developer" />
                          </div>
                        </div>

                        <div className="grid gap-4 md:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="john.doe@example.com" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone</Label>
                            <Input id="phone" placeholder="(123) 456-7890" />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="summary">Professional Summary</Label>
                          <Textarea
                            id="summary"
                            placeholder="Brief overview of your professional background and key strengths"
                            rows={4}
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="flex justify-end">
                  <Button>
                    Continue to Job Description <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="job" className="mt-6 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Add Job Description</CardTitle>
                    <CardDescription>Provide details about the job you're applying for</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="job-title">Job Title</Label>
                          <Input id="job-title" placeholder="Senior Frontend Developer" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="company">Company</Label>
                          <Input id="company" placeholder="Tech Solutions Inc." />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="job-description">Job Description</Label>
                        <Textarea id="job-description" placeholder="Paste the full job description here..." rows={10} />
                        <p className="text-sm text-muted-foreground">
                          Include the full job posting to help our AI better match your skills to the requirements
                        </p>
                      </div>

                      <div className="border-t pt-4 mt-4">
                        <h3 className="text-base font-medium mb-3">Or Upload Job Description</h3>
                        <Button variant="outline">
                          <Upload className="mr-2 h-4 w-4" /> Upload PDF or URL
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="flex justify-between">
                  <Button variant="outline">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Data Input
                  </Button>
                  <Button>
                    Continue to Generate <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="generate" className="mt-6 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Generate Your Resume</CardTitle>
                    <CardDescription>Review the information and generate your tailored resume</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="rounded-lg border bg-card p-4">
                        <h3 className="text-base font-medium mb-3">Data Summary</h3>
                        <div className="space-y-3">
                          <div className="flex items-start">
                            <CheckCircle className="mr-2 h-5 w-5 text-primary shrink-0" />
                            <div>
                              <p className="font-medium">Professional Information</p>
                              <p className="text-sm text-muted-foreground">LinkedIn profile and resume data imported</p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <CheckCircle className="mr-2 h-5 w-5 text-primary shrink-0" />
                            <div>
                              <p className="font-medium">Job Description</p>
                              <p className="text-sm text-muted-foreground">
                                Senior Frontend Developer at Tech Solutions Inc.
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <CheckCircle className="mr-2 h-5 w-5 text-primary shrink-0" />
                            <div>
                              <p className="font-medium">Skills Analysis</p>
                              <p className="text-sm text-muted-foreground">
                                10 key skills identified from job description
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="border-t pt-4">
                        <h3 className="text-base font-medium mb-3">Resume Options</h3>
                        <div className="grid gap-4 md:grid-cols-3">
                          <div className="rounded-lg border p-3 flex flex-col items-center">
                            <div className="h-24 w-full bg-muted rounded mb-3 flex items-center justify-center">
                              <FileText className="h-8 w-8 text-muted-foreground" />
                            </div>
                            <p className="text-sm font-medium">Modern</p>
                          </div>
                          <div className="rounded-lg border p-3 flex flex-col items-center bg-primary/5 border-primary">
                            <div className="h-24 w-full bg-muted rounded mb-3 flex items-center justify-center">
                              <FileText className="h-8 w-8 text-muted-foreground" />
                            </div>
                            <p className="text-sm font-medium">Professional</p>
                          </div>
                          <div className="rounded-lg border p-3 flex flex-col items-center">
                            <div className="h-24 w-full bg-muted rounded mb-3 flex items-center justify-center">
                              <FileText className="h-8 w-8 text-muted-foreground" />
                            </div>
                            <p className="text-sm font-medium">Minimal</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="flex justify-between">
                  <Button variant="outline">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Job Description
                  </Button>
                  <Button>Generate Resume</Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  )
}

