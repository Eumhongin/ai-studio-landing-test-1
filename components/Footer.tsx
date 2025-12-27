import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background text-white pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div>
            <h3 className="text-2xl font-bold mb-6">최신 소식 받기</h3>
            <div className="flex gap-2 max-w-md">
                <input 
                    type="email" 
                    placeholder="이메일 주소 입력" 
                    className="flex-1 bg-white/5 border border-white/10 rounded-full px-6 py-3 focus:outline-none focus:border-white/40 transition-colors"
                />
                <button className="bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors">
                    구독
                </button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
                <h4 className="text-gray-500 font-medium mb-4 text-sm uppercase tracking-wider">서비스</h4>
                <ul className="space-y-3">
                    <li><a href="#" className="hover:text-gray-300 transition-colors">매장 찾기</a></li>
                    <li><a href="#" className="hover:text-gray-300 transition-colors">아티스트</a></li>
                    <li><a href="#" className="hover:text-gray-300 transition-colors">연동</a></li>
                    <li><a href="#" className="hover:text-gray-300 transition-colors">요금 안내</a></li>
                </ul>
            </div>
            <div>
                <h4 className="text-gray-500 font-medium mb-4 text-sm uppercase tracking-wider">회사</h4>
                <ul className="space-y-3">
                    <li><a href="#" className="hover:text-gray-300 transition-colors">소개</a></li>
                    <li><a href="#" className="hover:text-gray-300 transition-colors">채용</a></li>
                    <li><a href="#" className="hover:text-gray-300 transition-colors">블로그</a></li>
                    <li><a href="#" className="hover:text-gray-300 transition-colors">문의하기</a></li>
                </ul>
            </div>
            <div>
                <h4 className="text-gray-500 font-medium mb-4 text-sm uppercase tracking-wider">소셜</h4>
                <ul className="space-y-3">
                    <li><a href="#" className="hover:text-gray-300 transition-colors flex items-center gap-1">Instagram <ArrowUpRight size={14}/></a></li>
                    <li><a href="#" className="hover:text-gray-300 transition-colors flex items-center gap-1">Twitter <ArrowUpRight size={14}/></a></li>
                    <li><a href="#" className="hover:text-gray-300 transition-colors flex items-center gap-1">LinkedIn <ArrowUpRight size={14}/></a></li>
                </ul>
            </div>
          </div>
        </div>

        {/* Big Text Branding */}
        <div className="w-full overflow-hidden">
            <h1 className="text-[12vw] leading-none font-bold tracking-tighter text-center select-none text-white/5 hover:text-white/10 transition-colors duration-700">
                VIBEFLOW
            </h1>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-8 pt-8 border-t border-white/5 text-gray-500 text-sm">
            <p>© 2024 VibeFlow Inc. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-white transition-colors">개인정보 처리방침</a>
                <a href="#" className="hover:text-white transition-colors">이용약관</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;