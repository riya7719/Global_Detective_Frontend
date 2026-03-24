import React from 'react';
import { FileEdit, ShieldCheck, UserPlus, Search, FileCheck } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: '1. Submit Request',
      description: 'Fill out our secure online form',
      icon: <FileEdit size={24} className="text-red" />,
      position: 'top'
    },
    {
      id: 2,
      title: '2. Admin Review',
      description: 'Request reviewed within 24 hours',
      icon: <ShieldCheck size={24} className="text-red" />,
      position: 'bottom'
    },
    {
      id: 3,
      title: '3. Detective Assigned',
      description: 'Expert detective assigned to your case',
      icon: <UserPlus size={24} className="text-red" />,
      position: 'top'
    },
    {
      id: 4,
      title: '4. Investigation',
      description: 'Thorough investigation conducted',
      icon: <Search size={24} className="text-red" />,
      position: 'bottom'
    },
    {
      id: 5,
      title: '4. Report Delivered',
      description: 'Detailed report with findings',
      icon: <FileCheck size={24} className="text-red" />,
      position: 'top'
    }
  ];

  return (
    <section className="bg-[#0b1120] text-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-24 text-center">How it works</h2>
        
        <div className="relative">
          {/* Main Red Dotted Line */}
          <div className="absolute top-1/2 left-0 w-full h-12 bg-[#b0222f] rounded-full -translate-y-1/2 opacity-20 border-2 border-dashed border-[#b0222f]/50"></div>
          
          <div className="relative flex justify-between items-center px-4">
            {steps.map((step, index) => (
              <div key={step.id} className="relative flex flex-col items-center">
                {/* Step Content */}
                <div className={`absolute w-48 text-center ${step.position === 'top' ? '-top-28' : 'top-20'}`}>
                  <h3 className="font-bold text-lg mb-1">{step.title}</h3>
                  <p className="text-gray-400 text-sm">{step.description}</p>
                </div>

                {/* Circle Icon */}
                <div className="w-16 h-16 bg-[#1a2333] rounded-full border-2 border-red flex items-center justify-center z-10 shadow-[0_0_15px_rgba(176,34,47,0.3)]">
                  {step.icon}
                </div>

                {/* Vertical Connector Line */}
                <div className={`absolute w-px h-12 bg-gray-600 ${step.position === 'top' ? '-top-12' : 'top-16'}`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;