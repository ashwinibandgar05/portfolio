import { Card } from "@/components/ui/card"
import { Trophy, Calendar, MapPin, Users } from "lucide-react"

export function Achievements() {
  return (
    <section id="achievements" className="py-20 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            <span className="font-mono text-accent">{"> "}</span>
            Achievements
          </h2>

          <Card className="p-8 border-accent/50 bg-accent/5">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="p-4 rounded-lg bg-accent/20">
                  <Trophy className="h-8 w-8 text-accent" />
                </div>
              </div>

              <div className="flex-1">
                <div className="inline-block px-3 py-1 bg-accent text-accent-foreground rounded-md font-mono text-sm font-semibold mb-3">
                  🏆 1st Runner-up
                </div>

                <h3 className="text-2xl font-bold mb-3 text-balance">Techathon, INNOVISION 2025</h3>

                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Secured 1st Runner-up position at the National-Level Techno-Social Symposium for presenting the
                  project "Smart Water-Storing Vehicle for Urban Flood Mitigation"
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <span className="font-mono">5–6 February 2025</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <span className="font-mono">Rajarshi Shahu College of Engineering, Pune</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Users className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <span className="font-mono">Organized by JSPM Group of Institutes</span>
                  </div>
                </div>

                <div className="border-t border-border pt-6">
                  <p className="font-mono text-sm text-accent mb-3">{"// Project Highlights"}</p>
                  <ul className="space-y-2">
                    {[
                      "Innovative solution for urban flood management",
                      "Real-time water depth sensing technology",
                      "Mobile water storage and collection system",
                      "Practical application for emergency response",
                    ].map((highlight, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-accent mt-1">→</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
