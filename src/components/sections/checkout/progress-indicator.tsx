
"use client";

import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

type ProgressIndicatorProps = {
  currentStep: 'shipping' | 'payment' | 'review';
};

const steps = [
  { id: 'shipping', name: 'Shipping' },
  { id: 'payment', name: 'Payment' },
  { id: 'review', name: 'Review' },
];

const ProgressIndicator = ({ currentStep }: ProgressIndicatorProps) => {
  const currentStepIndex = steps.findIndex(step => step.id === currentStep);

  return (
    <nav aria-label="Progress">
      <ol role="list" className="flex items-center">
        {steps.map((step, stepIdx) => (
          <li key={step.name} className={cn('relative', stepIdx !== steps.length - 1 ? 'pr-8 sm:pr-20' : '')}>
            {stepIdx < currentStepIndex ? (
              // Completed step
              <>
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="h-0.5 w-full bg-primary" />
                </div>
                <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-primary">
                  <Check className="h-5 w-5 text-primary-foreground" aria-hidden="true" />
                  <span className="sr-only">{step.name}</span>
                </div>
              </>
            ) : stepIdx === currentStepIndex ? (
              // Current step
              <>
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="h-0.5 w-full bg-border" />
                </div>
                <div className="relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary bg-background">
                  <span className="h-2.5 w-2.5 rounded-full bg-primary" aria-hidden="true" />
                </div>
                 <div className="absolute top-10 w-max -translate-x-1/2 left-1/2">
                   <p className="text-sm font-medium text-primary">{step.name}</p>
                </div>
              </>
            ) : (
              // Upcoming step
              <>
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="h-0.5 w-full bg-border" />
                </div>
                <div className="group relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-border bg-background">
                   <div className="absolute top-10 w-max -translate-x-1/2 left-1/2">
                    <p className="text-sm font-medium text-muted-foreground">{step.name}</p>
                   </div>
                </div>
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default ProgressIndicator;
