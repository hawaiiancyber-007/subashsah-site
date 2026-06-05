export default function About() {
  const images = [
    "/media/Hanauma.jpg", 
    "/media/honolulu.jpeg", 
    "/media/5peaks.jpg",
    "/media/yellow.png", 
    "/media/nepal_usa.jpg", 

    "/media/nepal.jpg", 
    "/media/snow.png",
    "/media/raja_rani.png", 
    "/media/raja.png"
  ];

  return (
    <section className="section-wrapper about-section" id="about">
      {/* Background Video */}
      <video autoPlay loop muted playsInline className="bg-video">
        <source src="/media/grill.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="hero-overlay"></div>

      <div className="content-card about-card">
        {/* Grid Container for all images */}
        <div className="image-grid-stage">
          {images.map((src, index) => (
            <div key={index} className="grid-image-wrapper">
              <img src={src} alt={`About gallery ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}