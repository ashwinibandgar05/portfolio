import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Droplets, Car, FlaskConical } from "lucide-react"

export function Projects() {
  const projects = [
    {
      icon: Droplets,
      title: "Smart Water-Storing Vehicle for Urban Flood Mitigation",
      description:
        "Developed a smart water-storing vehicle aimed at mitigating urban flooding by collecting and storing excess water from flooded streets. The system integrates real-time water depth sensing and mobile storage to enhance emergency response and improve urban flood resilience.",
      technologies: ["Arduino UNO", "Ultrasonic Sensors", "Water Pump", "TinkerCAD"],
      highlights: [
        "Real-time water depth sensing",
        "Mobile water storage system",
        "Emergency response enhancement",
        "Circuit simulation in TinkerCAD",
      ],
      achievement: "🏆 1st Runner-up at INNOVISION 2025",
    },
    {
      icon: Car,
      title: "Bluetooth Controlled Robot Car",
      description:
        "Designed and developed a Bluetooth-controlled robot car using Arduino UNO, L298N motor driver, and HC-05 Bluetooth module. The system enables wireless control of robot movement through a smartphone app, interpreting directional commands to control two DC motors.",
      technologies: ["Arduino UNO", "L298N Motor Driver", "HC-05 Bluetooth", "Embedded C"],
      highlights: [
        "Wireless smartphone control",
        "Bidirectional motor control",
        "Serial communication over Bluetooth",
        "Real-time command interpretation",
      ],
    },
    {
      icon: FlaskConical,
      title: "Smart Water Quality Detection & Sterilization Bottle – AquaVeritas",
      description:
        "Developed AquaVeritas, a smart, portable water bottle that detects water quality in real time and automatically sterilizes it using UV-C light. Designed as a cost-effective solution (~₹1042), it enhances accessibility to clean drinking water, especially in remote or underdeveloped areas.",
      technologies: ["Arduino Nano", "TDS Sensor", "UV-C Light", "OLED Display"],
      highlights: [
        "Real-time TDS value monitoring",
        "Automatic UV-C sterilization",
        "Visual LED indicators",
        "Cost-effective design (~₹1042)",
      ],
    },
  ]

  return (
    <section id="projects" className="py-20 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="font-mono text-accent">{"> "}</span>
            Projects in Embedded
          </h2>
          <p className="text-muted-foreground mb-12 font-mono text-sm">
            {"// Real-world solutions using embedded systems"}
          </p>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <Card key={index} className="p-6 md:p-8 hover:border-accent transition-all">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="p-4 rounded-lg bg-accent/10 w-fit">
                      <project.icon className="h-8 w-8 text-accent" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 text-balance">{project.title}</h3>

                    {project.achievement && (
                      <div className="mb-3">
                        <Badge variant="secondary" className="font-mono text-xs">
                          {project.achievement}
                        </Badge>
                      </div>
                    )}

                    <p className="text-muted-foreground leading-relaxed mb-4">{project.description}</p>

                    <div className="mb-4">
                      <p className="font-mono text-sm text-accent mb-2">{"// Key Highlights"}</p>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {project.highlights.map((highlight, hIndex) => (
                          <li key={hIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-accent mt-1">→</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <p className="font-mono text-sm text-accent mb-2">{"// Technologies"}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, tIndex) => (
                          <span
                            key={tIndex}
                            className="px-3 py-1 text-xs bg-muted text-muted-foreground rounded-md font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
