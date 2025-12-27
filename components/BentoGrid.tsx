import React from 'react';
import { Smartphone, Radio, Globe, Zap, Disc, Users } from 'lucide-react';
import { FeatureCardProps } from '../types';

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, className, image }) => (
  <div className={`bg-surface border border-white/5 rounded-3xl p-8 flex flex-col justify-between overflow-hidden relative group hover:border-white/20 transition-colors duration-500 ${className}`}>
    <div className="relative z-10">
      <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6 text-white group-hover:bg-white group-hover:text-black transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-2xl font-display font-bold mb-3 tracking-tight">{title}</h3>
      <p className="text-gray-400 leading-relaxed text-sm md:text-base">{description}</p>
    </div>
    
    {image && (
      <div className="absolute right-0 bottom-0 w-2/3 h-2/3 opacity-40 group-hover:opacity-60 transition-opacity duration-500 translate-x-4 translate-y-4">
        <img src={image} alt={title} className="w-full h-full object-cover rounded-tl-2xl" />
      </div>
    )}
  </div>
);

const BentoGrid: React.FC = () => {
  return (
    <section id="features" className="py-24 md:py-32 bg-background relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 max-w-2xl">
          <h2 className="font-display font-bold text-4xl md:text-6xl mb-6">
            모든 소셜 순간에 <br/>
            <span className="italic font-serif text-gray-400">완벽하게 어울립니다.</span>
          </h2>
          <p className="text-gray-400 text-lg">
            조용한 카페부터 꽉 찬 클럽까지. VibeFlow는 공간의 에너지에 맞춰 유연하게 적응합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 md:grid-rows-2 gap-4 md:gap-6 h-auto md:h-[800px]">
          {/* Large Card 1 */}
          <div className="md:col-span-4 md:row-span-2 bg-[#1a1a1a] rounded-3xl p-8 md:p-12 relative overflow-hidden group border border-white/5">
            <div className="relative z-10 h-full flex flex-col">
              <div className="mb-auto">
                 <div className="inline-flex items-center gap-2 bg-black/30 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 mb-6">
                    <Zap size={14} className="text-yellow-400" fill="currentColor"/>
                    <span className="text-xs font-bold text-white uppercase tracking-wider">Instant Sync</span>
                 </div>
                <h3 className="text-3xl md:text-5xl font-display font-bold mb-6">끊김 없는 신청 경험</h3>
                <p className="text-gray-400 max-w-md text-lg">
                  손님은 QR 코드를 스캔하고 노래를 고릅니다. 승인은 관리자가 (혹은 AI가 자동으로) 처리합니다. 별도의 앱 다운로드는 필요 없습니다.
                </p>
              </div>
              
              {/* Abstract UI Representation */}
              <div className="mt-12 relative w-full h-64 md:h-96 bg-black rounded-t-3xl border border-white/10 overflow-hidden shadow-2xl transform transition-transform duration-700 group-hover:translate-y-[-10px]">
                 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                 <div className="p-6">
                    <div className="flex items-center justify-between mb-8">
                        <div className="w-32 h-8 bg-gray-800 rounded-full animate-pulse"></div>
                        <div className="w-8 h-8 bg-gray-800 rounded-full"></div>
                    </div>
                    <div className="space-y-4">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex items-center gap-4 p-3 rounded-xl bg-gray-900/50 border border-white/5">
                                <div className="w-12 h-12 bg-gray-800 rounded-lg shrink-0"></div>
                                <div className="flex-1">
                                    <div className="w-3/4 h-4 bg-gray-800 rounded mb-2"></div>
                                    <div className="w-1/2 h-3 bg-gray-800/60 rounded"></div>
                                </div>
                                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-xs">+{i * 10}</div>
                            </div>
                        ))}
                    </div>
                 </div>
              </div>
            </div>
            
            {/* Background Gradient */}
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-gray-800/20 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Small Card 2 */}
          <FeatureCard 
            className="md:col-span-2 md:row-span-1"
            title="대중 투표"
            description="다수의 선택을 따르세요. 투표 기능으로 인기 있는 곡이 계속 재생됩니다."
            icon={<Users size={24} />}
          />

          {/* Small Card 3 */}
          <FeatureCard 
            className="md:col-span-2 md:row-span-1"
            title="매장 관리"
            description="장르 금지, 에너지 레벨 설정, 대기열 즉시 변경까지 완벽하게 제어하세요."
            icon={<Radio size={24} />}
          />
        </div>

        {/* Bottom Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-6">
             <div className="bg-surface border border-white/5 rounded-3xl p-8 flex items-center gap-6 group hover:border-white/20 transition-colors">
                <div className="bg-white/10 p-4 rounded-full group-hover:scale-110 transition-transform"><Disc className="text-white"/></div>
                <div>
                    <h4 className="text-xl font-bold mb-1">Spotify & Apple</h4>
                    <p className="text-sm text-gray-400">완벽한 연동 지원.</p>
                </div>
             </div>
             <div className="bg-surface border border-white/5 rounded-3xl p-8 flex items-center gap-6 group hover:border-white/20 transition-colors">
                <div className="bg-white/10 p-4 rounded-full group-hover:scale-110 transition-transform"><Smartphone className="text-white"/></div>
                <div>
                    <h4 className="text-xl font-bold mb-1">앱 설치 불필요</h4>
                    <p className="text-sm text-gray-400">브라우저에서 바로 작동.</p>
                </div>
             </div>
             <div className="bg-surface border border-white/5 rounded-3xl p-8 flex items-center gap-6 group hover:border-white/20 transition-colors">
                <div className="bg-white/10 p-4 rounded-full group-hover:scale-110 transition-transform"><Globe className="text-white"/></div>
                <div>
                    <h4 className="text-xl font-bold mb-1">글로벌 서비스</h4>
                    <p className="text-sm text-gray-400">어디서나 사용 가능.</p>
                </div>
             </div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;