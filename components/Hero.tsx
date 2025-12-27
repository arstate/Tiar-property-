
import React from 'react';
import { Search, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <div className="relative h-[650px] w-full flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1600"
          alt="Modern House"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[1px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg"
        >
          Temukan Hunian Impian di <br />
          <span className="text-amber-400">Jawa Timur & Jawa Barat</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-slate-100 font-medium drop-shadow-md"
        >
          Pusat jual beli rumah subsidi & komersil terpercaya. Legalitas aman, proses KPR dibantu sampai tuntas oleh tim profesional.
        </motion.p>

        {/* Search Mockup */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white p-2 rounded-2xl md:rounded-full shadow-2xl flex flex-col md:flex-row items-center max-w-3xl mx-auto gap-2"
        >
          <div className="flex-1 flex items-center px-6 w-full py-2">
            <MapPin className="text-slate-400 mr-3" size={24} />
            <input
              type="text"
              placeholder="Lokasi (misal: Sidoarjo, Surabaya, Bandung)"
              className="w-full bg-transparent border-none focus:ring-0 text-slate-800 placeholder-slate-400 font-medium h-10"
            />
          </div>
          <button className="w-full md:w-auto bg-amber-600 hover:bg-amber-700 text-white px-10 py-4 rounded-xl md:rounded-full font-bold flex items-center justify-center space-x-2 transition-all shadow-lg shadow-amber-600/20">
            <Search size={20} />
            <span>Cari Rumah</span>
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
