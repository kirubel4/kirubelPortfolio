import AnimSection from "./AnimSection";

export default function AboutSection() {
  return (
    <section
      id="about"
      style={{
        padding: "100px 5% 80px",
        background: "rgba(10,10,30,0.6)",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 60,
          alignItems: "start",
        }}
      >
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
                color: "#9999bb",
                fontSize: 15,
                lineHeight: 2,
                marginBottom: 18,
              }}
            >
              I'm a <span style={{ color: "#00f5d4" }}>Software Engineer</span>{" "}
              specializing in Full-Stack Development and ML/AI. I enjoy building
              scalable web applications, intelligent systems, and turning
              complex ideas into practical solutions.
            </p>

            <p
              style={{
                color: "#9999bb",
                fontSize: 15,
                lineHeight: 2,
                marginBottom: 24,
              }}
            >
              With 4 years in software development, including 2 years of
              professional experience, I’ve worked across frontend, backend, and
              machine learning projects with a strong focus on clean code,
              performance, scalability, and user experience.
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 8,
                marginTop: 8,
              }}
            >
              {[
                {
                  text: "✓ Available for hire",
                  bg: "#00f5d411",
                  color: "#00f5d4",
                  border: "#00f5d433",
                },
                {
                  text: "🌍 Open to remote",
                  bg: "#7209b711",
                  color: "#b085f5",
                  border: "#7209b733",
                },
                {
                  text: "Addis Ababa",
                  bg: "#f7258511",
                  color: "#f72585",
                  border: "#f7258533",
                },
              ].map((t) => (
                <span
                  key={t.text}
                  style={{
                    display: "inline-block",
                    padding: "4px 12px",
                    borderRadius: 4,
                    fontSize: 11,
                    fontFamily: "'Space Mono',monospace",
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

        <AnimSection delay={0.2}>
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}
          >
            {[
              {
                icon: "⚡",
                title: "Performance",
                desc: "Lighthouse 95+ on every project",
              },
              {
                icon: "🎨",
                title: "Design Eye",
                desc: "Pixel-perfect from Figma to code",
              },
              {
                icon: "🔧",
                title: "Clean Code",
                desc: "Readable, tested, maintainable",
              },
              {
                icon: "📱",
                title: "Responsive",
                desc: "Mobile-first, all devices",
              },
            ].map((card) => (
              <div
                key={card.title}
                style={{
                  background: "#0a0a1e",
                  border: "1px solid #ffffff08",
                  borderRadius: 12,
                  padding: 20,
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#00f5d444";
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#ffffff08";
                  e.currentTarget.style.transform = "none";
                }}
              >
                <div style={{ fontSize: 26, marginBottom: 8 }}>{card.icon}</div>
                <div
                  style={{
                    color: "#fff",
                    fontSize: 14,
                    fontWeight: 600,
                    marginBottom: 4,
                  }}
                >
                  {card.title}
                </div>
                <div style={{ color: "#555577", fontSize: 12 }}>
                  {card.desc}
                </div>
              </div>
            ))}
          </div>
        </AnimSection>
      </div>
    </section>
  );
}
