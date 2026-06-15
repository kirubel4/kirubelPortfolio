"use client";
import AnimSection from "./AnimSection";
import TypeWriter from "./TypeWriter";

export default function HeroSection() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="hero-section"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "120px 5% 80px",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div
        className="hero-grid"
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: 60,
          alignItems: "center",
        }}
      >
        {/* Left */}
        <div className="hero-copy">
          <AnimSection delay={0}>
            <p
              style={{
                color: "#00f5d4",
                fontFamily: "'Space Mono', monospace",
                fontSize: 13,
                letterSpacing: "3px",
                marginBottom: 16,
              }}
            >
              &gt; Hello, World!
            </p>
          </AnimSection>

          <AnimSection delay={0.1}>
            <h1
              style={{
                fontFamily: "'Space Mono', monospace",
                fontWeight: 700,
                fontSize: "clamp(32px,5.5vw,66px)",
                lineHeight: 1.1,
                color: "#fff",
                marginBottom: 16,
              }}
            >
              Kirubel Ayele <br />
              <TypeWriter
                texts={[
                  "Machine Learning",
                  "Fullstack ",
                  "APIs",
                  "Mobile Apps",
                ]}
              />
            </h1>
          </AnimSection>

          <AnimSection delay={0.2}>
            <p
              style={{
                color: "#c8c8d8",
                fontSize: 16,
                lineHeight: 1.9,
                maxWidth: 460,
                marginBottom: 36,
                fontWeight: 300,
              }}
            >
              Building AI-powered products and high-performance web
              applications. Passionate about machine learning, scalable systems,
              clean code, and seamless user experiences.
            </p>
          </AnimSection>

          <AnimSection delay={0.3}>
            <div
              className="hero-actions"
              style={{ display: "flex", gap: 14, flexWrap: "wrap" }}
            >
              <button
                onClick={() => scrollTo("projects")}
                style={{
                  padding: "13px 30px",
                  background: "#00f5d4",
                  border: "none",
                  borderRadius: 4,
                  color: "#050510",
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "1px",
                  animation: "pulse 2.5s infinite",
                  transition: "transform 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-2px)")
                }
                onMouseLeave={(e) => (e.currentTarget.style.transform = "none")}
              >
                View Projects
              </button>
              <button
                onClick={() => scrollTo("contact")}
                style={{
                  padding: "13px 30px",
                  background: "transparent",
                  border: "1px solid #ffffff22",
                  borderRadius: 4,
                  color: "#e0e0e0",
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 12,
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = "#ffffff44")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = "#ffffff22")
                }
              >
                Contact Me
              </button>
            </div>
          </AnimSection>

          <AnimSection delay={0.4}>
            <div
              className="hero-stats"
              style={{ display: "flex", gap: 28, marginTop: 44 }}
            >
              {[
                ["2+", "Years Exp"],
                ["35+", "Projects"],
                ["10+", "Tech Stack"],
              ].map(([n, l]) => (
                <div key={l}>
                  <div
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: 26,
                      fontWeight: 700,
                      color: "#00f5d4",
                    }}
                  >
                    {n}
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      color: "#555577",
                      letterSpacing: "1px",
                    }}
                  >
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </AnimSection>
        </div>

        {/* Photo */}
        <AnimSection delay={0.25}>
          <div
            className="hero-photo"
            style={{
              position: "relative",
              width: 360,
              height: 360,
              flexShrink: 0,
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: -3,
                borderRadius: "50%",
                background: "conic-gradient(#00f5d4,#7209b7,#f72585,#00f5d4)",
                animation: "spin 6s linear infinite",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 3,
                borderRadius: "50%",
                background: "linear-gradient(135deg,#0d0d2b,#1a0a2e,#0d1a2b)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
              }}
            >
              {/* 👉 Replace this div with <img src="/photo.jpg" style={{width:'100%',height:'100%',objectFit:'cover'}} alt="Your Name" /> */}
              <img
                src="https://res.cloudinary.com/dv5ngz0tc/image/upload/IMG_0528_1_1_jwjrk2.png"
                alt="Profile"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              <p
                style={{
                  color: "#00f5d444",
                  fontSize: 10,
                  fontFamily: "'Space Mono', monospace",
                  marginTop: 6,
                }}
              ></p>
            </div>
            {/* Orbit dots */}
            <div
              style={{
                position: "absolute",
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: "#00f5d4",
                boxShadow: "0 0 12px #00f5d4",
                top: "50%",
                left: "50%",
                marginTop: -5,
                marginLeft: -5,
                animation: "orbit 4s linear infinite",
              }}
            />
            <div
              style={{
                position: "absolute",
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: "#f72585",
                boxShadow: "0 0 12px #f72585",
                top: "50%",
                left: "50%",
                marginTop: -5,
                marginLeft: -5,
                animation: "orbitRev 5s linear infinite",
              }}
            />
          </div>
        </AnimSection>
      </div>

      {/* Scroll hint */}
      <div
        className="hero-scroll-hint"
        style={{
          position: "absolute",
          bottom: 36,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6,
          animation: "float 2s ease-in-out infinite",
        }}
      >
        <span
          style={{
            fontSize: 10,
            color: "#333355",
            fontFamily: "'Space Mono', monospace",
            letterSpacing: "2px",
          }}
        >
          SCROLL
        </span>
        <div
          style={{
            width: 1,
            height: 36,
            background: "linear-gradient(#00f5d4,transparent)",
          }}
        />
      </div>
    </section>
  );
}
