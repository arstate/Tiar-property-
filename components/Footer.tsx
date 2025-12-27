
import React from 'react';
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import { NAV_LINKS, INSTAGRAM_HANDLE, WA_NUMBER } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight">
            TIAR<span className="text-amber-500">PROPERTY</span>
          </h2>
          <p className="text-slate-400 leading-relaxed">
            Mitra terpercaya Anda dalam menemukan hunian impian di wilayah Jawa Timur dan Jawa Barat. Memberikan solusi properti yang aman dan profesional.
          </p>
          <div className="flex space-x-4">
            <a href={`https://instagram.com/${INSTAGRAM_HANDLE.replace('@','')}`} className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-amber-500 hover:text-slate-900 transition-all">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-amber-500 hover:text-slate-900 transition-all">
              <Facebook size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-6">Tautan Cepat</h3>
          <ul className="space-y-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-slate-400 hover:text-amber-500 transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-6">Hubungi Kami</h3>
          <ul className="space-y-4">
            <li className="flex items-start space-x-3 text-slate-400">
              <MapPin size={20} className="text-amber-500 mt-1 flex-shrink-0" />
              <span>Sidoarjo, Jawa Timur & Bandung, Jawa Barat</span>
            </li>
            <li className="flex items-center space-x-3 text-slate-400">
              <Phone size={20} className="text-amber-500 flex-shrink-0" />
              <span>+62 {WA_NUMBER.slice(2)}</span>
            </li>
            <li className="flex items-center space-x-3 text-slate-400">
              <Mail size={20} className="text-amber-500 flex-shrink-0" />
              <span>info@tiarproperty.com</span>
            </li>
            <li className="flex items-center space-x-3 text-slate-400">
              <Instagram size={20} className="text-amber-500 flex-shrink-0" />
              <span>{INSTAGRAM_HANDLE}</span>
            </li>
          </ul>
        </div>

        {/* Newsletter Mockup */}
        <div>
          <h3 className="text-xl font-bold mb-6">Info Update</h3>
          <p className="text-slate-400 text-sm mb-4">Dapatkan info rumah murah terbaru langsung ke email Anda.</p>
          <div className="flex flex-col space-y-2">
            <input 
              type="email" 
              placeholder="Email Anda" 
              className="bg-slate-800 border-none rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:ring-2 focus:ring-amber-500"
            />
            <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 rounded-xl transition-all">
              Berlangganan
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-10 border-t border-slate-800 text-center text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Tiar Property. Hak Cipta Dilindungi. Independen Property Marketing.</p>
      </div>
    </footer>
  );
};

export default Footer;
