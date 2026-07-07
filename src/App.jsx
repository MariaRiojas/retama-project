import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
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

// Fade up container
const FadeIn = ({ children, delay = 0, className="" }) => {
  return (
    <motion.div
      className={className}
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay }}
    >
      {children}
    </motion.div>
  );
};

// Automatic Infinite Carousel
const AutoCarousel = ({ children, className = "" }) => {
  return (
    <div className={`marquee-container ${className}`}>
      <div className="marquee-content">
        <div className="marquee-group">{children}</div>
        <div className="marquee-group">{children}</div>
      </div>
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

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="logo">AUREON RETAMA</div>
        <div className="nav-links">
          <a href="#historia">Identidad</a>
          <a href="#diseno">Diseño</a>
          <a href="#estructura">Estructura</a>
          <a href="#fabricacion">Fabricación</a>
          <a href="#ambientes">Final</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="hero">
        <motion.div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', y: heroY, scale: heroScale, opacity: heroOpacity, zIndex: -2 }}>
          <img src={heroImg} alt="Hero Proyecto" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </motion.div>
        <div className="hero-overlay"></div>
        
        <div className="hero-content">
          <FadeIn className="section-subtitle">Mobiliario Inteligente</FadeIn>
          <FadeIn delay={0.1}><h1 className="hero-title">Aureon</h1></FadeIn>
          <FadeIn delay={0.2}><h1 className="hero-title">Retama</h1></FadeIn>
          <FadeIn delay={0.4}>
            <p className="hero-description">
              Inspirada en la flora andina, una silla envolvente que transmite protección, calidez y confort.
            </p>
          </FadeIn>
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
        <div className="text-center mb-50">
          <FadeIn><span className="section-subtitle">01. Identidad</span></FadeIn>
          <FadeIn><h2 className="section-title">El Amarillo Sensible</h2></FadeIn>
          <FadeIn>
            <p className="subtitle-text mb-30">
              Diseño fundamentado en las necesidades de Kristell. 
              Inspirada en los pétalos abiertos de la retama andina.
            </p>
          </FadeIn>
        </div>
        
        <FadeIn><img src={storytellingImg} alt="Storytelling" className="slide-img" /></FadeIn>
        
        <div className="grid-2-cols mt-50">
          <FadeIn><img src={retamaImg} alt="Flor de Retama" style={{aspectRatio: '1/1', objectFit: 'cover'}}/></FadeIn>
          <FadeIn delay={0.2}>
             <div style={{height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <h3 className="section-title-sm">Ergonomía Envolvente</h3>
                <p style={{color: 'var(--text-secondary)'}}>La forma se concibe como un capullo protector que resguarda al usuario. El trabajo con texturas profundas potencia la percepción visual y táctil del usuario.</p>
             </div>
          </FadeIn>
        </div>
        
        <FadeIn><img src={coloresImg} alt="Colores Silla" className="slide-img mt-50" /></FadeIn>
      </section>

      {/* 2. DISEÑO & MAQUETAS */}
      <section id="diseno" className="bg-dark spacing-section">
        <div className="text-center mb-50">
          <FadeIn><span className="section-subtitle">02. Diseño</span></FadeIn>
          <FadeIn><h2 className="section-title">De la Idea a la Forma</h2></FadeIn>
        </div>
        
        <FadeIn><img src={bocetosImg} alt="Bocetos" className="slide-img grayscale-img" /></FadeIn>
        
        <div className="grid-2-cols mt-50">
          <FadeIn delay={0.1}><img src={maquetaFrente} alt="Vista Frontal" /></FadeIn>
          <FadeIn delay={0.2}><img src={maquetaDetras} alt="Vista Posterior" /></FadeIn>
        </div>
      </section>

      {/* 3. ESTRUCTURA */}
      <section id="estructura" className="spacing-section">
        <div className="text-center mb-50">
          <FadeIn><span className="section-subtitle">03. Estructura</span></FadeIn>
          <FadeIn><h2 className="section-title">Ingeniería y Soporte</h2></FadeIn>
        </div>

        <FadeIn><img src={cuadroDespieceImg} alt="Cuadro de Despiece" className="slide-img grayscale-img" /></FadeIn>
        <FadeIn><img src={armazonImg} alt="Armazón Estructural" className="slide-img grayscale-img" /></FadeIn>
        <FadeIn><img src={baseSillaImg} alt="Estructura Base" className="slide-img grayscale-img" /></FadeIn>
        
        <div className="text-center mt-50">
          <FadeIn>
            <img src={baseImg} alt="Base Foto" style={{width: '100%', maxWidth: '600px', margin: '0 auto', borderRadius: '8px'}} className="grayscale-img" />
          </FadeIn>
        </div>
        
        <FadeIn className="text-center mt-50">
          <a href={presentacionPdf} download="Presentacion-proyecto.pdf" className="btn">
            <Download size={20} />
            Descargar Dossier Completo
          </a>
        </FadeIn>
      </section>

      {/* 4. FABRICACIÓN (PROCESO) */}
      <section id="fabricacion" className="bg-dark spacing-section">
        <div className="text-center mb-50">
          <FadeIn><span className="section-subtitle">04. Realización</span></FadeIn>
          <FadeIn><h2 className="section-title">Proceso de Fabricación</h2></FadeIn>
        </div>
        
        <FadeIn><img src={carpinteriaImg} alt="Carpintería" className="slide-img grayscale-img" /></FadeIn>
        <FadeIn><img src={detallesFabImg} alt="Detalles Fab" className="slide-img grayscale-img" /></FadeIn>

        <FadeIn>
          <AutoCarousel className="mt-50">
            <div className="carousel-item grayscale-img video-item" style={{width: '100vw', maxWidth: '800px'}}>
              <video src={fabricaVideo} autoPlay loop muted playsInline />
            </div>
            <div className="carousel-item grayscale-img"><img src={fabrica1Img} alt="Proceso 1" /></div>
            <div className="carousel-item grayscale-img"><img src={fabrica2Img} alt="Proceso 2" /></div>
            <div className="carousel-item grayscale-img"><img src={fabrica3Img} alt="Proceso 3" /></div>
            <div className="carousel-item grayscale-img"><img src={fabrica4Img} alt="Proceso 4" /></div>
          </AutoCarousel>
        </FadeIn>
      </section>

      {/* 5. AMBIENTES Y REFLEXIÓN */}
      <section id="ambientes" className="spacing-section">
        <div className="text-center mb-50">
          <FadeIn><span className="section-subtitle">05. Proyecto Final</span></FadeIn>
          <FadeIn><h2 className="section-title">Diseño en el Espacio</h2></FadeIn>
        </div>
        
        <FadeIn>
          <AutoCarousel>
            <div className="carousel-item"><img src={ambiente1Img} alt="Ambiente 1" /></div>
            <div className="carousel-item"><img src={ambiente2Img} alt="Ambiente 2" /></div>
            <div className="carousel-item"><img src={ambiente3Img} alt="Ambiente 3" /></div>
            <div className="carousel-item"><img src={ambiente4Img} alt="Ambiente 4" /></div>
            <div className="carousel-item"><img src={ambiente5Img} alt="Ambiente 5" /></div>
          </AutoCarousel>
        </FadeIn>

        <div className="full-bleed-section">
          <FadeIn><img src={finalImg} alt="Resultado Final" /></FadeIn>
        </div>
        <div className="full-bleed-section">
          <FadeIn><img src={reflexionImg} alt="Reflexión" /></FadeIn>
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
