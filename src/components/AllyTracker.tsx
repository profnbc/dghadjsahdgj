import React from 'react';
import { Satellite, Radio } from 'lucide-react';

interface Recruit {
  username: string;
  inviteLink: string;
  isNew: boolean;
}

const AllyTracker: React.FC = () => {
  const recruits: Recruit[] = [
    { username: "CosmoVaper_42", inviteLink: "#", isNew: true },
    { username: "NebulaPuff_7", inviteLink: "#", isNew: true },
    { username: "StarDust_365", inviteLink: "#", isNew: false },
  ];

  return (
    <div className="relative rounded-lg overflow-hidden bg-gradient-to-br from-gray-900 via-gray-900 to-gray-900/80 border border-purple-500/20 backdrop-blur-sm p-5 h-full">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-cyan-400 to-green-400"></div>
      
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-lg font-orbitron font-bold text-white flex items-center gap-2">
          <Satellite size={18} className="text-cyan-400" />
          Ally Signal Log
        </h2>
        <div className="text-xs font-mono text-gray-400 flex items-center gap-2">
          <span>INCOMING TRANSMISSIONS</span>
          {recruits.filter(r => r.isNew).length > 0 && (
            <span className="px-2 py-0.5 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 animate-pulse">
              +{recruits.filter(r => r.isNew).length} New
            </span>
          )}
        </div>
      </div>

      <div className="space-y-4">
        <div className="bg-gray-800/50 rounded-lg p-4 border border-purple-900/30">
          <div className="text-sm font-mono text-gray-400 mb-2">TOTAL RECRUITS</div>
          <div className="text-3xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-300 to-green-400">
            {recruits.length}
          </div>
        </div>

        <div className="space-y-2">
          {recruits.length > 0 ? (
            <div className="max-h-[200px] overflow-y-auto hide-scrollbar space-y-2">
              {recruits.map((recruit, index) => (
                <div 
                  key={index}
                  className="bg-gray-800/30 rounded-lg p-3 border border-purple-900/30 flex items-center justify-between group hover:bg-gray-800/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
                    <span className="font-mono text-gray-300">{recruit.username}</span>
                    {recruit.isNew && (
                      <span className="px-1.5 py-0.5 bg-green-500/20 text-[10px] font-mono text-green-400 rounded-full">
                        NEW
                      </span>
                    )}
                  </div>
                  <a 
                    href={recruit.inviteLink}
                    className="text-xs font-mono text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    View Signal
                  </a>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500 font-mono">
              No signals received yet, Commander.
            </div>
          )}
        </div>

        <button 
          className="w-full px-6 py-3 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-lg font-orbitron text-sm text-white relative group overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/40 via-cyan-500/40 to-green-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative flex items-center justify-center gap-2">
            <Radio size={16} className="text-cyan-400" />
            <span>Broadcast Invitation</span>
          </div>
          <div className="absolute inset-0 border border-purple-500/50 rounded-lg opacity-0 group-hover:opacity-100 scale-105 group-hover:scale-100 transition-all duration-500"></div>
        </button>
      </div>

      <div className="absolute bottom-0 right-0 w-full h-40 pointer-events-none opacity-10">
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-cyan-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500 rounded-full filter blur-3xl"></div>
      </div>
    </div>
  );
};

export default AllyTracker;