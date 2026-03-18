import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { ArrowRight, Play, Shield, CheckCircle, AlertTriangle, Contact, Lock, Eye, Home, FileText, User } from 'lucide-react';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-white to-slate-50 pt-20"
      aria-label="Hero section"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-accent-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary-red/5 rounded-full blur-3xl" />
        <div className="absolute top-10 left-1/4 w-2 h-2 bg-primary-red rounded-full opacity-60" />
        <div className="absolute top-32 right-1/3 w-1.5 h-1.5 bg-accent-blue rounded-full opacity-40" />
        <div className="absolute bottom-24 left-1/3 w-2 h-2 bg-primary-red rounded-full opacity-30" />
      </div>

      <Container className="relative z-10 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div className="flex flex-col gap-6 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center self-center lg:self-start gap-2 bg-primary-red/10 text-primary-red text-xs font-semibold px-3.5 py-1.5 rounded-full border border-primary-red/20">
              <Shield className="w-3.5 h-3.5" />
              WHS Compliant – Australian Standards
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.05] tracking-tight text-deep-blue">
              Report Safety Incidents in{' '}
              <span className="text-primary-red">Under 60 Seconds</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-slate-500 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              A mobile-first WHS reporting platform designed for construction
              and industrial teams. Fast, compliant, and built for real job sites.
            </p>

            {/* Social proof */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className={`w-8 h-8 rounded-full border-2 border-white shadow-sm bg-gradient-to-br ${
                    i === 0 ? 'from-blue-400 to-blue-600' :
                    i === 1 ? 'from-slate-400 to-slate-600' :
                    'from-red-400 to-red-600'
                  }`} />
                ))}
                <span className="text-sm text-slate-500 font-medium ml-1">500+ teams trust us</span>
              </div>
              <div className="hidden sm:block w-px h-5 bg-slate-200" />
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-amber-400" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="text-sm text-slate-500 font-medium">4.9 rating</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Button variant="primary" size="lg" className="group">
                Report an Incident
                <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
              </Button>
              <Button variant="secondary" size="lg" className="group">
                <Play className="mr-2 w-4 h-4" />
                Book a Demo
              </Button>
            </div>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {['No setup required', 'Works offline', 'AU WHS Compliant'].map((feat) => (
                <div key={feat} className="flex items-center gap-1.5 text-xs text-slate-500 bg-white border border-slate-100 rounded-full px-3 py-1.5 shadow-sm">
                  <CheckCircle className="w-3.5 h-3.5 text-accent-blue" />
                  {feat}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Mobile App Mockup */}
          <div className="flex justify-center lg:justify-end" aria-hidden="true">
            <div className="relative animate-float">
              {/* Main Phone Frame */}
              <div className="relative w-[280px] sm:w-[320px] h-[580px] sm:h-[640px] bg-deep-blue rounded-[3rem] p-3 shadow-2xl ring-1 ring-white/10">
                {/* Screen */}
                <div className="w-full h-full bg-[#FAFAFA] rounded-[2.4rem] overflow-hidden relative font-sans shadow-inner">
                  <style>{`
                    .hide-scrollbar::-webkit-scrollbar { display: none; }
                    .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
                  `}</style>

                  {/* Dynamic Island Placeholder */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[110px] h-[26px] bg-black rounded-b-3xl z-20" />

                  {/* Scrollable content area */}
                  <div className="h-full overflow-y-auto hide-scrollbar pb-24">
                    {/* Header */}
                    <div className="pt-11 pb-4 px-5 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#FFF0F0] flex items-center justify-center">
                        <Shield className="w-4 h-4 text-[#E10600]" strokeWidth={2.5} />
                      </div>
                      <h2 className="text-[16px] font-black text-slate-800 tracking-wider">WELCOME</h2>
                    </div>

                    {/* Emergency Card */}
                    <div className="mx-4 bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden mb-7">
                      <div className="h-[110px] bg-gradient-to-br from-[#E10600] via-red-600 to-orange-500 relative">
                        <div className="absolute inset-0 bg-black/20" />
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888081622-15cb3ca6c1dc?auto=format&fit=crop&q=80&w=400')] bg-cover bg-center mix-blend-overlay opacity-60" />
                        <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white to-transparent" />
                      </div>
                      <div className="p-4 pt-1 bg-white relative z-10">
                        <h3 className="text-[19px] font-bold text-slate-900 mb-1">Critical Incident?</h3>
                        <p className="text-[13px] text-slate-500 leading-snug mb-4">
                          Bypass login for immediate emergency reporting
                        </p>
                        <button className="w-full bg-[#E10600] text-white font-bold text-[14px] py-3.5 rounded-xl shadow-md flex items-center justify-center gap-2 hover:bg-red-700 transition-colors">
                          <AlertTriangle className="w-[18px] h-[18px]" strokeWidth={2.5} />
                          REPORT INCIDENT
                        </button>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="flex items-center gap-3 mx-4 mb-6">
                      <div className="h-px bg-slate-200 flex-1" />
                      <span className="text-[11px] font-bold text-slate-400 tracking-widest uppercase">OR LOGIN</span>
                      <div className="h-px bg-slate-200 flex-1" />
                    </div>

                    {/* Login Form */}
                    <div className="mx-4 flex flex-col gap-4 mb-2">
                      <div>
                        <label className="block text-[13px] font-bold text-slate-700 mb-2">Employee ID</label>
                        <div className="bg-white border border-slate-200 rounded-xl px-3.5 py-3 flex items-center gap-3 shadow-sm">
                          <Contact className="w-[18px] h-[18px] text-slate-400" />
                          <span className="text-[14px] text-slate-400 font-medium">e.g. EMP-2024-88</span>
                        </div>
                      </div>

                      <div>
                        <label className="block text-[13px] font-bold text-slate-700 mb-2">Password</label>
                        <div className="bg-white border border-slate-200 rounded-xl px-3.5 py-3 flex items-center gap-3 shadow-sm">
                          <Lock className="w-[18px] h-[18px] text-slate-400" />
                          <span className="text-[14px] text-slate-400 font-medium flex-1">Enter your password</span>
                          <Eye className="w-[18px] h-[18px] text-slate-400" />
                        </div>
                      </div>
                    </div>

                    <div className="mx-4 text-right mb-6 mt-3">
                      <span className="text-[12px] font-bold text-[#E10600] cursor-pointer">Forgot Password?</span>
                    </div>

                    <div className="mx-4 mb-5">
                      <button className="w-full bg-[#111827] text-white font-bold text-[15px] py-4 rounded-2xl shadow-md hover:bg-black transition-colors">
                        Sign In
                      </button>
                    </div>

                    <div className="text-center pb-8">
                      <span className="text-[13px] text-slate-500">New worker? </span>
                      <span className="text-[13px] font-bold text-[#E10600] cursor-pointer">Register</span>
                    </div>
                  </div>

                  {/* Bottom Navigation */}
                  <div className="absolute bottom-0 inset-x-0 bg-white border-t border-slate-100 flex items-center justify-between px-8 py-3 pb-6 shadow-[0_-4px_20px_rgba(0,0,0,0.02)]">
                    <div className="flex flex-col items-center gap-1 cursor-pointer">
                      <Home className="w-6 h-6 text-slate-400" strokeWidth={2} />
                      <span className="text-[10px] font-bold text-slate-400 tracking-wider">HOME</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 cursor-pointer">
                      <FileText className="w-6 h-6 text-slate-400" strokeWidth={2} />
                      <span className="text-[10px] font-bold text-slate-400 tracking-wider">REPORTS</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 cursor-pointer">
                      <User className="w-6 h-6 text-[#E10600]" strokeWidth={2.5} />
                      <span className="text-[10px] font-bold text-[#E10600] tracking-wider">PROFILE</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <div className="absolute -right-10 top-16 bg-white rounded-2xl shadow-card p-3.5 flex items-center gap-3 w-44 border border-slate-50">
                <div className="w-9 h-9 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-xs font-bold text-deep-blue">Submitted!</p>
                  <p className="text-xs text-slate-400">Synced to cloud</p>
                </div>
              </div>

              <div className="absolute -left-10 bottom-24 bg-white rounded-2xl shadow-card p-3.5 border border-slate-50 w-40">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-2 h-2 bg-primary-red rounded-full animate-pulse" />
                  <span className="text-xs font-semibold text-deep-blue">Live Sync</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-1.5">
                  <div className="bg-accent-blue h-1.5 rounded-full w-3/4" />
                </div>
                <p className="text-xs text-slate-400 mt-1.5">3 reports pending</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
