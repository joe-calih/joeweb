"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Cookie, Settings, BarChart, Target, Shield } from "lucide-react"

export function PrivacyCookies() {
  const cookieTypes = [
    {
      icon: Shield,
      title: "Essential Cookies",
      description: "Required for basic website functionality and security",
      required: true,
      examples: ["Authentication", "Security", "Site preferences"],
      color: "text-green-400",
    },
    {
      icon: BarChart,
      title: "Analytics Cookies",
      description: "Help us understand how visitors interact with our website",
      required: false,
      examples: ["Page views", "User behavior", "Performance metrics"],
      color: "text-blue-400",
    },
    {
      icon: Target,
      title: "Marketing Cookies",
      description: "Used to deliver relevant advertisements and track campaigns",
      required: false,
      examples: ["Ad targeting", "Campaign tracking", "Social media integration"],
      color: "text-purple-400",
    },
    {
      icon: Settings,
      title: "Functional Cookies",
      description: "Enable enhanced functionality and personalization",
      required: false,
      examples: ["Language preferences", "Theme settings", "Saved filters"],
      color: "text-orange-400",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Cookie <span className="text-[#fc3c44]">Policy</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We use cookies to enhance your browsing experience and provide personalized content. Learn about the
            different types of cookies we use and manage your preferences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {cookieTypes.map((cookie, index) => (
            <motion.div
              key={cookie.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm p-6 h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className={`${cookie.color}`}>
                      <cookie.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{cookie.title}</h3>
                      {cookie.required && (
                        <span className="text-xs text-gray-400 bg-gray-700 px-2 py-1 rounded mt-1 inline-block">
                          Required
                        </span>
                      )}
                    </div>
                  </div>
                  {!cookie.required && <Switch className="data-[state=checked]:bg-[#fc3c44]" />}
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">{cookie.description}</p>
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-2">Examples</h4>
                  <ul className="space-y-1">
                    {cookie.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="flex items-center gap-2 text-gray-300">
                        <div className="w-1 h-1 bg-gray-500 rounded-full" />
                        <span className="text-sm">{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <Card className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/20 backdrop-blur-sm p-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <Cookie className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-white mb-2">Cookie Preferences</h3>
                <p className="text-gray-300">
                  You can manage your cookie preferences at any time through your browser settings or our preference
                  center.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="bg-[#fc3c44] hover:bg-[#e63946] text-white">
                  <Settings className="w-4 h-4 mr-2" />
                  Manage Preferences
                </Button>
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  Learn More
                </Button>
              </div>
            </div>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur-sm p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Third-Party Cookies</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">GA</span>
                </div>
                <h4 className="font-semibold text-white mb-2">Google Analytics</h4>
                <p className="text-gray-400 text-sm">Website analytics and performance tracking</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">FB</span>
                </div>
                <h4 className="font-semibold text-white mb-2">Facebook Pixel</h4>
                <p className="text-gray-400 text-sm">Social media integration and advertising</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">HS</span>
                </div>
                <h4 className="font-semibold text-white mb-2">Hotjar</h4>
                <p className="text-gray-400 text-sm">User experience and behavior analysis</p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
