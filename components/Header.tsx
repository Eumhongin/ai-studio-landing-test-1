import React, { useState, useEffect } from 'react';
import { Music, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="bg-white text-black p-2 rounded-full transition-transform group-hover:rotate-12">
            <Music size={20} strokeWidth={3} />
          </div>
          <span className="font-display font-bold text-xl tracking-tight">VibeFlow</span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <a href="#features" className="hover:text-white transition-colors">주요 기능</a>
          <a href="#demo" className="hover:text-white transition-colors">라이브 데모</a>
          <a href="#pricing" className="hover:text-white transition-colors">제휴 매장</a>
          <button className="bg-white text-black px-6 py-2.5 rounded-full font-semibold hover:bg-gray-200 transition-all transform hover:scale-105 active:scale-95">
            대기 명단 등록
          </button>
        </nav>

        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl border-b border-white/10 p-6 md:hidden flex flex-col gap-4 animate-slide-up">
          <a href="#features" className="text-lg font-medium text-gray-300">주요 기능</a>
          <a href="#demo" className="text-lg font-medium text-gray-300">라이브 데모</a>
          <a href="#pricing" className="text-lg font-medium text-gray-300">제휴 매장</a>
          <button className="bg-white text-black px-6 py-3 rounded-full font-bold w-full">
            시작하기
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;