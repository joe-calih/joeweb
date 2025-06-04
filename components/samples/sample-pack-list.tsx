import type React from "react"

interface Sample {
  name: string
  duration: string
  bpm: string
  key: string
  type: string
  category: string
}

interface SamplePackListProps {
  samples?: Sample[]
}

export const SamplePackList: React.FC<SamplePackListProps> = ({ samples = [] }) => {
  // Group samples by category
  const samplesByCategory: Record<string, Sample[]> = {}

  samples.forEach((sample) => {
    if (!samplesByCategory[sample.category]) {
      samplesByCategory[sample.category] = []
    }
    samplesByCategory[sample.category].push(sample)
  })

  return (
    <div className="mt-8">
      {Object.entries(samplesByCategory).length > 0 ? (
        Object.entries(samplesByCategory).map(([category, categorySamples]) => (
          <div key={category} className="mb-8">
            <h3 className="text-xl font-bold text-white mb-4">{category}</h3>
            <div className="bg-[#1a1a1a] rounded-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-[#252525] text-left">
                  <tr>
                    <th className="py-3 px-4 text-gray-400 font-medium">Name</th>
                    <th className="py-3 px-4 text-gray-400 font-medium">Duration</th>
                    <th className="py-3 px-4 text-gray-400 font-medium hidden md:table-cell">BPM</th>
                    <th className="py-3 px-4 text-gray-400 font-medium hidden md:table-cell">Key</th>
                    <th className="py-3 px-4 text-gray-400 font-medium">Type</th>
                    <th className="py-3 px-4 text-gray-400 font-medium text-right">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {categorySamples.map((sample, index) => (
                    <tr
                      key={`${category}-${sample.name}-${index}`}
                      className={`border-t border-[#333] ${index % 2 === 0 ? "bg-[#1a1a1a]" : "bg-[#1f1f1f]"}`}
                    >
                      <td className="py-3 px-4 text-white font-medium">{sample.name}</td>
                      <td className="py-3 px-4 text-gray-400">{sample.duration}</td>
                      <td className="py-3 px-4 text-gray-400 hidden md:table-cell">{sample.bpm || "-"}</td>
                      <td className="py-3 px-4 text-gray-400 hidden md:table-cell">{sample.key || "-"}</td>
                      <td className="py-3 px-4 text-gray-400">{sample.type}</td>
                      <td className="py-3 px-4 text-right">
                        <button className="bg-[#fc3c44] hover:bg-[#e63946] text-white text-sm py-1 px-3 rounded">
                          Preview
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center py-12 bg-[#1a1a1a] rounded-lg">
          <p className="text-gray-400">No samples available</p>
        </div>
      )}
    </div>
  )
}

// Export both default and named export for compatibility
export default SamplePackList
