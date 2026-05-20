import React, { useState, useEffect } from 'react';
import '../../styles/components/charity/CharityEventGallery.css';

import galleryImg1 from '../../assets/images/charity/charity-event-img1.jpeg';
import galleryImg2 from '../../assets/images/charity/charity-event-img2.jpeg';
import galleryImg3 from '../../assets/images/charity/charity-event-img3.jpeg';
import galleryImg4 from '../../assets/images/charity/charity-slider-img1.jpeg';
import galleryImg5 from '../../assets/images/charity/charity-slider-img2.jpeg';
import galleryImg6 from '../../assets/images/charity/charity-slider-img3.jpeg';

const galleryItems = [
  { src: galleryImg1, caption: 'School Support Drive',    tag: 'Education',  size: 'large'  },
  { src: galleryImg2, caption: 'Clean Water Campaign',    tag: 'Water',      size: 'small'  },
  { src: galleryImg3, caption: 'Food Distribution Day',   tag: 'Food',       size: 'small'  },
  { src: galleryImg4, caption: 'Community Outreach',      tag: 'Community',  size: 'medium' },
  { src: galleryImg5, caption: 'Volunteer Day',           tag: 'Volunteers', size: 'medium' },
  { src: galleryImg6, caption: 'Clothing Donation Drive', tag: 'Clothing',   size: 'small'  },
];

// Native <dialog> element is inherently interactive — zero a11y lint errors
const LightboxModal = ({ item, onClose, onPrev, onNext }) => {
  // Close on Escape key (dialog already does this natively, but we sync state)
  useEffect(() => {
    if (!item) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [item, onClose, onPrev, onNext]);

  if (!item) return null;

  return (
    /* eslint-disable-next-line jsx-a11y/click-events-have-key-events */
    <div className="gallery-lightbox-backdrop" onClick={onClose} role="presentation">
      <dialog className="gallery-lightbox" open aria-label="Event photo lightbox">
        {/* Stop clicks inside the dialog from closing the backdrop */}
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
        <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
          <img src={item.src} alt={item.caption} />
          <div className="lightbox-caption">
            <span className="lightbox-tag">{item.tag}</span>
            <p>{item.caption}</p>
          </div>
        </div>
        <button className="lightbox-close" onClick={onClose} aria-label="Close lightbox">✕</button>
        <button className="lightbox-prev"  onClick={onPrev}  aria-label="Previous photo">‹</button>
        <button className="lightbox-next"  onClick={onNext}  aria-label="Next photo">›</button>
      </dialog>
    </div>
  );
};

const CharityEventGallery = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const openLightbox = (index) => setActiveIndex(index);
  const closeLightbox = () => setActiveIndex(null);
  const goPrev = () => setActiveIndex((i) => (i - 1 + galleryItems.length) % galleryItems.length);
  const goNext = () => setActiveIndex((i) => (i + 1) % galleryItems.length);

  return (
    <section className="charity-gallery-section">
      <div className="charity-gallery-container">

        <div className="gallery-header">
          <span className="gallery-eyebrow">Moments That Matter</span>
          <h2 className="gallery-title">Our Events in Pictures</h2>
          <p className="gallery-subtitle">
            Every photo tells a story of hope, generosity, and community coming together.
          </p>
        </div>

        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <button
              key={index}
              type="button"
              className={`gallery-item gallery-item--${item.size}`}
              onClick={() => openLightbox(index)}
              aria-label={`View photo: ${item.caption}`}
            >
              <div className="gallery-item-inner">
                <img src={item.src} alt={item.caption} loading="lazy" />
                <div className="gallery-item-overlay">
                  <span className="gallery-item-tag">{item.tag}</span>
                  <p className="gallery-item-caption">{item.caption}</p>
                  <span className="gallery-item-zoom">⊕</span>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="gallery-cta-strip">
          <p>Want to be part of the story?</p>
          <button type="button" className="gallery-cta-btn">Volunteer With Us</button>
        </div>
      </div>

      <LightboxModal
        item={activeIndex !== null ? galleryItems[activeIndex] : null}
        onClose={closeLightbox}
        onPrev={goPrev}
        onNext={goNext}
      />
    </section>
  );
};

export default CharityEventGallery;


// import React, { useState } from 'react';
// import '../../styles/components/charity/CharityEventGallery.css';

// // Import your charity event images — swap these paths for your actual event photos
// import galleryImg1 from '../../assets/images/charity/charity-event-img1.jpeg';
// import galleryImg2 from '../../assets/images/charity/charity-event-img2.jpeg';
// import galleryImg3 from '../../assets/images/charity/charity-event-img3.jpeg';
// import galleryImg4 from '../../assets/images/charity/charity-slider-img1.jpeg';
// import galleryImg5 from '../../assets/images/charity/charity-slider-img2.jpeg';
// import galleryImg6 from '../../assets/images/charity/charity-slider-img3.jpeg';
// // import galleryImg7 from '../../assets/images/charity/charity-slider-img4.jpg';
// // import galleryImg8 from '../../assets/images/charity/charity-slider-img5.jpg';

// const galleryItems = [
//   { src: galleryImg1, caption: 'School Support Drive',     tag: 'Education',  size: 'large'  },
//   { src: galleryImg2, caption: 'Clean Water Campaign',     tag: 'Water',      size: 'small'  },
//   { src: galleryImg3, caption: 'Food Distribution Day',    tag: 'Food',       size: 'small'  },
//   { src: galleryImg4, caption: 'Community Outreach',       tag: 'Community',  size: 'medium' },
//   { src: galleryImg5, caption: 'Volunteer Day',            tag: 'Volunteers', size: 'medium' },
//   { src: galleryImg6, caption: 'Clothing Donation Drive',  tag: 'Clothing',   size: 'small'  },
// //   { src: galleryImg7, caption: 'Medical Care Camp',        tag: 'Healthcare', size: 'small'  },
// //   { src: galleryImg8, caption: 'Children\'s Fun Day',      tag: 'Children',   size: 'large'  },
// ];

// const LightboxModal = ({ item, onClose, onPrev, onNext }) => {
//   if (!item) return null;
//   return (
//     <div className="gallery-lightbox" onClick={onClose}>
//       <button className="lightbox-close" onClick={onClose} aria-label="Close">✕</button>
//       <button className="lightbox-prev" onClick={(e) => { e.stopPropagation(); onPrev(); }} aria-label="Previous">‹</button>
//       <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
//         <img src={item.src} alt={item.caption} />
//         <div className="lightbox-caption">
//           <span className="lightbox-tag">{item.tag}</span>
//           <p>{item.caption}</p>
//         </div>
//       </div>
//       <button className="lightbox-next" onClick={(e) => { e.stopPropagation(); onNext(); }} aria-label="Next">›</button>
//     </div>
//   );
// };

// const CharityEventGallery = () => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const openLightbox = (index) => setActiveIndex(index);
//   const closeLightbox = () => setActiveIndex(null);
//   const goPrev = () => setActiveIndex((i) => (i - 1 + galleryItems.length) % galleryItems.length);
//   const goNext = () => setActiveIndex((i) => (i + 1) % galleryItems.length);

//   return (
//     <section className="charity-gallery-section">
//       <div className="charity-gallery-container">
//         {/* Section Header */}
//         <div className="gallery-header">
//           <span className="gallery-eyebrow">Moments That Matter</span>
//           <h2 className="gallery-title">Our Events in Pictures</h2>
//           <p className="gallery-subtitle">
//             Every photo tells a story of hope, generosity, and community coming together.
//           </p>
//         </div>

//         {/* Masonry-style Grid */}
//         <div className="gallery-grid">
//           {galleryItems.map((item, index) => (
//             <div
//               key={index}
//               className={`gallery-item gallery-item--${item.size}`}
//               onClick={() => openLightbox(index)}
//               role="button"
//               tabIndex={0}
//               onKeyDown={(e) => e.key === 'Enter' && openLightbox(index)}
//               aria-label={`View photo: ${item.caption}`}
//             >
//               <div className="gallery-item-inner">
//                 <img src={item.src} alt={item.caption} loading="lazy" />
//                 <div className="gallery-item-overlay">
//                   <span className="gallery-item-tag">{item.tag}</span>
//                   <p className="gallery-item-caption">{item.caption}</p>
//                   <span className="gallery-item-zoom">⊕</span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* CTA strip */}
//         <div className="gallery-cta-strip">
//           <p>Want to be part of the story?</p>
//           <button className="gallery-cta-btn">Volunteer With Us</button>
//         </div>
//       </div>

//       {/* Lightbox */}
//       <LightboxModal
//         item={activeIndex !== null ? galleryItems[activeIndex] : null}
//         onClose={closeLightbox}
//         onPrev={goPrev}
//         onNext={goNext}
//       />
//     </section>
//   );
// };

// export default CharityEventGallery;