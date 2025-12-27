
import React from 'react';
import { Bed, Bath, Square, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { PROPERTIES, WA_NUMBER } from '../constants';
import { Property } from '../types';

const PropertyCard: React.FC<{ property: Property }> = ({ property }) => {
  const message = encodeURIComponent(`Halo Tiar Property, saya ingin bertanya lebih lanjut tentang unit ${property.title} di ${property.location}.`);
  const waLink = `https://wa.me/${WA_NUMBER}?text=${message}`;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 group hover:shadow-xl transition-all duration-500"
    >
      <div className="relative h-60 overflow-hidden">
        <img 
          src={property.imageUrl} 
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-4 py-1.5 rounded-full text-sm font-bold shadow-lg ${
            property.type === 'Subsidi' ? 'bg-emerald-500 text-white' : 'bg-amber-500 text-white'
          }`}>
            {property.type}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="mb-4">
          <p className="text-amber-600 font-bold text-xl mb-1">{property.price}</p>
          <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors line-clamp-1">
            {property.title}
          </h3>
          <p className="text-slate-500 text-sm flex items-center mt-1">
            <span className="mr-1 inline-block w-4 h-4 bg-slate-100 rounded-full flex items-center justify-center text-[10px]">📍</span>
            {property.location}
          </p>
        </div>

        <div className="flex justify-between items-center py-4 border-y border-slate-50 mb-6">
          <div className="flex items-center space-x-2 text-slate-600">
            <Bed size={18} className="text-slate-400" />
            <span className="text-sm font-medium">{property.beds} Bed</span>
          </div>
          <div className="flex items-center space-x-2 text-slate-600">
            <Bath size={18} className="text-slate-400" />
            <span className="text-sm font-medium">{property.baths} Bath</span>
          </div>
          <div className="flex items-center space-x-2 text-slate-600">
            <Square size={18} className="text-slate-400" />
            <span className="text-sm font-medium">{property.sqft}m²</span>
          </div>
        </div>

        <div className="flex space-x-3">
          <a 
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-slate-900 text-white text-center py-3 rounded-xl font-bold hover:bg-slate-800 transition-all text-sm flex items-center justify-center space-x-2"
          >
            <span>Hubungi WA</span>
          </a>
          <button className="p-3 bg-slate-100 rounded-xl text-slate-600 hover:bg-slate-200 transition-all">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const PropertyList: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
        <div>
          <span className="text-amber-600 font-bold uppercase tracking-widest text-sm">Listing Terbaru</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Pilihan Rumah Terbaik</h2>
        </div>
        <button className="text-slate-900 font-bold hover:text-amber-600 transition-colors flex items-center space-x-2 border-b-2 border-slate-900 hover:border-amber-600 pb-1">
          <span>Lihat Semua Properti</span>
          <ChevronRight size={18} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {PROPERTIES.map((prop) => (
          <PropertyCard key={prop.id} property={prop} />
        ))}
      </div>
    </div>
  );
};

export default PropertyList;
