import React, { useState } from 'react';
import { Play, SkipForward, Heart, Search, ChevronUp, Plus } from 'lucide-react';
import { Song } from '../types';

const DEMO_SONGS: Song[] = [
  { id: '1', title: "Midnight City", artist: "M83", votes: 42, cover: "https://picsum.photos/id/10/200" },
  { id: '2', title: "The Less I Know The Better", artist: "Tame Impala", votes: 38, cover: "https://picsum.photos/id/11/200" },
  { id: '3', title: "Get Lucky", artist: "Daft Punk", votes: 24, cover: "https://picsum.photos/id/12/200" },
  { id: '4', title: "Instant Crush", artist: "Daft Punk", votes: 15, cover: "https://picsum.photos/id/13/200" },
];

const AppDemo: React.FC = () => {
  const [songs, setSongs] = useState<Song[]>(DEMO_SONGS);
  const [currentSong, setCurrentSong] = useState<Song>(DEMO_SONGS[0]);

  const handleVote = (id: string) => {
    setSongs(prev => prev.map(song => 
      song.id === id ? { ...song, votes: song.votes + 1 } : song
    ).sort((a, b) => b.votes - a.votes));
  };

  return (
    <section id="demo" className="py-32 bg-background overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* Left Side: Text */}
        <div className="order-2 lg:order-1">
          <h2 className="font-display font-bold text-5xl md:text-7xl mb-8 leading-tight">
            손님들이 곧 <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">DJ가 됩니다.</span>
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-md">
            현대적인 주크박스는 디지털이고, 민주적이며, 소셜 인터랙션을 위해 설계되었습니다. 공간의 에너지에 따라 흐르는 음악을 경험하세요.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
               <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-bold">1</div>
               <div>
                 <h4 className="font-bold text-lg text-white">QR 코드 스캔</h4>
                 <p className="text-gray-500">로그인이나 앱 다운로드 없음.</p>
               </div>
            </div>
            <div className="flex items-start gap-4">
               <div className="w-8 h-8 rounded-full bg-gray-800 text-white border border-gray-600 flex items-center justify-center font-bold">2</div>
               <div>
                 <h4 className="font-bold text-lg text-white">검색 및 신청</h4>
                 <p className="text-gray-500">Spotify를 통한 수백만 곡 접속.</p>
               </div>
            </div>
            <div className="flex items-start gap-4">
               <div className="w-8 h-8 rounded-full bg-gray-800 text-white border border-gray-600 flex items-center justify-center font-bold">3</div>
               <div>
                 <h4 className="font-bold text-lg text-white">투표 및 재생</h4>
                 <p className="text-gray-500">가장 많은 투표를 받은 곡이 재생됩니다.</p>
               </div>
            </div>
          </div>
        </div>

        {/* Right Side: Phone Mockup */}
        <div className="order-1 lg:order-2 flex justify-center relative">
            {/* Glow Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="w-[360px] h-[720px] bg-black rounded-[48px] border-[8px] border-[#1a1a1a] shadow-2xl relative overflow-hidden z-10 flex flex-col">
                {/* Dynamic Island Area */}
                <div className="absolute top-0 w-full h-8 flex justify-center z-20 pt-2">
                    <div className="w-24 h-6 bg-black rounded-full"></div>
                </div>

                {/* App UI */}
                <div className="flex-1 bg-gradient-to-b from-gray-900 to-black text-white p-6 flex flex-col relative">
                    
                    {/* Header */}
                    <div className="flex justify-between items-center mt-8 mb-6">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                            <span className="text-xs font-bold tracking-wide uppercase text-gray-400">현재 위치: The Standard</span>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center"><Search size={14} /></div>
                    </div>

                    {/* Now Playing Card */}
                    <div className="bg-gray-800/50 rounded-2xl p-4 mb-6 backdrop-blur-md border border-white/5">
                        <div className="aspect-square w-full rounded-xl bg-gray-700 mb-4 overflow-hidden relative group">
                             <img src={currentSong.cover} alt="Cover" className="w-full h-full object-cover" />
                             <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black pl-1">
                                    <Play fill="currentColor" size={20} />
                                </div>
                             </div>
                        </div>
                        <div className="flex justify-between items-end">
                            <div>
                                <h3 className="font-bold text-lg">{currentSong.title}</h3>
                                <p className="text-gray-400 text-sm">{currentSong.artist}</p>
                            </div>
                            <div className="flex gap-3">
                                <Heart className="text-white hover:text-red-500 transition-colors cursor-pointer" />
                                <SkipForward className="text-white hover:text-blue-500 transition-colors cursor-pointer" />
                            </div>
                        </div>
                        {/* Progress Bar */}
                        <div className="w-full h-1 bg-gray-700 rounded-full mt-4 overflow-hidden">
                            <div className="w-1/3 h-full bg-white rounded-full"></div>
                        </div>
                    </div>

                    {/* Queue List */}
                    <div className="flex-1 overflow-y-auto scrollbar-hide">
                        <div className="flex justify-between items-center mb-4">
                            <h4 className="font-bold">다음 곡</h4>
                            <span className="text-xs text-gray-500">투표순 정렬</span>
                        </div>
                        
                        <div className="space-y-3">
                            {songs.filter(s => s.id !== currentSong.id).map((song, index) => (
                                <div key={song.id} className="flex items-center gap-3 p-2 rounded-xl hover:bg-white/5 transition-colors group">
                                    <div className="text-gray-600 font-bold w-4 text-center">{index + 1}</div>
                                    <img src={song.cover} alt="mini" className="w-10 h-10 rounded-md object-cover" />
                                    <div className="flex-1 min-w-0">
                                        <p className="font-medium truncate text-sm">{song.title}</p>
                                        <p className="text-gray-500 text-xs truncate">{song.artist}</p>
                                    </div>
                                    <button 
                                        onClick={() => handleVote(song.id)}
                                        className="flex items-center gap-1 bg-gray-800 hover:bg-white hover:text-black transition-colors px-2 py-1 rounded-full text-xs font-bold"
                                    >
                                        <ChevronUp size={12} />
                                        {song.votes}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Floating Add Button */}
                    <div className="absolute bottom-6 right-6">
                        <button className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-600/40 hover:scale-110 transition-transform">
                            <Plus size={24} />
                        </button>
                    </div>

                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default AppDemo;