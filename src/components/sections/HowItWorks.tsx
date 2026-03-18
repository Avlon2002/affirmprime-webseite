import { MapPin, Paperclip, Send } from 'lucide-react';
import { Container } from '../ui/Container';

const steps = [
  {
    number: '01',
    icon: <MapPin className="w-7 h-7" />,
    title: 'Capture Incident',
    description: 'Open the app, select incident type, and pinpoint the exact location on site – all in under 30 seconds.',
    color: 'text-primary-red',
    bg: 'bg-primary-red',
    light: 'bg-primary-red/10',
  },
  {
    number: '02',
    icon: <Paperclip className="w-7 h-7" />,
    title: 'Attach Evidence',
    description: 'Snap a photo, record a voice note, or attach documents directly from your device to support the report.',
    color: 'text-accent-blue',
    bg: 'bg-accent-blue',
    light: 'bg-accent-blue/10',
  },
  {
    number: '03',
    icon: <Send className="w-7 h-7" />,
    title: 'Submit & Sync',
    description: 'Hit submit. Your report is instantly sent to supervisors and synced to the cloud – even from remote sites.',
    color: 'text-emerald-600',
    bg: 'bg-emerald-500',
    light: 'bg-emerald-100',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-light-gray" aria-label="How it works">
      <Container>
        {/* Heading */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="inline-block text-xs font-semibold text-primary-red bg-primary-red/10 border border-primary-red/20 px-3.5 py-1.5 rounded-full mb-4">
            Simple by design
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-deep-blue mb-4 tracking-tight">
            How it <span className="text-primary-red">works</span>
          </h2>
          <p className="text-slate-500 text-lg">
            Three steps. No training required. Anyone on site can report in seconds.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-[16.7%] right-[16.7%] h-px bg-gradient-to-r from-primary-red via-accent-blue to-emerald-500 opacity-30" aria-hidden="true" />

          <div className="grid sm:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col items-center text-center gap-5">
                {/* Step icon */}
                <div className="relative">
                  <div className={`w-16 h-16 ${step.light} rounded-2xl flex items-center justify-center ${step.color} shadow-soft`}>
                    {step.icon}
                  </div>
                  <div className={`absolute -top-2 -right-2 w-7 h-7 ${step.bg} text-white text-xs font-black rounded-full flex items-center justify-center shadow-md`}>
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-deep-blue font-bold text-xl mb-2">{step.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed max-w-xs mx-auto">{step.description}</p>
                </div>

                {/* Arrow for mobile */}
                {step.number !== '03' && (
                  <div className="sm:hidden text-slate-300 text-2xl rotate-90" aria-hidden="true">↓</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
