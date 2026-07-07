import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, FileText, Lightbulb, PenTool, Download, Sun, Moon, Hammer } from 'lucide-react';
import './index.css';

import heroImg from './assets/portada.jpeg';
import maquetaFrente from './assets/maqueta4_frente.jpeg';
import maquetaDetras from './assets/maqueta4_detras.jpeg';
import retamaImg from './assets/retama_0.jpg';
import bocetosImg from './assets/bocetos.jpeg';
import baseImg from './assets/base.jpeg';
import presentacionPdf from './assets/Presentacion-proyecto.pdf';
import fabrica1Img from './assets/proceso-fabricacion-1.jpeg';
import fabrica2Img from './assets/proceso-fabricacion-2.jpeg';
import fabrica3Img from './assets/proceso-fabricacion-3.jpeg';
import fabrica4Img from './assets/proceso-fabricacion-4.jpeg';
import ambiente1Img from './assets/silla-detalle-1.jpeg';
import ambiente2Img from './assets/silla-detalle-2.jpeg';
import ambiente3Img from './assets/silla-detalle-3.jpeg';
import ambiente4Img from './assets/silla-detalle-4.jpeg';
import ambiente5Img from './assets/silla-detalle-5.jpeg';
import fabricaVideo from './assets/proceso-fabricacion-video.mp4';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 1000], [0, 300]);
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
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
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} style={{ flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
        <div className="logo" style={{ marginRight: 'auto' }}>AUREON RETAMA</div>
        <div className="nav-links" style={{ overflowX: 'auto', paddingBottom: '5px', alignItems: 'center' }}>
          <a href="#ideas">Inspiración</a>
          <a href="#bocetos">Diseño</a>
          <a href="#estructura">Estructura</a>
          <a href="#fabricacion">Proceso</a>
        </div>
      </nav>

      <section className="hero">
        <motion.img src={heroImg} alt="Hero Proyecto" className="hero-bg" style={{ y: heroY, opacity: heroOpacity }} />
        <div className="hero-overlay"></div>
        <motion.div 
          className="hero-content"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.span className="section-subtitle" variants={fadeInUp}>Mobiliario Inteligente</motion.span>
          <motion.h1 className="hero-title" variants={fadeInUp}>Aureon Retama</motion.h1>
          <motion.p className="hero-description" variants={fadeInUp}>
            Inspirada en la flora andina, una silla envolvente que transmite protección, calidez y confort mediante formas orgánicas y texturas sensoriales.
          </motion.p>
          <motion.a href="#ideas" className="btn" variants={fadeInUp}>
            Descubrir
          </motion.a>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 1.5, duration: 1 }}
          style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)' }}
        >
          <ChevronDown size={32} color="var(--text-secondary)" style={{ animation: 'bounce 2s infinite' }} />
        </motion.div>
      </section>

      {/* 1. IDEAS */}
      <section id="ideas">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="project-info" style={{ marginBottom: '50px' }}>
            <div className="project-text">
              <motion.span className="section-subtitle" variants={fadeInUp}>01. Inspiración</motion.span>
              <motion.h2 className="section-title" variants={fadeInUp}>Concepto y Usuario</motion.h2>
              <motion.p variants={fadeInUp}>
                Diseño fundamentado en las necesidades de Jose, un ingeniero de 26 años con una particular visión de los colores (daltonismo). 
                Inspirada en los pétalos abiertos de la retama andina, la silla emplea el 'amarillo sensible': un estímulo cromático de alta visibilidad, 
                extraído de la flora nativa de Arequipa para conectar identidad, ergonomía y contención emocional.
              </motion.p>
            </div>
            <motion.div className="project-image" variants={fadeInUp}>
              <img src={retamaImg} alt="Flor de Retama" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 20px 50px rgba(0,0,0,0.3)' }} />
            </motion.div>
          </div>

          <motion.div className="carousel" variants={staggerContainer}>
            <motion.div className="carousel-item gallery-item" variants={fadeInUp}>
              <img src={maquetaFrente} alt="Vista Frontal" />
              <div className="gallery-overlay">
                <h3>Vista Frontal</h3>
              </div>
            </motion.div>
            <motion.div className="carousel-item gallery-item" variants={fadeInUp}>
              <img src={maquetaDetras} alt="Vista Posterior" />
              <div className="gallery-overlay">
                <h3>Vista Posterior</h3>
              </div>
            </motion.div>
            <motion.div className="carousel-item gallery-item" variants={fadeInUp}>
              <img src={ambiente1Img} alt="Ambiente 1" />
            </motion.div>
            <motion.div className="carousel-item gallery-item" variants={fadeInUp}>
              <img src={ambiente2Img} alt="Ambiente 2" />
            </motion.div>
            <motion.div className="carousel-item gallery-item" variants={fadeInUp}>
              <img src={ambiente3Img} alt="Ambiente 3" />
            </motion.div>
            <motion.div className="carousel-item gallery-item" variants={fadeInUp}>
              <img src={ambiente4Img} alt="Ambiente 4" />
            </motion.div>
            <motion.div className="carousel-item gallery-item" variants={fadeInUp}>
              <img src={ambiente5Img} alt="Ambiente 5" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. BOCETOS */}
      <section id="bocetos" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <motion.div 
          className="project-info"
          style={{ direction: 'rtl' }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="project-text" style={{ direction: 'ltr' }}>
            <motion.span className="section-subtitle" variants={fadeInUp}>02. Diseño</motion.span>
            <motion.h2 className="section-title" variants={fadeInUp}>De la Idea a la Forma</motion.h2>
            <motion.p variants={fadeInUp}>
              El proceso creativo inició con bocetos a mano alzada para definir la silueta envolvente, 
              evolucionando hacia planos detallados de la base estructural metálica y vistas ortogonales precisas.
            </motion.p>
            <motion.div variants={fadeInUp} style={{ marginTop: '30px' }}>
              <div style={{ display: 'inline-flex', padding: '20px', border: '1px solid var(--accent)', borderRadius: '8px', alignItems: 'center', gap: '15px' }}>
                 <PenTool size={30} color="var(--accent)" />
                 <span style={{ color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem' }}>Proceso Creativo</span>
              </div>
            </motion.div>
          </div>
          <motion.div className="project-image" style={{ direction: 'ltr' }} variants={fadeInUp}>
            <img src={bocetosImg} className="grayscale-img" alt="Bocetos" style={{ width: '100%', maxHeight: '600px', objectFit: 'cover', borderRadius: '8px' }} />
          </motion.div>
        </motion.div>
      </section>

      {/* 3. FICHA TÉCNICA */}
      <section id="estructura">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.span className="section-subtitle" variants={fadeInUp}>03. Fabricación</motion.span>
          <motion.h2 className="section-title" variants={fadeInUp}>Despiece y Materialidad</motion.h2>
          
          <motion.div className="gallery-grid" style={{ gridTemplateColumns: '1fr', marginBottom: '50px' }} variants={staggerContainer}>
            <motion.div className="gallery-item" variants={fadeInUp}>
              <img src={baseImg} className="grayscale-img" alt="Base Estructural" style={{ height: 'auto', maxHeight: 'none', borderRadius: '8px' }} />
              <div className="gallery-overlay">
                <h3>Estructura Metálica</h3>
                <p>Base en tubo de fierro galvanizado</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div variants={fadeInUp} style={{ textAlign: 'center', marginTop: '40px' }}>
            <a href={presentacionPdf} download="Presentacion-proyecto.pdf" className="btn" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', fontSize: '1rem', padding: '20px 40px' }}>
              <Download size={24} />
              Descargar Presentación Completa (PDF)
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* 4. FABRICACIÓN (FOTOS Y VIDEO) */}
      <section id="fabricacion" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          <div className="project-text" style={{ textAlign: 'center', marginBottom: '50px' }}>
            <motion.span className="section-subtitle" variants={fadeInUp}>04. Realización</motion.span>
            <motion.h2 className="section-title" variants={fadeInUp}>Proceso de Fabricación</motion.h2>
            <motion.p variants={fadeInUp} style={{ maxWidth: '800px', margin: '0 auto' }}>
              Cada pieza de la silla Aureon Retama es moldeada y ensamblada combinando técnicas artesanales con procesos industriales para asegurar alta resistencia y un acabado premium.
            </motion.p>
          </div>
          
          <motion.div className="carousel" variants={staggerContainer} style={{ marginBottom: '30px' }}>
            <motion.div className="carousel-item grayscale-img" variants={fadeInUp}>
              <video src={fabricaVideo} autoPlay loop muted playsInline />
            </motion.div>
            <motion.div className="carousel-item grayscale-img" variants={fadeInUp}>
              <img src={fabrica1Img} alt="Proceso 1" />
            </motion.div>
            <motion.div className="carousel-item grayscale-img" variants={fadeInUp}>
              <img src={fabrica2Img} alt="Proceso 2" />
            </motion.div>
            <motion.div className="carousel-item grayscale-img" variants={fadeInUp}>
              <img src={fabrica3Img} alt="Proceso 3" />
            </motion.div>
            <motion.div className="carousel-item grayscale-img" variants={fadeInUp}>
              <img src={fabrica4Img} alt="Proceso 4" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      <footer>
        <div className="social-links">
          <a href="#"><FileText size={20} /></a>
          <a href="#"><PenTool size={20} /></a>
          <a href="#"><Lightbulb size={20} /></a>
        </div>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          &copy; 2026 Portafolio de Arquitectura. Todos los derechos reservados.
        </p>
      </footer>
    </>
  );
}

export default App;
