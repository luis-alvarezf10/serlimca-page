import { useLanguage } from '../../context/LanguageContext';
import image from '../../assets/imagen-1.webp';
import { motion as Motion } from 'framer-motion';
import Footer from '../../components/Footer'
import OutlinedButton from '../../components/buttons.jsx/OutlinedButton';
import { useNavigate } from 'react-router-dom';

// Variantes de animación reutilizables
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.8, ease: "easeOut" }
  })
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};
const goals = [
  {
    titleKey: 'about.page.goals.strategic.title',
    descriptionKey: 'about.page.goals.strategic.description'
  },
  {
    titleKey: 'about.page.goals.operational.title',
    descriptionKey: 'about.page.goals.operational.description'
  },
  {
    titleKey: 'about.page.goals.tactical.title',
    descriptionKey: 'about.page.goals.tactical.description'
  }
];

const values = [
  {
    titleKey: 'about.values.honesty.title',
    descriptionKey: 'about.values.honesty.description'
  },
  {
    titleKey: 'about.values.quality.title',
    descriptionKey: 'about.values.quality.description'
  },
  {
    titleKey: 'about.values.punctuality.title',
    descriptionKey: 'about.values.punctuality.description'
  },
  {
    titleKey: 'about.values.passion.title',
    descriptionKey: 'about.values.passion.description'
  },
  {
    titleKey: 'about.values.competitiveness.title',
    descriptionKey: 'about.values.competitiveness.description'
  },
  {
    titleKey: 'about.values.teamwork.title',
    descriptionKey: 'about.values.teamwork.description'
  },
  {
    titleKey: 'about.values.customerOrientation.title',
    descriptionKey: 'about.values.customerOrientation.description'
  },
  {
    titleKey: 'about.values.socialResponsibility.title',
    descriptionKey: 'about.values.socialResponsibility.description'
  },
  {
    titleKey: 'about.values.problemSolving.title',
    descriptionKey: 'about.values.problemSolving.description'
  }
];

function About() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <div className="w-full bg-white overflow-x-hidden font-sans">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "linear" }}
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${image})` }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10" />

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <Motion.span
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            animate={{ opacity: 1, letterSpacing: "0.3em" }}
            transition={{ duration: 1 }}
            className="text-primary tracking-[0.3em] uppercase text-sm font-semibold mb-4 block"
          >
            {t('about.page.hero.eyebrow')}
          </Motion.span>
          <Motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl font-light text-white mb-6 leading-tight"
          >
            {t('about.page.hero.title')} <br />
            <span className="font-bold">{t('about.page.hero.highlight')}</span>
          </Motion.h1>
          <Motion.div
            initial={{ width: 0 }}
            animate={{ width: "6rem" }}
            transition={{ duration: 1, delay: 0.8 }}
            className="h-1 bg-primary mx-auto mb-8"
          />
        </div>
      </section>

      {/* Introducción Corporativa */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <Motion.div
            viewport={{ once: true }}
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
          >
            <h2 className="text-sm uppercase tracking-widest text-primary font-bold mb-4">
              {t('about.page.intro.eyebrow')}
            </h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-8 leading-tight">
              {t('about.page.intro.title')}
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              {t('about.page.intro.beforeCompany')} <strong className="text-slate-900">Servicios D'LIMA, C.A.</strong>, {t('about.page.intro.afterCompany')} <a href="https://maps.app.goo.gl/Ao2ZBhfGdZDDEZoy6" target="_blank" rel="noreferrer" className="text-primary font-semibold italic">{t('about.page.intro.location')}</a> {t('about.page.intro.beforeYear')} <strong className="text-slate-900">2003</strong>.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              {t('about.page.intro.quality')}
            </p>
          </Motion.div>

          <Motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-video bg-slate-100 rounded-sm border border-slate-200 overflow-hidden shadow-2xl">
              <img src={image} alt={t('about.page.intro.title')} className="w-full h-full object-cover" />
            </div>
            <Motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="absolute -bottom-6 -left-6 bg-primary p-8 hidden md:block"
            >
              <p className="text-slate-950 font-black text-4xl">20+</p>
              <p className="text-slate-900 text-xs uppercase font-bold tracking-tighter">
                {t('about.page.experience')}
              </p>
            </Motion.div>
          </Motion.div>
        </div>
      </section>

      <section className="relative py-24 px-8 bg-black text-white overflow-hidden">

        {/* IMAGEN DE FONDO CON ANIMACIÓN KEN BURNS */}
        <Motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }} // Opacidad baja para que se vea el texto
          transition={{ duration: 10, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: `url(${image})` }}
        />

        {/* OVERLAY OSCURO (Para asegurar legibilidad) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 z-10" />

        {/* CONTENIDO (Con z-20 para estar por encima de todo) */}
        <Motion.div
          viewport={{ once: true }}
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          className="relative z-20 max-w-7xl mx-auto grid md:grid-cols-2 gap-16"
        >
          <Motion.div variants={fadeIn} className="border-l border-primary/30 pl-8 group cursor-default">
            <h3 className="text-2xl font-bold mb-6 text-primary uppercase tracking-wider group-hover:pl-4 transition-all duration-300">
              {t('about.page.mission.title')}
            </h3>
            <p className="text-xl text-slate-200 leading-relaxed font-light">
              {t('about.page.mission.description')}
            </p>
          </Motion.div>

          <Motion.div variants={fadeIn} className="border-l border-primary/30 pl-8 group cursor-default">
            <h3 className="text-2xl font-bold mb-6 text-primary uppercase tracking-wider group-hover:pl-4 transition-all duration-300">
              {t('about.page.vision.title')}
            </h3>
            <p className="text-xl text-slate-200 leading-relaxed font-light">
              {t('about.page.vision.description')}
            </p>
          </Motion.div>
        </Motion.div>
      </section>

      {/* Valores Corporativos */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <Motion.div
            viewport={{ once: true }}
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            className="grid lg:grid-cols-[0.75fr_1.25fr] gap-14 lg:gap-20"
          >
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-primary font-bold mb-5">
                {t('about.values.eyebrow')}
              </p>
              <h2 className="text-4xl md:text-5xl font-black text-slate-950 leading-tight mb-6">
                {t('about.values.title')}
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed">
                {t('about.values.description')}
              </p>
            </div>

            <Motion.div
              viewport={{ once: true }}
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              className="grid sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-10"
            >
              {values.map((value, index) => (
                <Motion.article
                  key={value.titleKey}
                  variants={fadeIn}
                  custom={index}
                  className="group border-t border-slate-200 pt-6"
                >
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <span className="text-sm font-black text-primary">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="h-px flex-1 bg-slate-100 group-hover:bg-primary/40 transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-950 mb-3 group-hover:text-primary transition-colors">
                    {t(value.titleKey)}
                  </h3>
                  <p className="text-slate-500 leading-relaxed">
                    {t(value.descriptionKey)}
                  </p>
                </Motion.article>
              ))}
            </Motion.div>
          </Motion.div>
        </div>
      </section>

      {/* Pilares Estratégicos Animados */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <Motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center text-sm uppercase tracking-[0.4em] text-slate-500 font-bold mb-16"
        >
          {t('about.page.goals.title')}
        </Motion.h2>
        <div className="grid md:grid-cols-3 gap-12">
          {goals.map((goal, i) => (
            <Motion.div
              key={goal.titleKey}
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <h4 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">
                {t(goal.titleKey)}
              </h4>

              <Motion.div
                whileInView={{ width: "3rem" }}
                initial={{ width: 0 }}
                className="h-0.5 bg-primary mb-6"
              />

              <p className="text-slate-600 leading-relaxed">
                {t(goal.descriptionKey)}
              </p>
            </Motion.div>
          ))}
        </div>
      </section>

      {/* Equipo con Efecto Hover Elevado */}
      {/* <section className="py-24 px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-16">Capital Humano</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((member, i) => (
              <Motion.div
                key={member}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
                className="bg-white border border-slate-200 p-8 transition-shadow"
              >
                <div className="w-20 h-20 bg-slate-100 mb-6 rounded-full flex items-center justify-center grayscale overflow-hidden group">
                  <Motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-10 h-10 flex items-center justify-center border-2 border-slate-300 rounded-full"
                  >
                    <HiOutlineUserCircle className="text-slate-300 text-2xl" />
                  </Motion.div>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">Benito Martínez</h3>
                <p className="text-primary text-xs uppercase font-black tracking-widest mb-4">Fundador de la empresa</p>
                <p className="text-sm text-slate-500 leading-relaxed border-t border-slate-100 pt-4">
                  Especialista en ingeniería de mantenimiento industrial con +20 años de trayectoria.
                </p>
              </Motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA con Pulsación Sutil */}
      <section className="py-24 overflow-hidden relative bg-slate-900">
        {/* IMAGEN DE FONDO */}
        <Motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.5 }} // Opacidad media para dar profundidad
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${image})`, // Cambia por tu variable de imagen
            filter: 'grayscale(40%)' // Opcional: le da un toque más industrial
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10" />


        {/* CAPA DE COLOR (Para mantener el branding) */}
        <div className="absolute inset-0 bg-primary/80 mix-blend-multiply z-0" />

        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center px-6 relative z-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 uppercase tracking-tight">
            {t('about.page.cta.title')}
          </h2>

          <Motion.div
            whileHover={{ scale: 1.05, backgroundColor: "#000" }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <OutlinedButton
              onClick={
                () => {
                  navigate('/contacto') 
                }
              }
              className="inline-block bg-slate-950 text-white px-12 py-4 font-bold text-sm uppercase tracking-[0.2em] shadow-2xl transition-colors"
            >
              {t('about.page.cta.button')}
            </OutlinedButton>
          </Motion.div>
        </Motion.div>
      </section>
      <Footer />
    </div>

  );
}

export default About;
