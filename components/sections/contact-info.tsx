"use client"

import { motion } from "framer-motion"
import { MapPin, Clock, Globe } from "lucide-react"

export function ContactInfo() {
  return (
    <div className="w-full bg-[#1a1a1a]">
      <div className="max-w-[1200px] mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Visit Our <span className="text-[#fc3c44]">Offices</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We have offices around the world to better serve our global artist community
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              city: "Los Angeles",
              address: "1 Apple Park Way, Cupertino, CA 95014",
              hours: "Mon-Fri: 9AM-6PM PST",
              timezone: "Pacific Time",
            },
            {
              city: "New York",
              address: "767 5th Ave, New York, NY 10153",
              hours: "Mon-Fri: 9AM-6PM EST",
              timezone: "Eastern Time",
            },
            {
              city: "London",
              address: "1-6 Hanover St, London W1S 1YP, UK",
              hours: "Mon-Fri: 9AM-6PM GMT",
              timezone: "Greenwich Mean Time",
            },
          ].map((office, index) => (
            <motion.div
              key={office.city}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#0a0a0a] border border-[#333] rounded-xl p-6 hover:border-[#fc3c44] transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-4">{office.city}</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#fc3c44] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{office.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#fc3c44] flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{office.hours}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-[#fc3c44] flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{office.timezone}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
