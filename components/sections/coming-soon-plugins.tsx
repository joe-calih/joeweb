"use client"

import { motion } from "framer-motion"
import { Disc, Music, Sparkles, Wand2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ComingSoonPlugins() {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-background/80">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center px-4 py-1.5 mb-4 rounded-full bg-primary/10 border border-primary/20"
          >
            <Wand2 className="w-4 h-4 mr-2 text-primary" />
            <span className="text-sm font-medium text-primary">Coming Soon</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Music Plugins & Presets
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            We're crafting premium plugins and presets for your favorite music production software. Sign up to be
            notified when they launch and get exclusive early access.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {plugins.map((plugin, index) => (
            <motion.div
              key={plugin.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              viewport={{ once: true }}
              className="bg-card/30 backdrop-blur-sm border border-border rounded-xl p-6 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                <plugin.icon className="w-6 h-6 text-primary" />
              </div>

              <h3 className="text-xl font-semibold mb-2">{plugin.title}</h3>
              <p className="text-muted-foreground mb-4">{plugin.description}</p>

              <div className="flex items-center text-sm text-muted-foreground">
                <span className="flex items-center">
                  <Music className="w-4 h-4 mr-1" />
                  {plugin.compatibility}
                </span>
                <span className="mx-2">•</span>
                <span>{plugin.presets} presets</span>
              </div>

              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                  Coming Soon
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center p-8 rounded-xl bg-card/30 backdrop-blur-sm border border-border max-w-2xl mx-auto"
        >
          <h3 className="text-xl font-semibold mb-2">Get Early Access</h3>
          <p className="text-muted-foreground text-center mb-6">
            Join our waitlist to be the first to know when our plugins and presets are available. Early subscribers get
            30% off on launch day.
          </p>

          <div className="flex flex-col sm:flex-row w-full max-w-md gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <Button className="whitespace-nowrap">
              <Sparkles className="w-4 h-4 mr-2" />
              Join Waitlist
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const plugins = [
  {
    title: "Harmonic Synth Suite",
    description: "Advanced synthesizer plugin with 200+ presets for modern music production",
    compatibility: "VST, AU, AAX",
    presets: 200,
    icon: Sparkles,
  },
  {
    title: "Rhythm Engine",
    description: "Drum machine and rhythm designer with pattern sequencer and sample library",
    compatibility: "VST, AU, AAX",
    presets: 150,
    icon: Music,
  },
  {
    title: "Spectrum FX",
    description: "Professional audio effects suite with reverb, delay, compression and more",
    compatibility: "VST, AU, AAX",
    presets: 180,
    icon: Disc,
  },
]
