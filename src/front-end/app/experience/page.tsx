import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Upload, Linkedin, Plus, Briefcase, GraduationCap, Award } from "lucide-react"

export default function ExperiencePage() {
  return (
    <div className="container py-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight mb-2">My Experience</h1>
        <p className="text-muted-foreground">Add and manage your professional experience, education, and skills</p>
      </div>

      <Tabs defaultValue="work" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-4">
          <TabsTrigger value="work">Work</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="import">Import</TabsTrigger>
        </TabsList>

        <TabsContent value="work" className="mt-6 space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Work Experience</h2>
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Add Experience
            </Button>
          </div>

          <div className="grid gap-6">
            {[
              {
                title: "Lead Frontend Developer",
                company: "TechCorp Inc.",
                location: "San Francisco, CA",
                startDate: "Jan 2022",
                endDate: "Present",
                description:
                  "Led a team of 5 frontend developers in building a complex SaaS platform using React and TypeScript. Implemented a component library that reduced development time by 30%. Optimized application performance, improving load times by 45%.",
              },
              {
                title: "Frontend Developer",
                company: "WebSolutions Co.",
                location: "San Jose, CA",
                startDate: "Mar 2019",
                endDate: "Dec 2021",
                description:
                  "Developed and maintained multiple client-facing web applications. Migrated legacy applications from jQuery to React, improving maintainability. Implemented automated testing with Jest, achieving 85% code coverage.",
              },
            ].map((job, index) => (
              <Card key={index}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between">
                    <div>
                      <CardTitle className="text-lg">{job.title}</CardTitle>
                      <CardDescription>
                        {job.company} • {job.location}
                      </CardDescription>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {job.startDate} - {job.endDate}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">{job.description}</p>
                  <div className="flex gap-2 mt-4">
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                    <Button variant="outline" size="sm" className="text-destructive hover:text-destructive">
                      Delete
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Card className="border-dashed">
              <CardContent className="flex flex-col items-center justify-center p-6">
                <div className="rounded-full bg-primary/10 p-3 mb-3">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <p className="text-sm font-medium mb-1">Add Work Experience</p>
                <p className="text-xs text-muted-foreground text-center mb-4">
                  Add details about your current and previous jobs
                </p>
                <Button size="sm">
                  <Plus className="mr-2 h-4 w-4" /> Add Experience
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="education" className="mt-6 space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Education</h2>
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Add Education
            </Button>
          </div>

          <div className="grid gap-6">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between">
                  <div>
                    <CardTitle className="text-lg">Bachelor of Science in Computer Science</CardTitle>
                    <CardDescription>University of California, Berkeley</CardDescription>
                  </div>
                  <div className="text-sm text-muted-foreground">2015 - 2019</div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Graduated with honors. Specialized in software engineering and human-computer interaction.
                </p>
                <div className="flex gap-2 mt-4">
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
                  <Button variant="outline" size="sm" className="text-destructive hover:text-destructive">
                    Delete
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-dashed">
              <CardContent className="flex flex-col items-center justify-center p-6">
                <div className="rounded-full bg-primary/10 p-3 mb-3">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <p className="text-sm font-medium mb-1">Add Education</p>
                <p className="text-xs text-muted-foreground text-center mb-4">
                  Add details about your educational background
                </p>
                <Button size="sm">
                  <Plus className="mr-2 h-4 w-4" /> Add Education
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="skills" className="mt-6 space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Skills & Certifications</h2>
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Add Skill
            </Button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Technical Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h3 className="text-sm font-medium mb-2">Programming Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {["JavaScript", "TypeScript", "HTML", "CSS", "Python"].map((skill, index) => (
                      <div key={index} className="flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm">
                        {skill}
                        <button className="ml-2 text-muted-foreground hover:text-foreground">×</button>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium mb-2">Frameworks & Libraries</h3>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Next.js", "Redux", "Tailwind CSS", "Node.js"].map((skill, index) => (
                      <div key={index} className="flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm">
                        {skill}
                        <button className="ml-2 text-muted-foreground hover:text-foreground">×</button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Certifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    name: "AWS Certified Developer - Associate",
                    issuer: "Amazon Web Services",
                    date: "2023",
                  },
                  {
                    name: "React Advanced Patterns and Practices",
                    issuer: "Frontend Masters",
                    date: "2022",
                  },
                  {
                    name: "Google UX Design Professional Certificate",
                    issuer: "Google",
                    date: "2021",
                  },
                ].map((cert, index) => (
                  <div key={index} className="flex justify-between items-center pb-2 border-b">
                    <div>
                      <p className="font-medium">{cert.name}</p>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm">{cert.date}</span>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <span className="sr-only">Edit</span>
                        ✏️
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <span className="sr-only">Delete</span>
                        🗑️
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <Button variant="outline">
                  <Plus className="mr-2 h-4 w-4" /> Add Certification
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-dashed">
            <CardContent className="flex flex-col items-center justify-center p-6">
              <div className="rounded-full bg-primary/10 p-3 mb-3">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <p className="text-sm font-medium mb-1">Add Skills & Certifications</p>
              <p className="text-xs text-muted-foreground text-center mb-4">
                Add your technical skills and professional certifications
              </p>
              <Button size="sm">
                <Plus className="mr-2 h-4 w-4" /> Add Skill
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="import" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Import Your Professional Data</CardTitle>
              <CardDescription>Quickly add your experience by importing from external sources</CardDescription>
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
        </TabsContent>
      </Tabs>
    </div>
  )
}

