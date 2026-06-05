export default function Civilian() {
  const images = ["/media/no_care.png"];

  return (
    <section className="section-wrapper civilian-section" id="civilian">
      <div className="content-card civilian-card">
        {/* Uniform Grid Container showing all images simultaneously */}
        <div className="image-grid-stage">
          {images.map((src, index) => (
            <div key={index} className="grid-image-wrapper">
              <img src={src} alt={`Civilian gallery ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}