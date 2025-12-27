import React from 'react';
import { ArrowDownRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Spline Background */}
      <div className="absolute inset-0 z-0 opacity-80">
        <iframe 
          src='https://my.spline.design/flowingribbon-QGfM1AvwQlnzyFze5Ea3CwLI/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          className="w-full h-full scale-110 md:scale-100"
          title="Spline 3D Animation"
        ></iframe>
      </div>
      
      {/* Overlay Gradient to ensure text readability */}
      <div className="absolute inset-0 z-1 bg-gradient-to-b from-background/30 via-transparent to-background pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 w-full pointer-events-none">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 border border-white/20 bg-white/5 backdrop-blur-sm px-4 py-1.5 rounded-full mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-xs font-medium tracking-wide uppercase text-white/80">새로운 연동 기능 출시</span>
          </div>

          <h1 className="font-display font-bold text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tighter mb-8 mix-blend-difference text-white animate-slide-up" style={{ animationDelay: '0.2s' }}>
            공간의 무드를 <br/>
            <span className="text-gray-400 italic font-serif">장악하세요.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-lg leading-relaxed mb-10 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            현대적인 매장을 위한 최초의 탈중앙화 음악 예약 프로토콜입니다. 손님들이 직접 바이브를 큐레이팅하게 하세요. 물론, 통제권은 당신에게 있습니다.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pointer-events-auto animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <button className="group bg-white text-black px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 hover:bg-gray-200 transition-all hover:pr-10 relative overflow-hidden">
              <span className="relative z-10">대기열 시작하기</span>
              <ArrowDownRight className="relative z-10 group-hover:rotate-[-45deg] transition-transform duration-300" />
            </button>
            
            <button className="px-8 py-4 rounded-full font-medium text-white border border-white/20 hover:bg-white/10 backdrop-blur-sm transition-all">
              비즈니스용 보기
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;