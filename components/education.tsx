import { Card } from "@/components/ui/card"
import { GraduationCap, Calendar, MapPin } from "lucide-react"

export function Education() {
  return (
    <section id="education" className="py-20 border-t border-border bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            <span className="font-mono text-accent">{"> "}</span>
            Education
          </h2>

          <Card className="p-8">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="p-4 rounded-lg bg-accent/10">
                  <GraduationCap className="h-8 w-8 text-accent" />
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">
                  Bachelor of Engineering in Electronics and Telecommunication
                </h3>

                <p className="text-lg text-foreground mb-4">Pimpari Chinchwad College Of Engineering, Nigdi Pune</p>

                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-accent" />
                    <span className="font-mono">Expected Graduation: May 2027</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-accent" />
                    <span className="font-mono">Nigadi, Pune</span>
                  </div>
                </div>

                <div className="border-t border-border pt-6">
                  <p className="font-mono text-sm text-accent mb-3">{"// Focus Areas"}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      "Embedded Systems Design",
                      "Microcontroller Programming",
                      "Digital & Analog Electronics",
                      "Wireless Communication",
                      "Circuit Design & Simulation",
                      "IoT Applications",
                    ].map((area, index) => (
                      <div key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-accent mt-1">•</span>
                        <span>{area}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
