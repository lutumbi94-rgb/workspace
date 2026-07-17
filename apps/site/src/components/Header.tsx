import { Link, useLocation } from 'react-router';
import { useAuth } from '@/hooks/use-auth';

export default function Header() {
  const { isAuthenticated, user } = useAuth();
  const location = useLocation();

  const navLinks = [
    { label: 'Features', to: '/features' },
    { label: 'Developers', to: '/developers' },
    { label: 'Integrations', to: '/integrations' },
    { label: 'Pricing', to: '/pricing' },
  ];

  return (
    <nav className="bg-surface/80 backdrop-blur-xl docked full-width top-0 sticky z-50 shadow-sm border-b border-outline-variant/20">
      <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-stack-md max-w-container-max mx-auto h-20">
        <Link
          to="/"
          className="font-headline-lg-mobile md:text-[24px] font-extrabold text-primary flex items-center gap-2"
        >
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
            terminal
          </span>
          Scryme Chat
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.label}
                to={link.to === '/integrations' ? '#' : link.to}
                className={`font-label-md transition-colors duration-200 ${
                  isActive
                    ? 'text-primary font-bold border-b-2 border-primary pb-1'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-6">
          {isAuthenticated ? (
            <>
              <span className="text-[13px] text-on-surface-variant font-label-md hidden sm:block">
                Hi, {user?.name}
              </span>
              <Link
                to="/developer"
                className="bg-primary text-on-primary font-label-md px-6 py-3 rounded-full hover:bg-primary/95 hover:shadow-lg transition-all active:scale-95"
              >
                Dashboard
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="hidden md:block text-on-surface font-label-md hover:text-primary transition-colors"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="bg-primary text-on-primary font-label-md px-6 py-3 rounded-full hover:bg-primary/95 hover:shadow-lg transition-all active:scale-95"
              >
                Get Started
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
