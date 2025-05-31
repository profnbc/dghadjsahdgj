import React from 'react';
import { FlaskRound as Flask, Rocket, Gift } from 'lucide-react';

const MissionProgress: React.FC = () => {
  const completedTasks = 3;
  const totalTasks = 7;
  const progress = (completedTasks / totalTasks) * 100;
  const isCompleted = completedTasks === totalTasks;

  return (
    <div className="relative rounded-lg overflow-hidden bg-gradient-to-br from-gray-900 via-gray-900 to-gray-900/80 border border-purple-500/20 backdrop-blur-sm p-5 h-full">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-cyan-400 to-green-400"></div>
      
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-lg font-orbitron font-bold text-white flex items-center gap-2">
          <Flask size={18} className="text-purple-400" />
          Quantum Progress
        </h2>
        <div className="text-xs font-mono text-gray-400">
          MISSION COMPLETION MATRIX
        </div>
      </div>

      <div className="space-y-6">
        <div className="relative pt-4">
          <div className="flex justify-between mb-2 text-sm font-mono">
            <span className="text-cyan-400">{completedTasks} / {totalTasks} Tasks Completed</span>
            <span className="text-gray-400">{progress.toFixed(0)}%</span>
          </div>
          <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-purple-500 via-cyan-400 to-green-400 transition-all duration-1000 ease-out"
              style={{ width: `${progress}%` }}
            >
              <div className="w-full h-full opacity-50 animate-pulse"></div>
            </div>
          </div>
          <div className="mt-2 text-xs text-gray-500 font-mono italic">
            Engage with Terran channels to unlock your fate
          </div>
        </div>

        <button 
          className="w-full px-6 py-3 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-lg font-orbitron text-sm text-white relative group overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/40 via-cyan-500/40 to-green-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative flex items-center justify-center gap-2">
            {isCompleted ? (
              <>
                <Gift size={16} className="text-green-400" />
                <span>View Rewards</span>
              </>
            ) : (
              <>
                <Rocket size={16} className="text-cyan-400" />
                <span>Continue Mission</span>
              </>
            )}
          </div>
          <div className="absolute inset-0 border border-purple-500/50 rounded-lg opacity-0 group-hover:opacity-100 scale-105 group-hover:scale-100 transition-all duration-500"></div>
        </button>
      </div>

      <div className="absolute bottom-0 right-0 w-full h-40 pointer-events-none opacity-10">
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-purple-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-cyan-500 rounded-full filter blur-3xl"></div>
      </div>
    </div>
  );
};

export default MissionProgress;