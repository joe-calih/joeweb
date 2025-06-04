"use client"

import type React from "react"

interface SamplePackControlsProps {
  onPlay: () => void
  onStop: () => void
  onDownload: () => void
}

const SamplePackControls: React.FC<SamplePackControlsProps> = ({ onPlay, onStop, onDownload }) => {
  return (
    <div className="flex space-x-4">
      <button
        className="bg-[#fc3c44] hover:bg-[#e63946] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={onPlay}
      >
        Play
      </button>
      <button
        className="bg-[#fc3c44] hover:bg-[#e63946] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={onStop}
      >
        Stop
      </button>
      <button
        className="bg-[#fc3c44] hover:bg-[#e63946] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={onDownload}
      >
        Download
      </button>
    </div>
  )
}

export { SamplePackControls }
export default SamplePackControls
