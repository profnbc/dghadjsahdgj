import React, { useEffect, useRef, useState } from 'react';
import { Terminal } from 'lucide-react';

const terminalMessages = [
  { id: 1, text: "Establishing connection to Smoketron outpost...", delay: 1000 },
  { id: 2, text: "Connection secured. Welcome back, operator.", delay: 2000 },
  { id: 3, text: "Systems recovering after Krellnic Inversion event.", delay: 3000 },
  { id: 4, text: "Ecosystem restoration: 37% complete.", delay: 4000 },
  { id: 5, text: "Mining operations: ONLINE", delay: 5000 },
  { id: 6, text: "Token distribution network: STABLE", delay: 6000 },
  { id: 7, text: "Detected 2 unclaimed airdrops in your sector.", delay: 7000 },
  { id: 8, text: "Warning: LP Vault access temporarily restricted.", delay: 8000 },
  { id: 9, text: "DAO Council elections scheduled: T-minus 13 cycles.", delay: 9000 },
  { id: 10, text: "Marketplace reconstruction in progress: 58%.", delay: 10000 },
  { id: 11, text: "Running diagnostic on quantum relays...", delay: 11000 },
  { id: 12, text: "All systems nominal. Standby for further instructions.", delay: 12000 },
];

const MissionLog: React.FC = () => {
  const [visibleMessages, setVisibleMessages] = useState<typeof terminalMessages>([]);
  const [scanPosition, setScanPosition] = useState(0);
  const terminalRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    let timeouts: NodeJS.Timeout[] = [];
    
    terminalMessages.forEach((message) => {
      const timeout = setTimeout(() => {
        setVisibleMessages((prev) => [...prev, message]);
        
        if (terminalRef.current) {
          terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
      }, message.delay);
      
      timeouts.push(timeout);
    });

    // Scanning animation
    const scanInterval = setInterval(() => {
      setScanPosition(prev => (prev >= 100 ? 0 : prev + 1));
    }, 50);
    
    return () => {
      timeouts.forEach(clearTimeout);
      clearInterval(scanInterval);
    };
  }, []);
  
  return (
    <div className="relative rounded-lg overflow-hidden bg-gradient-to-br from-gray-900 via-gray-900 to-gray-900/80 border border-purple-500/20 backdrop-blur-sm p-5 h-full">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-cyan-400 to-green-400"></div>
      
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-lg font-orbitron font-bold text-white flex items-center gap-2">
          <Terminal size={18} className="text-green-400" />
          Mission Log / System Status
        </h2>
        <div className="text-xs font-mono text-gray-400 flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <span>TERMINAL ACTIVE</span>
        </div>
      </div>
      
      <div 
        ref={terminalRef}
        className="bg-gray-950 rounded-lg border border-gray-800 p-4 h-[250px] overflow-y-auto font-mono text-sm leading-relaxed hide-scrollbar relative"
      >
        <div className="space-y-2">
          {visibleMessages.map((message) => (
            <div key={message.id} className="flex">
              <span className="text-green-500 mr-2">&gt;</span>
              <span className="text-gray-400">{message.text}</span>
            </div>
          ))}
          <div className="flex h-5">
            <span className="text-green-500 mr-2">&gt;</span>
            <span className="w-3 h-5 bg-green-500 animate-pulse"></span>
          </div>
        </div>

        {/* Scanning effect */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(180deg, 
              transparent ${scanPosition - 2}%, 
              rgba(0, 240, 255, 0.1) ${scanPosition}%, 
              transparent ${scanPosition + 2}%
            )`
          }}
        ></div>
      </div>

      {/* System metrics */}
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="bg-gray-950/50 rounded-lg p-3 border border-gray-800">
          <div className="text-xs font-mono text-gray-500 mb-1">MEMORY USAGE</div>
          <div className="flex items-center justify-between">
            <div className="h-1 flex-1 bg-gray-800 rounded-full overflow-hidden mr-3">
              <div 
                className="h-full bg-cyan-400 progress-bar-grid"
                style={{ width: '67%' }}
              ></div>
            </div>
            <span className="text-xs font-mono text-cyan-400">67%</span>
          </div>
        </div>

        <div className="bg-gray-950/50 rounded-lg p-3 border border-gray-800">
          <div className="text-xs font-mono text-gray-500 mb-1">NETWORK LOAD</div>
          <div className="flex items-center justify-between">
            <div className="h-1 flex-1 bg-gray-800 rounded-full overflow-hidden mr-3">
              <div 
                className="h-full bg-purple-400 progress-bar-grid"
                style={{ width: '82%' }}
              ></div>
            </div>
            <span className="text-xs font-mono text-purple-400">82%</span>
          </div>
        </div>
      </div>

      {/* Ambient effects */}
      <div className="absolute bottom-0 right-0 w-full h-40 pointer-events-none opacity-10">
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-green-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500 rounded-full filter blur-3xl"></div>
      </div>
    </div>
  );
};

export default MissionLog;