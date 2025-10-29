"use client"

import { useEffect, useState } from "react"
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const [displayText, setDisplayText] = useState("")
  const fullText = "Embedded Systems Engineer"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <p className="font-mono text-accent mb-2">{"> whoami"}</p>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-balance">Ashwini Bandgar</h1>
            <div className="h-12 flex items-center">
              <p className="font-mono text-xl md:text-2xl text-muted-foreground">
                {displayText}
                <span className="animate-pulse">_</span>
              </p>
            </div>
          </div>

          <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl">
            Electronics & Telecommunication engineering student with hands-on experience in embedded systems, sensor
            interfacing, and Arduino-based projects. Passionate about solving real-world problems through technology.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <Button asChild variant="default" size="lg">
              <a href="#projects" className="font-mono">
                {"> view_projects()"}
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#contact" className="font-mono">
                {"> contact_me()"}
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <a
              href="mailto:ashwini.bandgar23@pccoepune.org"
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span className="font-mono">ashwini.bandgar23@pccoepune.org</span>
            </a>
            <a href="tel:9970543733" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone className="h-4 w-4" />
              <span className="font-mono">9970543733</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span className="font-mono">Nigadi, Pune-411002</span>
            </div>
          </div>

          <div className="flex gap-4 mt-6">
            <Button asChild variant="ghost" size="icon">
              <a
                href="https://linkedin.com/in/ashwini-bandgar-97195b2b2"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
