import { Shield, Twitter, Linkedin, Github, Mail } from 'lucide-react';
import { Container } from '../ui/Container';

const footerLinks = {
  Product: ['Features', 'How It Works', 'Dashboard', 'Mobile App', 'Pricing'],
  Company: ['About', 'Careers', 'Blog', 'Press'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'WHS Compliance'],
  Contact: ['sales@whsma.com.au', 'support@whsma.com.au', '1800 WHS APP', 'Sydney, NSW AU'],
};

const socialLinks = [
  { icon: <Twitter className="w-4 h-4" />, label: 'Twitter', href: '#' },
  { icon: <Linkedin className="w-4 h-4" />, label: 'LinkedIn', href: '#' },
  { icon: <Github className="w-4 h-4" />, label: 'GitHub', href: '#' },
  { icon: <Mail className="w-4 h-4" />, label: 'Email', href: '#' },
];

export function Footer() {
  return (
    <footer className="bg-deep-blue border-t border-white/5" aria-label="Footer">
      <Container>
        {/* Main footer content */}
        <div className="py-14 lg:py-16 grid grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="col-span-2 lg:col-span-1">
            <a href="#" className="flex items-center gap-2.5 mb-4" aria-label="WHS Managed Application">
              <div className="w-9 h-9 bg-primary-red rounded-xl flex items-center justify-center shadow-md">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-white text-lg tracking-tight">
                WHS<span className="text-primary-red">MA</span>
              </span>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed max-w-[200px] mb-5">
              The mobile-first WHS incident reporting platform for Australian job sites.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-slate-400 hover:bg-white/20 hover:text-white transition-all duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold text-sm mb-4">{category}</h3>
              <ul className="flex flex-col gap-3" role="list">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-slate-400 text-sm hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-sm">
            © 2026 WHS Managed Application Pty Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-slate-600 text-xs">Built for Australian WHS compliance</span>
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
          </div>
        </div>
      </Container>
    </footer>
  );
}
