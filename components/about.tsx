export function About() {
  return (
    <section id="about" className="py-20 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            <span className="font-mono text-accent">{"> "}</span>
            About Me
          </h2>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p className="text-lg">
              I'm an Electronics & Telecommunication engineering student at Pimpari Chinchwad College Of Engineering,
              Nigdi Pune, with a strong passion for embedded systems and IoT solutions.
            </p>

            <p className="text-lg">
              My expertise lies in developing practical solutions using microcontrollers like Arduino and 8051,
              interfacing various sensors and actuators, and creating systems that address real-world challenges. I
              focus on teamwork, practical application, and innovation in every project I undertake.
            </p>

            <p className="text-lg">
              I'm particularly interested in projects that combine hardware and software to create intelligent systems
              for urban challenges, environmental monitoring, and automation. My recent work includes smart flood
              mitigation systems and water quality detection devices.
            </p>

            <div className="pt-6 border-t border-border mt-8">
              <p className="font-mono text-sm text-accent mb-2">{"// Current Status"}</p>
              <p className="text-lg">
                🎓 Expected Graduation: <span className="text-foreground font-semibold">May 2027</span>
              </p>
              <p className="text-lg mt-2">
                🏆 Recent Achievement:{" "}
                <span className="text-foreground font-semibold">1st Runner-up at INNOVISION 2025</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
