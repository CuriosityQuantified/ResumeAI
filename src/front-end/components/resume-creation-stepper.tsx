import { CheckCircle } from "lucide-react"

interface ResumeCreationStepperProps {
  currentStep: number
}

export function ResumeCreationStepper({ currentStep }: ResumeCreationStepperProps) {
  const steps = [
    { id: 1, name: "Data Input" },
    { id: 2, name: "Job Description" },
    { id: 3, name: "Generate Resume" },
    { id: 4, name: "Review & Edit" },
  ]

  return (
    <div className="relative">
      <div className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-muted" />
      <ol className="relative z-10 flex justify-between">
        {steps.map((step) => {
          const isCompleted = step.id < currentStep
          const isCurrent = step.id === currentStep

          return (
            <li key={step.id} className="flex items-center">
              <div className="flex flex-col items-center">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full border-2 ${
                    isCompleted
                      ? "border-primary bg-primary text-primary-foreground"
                      : isCurrent
                        ? "border-primary bg-background text-primary"
                        : "border-muted bg-background"
                  }`}
                >
                  {isCompleted ? (
                    <CheckCircle className="h-4 w-4" />
                  ) : (
                    <span className="text-sm font-medium">{step.id}</span>
                  )}
                </div>
                <span
                  className={`mt-2 text-xs font-medium ${
                    isCompleted || isCurrent ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {step.name}
                </span>
              </div>
            </li>
          )
        })}
      </ol>
    </div>
  )
}

