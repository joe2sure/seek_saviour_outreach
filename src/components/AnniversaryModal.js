import React, { useState, useEffect } from "react";
import "../styles/components/AnniversaryModal.css";
import churchFlyer from "../assets/images/church-anniversary-flyer.jpeg";
// import "./AnniversaryModal.css";
// import churchFlyer from "../assets/images/church-anniversary-flyer.jpg";
// 👆 update this path to wherever your flyer JPEG actually lives

const COLORS = ["#FFC107", "#FF5252", "#4CAF50", "#2196F3", "#9C27B0", "#FF9800", "#E91E63"];
const BALLOON_COLORS = ["#FF6B6B", "#4ECDC4", "#FFD93D", "#A29BFE", "#FF9F43", "#55EFC4"];
const RIBBON_COLORS = ["#FFD700", "#FF6B6B", "#54A0FF", "#1DD1A1", "#FF9FF3"];

const generateConfetti = (count = 60) =>
  Array.from({ length: count }).map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 3,
    duration: 3 + Math.random() * 3,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    size: 6 + Math.random() * 8,
    rotate: Math.random() * 360,
  }));

const generateSparkles = (count = 25) =>
  Array.from({ length: count }).map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 2,
    size: 4 + Math.random() * 6,
  }));

const generateBalloons = (count = 8) =>
  Array.from({ length: count }).map((_, i) => ({
    id: i,
    left: 5 + Math.random() * 90,
    delay: Math.random() * 4,
    duration: 8 + Math.random() * 6,
    color: BALLOON_COLORS[i % BALLOON_COLORS.length],
    scale: 0.7 + Math.random() * 0.6,
  }));

const generateRibbons = (count = 12) =>
  Array.from({ length: count }).map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 4,
    duration: 5 + Math.random() * 4,
    color: RIBBON_COLORS[i % RIBBON_COLORS.length],
    width: 10 + Math.random() * 10,
    height: 40 + Math.random() * 40,
  }));

const AnniversaryModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [confetti] = useState(generateConfetti);
  const [sparkles] = useState(generateSparkles);
  const [balloons] = useState(generateBalloons);
  const [ribbons] = useState(generateRibbons);

  useEffect(() => {
    // small delay so the modal feels like it "arrives" after the page loads
    const timer = setTimeout(() => setIsOpen(true), 400);
    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => setIsOpen(false);

  useEffect(() => {
    if (!isOpen) return;
    const handleEsc = (e) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

return (
    <div className="anniversary-overlay">
      <button
        type="button"
        className="anniversary-backdrop"
        onClick={closeModal}
        aria-label="Close anniversary popup"
      />

      <div className="effects-layer">
        {/* Confetti */}
        {confetti.map((c) => (
          <span
            key={`confetti-${c.id}`}
            className="confetti-piece"
            style={{
              left: `${c.left}%`,
              backgroundColor: c.color,
              width: `${c.size}px`,
              height: `${c.size * 0.4}px`,
              animationDelay: `${c.delay}s`,
              animationDuration: `${c.duration}s`,
              transform: `rotate(${c.rotate}deg)`,
            }}
          />
        ))}

        {/* Ribbons */}
        {ribbons.map((r) => (
          <span
            key={`ribbon-${r.id}`}
            className="ribbon-piece"
            style={{
              left: `${r.left}%`,
              backgroundColor: r.color,
              width: `${r.width}px`,
              height: `${r.height}px`,
              animationDelay: `${r.delay}s`,
              animationDuration: `${r.duration}s`,
            }}
          />
        ))}

        {/* Sparkles */}
        {sparkles.map((s) => (
          <span
            key={`sparkle-${s.id}`}
            className="sparkle"
            style={{
              left: `${s.left}%`,
              top: `${s.top}%`,
              fontSize: `${s.size + 8}px`,
              animationDelay: `${s.delay}s`,
            }}
          >
            ✨
          </span>
        ))}

        {/* Balloons */}
        {balloons.map((b) => (
          <span
            key={`balloon-${b.id}`}
            className="balloon"
            style={{
              left: `${b.left}%`,
              animationDelay: `${b.delay}s`,
              animationDuration: `${b.duration}s`,
              transform: `scale(${b.scale})`,
            }}
          >
            <span className="balloon-body" style={{ backgroundColor: b.color }} />
            <span className="balloon-string" />
          </span>
        ))}
      </div>

      <div className="anniversary-modal" role="dialog" aria-modal="true" aria-label="Church anniversary announcement">
        <button
          className="anniversary-close-btn"
          onClick={closeModal}
          aria-label="Close anniversary popup"
        >
          &times;
        </button>
        <div className="anniversary-image-wrapper">
          <img
            src={churchFlyer}
            alt="Church 2nd Anniversary Celebration Flyer"
            className="anniversary-flyer-image"
          />
        </div>
        <p className="anniversary-caption">
          🎉 Celebrating 2 Wonderful Years Together! 🎉
        </p>
      </div>
    </div>
  );

//   return (
//     <div className="anniversary-overlay" onClick={closeModal}>
//       <div className="effects-layer">
//         {/* Confetti */}
//         {confetti.map((c) => (
//           <span
//             key={`confetti-${c.id}`}
//             className="confetti-piece"
//             style={{
//               left: `${c.left}%`,
//               backgroundColor: c.color,
//               width: `${c.size}px`,
//               height: `${c.size * 0.4}px`,
//               animationDelay: `${c.delay}s`,
//               animationDuration: `${c.duration}s`,
//               transform: `rotate(${c.rotate}deg)`,
//             }}
//           />
//         ))}

//         {/* Ribbons */}
//         {ribbons.map((r) => (
//           <span
//             key={`ribbon-${r.id}`}
//             className="ribbon-piece"
//             style={{
//               left: `${r.left}%`,
//               backgroundColor: r.color,
//               width: `${r.width}px`,
//               height: `${r.height}px`,
//               animationDelay: `${r.delay}s`,
//               animationDuration: `${r.duration}s`,
//             }}
//           />
//         ))}

//         {/* Sparkles */}
//         {sparkles.map((s) => (
//           <span
//             key={`sparkle-${s.id}`}
//             className="sparkle"
//             style={{
//               left: `${s.left}%`,
//               top: `${s.top}%`,
//               fontSize: `${s.size + 8}px`,
//               animationDelay: `${s.delay}s`,
//             }}
//           >
//             ✨
//           </span>
//         ))}

//         {/* Balloons */}
//         {balloons.map((b) => (
//           <span
//             key={`balloon-${b.id}`}
//             className="balloon"
//             style={{
//               left: `${b.left}%`,
//               animationDelay: `${b.delay}s`,
//               animationDuration: `${b.duration}s`,
//               transform: `scale(${b.scale})`,
//             }}
//           >
//             <span className="balloon-body" style={{ backgroundColor: b.color }} />
//             <span className="balloon-string" />
//           </span>
//         ))}
//       </div>

//       <div className="anniversary-modal" onClick={(e) => e.stopPropagation()}>
//         <button
//           className="anniversary-close-btn"
//           onClick={closeModal}
//           aria-label="Close anniversary popup"
//         >
//           &times;
//         </button>
//         <div className="anniversary-image-wrapper">
//           <img
//             src={churchFlyer}
//             alt="Church 2nd Anniversary Celebration Flyer"
//             className="anniversary-flyer-image"
//           />
//         </div>
//         <p className="anniversary-caption">
//           🎉 Celebrating 2 Wonderful Years Together! 🎉
//         </p>
//       </div>
//     </div>
//   );
};

export default AnniversaryModal;