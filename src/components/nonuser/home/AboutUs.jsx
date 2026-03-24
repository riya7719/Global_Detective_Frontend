import React from 'react';
import { ShieldCheck, Users, ClipboardCheck } from 'lucide-react';

const AboutUs = () => {
  return (
    <section id="about" className="bg-[#0b1120] ...">
    <section className="bg-[#0b1120] text-white py-20 px-6 md:px-12 lg:px-24">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        {/* Left Side: Text Content */}
        <div className="lg:w-1/2">
          <h2 className="text-gray-400 text-xl font-medium mb-2 uppercase tracking-wider">About</h2>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Universal Detective</h1>
          <div className="space-y-4 text-gray-400 leading-relaxed max-w-2xl">
            <p>
              Founded in 2015, Global Detection System has grown to become a leading provider of professional investigation and detection services worldwide. Our mission is to deliver truth, justice, and peace of mind through meticulous investigation and unwavering commitment to our clients.
            </p>
            <p>
              With a team of over 500 certified detectives operating across 50 countries, we handle everything from background checks and fraud detection to missing persons and corporate investigations. Our multi-level verification system ensures that every report meets the highest standards of accuracy and reliability.
            </p>
            <p>
              We believe in transparency, integrity, and professionalism. Every case is treated with the utmost confidentiality, and our clients receive regular updates throughout the investigation process.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 mt-8">
            <button className="bg-red px-8 py-3 rounded-md font-semibold hover:bg-[#b0222f] transition-colors">
              Contact us
            </button>
            <button className="border border-white/30 px-8 py-3 rounded-md font-semibold hover:bg-white/10 transition-colors">
              View Services
            </button>
          </div>
        </div>

        {/* Right Side: Feature Cards */}
        <div className="lg:w-1/2 w-full space-y-6">
          <div className="bg-[#b0222f] p-6 rounded-xl flex items-center gap-6 transform hover:scale-105 transition-transform cursor-default">
            <div className="bg-white/20 p-4 rounded-lg">
              <ShieldCheck size={32} className="text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1">Secure & Confidential</h3>
              <p className="text-white/80 text-sm">Enterprise-grade encryption and strict confidentiality protocols protect your sensitive information.</p>
            </div>
          </div>

          <div className="bg-[#b0222f] p-6 rounded-xl flex items-center gap-6 transform hover:scale-105 transition-transform cursor-default">
            <div className="bg-white/20 p-4 rounded-lg">
              <Users size={32} className="text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1">Verified Professionals</h3>
              <p className="text-white/80 text-sm">All detectives undergo rigorous background checks, certification, and continuous training.</p>
            </div>
          </div>

          <div className="bg-[#b0222f] p-6 rounded-xl flex items-center gap-6 transform hover:scale-105 transition-transform cursor-default">
            <div className="bg-white/20 p-4 rounded-lg">
              <ClipboardCheck size={32} className="text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-1">Multi-Level Approval</h3>
              <p className="text-white/80 text-sm">Every investigation goes through multiple levels of review to ensure absolute accuracy and quality.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </section>
  );
};

export default AboutUs;