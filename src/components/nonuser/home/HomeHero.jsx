import React from 'react';
import { Shield, CheckCircle, Lock, Gavel } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../core/constants/routes.constant';
import se from "../../../assets/image 4.png";

const HomeHero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-[#0b1120] text-white flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-24 overflow-hidden">

      {/* Background Image */}
      <div className="absolute right-0 top-0 w-full lg:w-1/2 h-full opacity-20 sm:opacity-30 lg:opacity-100 z-0">
        <img 
          src={se} 
          alt="Detective Silhouette" 
          className="w-full h-full object-cover object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1120] via-[#0b1120]/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl pt-16 sm:pt-20">
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          "Professional Private <br />
          <span className="red">Investigation</span> & <span className="font-bold text-white">Security Platform</span>"
        </h1>

        <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-8 max-w-xl">
          Delivering confidential private investigations powered by verified professionals, ethical practices, and advanced digital technology—ensuring accuracy, accountability, and complete discretion at every stage. From background verification to litigation support, our platform ensures secure case handling, verified professionals, and structured workflows that meet corporate and legal standards.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <button 
            onClick={() => navigate(ROUTES.REQUEST_INVESTIGATION)}
            className="bg-red px-6 sm:px-8 py-3 rounded-md font-semibold hover:bg-[#b0222f] transition-colors w-full sm:w-auto"
          >
            Request Investigation
          </button>

          <button className="border border-white/30 px-6 sm:px-8 py-3 rounded-md font-semibold hover:bg-white/10 transition-colors w-full sm:w-auto">
            Join as Detective
          </button>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
          
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 flex items-center gap-4 rounded-lg">
            <div className="p-2 bg-white/10 rounded">
              <Lock size={20} className="red" />
            </div>
            <span className="text-sm font-medium">"Encrypted Reports"</span>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 flex items-center gap-4 rounded-lg">
            <div className="p-2 bg-white/10 rounded">
              <CheckCircle size={20} className="red" />
            </div>
            <span className="text-sm font-medium">"Verified Detectives"</span>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 flex items-center gap-4 rounded-lg">
            <div className="p-2 bg-white/10 rounded">
              <Shield size={20} className="red" />
            </div>
            <span className="text-sm font-medium">"Icons + short labels"</span>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 flex items-center gap-4 rounded-lg">
            <div className="p-2 bg-white/10 rounded">
              <Gavel size={20} className="red" />
            </div>
            <span className="text-sm font-medium">"Legal & Ethical Compliance"</span>
          </div>

        </div>
      </div>

      {/* Floating Buttons */}
      <div className="fixed right-4 sm:right-6 bottom-4 sm:bottom-6 flex flex-col gap-3 z-50">
        <button className="bg-[#25D366] p-2 sm:p-3 rounded-full shadow-lg hover:scale-110 transition-transform">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <button className="bg-red p-2 sm:p-3 rounded-full shadow-lg hover:scale-110 transition-transform">
          <img src="https://www.svgrepo.com/show/521104/chat-bubble.svg" alt="Chat" className="w-5 h-5 sm:w-6 sm:h-6 invert" />
        </button>
      </div>

    </div>
  );
};

export default HomeHero;