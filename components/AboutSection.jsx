import AnimSection from "./AnimSection";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="about-section"
      style={{
        padding: "100px 5% 80px",
        background: "rgba(10,10,30,0.6)",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div
        className="about-grid"
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 60,
          alignItems: "start",
        }}
      >
        {/* Left — Text */}
        <div>
          <AnimSection delay={0}>
            <p
              style={{
                color: "#00f5d4",
                fontFamily: "'Space Mono',monospace",
                fontSize: 11,
                letterSpacing: "3px",
                marginBottom: 8,
              }}
            >
              01 // ABOUT
            </p>
            <h2
              style={{
                fontFamily: "'Space Mono',monospace",
                fontWeight: 700,
                fontSize: "clamp(24px,4vw,40px)",
                color: "#fff",
                marginBottom: 12,
              }}
            >
              About <span style={{ color: "#00f5d4" }}>Me</span>
            </h2>
            <div
              style={{
                width: 60,
                height: 3,
                background: "linear-gradient(90deg,#00f5d4,transparent)",
                marginBottom: 36,
              }}
            />
          </AnimSection>

          <AnimSection delay={0.1}>
            <p
              style={{
                color: "#c8c8d8",
                fontSize: 15,
                lineHeight: 2,
                marginBottom: 18,
              }}
            >
              I'm a{" "}
              <span style={{ color: "#fff", fontWeight: 600 }}>
                Software Engineer
              </span>{" "}
              specializing in Full-Stack Development and ML/AI — building
              scalable web applications, intelligent systems, and turning
              complex ideas into practical, production-ready solutions.
            </p>

            <p
              style={{
                color: "#c8c8d8",
                fontSize: 15,
                lineHeight: 2,
                marginBottom: 32,
              }}
            >
              With 4 years in software development — 2 years of professional
              experience — I've delivered projects across frontend, backend, and
              machine learning, always prioritising clean architecture,
              performance, and user experience.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {[
                { text: "Available for hire", color: "#00f5d4", border: "#00f5d433", bg: "#00f5d40d" },
                { text: "Open to remote",     color: "#b085f5", border: "#7209b733", bg: "#7209b70d" },
                { text: "Addis Ababa",        color: "#f72585", border: "#f7258533", bg: "#f725850d" },
              ].map((t) => (
                <span
                  key={t.text}
                  style={{
                    display: "inline-block",
                    padding: "5px 14px",
                    borderRadius: 4,
                    fontSize: 11,
                    fontFamily: "'Space Mono',monospace",
                    letterSpacing: "0.5px",
                    background: t.bg,
                    color: t.color,
                    border: `1px solid ${t.border}`,
                  }}
                >
                  {t.text}
                </span>
              ))}
            </div>
          </AnimSection>
        </div>

        {/* Right — Cards */}
        <AnimSection delay={0.2}>
          <div
            className="about-cards"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}
          >
            {[
              {
                label: "PERFORMANCE",
                title: "Optimised by default",
                desc: "Lighthouse 95+ scores across every project I ship.",
              },
              {
                label: "DESIGN",
                title: "Pixel-perfect UI",
                desc: "Translating Figma designs into precise, living interfaces.",
              },
              {
                label: "CODE QUALITY",
                title: "Clean architecture",
                desc: "Readable, tested, and maintainable at every layer.",
              },
              {
                label: "RESPONSIVE",
                title: "All devices",
                desc: "Mobile-first approach that works flawlessly everywhere.",
              },
            ].map((card) => (
              <div
                key={card.title}
                style={{
                  background: "#07071a",
                  border: "1px solid #ffffff0a",
                  borderRadius: 12,
                  padding: "22px 20px",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#00f5d433";
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.background = "#0a0a22";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#ffffff0a";
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.background = "#07071a";
                }}
              >
                <p
                  style={{
                    color: "#00f5d4",
                    fontSize: 9,
                    fontFamily: "'Space Mono',monospace",
                    letterSpacing: "2px",
                    marginBottom: 10,
                  }}
                >
                  {card.label}
                </p>
                <p
                  style={{
                    color: "#fff",
                    fontSize: 14,
                    fontWeight: 600,
                    marginBottom: 6,
                    lineHeight: 1.4,
                  }}
                >
                  {card.title}
                </p>
                <p style={{ color: "#6666888", fontSize: 12, lineHeight: 1.7 }}>
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </AnimSection>
      </div>
    </section>
  );
}