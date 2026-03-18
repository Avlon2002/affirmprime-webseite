import { ArrowRight } from 'lucide-react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

export function CallToAction() {
  return (
    <section id="cta" className="py-20 lg:py-28 bg-deep-blue" aria-label="Call to action">
      <Container>
        <div className="relative max-w-3xl mx-auto text-center">
          {/* Background glow */}
          <div className="absolute inset-0 bg-accent-blue/10 rounded-3xl blur-3xl" aria-hidden="true" />

          <div className="relative z-10">
            {/* Badge */}
            <div className="inline-block text-xs font-semibold text-white/60 bg-white/10 border border-white/20 px-3.5 py-1.5 rounded-full mb-6">
              Join 500+ safety teams
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-5 tracking-tight leading-tight">
              Ready to Improve{' '}
              <span className="text-primary-red">Workplace Safety?</span>
            </h2>

            <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Set up in minutes. No contracts. Cancel anytime. Start protecting your team today.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" className="group">
                Get Started Free
                <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
              </Button>
              <Button variant="ghost" size="lg">
                Contact Sales
              </Button>
            </div>

            {/* Trust signals */}
            <div className="mt-10 flex flex-wrap justify-center gap-6 text-slate-500 text-sm">
              {['No credit card required', 'Free 14-day trial', 'Setup in minutes'].map((t) => (
                <span key={t} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary-red rounded-full" />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
