import { CheckCircle, TrendingDown, Shield, Eye } from 'lucide-react';
import { Container } from '../ui/Container';

const benefits = [
  {
    icon: <TrendingDown className="w-5 h-5 text-primary-red" />,
    title: 'Reduce Reporting Time',
    description: 'Cut incident reporting from hours to under 60 seconds with our guided mobile form.',
    stat: '95%',
    statLabel: 'faster than paper forms',
  },
  {
    icon: <Shield className="w-5 h-5 text-accent-blue" />,
    title: 'Improve Compliance',
    description: 'Stay audit-ready with automatic WHS-compliant documentation and timestamp trails.',
    stat: '100%',
    statLabel: 'audit-ready reports',
  },
  {
    icon: <Eye className="w-5 h-5 text-emerald-500" />,
    title: 'Increase Safety Visibility',
    description: 'Supervisors get real-time incident feeds. Spot patterns before they become problems.',
    stat: '3×',
    statLabel: 'more site visibility',
  },
];

export function Benefits() {
  return (
    <section id="benefits" className="py-20 lg:py-28 bg-light-gray" aria-label="Benefits">
      <Container>
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left: Text content */}
          <div>
            <div className="inline-block text-xs font-semibold text-accent-blue bg-accent-blue/10 border border-accent-blue/20 px-3.5 py-1.5 rounded-full mb-6">
              Why teams choose WHSMA
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-deep-blue mb-6 tracking-tight leading-tight">
              Safety you can{' '}
              <span className="text-primary-red">measure</span>
            </h2>
            <p className="text-slate-500 text-lg mb-10 leading-relaxed">
              Transform your WHS compliance from a burden into a competitive advantage.
              Real-time data, streamlined workflows, and bulletproof documentation.
            </p>

            <div className="flex flex-col gap-8">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex gap-5 items-start">
                  <div className="flex-shrink-0 w-11 h-11 bg-white rounded-xl shadow-card flex items-center justify-center">
                    {benefit.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-3 mb-1">
                      <h3 className="font-bold text-deep-blue text-lg">{benefit.title}</h3>
                      <span className="text-primary-red font-black text-sm">{benefit.stat} <span className="text-slate-400 font-normal text-xs">{benefit.statLabel}</span></span>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual mock */}
          <div className="flex justify-center" aria-hidden="true">
            <div className="relative">
              {/* Main card - Compliance Report */}
              <div className="bg-white rounded-3xl shadow-soft p-7 w-[320px] border border-slate-100">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Monthly Report</p>
                    <h3 className="text-deep-blue font-bold text-xl">Safety Score</h3>
                  </div>
                  <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center">
                    <span className="text-emerald-600 font-black text-xl">A+</span>
                  </div>
                </div>

                {/* Metrics */}
                <div className="flex flex-col gap-4">
                  {[
                    { label: 'Reports Submitted', value: 23, max: 25, pct: 92, color: 'bg-accent-blue' },
                    { label: 'On-Time Resolution', value: 21, max: 23, pct: 91, color: 'bg-emerald-500' },
                    { label: 'Compliance Rate', value: '100%', max: null, pct: 100, color: 'bg-primary-red' },
                  ].map((m) => (
                    <div key={m.label}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-slate-500">{m.label}</span>
                        <span className="text-sm font-bold text-deep-blue">
                          {typeof m.value === 'number' ? `${m.value}/${m.max}` : m.value}
                        </span>
                      </div>
                      <div className="h-2.5 bg-slate-100 rounded-full">
                        <div
                          className={`h-2.5 ${m.color} rounded-full transition-all duration-700`}
                          style={{ width: `${m.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Badges */}
                <div className="mt-6 pt-5 border-t border-slate-100 flex items-center gap-3">
                  {['WHS Compliant', 'SafeWork AU', 'ISO 45001'].map((badge) => (
                    <div key={badge} className="flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                      <span className="text-xs text-slate-500">{badge}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating mini card */}
              <div className="absolute -top-5 -right-6 bg-white rounded-2xl shadow-card p-4 border border-slate-50 w-44">
                <p className="text-xs text-slate-400 mb-1.5">Incidents this week</p>
                <p className="text-2xl font-black text-deep-blue">↓ 34%</p>
                <p className="text-xs text-emerald-500 font-semibold">vs last month</p>
              </div>

              {/* Floating bottom card */}
              <div className="absolute -bottom-5 -left-6 bg-white rounded-2xl shadow-card p-4 border border-slate-50">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 bg-accent-blue/10 rounded-xl flex items-center justify-center">
                    <Shield className="w-4 h-4 text-accent-blue" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-deep-blue">Audit Ready</p>
                    <p className="text-xs text-slate-400">All records compliant</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
