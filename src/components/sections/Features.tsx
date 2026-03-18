import { Smartphone, WifiOff, Camera, FileCheck, LayoutDashboard, Cloud } from 'lucide-react';
import { Container } from '../ui/Container';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  bg: string;
}

const features: Feature[] = [
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: 'Mobile-First Reporting',
    description: 'Optimised for phones on job sites. Large tap targets, high-visibility UI, outdoor-ready design.',
    color: 'text-accent-blue',
    bg: 'bg-accent-blue/10',
  },
  {
    icon: <WifiOff className="w-6 h-6" />,
    title: 'Offline Capture + Sync',
    description: 'Submit incidents even with no signal. Data queues locally and syncs automatically when back online.',
    color: 'text-primary-red',
    bg: 'bg-primary-red/10',
  },
  {
    icon: <Camera className="w-6 h-6" />,
    title: 'Photo, Audio & Docs',
    description: 'Capture supporting evidence instantly – photos, voice recordings, and document attachments.',
    color: 'text-violet-600',
    bg: 'bg-violet-100',
  },
  {
    icon: <FileCheck className="w-6 h-6" />,
    title: 'WHS-Compliant Exports',
    description: 'Generate SafeWork-ready reports in one tap. Fully compliant with Australian WHS legislation.',
    color: 'text-emerald-600',
    bg: 'bg-emerald-100',
  },
  {
    icon: <LayoutDashboard className="w-6 h-6" />,
    title: 'Supervisor Dashboard',
    description: 'Real-time oversight for managers. Track open incidents, view trends, and assign follow-up actions.',
    color: 'text-amber-600',
    bg: 'bg-amber-100',
  },
  {
    icon: <Cloud className="w-6 h-6" />,
    title: 'Secure Cloud Storage',
    description: 'All data encrypted and stored on AWS. Role-based access ensures only authorised personnel see reports.',
    color: 'text-sky-600',
    bg: 'bg-sky-100',
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 lg:py-28 bg-white" aria-label="Features">
      <Container>
        {/* Heading */}
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <div className="inline-block text-xs font-semibold text-accent-blue bg-accent-blue/10 border border-accent-blue/20 px-3.5 py-1.5 rounded-full mb-4">
            Everything you need
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-deep-blue mb-4 tracking-tight">
            Built for demanding <span className="text-primary-red">job sites</span>
          </h2>
          <p className="text-slate-500 text-lg">
            Every feature designed with safety officers, site managers, and workers in mind.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
          {features.map((feature) => (
            <article
              key={feature.title}
              role="listitem"
              className="group bg-white border border-slate-100 rounded-2xl p-7 shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 cursor-default"
            >
              <div className={`w-12 h-12 ${feature.bg} ${feature.color} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-200`}>
                {feature.icon}
              </div>
              <h3 className="text-deep-blue font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{feature.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
