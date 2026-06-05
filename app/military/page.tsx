export default function Military() {
  const images = [
    "/media/asu.png",
    "/media/pfc_sah.png",
    "/media/pentagon.png", 
    "/media/sah_ocs.png",
    "/media/sah_bbq_1.png", 
    "/media/sah_brm.png"
  ];

  return (
    <section className="section-wrapper military-section" id="military">
      {/* Background Video */}
      <video autoPlay loop muted playsInline className="bg-video">
        <source src="/media/fireworks.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="hero-overlay"></div>

      <div className="content-card military-card">
        {/* Uniform Grid Container showing all images simultaneously */}
        <div className="image-grid-stage">
          {images.map((src, index) => (
            <div key={index} className="grid-image-wrapper">
              <img src={src} alt={`Military gallery ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}