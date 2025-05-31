import React, { useState } from 'react';
import { Wallet } from 'lucide-react';

const WalletButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <button
      className="relative overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-cyan-500 to-green-500 opacity-70 rounded-lg blur-md group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative flex items-center gap-2 px-5 py-2.5 bg-gray-900/90 border border-purple-500/30 rounded-lg z-10 transition-all duration-300">
        <Wallet 
          size={18} 
          className={`text-cyan-400 ${isHovered ? 'animate-pulse' : ''}`} 
        />
        <span className="font-orbitron tracking-wide text-sm text-white">
          Connect Wallet
        </span>
        <div className={`absolute inset-0 bg-gradient-to-r from-purple-900/40 to-cyan-900/40 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
      </div>
    </button>
  );
};

export default WalletButton;