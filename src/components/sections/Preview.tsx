import { Container } from '../ui/Container';
import { CheckCircle, AlertTriangle, Clock } from 'lucide-react';

const screens = [
  {
    title: 'Incident Dashboard',
    subtitle: 'Live overview',
    accent: 'bg-accent-blue',
    content: [
      { label: 'Open Reports', value: '12', trend: '+2 today', trendColor: 'text-amber-500' },
      { label: 'Resolved', value: '48', trend: 'This month', trendColor: 'text-emerald-500' },
      { label: 'Avg. Response', value: '4m', trend: '↓ 12%', trendColor: 'text-emerald-500' },
    ],
    items: [
      { icon: <AlertTriangle className="w-4 h-4 text-primary-red" />, text: 'Forklift near-miss – Bay 3', time: '2m ago' },
      { icon: <CheckCircle className="w-4 h-4 text-emerald-500" />, text: 'Chemical spill – Level 2', time: '18m ago' },
      { icon: <Clock className="w-4 h-4 text-amber-500" />, text: 'Trip hazard – Entry A', time: '1h ago' },
    ],
  },
  {
    title: 'Report Form',
    subtitle: 'Quick capture',
    accent: 'bg-primary-red',
    content: null,
    items: null,
    isForm: true,
  },
  {
    title: 'Analytics',
    subtitle: 'Safety trends',
    accent: 'bg-emerald-500',
    content: null,
    items: null,
    isAnalytics: true,
  },
];

export function Preview() {
  return (
    <section id="preview" className="py-20 lg:py-28 bg-white overflow-hidden" aria-label="Product preview">
      <Container>
        {/* Heading */}
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <div className="inline-block text-xs font-semibold text-emerald-600 bg-emerald-100 border border-emerald-200 px-3.5 py-1.5 rounded-full mb-4">
            Product Preview
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-deep-blue mb-4 tracking-tight">
            Built for real <span className="text-primary-red">job sites</span>
          </h2>
          <p className="text-slate-500 text-lg">
            A clear, intuitive interface that any worker can use – no manual, no training.
          </p>
        </div>

        {/* Screen mockups */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center justify-center">
          {/* Main screen – Dashboard */}
          <div className="w-[300px] sm:w-[340px] bg-deep-blue rounded-[2.5rem] p-3 shadow-2xl ring-1 ring-white/10 flex-shrink-0">
            <div className="bg-light-gray rounded-[2rem] overflow-hidden">
              {/* App bar */}
              <div className="bg-deep-blue px-5 py-4">
                <p className="text-white/60 text-xs">WHS Managed App</p>
                <h3 className="text-white font-bold text-base mt-0.5">Safety Dashboard</h3>
              </div>
              {/* Stats */}
              <div className="p-4 grid grid-cols-3 gap-3">
                {screens[0].content!.map((stat) => (
                  <div key={stat.label} className="bg-white rounded-xl p-3 text-center shadow-card">
                    <p className="text-deep-blue font-black text-xl">{stat.value}</p>
                    <p className="text-slate-400 text-xs">{stat.label}</p>
                    <p className={`text-xs font-semibold ${stat.trendColor}`}>{stat.trend}</p>
                  </div>
                ))}
              </div>
              {/* Incidents list */}
              <div className="px-4 pb-4 flex flex-col gap-2">
                {screens[0].items!.map((item) => (
                  <div key={item.text} className="bg-white rounded-xl px-3.5 py-3 flex items-center justify-between shadow-card">
                    <div className="flex items-center gap-2.5">
                      {item.icon}
                      <span className="text-xs text-deep-blue font-medium">{item.text}</span>
                    </div>
                    <span className="text-xs text-slate-400 flex-shrink-0 ml-2">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Secondary screens */}
          <div className="flex gap-5 items-center">
            {/* Report Form */}
            <div className="w-[200px] sm:w-[230px] bg-deep-blue rounded-[2rem] p-2.5 shadow-xl ring-1 ring-white/10 scale-95 opacity-80">
              <div className="bg-light-gray rounded-[1.6rem] overflow-hidden">
                <div className="bg-primary-red px-4 py-4">
                  <p className="text-white/70 text-xs">New Report</p>
                  <h3 className="text-white font-bold text-sm mt-0.5">Incident Details</h3>
                </div>
                <div className="p-3 flex flex-col gap-2.5">
                  {['Incident Type', 'Date & Time', 'Location', 'Description'].map((field) => (
                    <div key={field} className="bg-white rounded-xl p-3 shadow-card">
                      <p className="text-xs text-slate-400 mb-1">{field}</p>
                      <div className="h-2 bg-slate-100 rounded-full" />
                    </div>
                  ))}
                  <div className="bg-primary-red text-white text-xs font-bold py-2.5 rounded-xl text-center">
                    Submit Report
                  </div>
                </div>
              </div>
            </div>

            {/* Analytics */}
            <div className="w-[200px] sm:w-[230px] bg-deep-blue rounded-[2rem] p-2.5 shadow-xl ring-1 ring-white/10 scale-95 opacity-80">
              <div className="bg-light-gray rounded-[1.6rem] overflow-hidden">
                <div className="bg-accent-blue px-4 py-4">
                  <p className="text-white/70 text-xs">Analytics</p>
                  <h3 className="text-white font-bold text-sm mt-0.5">Monthly Trends</h3>
                </div>
                <div className="p-3 flex flex-col gap-2.5">
                  {/* Bar chart mock */}
                  <div className="bg-white rounded-xl p-3 shadow-card">
                    <p className="text-xs text-slate-400 mb-3">Incidents by Week</p>
                    <div className="flex items-end gap-1.5 h-16">
                      {[40, 65, 30, 80, 55, 70, 45].map((h, i) => (
                        <div
                          key={i}
                          className={`flex-1 rounded-t-sm ${i === 3 ? 'bg-primary-red' : 'bg-accent-blue/30'}`}
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                  </div>
                  {[{label: 'Near Misses', val: 12, pct: 60}, {label: 'Injuries', val: 4, pct: 20}, {label: 'Hazards', val: 8, pct: 40}].map((item) => (
                    <div key={item.label} className="bg-white rounded-xl p-3 shadow-card">
                      <div className="flex justify-between mb-1">
                        <span className="text-xs text-slate-500">{item.label}</span>
                        <span className="text-xs font-bold text-deep-blue">{item.val}</span>
                      </div>
                      <div className="h-1.5 bg-slate-100 rounded-full">
                        <div className="h-1.5 bg-accent-blue rounded-full" style={{ width: `${item.pct}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
