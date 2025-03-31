import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Plus, Briefcase, Download, Edit, Eye } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  return (
    <div className="container py-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <Button asChild>
          <Link href="/generate">
            <Plus className="mr-2 h-4 w-4" /> New Resume
          </Link>
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Profile Completion</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">75%</div>
            <Progress value={75} className="h-2 mt-2" />
            <p className="text-xs text-muted-foreground mt-2">Add more work experience to improve your profile</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Resumes Created</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground mt-2">Last created on March 15, 2025</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Job Applications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground mt-2">Track your job applications here</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="resumes" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-3">
          <TabsTrigger value="resumes">Resumes</TabsTrigger>
          <TabsTrigger value="jobs">Job Postings</TabsTrigger>
          <TabsTrigger value="data">My Data</TabsTrigger>
        </TabsList>
        <TabsContent value="resumes" className="mt-6 space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Senior Frontend Developer",
                company: "Tech Solutions Inc.",
                date: "March 15, 2025",
                status: "Complete",
              },
              {
                title: "UI/UX Designer",
                company: "Creative Agency",
                date: "February 28, 2025",
                status: "Complete",
              },
              {
                title: "Product Manager",
                company: "Startup Co.",
                date: "January 10, 2025",
                status: "Draft",
              },
            ].map((resume, index) => (
              <Card key={index}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-base">{resume.title}</CardTitle>
                    <Badge variant={resume.status === "Complete" ? "default" : "outline"}>{resume.status}</Badge>
                  </div>
                  <CardDescription>{resume.company}</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-xs text-muted-foreground">Created: {resume.date}</p>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <Eye className="h-4 w-4 mr-1" /> View
                  </Button>
                  <Button size="sm" variant="outline">
                    <Edit className="h-4 w-4 mr-1" /> Edit
                  </Button>
                  {resume.status === "Complete" && (
                    <Button size="sm" variant="outline">
                      <Download className="h-4 w-4 mr-1" /> Download
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
            <Card className="flex flex-col items-center justify-center p-6 border-dashed">
              <div className="rounded-full bg-muted p-3 mb-3">
                <Plus className="h-6 w-6 text-muted-foreground" />
              </div>
              <p className="text-sm font-medium mb-1">Create New Resume</p>
              <p className="text-xs text-muted-foreground text-center mb-4">
                Generate a tailored resume for a specific job
              </p>
              <Button size="sm" asChild>
                <Link href="/generate">Get Started</Link>
              </Button>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="jobs" className="mt-6 space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Senior Frontend Developer",
                company: "Tech Solutions Inc.",
                location: "San Francisco, CA",
                date: "March 10, 2025",
              },
              {
                title: "UI/UX Designer",
                company: "Creative Agency",
                location: "Remote",
                date: "February 25, 2025",
              },
            ].map((job, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-base">{job.title}</CardTitle>
                    <Briefcase className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <CardDescription>{job.company}</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-sm mb-1">{job.location}</p>
                  <p className="text-xs text-muted-foreground">Added: {job.date}</p>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <Eye className="h-4 w-4 mr-1" /> View
                  </Button>
                  <Button size="sm">Create Resume</Button>
                </CardFooter>
              </Card>
            ))}
            <Card className="flex flex-col items-center justify-center p-6 border-dashed">
              <div className="rounded-full bg-muted p-3 mb-3">
                <Plus className="h-6 w-6 text-muted-foreground" />
              </div>
              <p className="text-sm font-medium mb-1">Add Job Posting</p>
              <p className="text-xs text-muted-foreground text-center mb-4">
                Add a job description to create a tailored resume
              </p>
              <Button size="sm" asChild>
                <Link href="/generate">Add Job</Link>
              </Button>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="data" className="mt-6 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>My Profile Data</CardTitle>
              <CardDescription>Manage the data sources used to generate your resumes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <h3 className="font-medium">LinkedIn Profile</h3>
                    <p className="text-sm text-muted-foreground">Connected on March 1, 2025</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Update
                  </Button>
                </div>
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <h3 className="font-medium">Resume Uploads</h3>
                    <p className="text-sm text-muted-foreground">2 resumes uploaded</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Manage
                  </Button>
                </div>
                <div className="flex items-center justify-between pb-2">
                  <div>
                    <h3 className="font-medium">Q&A Responses</h3>
                    <p className="text-sm text-muted-foreground">15 questions answered</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

