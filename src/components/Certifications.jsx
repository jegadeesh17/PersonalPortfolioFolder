import React, { useState } from 'react';
import './Certifications.css';

const certList = [
  {
    name: "Google Project Management",
    issuer: "Google · Coursera",
    issued: "Aug 2024",
    category: "Project Management",
    color: "#4285F4",
    image: "/certificates/Coursera FDTV19Y9MZA9.jpg",
    credential: "FDTV19Y9MZA9",
    verifyUrl: "https://coursera.org/verify/professional-cert/FDTV19Y9MZA9"
  },
  {
    name: "Microeconomics Principles",
    issuer: "University of Illinois · Coursera",
    issued: "Apr 2023",
    category: "Economics",
    color: "#13294B",
    image: "/certificates/Coursera U6HE6DF4VXFW.jpg",
    credential: "U6HE6DF4VXFW",
    verifyUrl: "https://coursera.org/verify/U6HE6DF4VXFW"
  },
  {
    name: "Financial Markets",
    issuer: "Yale University · Coursera",
    issued: "Jun 2023",
    category: "Finance",
    color: "#00356B",
    honor: "With Honors",
    image: "/certificates/Coursera YPJMEBHZYVQS.jpg",
    credential: "YPJMEBHZYVQS",
    verifyUrl: "https://coursera.org/verify/YPJMEBHZYVQS"
  },
  {
    name: "Master Data Science Program",
    issuer: "GUVI · IITM Incubated",
    issued: "Jun 2026",
    category: "Data Science",
    color: "#0a7c4e",
    image: "/certificates/GUVI.jpg",
    credential: "GUVI-DS",
    verifyUrl: null
  }
];

const Certifications = () => {
  const [lightbox, setLightbox] = useState(null); // index of open cert

  const openLightbox = (index) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);
  const prev = () => setLightbox((lightbox - 1 + certList.length) % certList.length);
  const next = () => setLightbox((lightbox + 1) % certList.length);

  return (
    <section className="certifications container" id="certifications">
      <div className="section-header">
        <h2>Certifications</h2>
        <p>Continuous learning through industry-recognized programs.</p>
      </div>

      <div className="certs-grid">
        {certList.map((cert, index) => (
          <button
            key={index}
            className="cert-card card"
            onClick={() => openLightbox(index)}
            aria-label={`View ${cert.name} certificate`}
          >
            {/* Certificate thumbnail */}
            <div className="cert-thumb-wrapper">
              <img
                src={cert.image}
                alt={`${cert.name} certificate`}
                className="cert-thumb"
              />
              <div className="cert-thumb-overlay">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803 7.5 7.5 0 0015.803 15.803zM10.5 7.5v6m3-3h-6" />
                </svg>
                <span>View Certificate</span>
              </div>
            </div>

            {/* Card info */}
            <div className="cert-info">
              <div className="cert-top-row">
                <span className="cert-category" style={{ borderColor: cert.color, color: cert.color }}>
                  {cert.category}
                </span>
                {cert.honor && <span className="cert-honor">🏅 {cert.honor}</span>}
              </div>
              <h3>{cert.name}</h3>
              <div className="cert-meta">
                <span className="cert-issuer">{cert.issuer}</span>
                <span className="cert-date">{cert.issued}</span>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="cert-lightbox" onClick={closeLightbox} role="dialog" aria-modal="true" aria-label="Certificate viewer">
          <div className="cert-lightbox-inner" onClick={(e) => e.stopPropagation()}>
            {/* Header */}
            <div className="lightbox-header">
              <div>
                <p className="lightbox-issuer">{certList[lightbox].issuer}</p>
                <h3 className="lightbox-title">{certList[lightbox].name}</h3>
              </div>
              <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">✕</button>
            </div>

            {/* Image */}
            <img
              src={certList[lightbox].image}
              alt={`${certList[lightbox].name} certificate`}
              className="lightbox-img"
            />

            {/* Footer */}
            <div className="lightbox-footer">
              <button className="lightbox-nav" onClick={prev} aria-label="Previous certificate">← Prev</button>
              <span className="lightbox-count">{lightbox + 1} / {certList.length}</span>
              <button className="lightbox-nav" onClick={next} aria-label="Next certificate">Next →</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;
