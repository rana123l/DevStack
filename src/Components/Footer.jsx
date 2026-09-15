const Footer = () => {
  return (
    <footer className="pt-16 pb-10 bg-white">
      <div className="w-[95%] sm:w-[90%] lg:w-[80%] mx-auto">
        {/* Main Section */}
        <div className="flex flex-col sm:flex-row flex-wrap lg:flex-nowrap justify-between items-start gap-8">
          
          {/* Brand & Social */}
          <div className="flex flex-col items-start text-left max-w-sm">
            <img
              src="/assets/logo-text.png"
              alt="Dev Stack Logo"
              className="w-32 h-auto mb-4 cursor-pointer"
            />
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3 text-sm font-medium text-slate-700">
              <span className="cursor-pointer hover:text-[#DB2777] transition-colors">
                GitHub
              </span>
              <span className="text-slate-400">•</span>
              <span className="cursor-pointer hover:text-[#DB2777] transition-colors">
                Twitter
              </span>
              <span className="text-slate-400">•</span>
              <span className="cursor-pointer hover:text-[#DB2777] transition-colors">
                LinkedIn
              </span>
            </div>
          </div>

          {/* PRODUCT */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              PRODUCT
            </h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li className="cursor-pointer hover:text-[#DB2777] transition-colors">
                Home
              </li>
              <li className="cursor-pointer hover:text-[#DB2777] transition-colors">
                Technologies
              </li>
              <li className="cursor-pointer hover:text-[#DB2777] transition-colors">
                Projects
              </li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              COMPANY
            </h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li className="cursor-pointer hover:text-[#DB2777] transition-colors">
                About
              </li>
              <li className="cursor-pointer hover:text-[#DB2777] transition-colors">
                Contact
              </li>
              <li className="cursor-pointer hover:text-[#DB2777] transition-colors">
                Careers
              </li>
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              LEGAL
            </h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li className="cursor-pointer hover:text-[#DB2777] transition-colors">
                Privacy Policy
              </li>
              <li className="cursor-pointer hover:text-[#DB2777] transition-colors">
                Terms of Service
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="mt-10 lg:mt-16 mb-6 border-t border-slate-100"></div>

        {/* Bottom Bar */}
        <div className="flex justify-between items-center gap-4 text-xs text-slate-400">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <span className="cursor-pointer hover:text-[#DB2777] transition-colors">
              Privacy
            </span>
            <span className="cursor-pointer hover:text-[#DB2777] transition-colors">
              Terms
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;