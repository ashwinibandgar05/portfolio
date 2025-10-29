"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink } from "lucide-react"

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ashwini.bandgar23@pccoepune.org",
      href: "mailto:ashwini.bandgar23@pccoepune.org",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9970543733",
      href: "tel:9970543733",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Nigadi, Pune-411002, India",
      href: null,
    },
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/ashwini-bandgar-97195b2b2",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/ashwinibandgar05",
    },
  ]

  return (
    <section id="contact" className="py-20 border-t border-border bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="font-mono text-accent">{"> "}</span>
            Get In Touch
          </h2>
          <p className="text-muted-foreground mb-12 font-mono text-sm">
            {"// Feel free to reach out for collaborations or opportunities"}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {contactInfo.map((item, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <item.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div className="flex-1">
                    <p className="font-mono text-sm text-muted-foreground mb-1">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-foreground hover:text-accent transition-colors break-all">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-8 bg-background">
            <p className="font-mono text-sm text-accent mb-4">{"// Connect with me"}</p>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((link, index) => (
                <Button key={index} asChild variant="outline" size="lg">
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="font-mono">
                    <link.icon className="h-5 w-5 mr-2" />
                    {link.label}
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                </Button>
              ))}
            </div>
          </Card>

          <div className="mt-12 text-center">
            <p className="font-mono text-sm text-muted-foreground">
              {"// Built with Next.js, TypeScript, and Tailwind CSS"}
            </p>
            <p className="font-mono text-sm text-muted-foreground mt-2">© 2025 Ashwini Bandgar. All rights reserved.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
