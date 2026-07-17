import { Link } from 'react-router';

export const Footer = () => {
  return (
    <footer className="bg-surface-container dark:bg-inverse-surface full-width bottom-0 bg-white border-t border-outline-variant/20">
      <div className="flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-margin-desktop py-12 gap-8 max-w-container-max mx-auto">
        <Link
          to="/"
          className="font-headline-lg-mobile md:text-[24px] font-extrabold text-primary dark:text-inverse-primary flex items-center gap-2"
        >
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
            terminal
          </span>
          Scryme Chat
        </Link>
        <div className="flex flex-wrap justify-center gap-8">
          <a
            href={import.meta.env.VITE_DOCS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-surface-variant font-label-md hover:text-primary transition-colors"
          >
            Documentation
          </a>
          <a
            href={`${import.meta.env.VITE_DOCS_URL}/api-reference`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-surface-variant font-label-md hover:text-primary transition-colors"
          >
            API Reference
          </a>
          <a href="#" className="text-on-surface-variant font-label-md hover:text-primary transition-colors">
            Status
          </a>
          <a href="#" className="text-on-surface-variant font-label-md hover:text-primary transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="text-on-surface-variant font-label-md hover:text-primary transition-colors">
            Terms of Service
          </a>
        </div>
        <div className="text-on-surface-variant font-body-sm text-center md:text-right text-[13px]">
          © {new Date().getFullYear()} Scryme Chat. Engineered for high-performance teams.
        </div>
      </div>
    </footer>
  );
};
