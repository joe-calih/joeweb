"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Eye, EyeOff, Apple, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface AuthModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

type AuthView = "signin" | "signup" | "forgot"

export function AuthModal({ open, onOpenChange }: AuthModalProps) {
  const [view, setView] = useState<AuthView>("signin")
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", { view, formData })
  }

  const resetForm = () => {
    setFormData({
      email: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
    })
    setShowPassword(false)
  }

  const switchView = (newView: AuthView) => {
    setView(newView)
    resetForm()
  }

  if (!open) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50"
      >
        {/* Backdrop that blurs everything except header */}
        <div className="absolute inset-0 bg-black/30" onClick={() => onOpenChange(false)} />

        {/* Modal Container */}
        <div className="flex items-center justify-center min-h-screen p-4">
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.4, bounce: 0.3 }}
            className="relative w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-background/95 backdrop-blur-2xl border border-border/50 rounded-3xl shadow-2xl overflow-hidden ring-1 ring-white/10">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border/50 bg-background/50">
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-br from-[#fc3c44] to-[#e63946] rounded-xl w-10 h-10 flex items-center justify-center shadow-lg">
                    <Apple className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-xl font-semibold text-foreground">
                    {view === "signin" && "Sign In"}
                    {view === "signup" && "Create Account"}
                    {view === "forgot" && "Reset Password"}
                  </h2>
                </div>
                <button
                  onClick={() => onOpenChange(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors p-1 rounded-lg hover:bg-muted/50"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 bg-background/30">
                <form onSubmit={handleSubmit} className="space-y-4">
                  {view === "signup" && (
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-sm font-medium text-foreground">
                          First Name
                        </Label>
                        <Input
                          id="firstName"
                          type="text"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          className="bg-background/60 backdrop-blur-sm border-border/50 focus:border-[#fc3c44] focus:ring-[#fc3c44]/20 rounded-xl"
                          placeholder="John"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-sm font-medium text-foreground">
                          Last Name
                        </Label>
                        <Input
                          id="lastName"
                          type="text"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                          className="bg-background/60 backdrop-blur-sm border-border/50 focus:border-[#fc3c44] focus:ring-[#fc3c44]/20 rounded-xl"
                          placeholder="Doe"
                          required
                        />
                      </div>
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="bg-background/60 backdrop-blur-sm border-border/50 focus:border-[#fc3c44] focus:ring-[#fc3c44]/20 rounded-xl"
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  {view !== "forgot" && (
                    <div className="space-y-2">
                      <Label htmlFor="password" className="text-sm font-medium text-foreground">
                        Password
                      </Label>
                      <div className="relative">
                        <Input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          value={formData.password}
                          onChange={(e) => handleInputChange("password", e.target.value)}
                          className="bg-background/60 backdrop-blur-sm border-border/50 focus:border-[#fc3c44] focus:ring-[#fc3c44]/20 rounded-xl pr-10"
                          placeholder="••••••••"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                        >
                          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                  )}

                  {view === "signup" && (
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword" className="text-sm font-medium text-foreground">
                        Confirm Password
                      </Label>
                      <Input
                        id="confirmPassword"
                        type="password"
                        value={formData.confirmPassword}
                        onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                        className="bg-background/60 backdrop-blur-sm border-border/50 focus:border-[#fc3c44] focus:ring-[#fc3c44]/20 rounded-xl"
                        placeholder="••••••••"
                        required
                      />
                    </div>
                  )}

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#fc3c44] to-[#e63946] hover:from-[#e63946] hover:to-[#dc2626] text-white font-medium py-3 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    {view === "signin" && "Sign In"}
                    {view === "signup" && "Create Account"}
                    {view === "forgot" && "Send Reset Link"}
                  </Button>
                </form>

                {view !== "forgot" && (
                  <>
                    <div className="relative my-6">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-border/50" />
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="bg-background/80 backdrop-blur-sm px-4 text-muted-foreground rounded-full">
                          or continue with
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <Button
                        type="button"
                        variant="outline"
                        className="bg-background/60 backdrop-blur-sm border-border/50 hover:bg-background/80 rounded-xl"
                      >
                        <Apple className="w-4 h-4 mr-2" />
                        Apple
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        className="bg-background/60 backdrop-blur-sm border-border/50 hover:bg-background/80 rounded-xl"
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        Google
                      </Button>
                    </div>
                  </>
                )}

                {/* Footer Links */}
                <div className="mt-6 text-center space-y-2">
                  {view === "signin" && (
                    <>
                      <button
                        type="button"
                        onClick={() => switchView("forgot")}
                        className="text-sm text-[#fc3c44] hover:underline"
                      >
                        Forgot your password?
                      </button>
                      <div className="text-sm text-muted-foreground">
                        Don't have an account?{" "}
                        <button
                          type="button"
                          onClick={() => switchView("signup")}
                          className="text-[#fc3c44] hover:underline font-medium"
                        >
                          Sign up
                        </button>
                      </div>
                    </>
                  )}

                  {view === "signup" && (
                    <div className="text-sm text-muted-foreground">
                      Already have an account?{" "}
                      <button
                        type="button"
                        onClick={() => switchView("signin")}
                        className="text-[#fc3c44] hover:underline font-medium"
                      >
                        Sign in
                      </button>
                    </div>
                  )}

                  {view === "forgot" && (
                    <div className="text-sm text-muted-foreground">
                      Remember your password?{" "}
                      <button
                        type="button"
                        onClick={() => switchView("signin")}
                        className="text-[#fc3c44] hover:underline font-medium"
                      >
                        Sign in
                      </button>
                    </div>
                  )}
                </div>

                {view === "signup" && (
                  <div className="mt-4 text-xs text-muted-foreground text-center">
                    By creating an account, you agree to our{" "}
                    <a href="/privacy" className="text-[#fc3c44] hover:underline">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="/privacy" className="text-[#fc3c44] hover:underline">
                      Privacy Policy
                    </a>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
