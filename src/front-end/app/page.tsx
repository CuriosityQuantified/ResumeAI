import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, FileText, Briefcase, User, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div>
      <section className="container py-10">
        <div className="mx-auto max-w-5xl space-y-8">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">AI-Powered Resume Generator</h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Create tailored resumes that match job descriptions using your professional experience
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader className="space-y-1">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                  <User className="h-4 w-4 text-primary" />
                </div>
                <CardTitle>1. Add Your Experience</CardTitle>
                <CardDescription>Import your LinkedIn profile, past resumes, and answer questions</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="space-y-1">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                  <Briefcase className="h-4 w-4 text-primary" />
                </div>
                <CardTitle>2. Add Job Posting</CardTitle>
                <CardDescription>Enter a URL, upload a file, or paste a job description</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="space-y-1">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                  <FileText className="h-4 w-4 text-primary" />
                </div>
                <CardTitle>3. Generate Resume</CardTitle>
                <CardDescription>Our AI creates a tailored resume matching your skills to the job</CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="flex justify-center">
            <Button size="lg" asChild>
              <Link href="/experience">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-t bg-muted/40">
        <div className="container py-12">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-6 text-center text-2xl font-bold">How It Works</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <h3 className="text-xl font-medium">Knowledge Graph Technology</h3>
                <p className="text-muted-foreground">
                  Our system builds a structured knowledge graph from your professional experience, ensuring that your
                  skills and achievements are accurately represented.
                </p>
                <ul className="space-y-3 mt-4">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Extracts key information from your LinkedIn profile and resumes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Organizes your experience into a structured format</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Identifies skills and achievements that match job requirements</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-medium">AI-Powered Resume Generation</h3>
                <p className="text-muted-foreground">
                  Our advanced AI analyzes job descriptions and matches them with your experience to create tailored,
                  ATS-optimized resumes.
                </p>
                <ul className="space-y-3 mt-4">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Identifies key requirements and skills from job postings</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Matches your experience to job requirements</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Generates professional, tailored resumes that pass ATS systems</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

