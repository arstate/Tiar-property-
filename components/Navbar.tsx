
import React, { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS, WA_NUMBER } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    
    // Simpan target sebelum menu ditutup
    const id = href.replace('#', '');
    const element = document.getElementById(id);

    // Tutup menu mobile
    setIsOpen(false);

    if (element) {
      // Karena menu sekarang absolute, kita tidak perlu menunggu layout bergeser kembali,
      // tapi tetap memberi jeda kecil agar menu mulai menghilang dari pandangan sebelum scroll.
      setTimeout(() => {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }, 150); 
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 h-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <div 
            className="flex-shrink-0 flex items-center cursor-pointer" 
            onClick={(e) => scrollToSection(e, '#home')}
          >
            <span className="text-2xl font-bold text-slate-900 tracking-tight">
              TIAR<span className="text-amber-600">PROPERTY</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-slate-600 hover:text-amber-600 font-medium transition-colors outline-none"
              >
                {link.label}
              </button>
            ))}
            <a
              href={`https://wa.me/${WA_NUMBER}?text=Halo%20Tiar%20Property,%20saya%20tertarik%20ingin%20konsultasi%20mengenai%20rumah.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-900 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-slate-800 transition-all flex items-center space-x-2"
            >
              <MessageCircle size={18} />
              <span>Konsultasi Via WA</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 p-2 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with Absolute Positioning & Translucent Background */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden absolute top-20 left-0 w-full bg-white/95 backdrop-blur-lg border-b border-slate-200 shadow-2xl z-50 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-8 space-y-1 sm:px-3">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="block w-full text-left px-4 py-5 text-lg font-medium text-slate-700 hover:bg-slate-50/50 hover:text-amber-600 transition-colors border-b border-slate-100 last:border-0"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-6 px-3">
                <a
                  href={`https://wa.me/${WA_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex justify-center items-center space-x-2 bg-slate-900 text-white px-4 py-4 rounded-2xl font-bold shadow-lg shadow-slate-900/10 active:scale-[0.98] transition-transform"
                >
                  <MessageCircle size={20} />
                  <span>Konsultasi Via WA</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
