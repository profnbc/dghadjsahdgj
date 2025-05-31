import React, { useState, useEffect } from 'react';
import { Sparkles, Rocket, Target, Shield } from 'lucide-react';

const ProjectStatus: React.FC = () => {
  const completedMissions = 3;
  const totalMissions = 7;
  const recruitedAllies = 2;
  const [starDate, setStarDate] = useState('');
  const rankProgress = 37; // Progress towards next rank

  useEffect(() => {
    const calculateStarDate = () => {
      const now = new Date();
      const year = now.getFullYear();
      const dayOfYear = Math.floor((now - new Date(year, 0, 0)) / (1000 * 60 * 60 * 24));
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      return `${year - 1000}.${dayOfYear}.${hours}${minutes}`;
    };

    const updateStarDate = () => {
      setStarDate(calculateStarDate());
    };

    updateStarDate();
    const interval = setInterval(updateStarDate, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative rounded-lg overflow-hidden bg-gradient-to-br from-gray-900 via-gray-900 to-gray-900/80 border border-purple-500/20 backdrop-blur-sm p-3 sm:p-5 mb-6">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-cyan-400 to-green-400"></div>
      
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div className="flex gap-4">
          {/* Profile Badge */}
          <div className="relative">
            <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-purple-500/30 p-0.5">
              <div className="w-full h-full rounded-lg bg-gray-900 flex items-center justify-center relative overflow-hidden">
                <img 
                  src="/assets/chevron_rank_badge.png" 
                  alt="Rank Badge" 
                  className="w-12 h-12 object-contain relative z-10"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 animate-pulse-slow"></div>
              </div>
            </div>
            <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-cyan-400 p-0.5">
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                <Shield size={14} className="text-cyan-400" />
              </div>
            </div>
          </div>

          {/* Profile Info */}
          <div className="space-y-2">
            <div>
              <h2 className="text-xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-300 to-green-400">
                Commander Vega
              </h2>
              <div className="text-sm font-mono text-gray-400">
                Rank: Field Agent
              </div>
            </div>

            {/* Rank Progress */}
            <div className="relative">
              <div className="absolute -left-2 -top-2 w-6 h-6 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-purple-500/30 flex items-center justify-center">
                <Sparkles size={12} className="text-cyan-400" />
              </div>
              <div className="h-2 bg-gray-800/50 rounded-full overflow-hidden mt-2">
                <div 
                  className="h-full bg-gradient-to-r from-purple-500 via-cyan-400 to-green-400 transition-all duration-1000 ease-out"
                  style={{ width: `${rankProgress}%` }}
                >
                  <div className="w-full h-full opacity-50 animate-pulse"></div>
                </div>
              </div>
              <div className="mt-1 text-[10px] font-mono text-gray-500">
                {rankProgress}% to Strategic Commander
              </div>
            </div>
          </div>
        </div>

        {/* System Status */}
        <div className="font-mono text-xs space-y-2 sm:min-w-[200px] sm:border-l sm:border-purple-500/20 sm:pl-4">
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-400">StarDate:</span>
              <span className="text-purple-400">{starDate}</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Signal Status:</span>
              <span className="text-green-400 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Stable
              </span>
            </div>
          </div>
          
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Network Load:</span>
              <span className="text-cyan-400">87%</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Anomalies:</span>
              <span className="text-purple-400">2 resolved</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 w-full h-40 pointer-events-none opacity-10">
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-purple-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-cyan-500 rounded-full filter blur-3xl"></div>
      </div>
    </div>
  );
};

export default ProjectStatus;