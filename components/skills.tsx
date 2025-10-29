import { Card } from "@/components/ui/card"
import { Cpu, Code, Wrench, Radio, Users } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      icon: Cpu,
      title: "Embedded Systems",
      skills: ["8051 Microcontroller", "Arduino", "Sensor Interfacing", "Motor Control"],
    },
    {
      icon: Code,
      title: "Programming",
      skills: ["Embedded C", "C Programming", "Python Basics", "Arduino IDE"],
    },
    {
      icon: Wrench,
      title: "Tools & Software",
      skills: ["Keil", "Proteus", "Matlab & Simulink", "Multisim", "TinkerCAD"],
    },
    {
      icon: Radio,
      title: "Electronics",
      skills: ["Digital Circuits", "Analog Circuits", "Op-Amps", "Flip-Flops"],
    },
    {
      icon: Users,
      title: "Soft Skills",
      skills: ["Teamwork", "Documentation", "Quick Learning", "Problem Solving"],
    },
  ]

  return (
    <section id="skills" className="py-20 border-t border-border bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            <span className="font-mono text-accent">{"> "}</span>
            Skills & Abilities
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="p-6 hover:border-accent transition-colors">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <category.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-mono font-semibold mb-3 text-foreground">{category.title}</h3>
                    <ul className="space-y-2">
                      {category.skills.map((skill, skillIndex) => (
                        <li key={skillIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 p-6 border border-border rounded-lg bg-background">
            <p className="font-mono text-sm text-accent mb-3">{"// Additional Expertise"}</p>
            <div className="flex flex-wrap gap-2">
              {[
                "Bluetooth (HC-05)",
                "Serial Communication",
                "Circuit Design",
                "System Simulation",
                "UV-C Sterilization",
                "TDS Sensing",
                "OLED Display",
                "L298N Motor Driver",
              ].map((tech, index) => (
                <span key={index} className="px-3 py-1 text-sm bg-muted text-muted-foreground rounded-md font-mono">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
