
import React from 'react';
import { ShieldCheck, Headphones, Map } from 'lucide-react';
import { motion } from 'framer-motion';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; desc: string }> = ({ icon, title, desc }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col items-start text-left transition-all duration-300"
  >
    <div className="bg-amber-100 p-4 rounded-2xl text-amber-600 mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{desc}</p>
  </motion.div>
);

const Features: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      <div className="text-left mb-16">
        <span className="text-amber-600 font-bold uppercase tracking-widest text-sm">Keunggulan Kami</span>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Mengapa Memilih Tiar Property?</h2>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        <FeatureCard 
          icon={<ShieldCheck size={32} />}
          title="Legalitas Terjamin"
          desc="Kami hanya bekerjasama dengan developer terverifikasi untuk menjamin keamanan investasi Anda."
        />
        <FeatureCard 
          icon={<Headphones size={32} />}
          title="Bebas Biaya Konsultasi"
          desc="Tanya apa saja seputar KPR atau pemilihan lokasi, tim kami siap membantu tanpa biaya tambahan."
        />
        <FeatureCard 
          icon={<Map size={32} />}
          title="Area Luas"
          desc="Jangkauan layanan mencakup Jawa Timur (Sidoarjo, Surabaya, dkk) dan berbagai area di Jawa Barat."
        />
      </div>
    </div>
  );
};

export default Features;
