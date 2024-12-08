import React from 'react';
import { PlayIcon, PauseIcon, ArrowPathIcon } from '@heroicons/react/24/solid';

export default function Controls({ isRunning, onToggle, onReset, onSpeedChange, speed }) {
  return (
    <div className="flex items-center gap-4 bg-gray-800 p-4 rounded-lg">
      <button
        onClick={onToggle}
        className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-md text-white"
      >
        {isRunning ? (
          <>
            <PauseIcon className="w-5 h-5" />
            Pause
          </>
        ) : (
          <>
            <PlayIcon className="w-5 h-5" />
            Start
          </>
        )}
      </button>
      
      <button
        onClick={onReset}
        className="flex items-center gap-2 px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded-md text-white"
      >
        <ArrowPathIcon className="w-5 h-5" />
        Reset
      </button>

      <div className="flex items-center gap-2">
        <label htmlFor="speed" className="text-white">Speed:</label>
        <input
          id="speed"
          type="range"
          min="50"
          max="500"
          step="50"
          value={speed}
          onChange={(e) => onSpeedChange(Number(e.target.value))}
          className="w-32"
        />
      </div>
    </div>
  );
}