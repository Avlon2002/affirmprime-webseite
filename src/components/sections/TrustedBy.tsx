import { Container } from '../ui/Container';

const logos = [
  'Boral',
  'Lendlease',
  'CIMIC Group',
  'John Holland',
  'Downer Group',
  'Laing O\'Rourke',
];

export function TrustedBy() {
  return (
    <section className="py-12 bg-white border-y border-slate-100" aria-label="Trusted by">
      <Container>
        <div className="flex flex-col items-center gap-7">
          <p className="text-slate-400 text-sm font-medium tracking-wide uppercase">
            Trusted by leading construction & industrial firms
          </p>
          <div className="flex flex-wrap justify-center gap-8 lg:gap-14">
            {logos.map((logo) => (
              <span
                key={logo}
                className="text-slate-300 font-black text-sm sm:text-base lg:text-lg tracking-tight hover:text-slate-400 transition-colors duration-200 cursor-default"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
