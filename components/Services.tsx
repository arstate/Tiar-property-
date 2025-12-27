
import React from 'react';
import { Home, Calculator, Car, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const ServiceItem: React.FC<{ icon: React.ReactNode; title: string; desc: string }> = ({ icon, title, desc }) => (
  <div className="flex space-x-6 group">
    <div className="flex-shrink-0 w-14 h-14 bg-slate-900 text-amber-500 rounded-2xl flex items-center justify-center group-hover:bg-amber-500 group-hover:text-slate-900 transition-all duration-300">
      {icon}
    </div>
    <div>
      <h4 className="text-xl font-bold text-slate-900 mb-2">{title}</h4>
      <p className="text-slate-600 leading-relaxed">{desc}</p>
    </div>
  </div>
);

const Services: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="rounded-[40px] overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1000" 
            alt="Real Estate Services" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute -bottom-10 -right-10 hidden md:block bg-white p-8 rounded-3xl shadow-xl border border-slate-100 max-w-xs">
          <div className="flex items-center space-x-4 mb-4">
            <div className="bg-emerald-100 text-emerald-600 p-2 rounded-full">
              <CheckCircle2 size={24} />
            </div>
            <p className="font-bold text-slate-800 text-lg">Proses Cepat</p>
          </div>
          <p className="text-slate-500 text-sm leading-relaxed">
            Akad kredit dan serah terima kunci tepat waktu tanpa prosedur yang rumit.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-amber-600 font-bold uppercase tracking-widest text-sm">Layanan Kami</span>
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-3 mb-8 leading-tight">Solusi Hunian Lengkap Dalam Satu Pintu</h2>
        <p className="text-slate-600 mb-12 text-lg">
          Tiar Property hadir untuk memudahkan perjalanan Anda memiliki rumah, mulai dari pemilihan unit hingga kunci di tangan.
        </p>

        <div className="space-y-10">
          <ServiceItem 
            icon={<Home size={28} />}
            title="Penjualan Primary Market"
            desc="Dapatkan akses ke proyek-proyek perumahan terbaru dari developer ternama dengan harga perdana."
          />
          <ServiceItem 
            icon={<Calculator size={28} />}
            title="Simulasi KPR & BI Checking"
            desc="Kami bantu hitung simulasi angsuran dan pengecekan BI Checking secara transparan sebelum pengajuan."
          />
          <ServiceItem 
            icon={<Car size={28} />}
            title="Layanan Site Visit"
            desc="Ingin lihat lokasi? Kami siap antar Anda melakukan survei lokasi perumahan secara gratis & nyaman."
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Services;
