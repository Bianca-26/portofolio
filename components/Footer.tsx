import Link from 'next/link';
import { Mail } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full bg-[#09111e] border-t border-white/5 py-8 sm:py-12 relative z-40">
      <div className="w-full max-w-[1300px] mx-auto px-6 sm:px-12 lg:px-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8">
        
        {/* PARTEA DIN STÂNGA: Text + Social Media */}
        <div className="flex flex-col gap-4 sm:gap-6 max-w-xl">
          <div className="flex flex-col gap-2 sm:gap-3">
            <h2 className="text-xl sm:text-3xl font-bold text-white lato">
              Let’s build something together.
            </h2>
            <p className="text-gray-300 text-xs sm:text-base leading-relaxed lato">
              Whether you have a project in mind, a question about my design process, or just want to say hi — my inbox is always open.
            </p>
          </div>

          {/* Social Icons din react-icons */}
          <div className="flex items-center gap-5 sm:gap-6 pt-1 sm:pt-2">
            <Link 
              href="https://www.facebook.com/share/18xKtDssRr/" 
              target="_blank" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaFacebookF className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>

            <Link 
              href="https://www.instagram.com/bianca.mryy?igsh=cDB2OWMwd3BnMGd4" 
              target="_blank" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaInstagram className="w-5 h-5 sm:w-6 sm:h-6" />
            </Link>

            <Link 
              href="https://www.linkedin.com/in/bianca-sandovici" 
              target="_blank" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaLinkedinIn className="w-5 h-5 sm:w-6 sm:h-6" />
            </Link>
          </div>
        </div>

        {/* PARTEA DIN DREAPTA: Mail (Mai compact pe mobil) */}
        <div className="flex items-center gap-3 sm:gap-6 md:pl-8 border-l-0 md:border-l-2 border-white/40 py-1 sm:py-2">
          <a 
            href="mailto:biancasandovici17@gmail.com" 
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white text-[#09111e] flex items-center justify-center shrink-0 hover:scale-105 transition-transform"
          >
            <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#09111e]" />
          </a>

          <a 
            href="mailto:biancasandovici17@gmail.com" 
            className="text-white text-xs sm:text-base md:text-lg font-medium lato hover:underline tracking-wide break-all sm:break-normal"
          >
            biancasandovici17@gmail.com
          </a>
        </div>

      </div>
    </footer>
  );
}