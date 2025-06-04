import type React from "react"
import { useMDXComponent } from "next-contentlayer/hooks"
import type { LightroomPreset } from "@/lib/lightroom-presets"

interface PresetInstructionsProps {
  preset: LightroomPreset
}

const PresetInstructions: React.FC<PresetInstructionsProps> = ({ preset }) => {
  const Component = useMDXComponent(preset.content)

  return (
    <div className="preset-instructions">
      <h1>{preset.title}</h1>
      <Component />
    </div>
  )
}

export default PresetInstructions
