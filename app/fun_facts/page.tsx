export default function FloatingWords() {
  // Upgraded array to include flags, programming icons, and custom labels
  const words = [
    "🇳🇵 Nepali", 
    "🇮🇳 Hindi", 
    "🇵🇰 Urdu", 
    "🇮🇳 Punjabi", 
    "🇮🇳 Bhojpuri", 
    "🇮🇳 Maithali", 
    "🇺🇸 English",
    "🇪🇸 Español",
    "🐍 Python"


  ];

  return (
    <section className="section-wrapper floating-section" id="skills">
      {/* Background Video Layout Matching Hobbies/Military */}
      <video autoPlay loop muted playsInline className="bg-video">
        <source src="/media/tech.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for text contrast */}
      <div className="hero-overlay"></div>

      {/* Content Container */}
      <div className="content-card floating-card">
        <div className="floating-container">
          {words.map((word, i) => (
            <span key={i} className={`word word-${i}`}>
              {word}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}