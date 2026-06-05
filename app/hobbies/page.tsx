export default function Hobbies() {
  const images = [
    "/media/subash_park.png", 
    "/media/subash_ak.png", 
    "/media/sah_snorkel.png", 
    "/media/sah_bbq_2.png", 
    "/media/skydive.png",
    "/media/diljit.png",
    "/media/lake.png",
    "/media/icecream.png",
    "/media/cooking.png"
  ];

  return (
    <section className="section-wrapper hobbies-section" id="hobbies">
      {/* Background Video */}
      <video autoPlay loop muted playsInline className="bg-video">
        <source src="/media/hnl.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="hero-overlay"></div>

      <div className="content-card hobbies-card">
        {/* Grid Container for all images */}
        <div className="image-grid-stage">
          {images.map((src, index) => (
            <div key={index} className="grid-image-wrapper">
              <img src={src} alt={`Hobbies gallery ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}