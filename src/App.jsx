import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { ChevronDown, FileText, Lightbulb, PenTool, Download } from 'lucide-react';
import Lenis from 'lenis';
import './index.css';

// --- IMAGES ---
import heroImg from './assets/portada.jpeg';
import maquetaFrente from './assets/maqueta4_frente.jpeg';
import maquetaDetras from './assets/maqueta4_detras.jpeg';
import retamaImg from './assets/retama_0.jpg';
import storytellingImg from './assets/storytelling.jpg';
import coloresImg from './assets/colores-silla.jpeg';
import bocetosImg from './assets/bocetos.jpeg';

import armazonImg from './assets/armazon-estructural.jpg';
import baseSillaImg from './assets/estructura-base-silla.jpg';
import cuadroDespieceImg from './assets/cuadro-despiece.jpg';
import baseImg from './assets/base.jpeg';

import fabrica1Img from './assets/proceso-fabricacion-1.jpeg';
import fabrica2Img from './assets/proceso-fabricacion-2.jpeg';
import fabrica3Img from './assets/proceso-fabricacion-3.jpeg';
import fabrica4Img from './assets/proceso-fabricacion-4.jpeg';
import carpinteriaImg from './assets/carpinteria-silla.jpg';
import detallesFabImg from './assets/detalles-fabricacion.jpg';
import fabricaVideo from './assets/proceso-fabricacion-video.mp4';

import ambiente1Img from './assets/silla-detalle-1.jpeg';
import ambiente2Img from './assets/silla-detalle-2.jpeg';
import ambiente3Img from './assets/silla-detalle-3.jpeg';
import ambiente4Img from './assets/silla-detalle-4.jpeg';
import ambiente5Img from './assets/silla-detalle-5.jpeg';
import finalImg from './assets/final.jpg';
import reflexionImg from './assets/reflexion.jpg';

import presentacionPdf from './assets/Presentacion-proyecto.pdf';

// Parallax Image Component
const ParallaxImage = ({ src, alt, className = "", style = {} }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  
  return (
    <div ref={ref} className={`parallax-container ${className}`} style={{ ...style, overflow: 'hidden', position: 'relative' }}>
      <motion.img 
        src={src} 
        alt={alt} 
        style={{ y, width: '100%', height: '120%', objectFit: 'cover', top: '-10%', position: 'absolute', left: 0 }} 
      />
    </div>
  );
};

// Fade up text reveal
const RevealText = ({ children, delay = 0, className="" }) => {
  return (
    <div style={{ overflow: 'hidden', display: 'inline-block' }} className={className}>
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};

function App() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 1000], [0, 400]);
  const heroScale = useTransform(scrollY, [0, 1000], [1, 1.1]);
  const heroOpacity = useTransform(scrollY, [0, 800], [1, 0]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
    
    // Smooth scrolling setup
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="logo">AUREON RETAMA</div>
        <div className="nav-links">
          <a href="#historia">Historia</a>
          <a href="#diseno">Diseño</a>
          <a href="#estructura">Estructura</a>
          <a href="#fabricacion">Fabricación</a>
          <a href="#ambientes">Ambientes</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="hero">
        <motion.div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', y: heroY, scale: heroScale, opacity: heroOpacity, zIndex: -2 }}>
          <img src={heroImg} alt="Hero Proyecto" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </motion.div>
        <div className="hero-overlay"></div>
        
        <div className="hero-content">
          <RevealText className="section-subtitle">Mobiliario Inteligente</RevealText>
          <div>
            <RevealText className="hero-title">Aureon</RevealText>
          </div>
          <div>
            <RevealText className="hero-title" delay={0.1}>Retama</RevealText>
          </div>
          <motion.p className="hero-description" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 1 }}>
            Inspirada en la flora andina, una silla envolvente que transmite protección, calidez y confort.
          </motion.p>
        </div>
        
        <motion.div 
          className="scroll-indicator"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }}
        >
          <ChevronDown size={32} color="var(--accent)" />
        </motion.div>
      </section>

      {/* 1. STORYTELLING & INSPIRACIÓN */}
      <section id="historia" className="spacing-section">
        <div className="asymmetric-grid">
          <div className="text-block">
            <RevealText className="section-subtitle">01. Identidad</RevealText>
            <RevealText><h2 className="section-title">El Amarillo Sensible</h2></RevealText>
            <motion.p variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              Diseño fundamentado en las necesidades de Jose, un ingeniero de 26 años con daltonismo. 
              Inspirada en los pétalos abiertos de la retama andina, la silla emplea un estímulo cromático de alta visibilidad para conectar identidad, ergonomía y contención emocional.
            </motion.p>
          </div>
          <ParallaxImage src={retamaImg} alt="Flor de Retama" className="img-main" />
        </div>
        
        <div className="asymmetric-grid reverse mt-100">
          <div className="text-block">
            <RevealText><h3 className="section-title-sm">Ergonomía Envolvente</h3></RevealText>
            <motion.p variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              La forma se concibe como un capullo protector que resguarda al usuario. El trabajo con texturas profundas potencia la percepción visual y táctil del usuario.
            </motion.p>
          </div>
          <div className="image-group">
            <ParallaxImage src={coloresImg} alt="Colores Silla" className="img-tall" />
            <ParallaxImage src={storytellingImg} alt="Storytelling" className="img-square" />
          </div>
        </div>
      </section>

      {/* 2. DISEÑO & MAQUETAS */}
      <section id="diseno" className="bg-dark spacing-section">
        <div className="text-center mb-50">
          <RevealText className="section-subtitle">02. Diseño</RevealText>
          <RevealText><h2 className="section-title">De la Idea a la Forma</h2></RevealText>
        </div>
        
        <div className="bocetos-container">
          <ParallaxImage src={bocetosImg} alt="Bocetos" className="grayscale-img hero-width" style={{ height: '500px' }} />
        </div>
        
        <motion.div className="carousel mt-50" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.div className="carousel-item" variants={fadeInUp}>
            <img src={maquetaFrente} alt="Vista Frontal" />
            <div className="gallery-overlay"><h3>Vista Frontal</h3></div>
          </motion.div>
          <motion.div className="carousel-item" variants={fadeInUp}>
            <img src={maquetaDetras} alt="Vista Posterior" />
            <div className="gallery-overlay"><h3>Vista Posterior</h3></div>
          </motion.div>
        </motion.div>
      </section>

      {/* 3. ESTRUCTURA */}
      <section id="estructura" className="spacing-section">
        <div className="text-center mb-50">
          <RevealText className="section-subtitle">03. Estructura</RevealText>
          <RevealText><h2 className="section-title">Ingeniería y Soporte</h2></RevealText>
        </div>

        <div className="masonry-grid">
          <ParallaxImage src={cuadroDespieceImg} alt="Cuadro de Despiece" className="grayscale-img masonry-tall" />
          <ParallaxImage src={armazonImg} alt="Armazón Estructural" className="grayscale-img masonry-wide" />
          <ParallaxImage src={baseSillaImg} alt="Estructura Base" className="grayscale-img masonry-square" />
          <ParallaxImage src={baseImg} alt="Base" className="grayscale-img masonry-square" />
        </div>
        
        <motion.div className="text-center mt-50" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <a href={presentacionPdf} download="Presentacion-proyecto.pdf" className="btn magnetic-btn">
            <Download size={20} />
            Descargar Dossier Completo
          </a>
        </motion.div>
      </section>

      {/* 4. FABRICACIÓN (PROCESO) */}
      <section id="fabricacion" className="bg-dark spacing-section">
        <div className="text-center mb-50">
          <RevealText className="section-subtitle">04. Realización</RevealText>
          <RevealText><h2 className="section-title">Proceso de Fabricación</h2></RevealText>
          <motion.p className="subtitle-text" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            Artesanía combinada con procesos industriales de alta resistencia.
          </motion.p>
        </div>
        
        <motion.div className="carousel" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.div className="carousel-item grayscale-img video-item" variants={fadeInUp}>
            <video src={fabricaVideo} autoPlay loop muted playsInline />
          </motion.div>
          <motion.div className="carousel-item grayscale-img" variants={fadeInUp}><img src={carpinteriaImg} alt="Carpintería" /></motion.div>
          <motion.div className="carousel-item grayscale-img" variants={fadeInUp}><img src={detallesFabImg} alt="Detalles Fab" /></motion.div>
          <motion.div className="carousel-item grayscale-img" variants={fadeInUp}><img src={fabrica1Img} alt="Proceso 1" /></motion.div>
          <motion.div className="carousel-item grayscale-img" variants={fadeInUp}><img src={fabrica2Img} alt="Proceso 2" /></motion.div>
          <motion.div className="carousel-item grayscale-img" variants={fadeInUp}><img src={fabrica3Img} alt="Proceso 3" /></motion.div>
          <motion.div className="carousel-item grayscale-img" variants={fadeInUp}><img src={fabrica4Img} alt="Proceso 4" /></motion.div>
        </motion.div>
      </section>

      {/* 5. AMBIENTES Y REFLEXIÓN */}
      <section id="ambientes" className="spacing-section">
        <div className="text-center mb-50">
          <RevealText className="section-subtitle">05. Proyecto Final</RevealText>
          <RevealText><h2 className="section-title">Diseño en el Espacio</h2></RevealText>
        </div>
        
        <motion.div className="carousel" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.div className="carousel-item" variants={fadeInUp}><img src={ambiente1Img} alt="Ambiente 1" /></motion.div>
          <motion.div className="carousel-item" variants={fadeInUp}><img src={ambiente2Img} alt="Ambiente 2" /></motion.div>
          <motion.div className="carousel-item" variants={fadeInUp}><img src={ambiente3Img} alt="Ambiente 3" /></motion.div>
          <motion.div className="carousel-item" variants={fadeInUp}><img src={ambiente4Img} alt="Ambiente 4" /></motion.div>
          <motion.div className="carousel-item" variants={fadeInUp}><img src={ambiente5Img} alt="Ambiente 5" /></motion.div>
        </motion.div>

        <div className="asymmetric-grid mt-100">
          <div className="text-block">
            <RevealText><h3 className="section-title-sm">Conclusión del Proyecto</h3></RevealText>
            <motion.p variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              Aureon Retama demuestra cómo la arquitectura interior y el diseño de mobiliario pueden fusionarse para crear soluciones sensibles. 
              No es solo un asiento, es un espacio de contención emocional que se adapta al usuario y al ambiente.
            </motion.p>
          </div>
          <div className="image-group">
            <ParallaxImage src={finalImg} alt="Resultado Final" className="img-tall" />
            <ParallaxImage src={reflexionImg} alt="Reflexión" className="img-square" />
          </div>
        </div>
      </section>

      <footer>
        <div className="social-links">
          <a href="#"><FileText size={20} /></a>
          <a href="#"><PenTool size={20} /></a>
          <a href="#"><Lightbulb size={20} /></a>
        </div>
        <p>&copy; 2026 Portafolio de Arquitectura. Aureon Retama.</p>
      </footer>
    </>
  );
}

export default App;
