import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Instagram, Award, Briefcase, BookOpen } from "lucide-react";
import CertificationBook from "@/components/CertificationBook";
import { motion, Variants } from "framer-motion";

/**
 * Portafolio de la Dra. Ariana Aguilar
 * Diseño: Elegancia Minimalista Médica
 * Paleta: Blanco, crema, gris carbón, oro suave
 * Tipografía: Playfair Display (títulos), Lato (cuerpo)
 */

// Animation variants for staggered fade-in + slide-up effect
const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Container variant for staggered children animations (Hero section - initial load)
const staggerContainer: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0,
    },
  },
};

// Section container variant (triggers when scrolled into view)
const sectionContainer: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

// Card container for service cards
const cardContainer: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="sticky top-0 z-50 bg-background/98 backdrop-blur supports-[backdrop-filter]:bg-background/95 border-b border-accent/20"
      >
        <nav className="container flex items-center justify-between py-5">
          <div className="text-xl font-bold text-foreground tracking-tight">
            <span className="text-accent">Dra.</span> Ariana Aguilar
          </div>
          <div className="hidden md:flex gap-10">
            <a href="#about" className="text-sm font-medium text-foreground/70 hover:text-accent transition-colors duration-200">
              Sobre Mí
            </a>
            <a href="#services" className="text-sm font-medium text-foreground/70 hover:text-accent transition-colors duration-200">
              Servicios
            </a>
            <a href="#experience" className="text-sm font-medium text-foreground/70 hover:text-accent transition-colors duration-200">
              Experiencia
            </a>
            <a href="#contact" className="text-sm font-medium text-foreground/70 hover:text-accent transition-colors duration-200">
              Contacto
            </a>
          </div>
        </nav>
      </motion.header>

      {/* Hero Section */}
      <section className="relative py-24 md:py-40 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663393628562/8MqmE4tw4Btfn6bF6KvpVa/hero-medical-aesthetic-FibnCtQDZtWgoYN54PssZz.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-white/88 z-10" />

        <motion.div
          className="container relative z-20"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <div className="max-w-2xl">
            {/* Badge BIENVENIDO - 150ms delay */}
            <motion.div variants={fadeInUp} className="mb-6 flex items-center gap-3">
              <div className="w-1 h-12 bg-accent" />
              <span className="text-sm font-semibold text-accent tracking-widest">BIENVENIDO</span>
            </motion.div>

            {/* Título - 300ms delay */}
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold mb-4 text-foreground leading-tight">
              Dra. Ariana Aguilar
            </motion.h1>

            {/* Subtítulo - 450ms delay */}
            <motion.p variants={fadeInUp} className="text-2xl md:text-3xl text-accent font-light mb-6">
              Medicina Estética & Nutrición
            </motion.p>

            {/* Descripción - 600ms delay */}
            <motion.p variants={fadeInUp} className="text-lg text-foreground/75 mb-10 leading-relaxed max-w-xl">
              Realzando tu belleza natural con ciencia y seguridad. Especialista en medicina estética con enfoque integral en salud y bienestar.
            </motion.p>

            {/* Botones CTA - 750ms delay */}
            <motion.div variants={fadeInUp} className="flex gap-4 flex-wrap">
              <Button
                size="lg"
                className="bg-accent text-white hover:bg-accent/90 font-semibold"
              >
                Agendar Consulta
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-accent text-accent hover:bg-accent/5 font-semibold"
              >
                Conocer Más
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 md:py-40 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={sectionContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.div variants={fadeInUp} className="mb-6 flex items-center gap-3">
                <div className="w-1 h-12 bg-accent" />
                <span className="text-sm font-semibold text-accent tracking-widest">SOBRE MÍ</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-8 text-foreground leading-tight">
                Medicina Estética con Enfoque Integral
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-lg text-foreground/80 mb-6 leading-relaxed">
                Soy Médica Estética y Máster en Nutrición y Dietética, con homologación en España y miembro de la Sociedad Portuguesa de Medicina Estética. Mi enfoque se centra en la salud integral, combinando procedimientos médico-estéticos avanzados con una sólida base en nutrición.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-lg text-foreground/80 mb-6 leading-relaxed">
                Mi prioridad es siempre el bienestar del paciente, priorizando la seguridad, la naturalidad y la prevención del envejecimiento. Creo en tratamientos personalizados que respeten la armonía individual y que estén respaldados por evidencia científica.
              </motion.p>
              <motion.div variants={fadeInUp} className="flex gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-accent" />
                  <span className="text-foreground/70">Porto, Portugal</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-accent" />
                  <span className="text-foreground/70">SPME Miembro</span>
                </div>
              </motion.div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            >
              <div className="absolute -inset-4 bg-accent/10 rounded-lg" />
              <div
                className="relative rounded-lg overflow-hidden h-96 bg-muted"
                style={{
                  backgroundImage:
                    "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663393628562/8MqmE4tw4Btfn6bF6KvpVa/services-skincare-background-XJ9qpqtKEDWe7cQGq74TPc.webp')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 md:py-40 bg-muted/30">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            variants={sectionContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={fadeInUp} className="mb-6 flex items-center justify-center gap-3">
              <div className="w-1 h-12 bg-accent" />
              <span className="text-sm font-semibold text-accent tracking-widest">SERVICIOS</span>
              <div className="w-1 h-12 bg-accent" />
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
              Procedimientos Especializados
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Tratamientos avanzados diseñados para realzar tu belleza natural y promover tu bienestar integral.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={cardContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Medicina Estética */}
            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-lg border border-border hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Medicina Estética</h3>
              </div>
              <ul className="space-y-4 text-foreground/80">
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Rellenos con Ácido Hialurónico (labios, ojeras, pómulos, lóbulo)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Bioestimulación y Biomodulación de la piel</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Tratamiento del tercio superior facial</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Protocolos personalizados de skincare</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Prevención del envejecimiento</span>
                </li>
              </ul>
            </motion.div>

            {/* Nutrición */}
            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-lg border border-border hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Nutrición y Dietética</h3>
              </div>
              <ul className="space-y-4 text-foreground/80">
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Evaluación nutricional integral</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Planes personalizados según objetivos</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Nutrición para la longevidad</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Optimización de salud y vitalidad</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Complemento perfecto para tratamientos estéticos</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Experience & Credentials Section */}
      <section id="experience" className="py-24 md:py-40 bg-white">
        <div className="container">
          <motion.div
            className="mb-16"
            variants={sectionContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={fadeInUp} className="mb-6 flex items-center gap-3">
              <div className="w-1 h-12 bg-accent" />
              <span className="text-sm font-semibold text-accent tracking-widest">CREDENCIALES</span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Formación y Experiencia
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-12"
            variants={cardContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Education */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-bold mb-8 text-foreground flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-accent" />
                Educación
              </h3>
              <div className="space-y-8">
                <div className="border-l-2 border-accent pl-6">
                  <p className="text-sm text-accent font-semibold">En Curso - Dic 2025</p>
                  <h4 className="text-xl font-bold text-foreground mt-2">
                    Máster en Medicina Estética
                  </h4>
                  <p className="text-foreground/70">Universidade Lusófona de Lisboa</p>
                </div>
                <div className="border-l-2 border-accent pl-6">
                  <p className="text-sm text-accent font-semibold">Completado</p>
                  <h4 className="text-xl font-bold text-foreground mt-2">
                    Máster en Nutrición y Dietética
                  </h4>
                  <p className="text-foreground/70">Universidad de las Américas</p>
                </div>
                <div className="border-l-2 border-accent pl-6">
                  <p className="text-sm text-accent font-semibold">2015-2022</p>
                  <h4 className="text-xl font-bold text-foreground mt-2">
                    Grado en Medicina
                  </h4>
                  <p className="text-foreground/70">Universidad Católica de Cuenca, Ecuador</p>
                </div>
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-bold mb-8 text-foreground flex items-center gap-3">
                <Briefcase className="w-6 h-6 text-accent" />
                Experiencia Profesional
              </h3>
              <div className="space-y-8">
                <div className="border-l-2 border-accent pl-6">
                  <p className="text-sm text-accent font-semibold">2023</p>
                  <h4 className="text-xl font-bold text-foreground mt-2">
                    Directora del Puesto de Salud Portete
                  </h4>
                  <p className="text-foreground/70">Ministerio de Salud Pública, Esmeraldas</p>
                </div>
                <div className="border-l-2 border-accent pl-6">
                  <p className="text-sm text-accent font-semibold">2023</p>
                  <h4 className="text-xl font-bold text-foreground mt-2">
                    Médica del Ministerio de Salud Pública
                  </h4>
                  <p className="text-foreground/70">Portete, Esmeraldas, Ecuador</p>
                </div>
                <div className="border-l-2 border-accent pl-6">
                  <p className="text-sm text-accent font-semibold">2020-2021</p>
                  <h4 className="text-xl font-bold text-foreground mt-2">
                    Interna de Medicina
                  </h4>
                  <p className="text-foreground/70">Hospital José Carrasco Arteaga, Cuenca</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            className="mt-16 pt-16 border-t border-border"
            variants={sectionContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h3 variants={fadeInUp} className="text-2xl font-bold mb-8 text-foreground flex items-center gap-3">
              <Award className="w-6 h-6 text-accent" />
              Certificaciones y Membresías
            </motion.h3>
            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-4">
              <div className="flex gap-3 text-foreground/80">
                <span className="text-accent font-bold">✓</span>
                <span>Miembro de la Sociedad Portuguesa de Medicina Estética (SPME)</span>
              </div>
              <div className="flex gap-3 text-foreground/80">
                <span className="text-accent font-bold">✓</span>
                <span>Formación Avanzada Mesoestetic Academy (Técnica PATH)</span>
              </div>
              <div className="flex gap-3 text-foreground/80">
                <span className="text-accent font-bold">✓</span>
                <span>Certificación en Biomodulación con Ácido Hialurónico (Innoaesthetics)</span>
              </div>
              <div className="flex gap-3 text-foreground/80">
                <span className="text-accent font-bold">✓</span>
                <span>Abordaje Anatómico del Tercio Superior (Croma Pharma)</span>
              </div>
              <div className="flex gap-3 text-foreground/80">
                <span className="text-accent font-bold">✓</span>
                <span>Participante en Congresos Nacionales e Internacionales de Medicina Estética</span>
              </div>
              <div className="flex gap-3 text-foreground/80">
                <span className="text-accent font-bold">✓</span>
                <span>Formación en Stanford Medicine y Novosibirsk State University</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Certification Book Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <CertificationBook />
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-40 bg-muted/30">
        <div className="container">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            variants={sectionContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={fadeInUp} className="mb-8 flex items-center justify-center gap-3">
              <div className="w-1 h-12 bg-accent" />
              <span className="text-sm font-semibold text-accent tracking-widest">CONTACTO</span>
              <div className="w-1 h-12 bg-accent" />
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
              Ponte en Contacto
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-foreground/70 mb-16">
              Estoy aquí para responder tus preguntas y ayudarte a alcanzar tus objetivos de salud y belleza.
            </motion.p>

            <motion.div
              className="grid lg:grid-cols-3 gap-10 mb-12"
              variants={cardContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.div variants={fadeInUp} className="bg-white p-6 rounded-lg border border-border">
                <Phone className="w-8 h-8 text-accent mx-auto mb-4" />
                <h3 className="font-bold text-foreground mb-2">Teléfono</h3>
                <a
                  href="tel:+351930953897"
                  className="text-accent hover:underline"
                >
                  +351 930 953 897
                </a>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-white p-6 rounded-lg border border-border">
                <Mail className="w-10 h-8 text-accent mx-auto mb-4" />
                <h3 className="font-bold text-foreground mb-2">Email</h3>
                <a
                  href="mailto:mdarianapoma@gmail.com"
                  className="text-accent hover:underline break-all"
                >
                  mdarianapoma@gmail.com
                </a>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-white p-6 rounded-lg border border-border">
                <MapPin className="w-8 h-8 text-accent mx-auto mb-4" />
                <h3 className="font-bold text-foreground mb-2">Ubicación</h3>
                <p className="text-foreground/70">Porto, Portugal</p>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex justify-center gap-6">
              <a
                href="https://www.instagram.com/dra.arianaaguilar"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent/20 transition-colors"
              >
                <Instagram className="w-6 h-6 text-accent" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent/20 transition-colors"
              >
                <Linkedin className="w-6 h-6 text-accent" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <motion.footer
        className="bg-foreground text-white py-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container text-center">
          <p className="text-sm opacity-70">
            © 2026 Dra. Ariana Aguilar. Todos los derechos reservados.
          </p>
          <p className="text-xs opacity-50 mt-2">
            Medicina Estética | Nutrición y Dietética
          </p>
        </div>
      </motion.footer>
    </div>
  );
}
