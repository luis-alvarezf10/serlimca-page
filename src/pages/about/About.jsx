import { motion as Motion } from 'framer-motion'
import { HiOutlineBadgeCheck, HiOutlineCog, HiOutlineShieldCheck, HiOutlineTruck } from 'react-icons/hi'
import { useLanguage } from '../../context/LanguageContext'
import Footer from '../../components/Footer'
import PrimaryButton from '../../components/buttons.jsx/PrimaryButton'
import heroImage from '../../assets/imagen-1.webp'
import liftingImage from '../../assets/imagen-8.webp'
import maintenanceImage from '../../assets/imagen-9.webp'
import movingImage from '../../assets/imagen-11.webp'
import capacityImage from '../../assets/imagen-16.jpeg'

const MotionSection = ({ children, className = '' }) => (
  <Motion.section
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.55, ease: 'easeOut' }}
    className={className}
  >
    {children}
  </Motion.section>
)

const valueIds = [
  'honesty',
  'quality',
  'punctuality',
  'passion',
  'competitiveness',
  'teamwork',
  'customerOrientation',
  'socialResponsibility',
  'problemSolving',
]

const pillarIds = ['lifting', 'maintenance', 'moving']
const pillarImages = [liftingImage, maintenanceImage, movingImage]
const pillarIcons = [HiOutlineTruck, HiOutlineCog, HiOutlineShieldCheck]
const pillarDimensions = [
  { width: 720, height: 960 },
  { width: 720, height: 961 },
  { width: 720, height: 720 },
]
const fleetColumns = ['cranes', 'trailers', 'hydraulicTrucks']
const fleetRows = ['lifting', 'maintenance', 'moving']
const partnerIds = ['cnpc', 'bohai', 'huawei', 'ensing', 'sanAntonio', 'venalmaQ']
const alignmentIds = ['strategic', 'operational', 'tactical']

function About() {
  const { t } = useLanguage()

  return (
    <div className="w-full overflow-x-hidden bg-white font-sans text-slate-900">
      <section className="relative isolate flex min-h-[68svh] items-center justify-center overflow-hidden bg-slate-950 px-6 py-16 md:min-h-[76svh] md:py-24">
        <img
          src={heroImage}
          alt=""
          aria-hidden="true"
          width="1280"
          height="960"
          fetchPriority="high"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/30" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/20" />

        <div className="mx-auto w-full max-w-7xl text-center">
          <Motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mx-auto max-w-4xl"
          >
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.32em] text-primary md:text-sm">
              {t('about.corporate.hero.eyebrow')}
            </p>
            <h1 className="max-w-4xl text-4xl leading-[1.05] text-white md:text-6xl lg:text-7xl">
              {t('about.corporate.hero.title')}
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-slate-200 md:text-xl">
              {t('about.corporate.hero.description')}
            </p>
          </Motion.div>
        </div>
      </section>

      <MotionSection className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:py-28 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-primary">
            {t('about.corporate.evolution.eyebrow')}
          </p>
          <h2 className="max-w-xl text-3xl leading-tight text-slate-950 md:text-5xl">
            {t('about.corporate.evolution.title')}
          </h2>
        </div>
        <div className="relative border-l-2 border-primary pl-6 md:pl-9">
          <div className="absolute -left-3 top-0 grid h-6 w-6 place-items-center rounded-full bg-primary text-[10px] font-bold text-slate-950">{t('about.corporate.evolution.marker')}</div>
          <p className="text-lg leading-relaxed text-slate-600">{t('about.corporate.evolution.description')}</p>
        </div>

        <div className="grid gap-5 border-t border-slate-200 pt-8 sm:grid-cols-2 lg:col-span-2">
          {['origin', 'capacity'].map((item, index) => (
            <article key={item} className="border border-slate-200 bg-slate-50 p-6 md:p-8">
              <p className="text-3xl font-bold text-slate-950">{t(`about.corporate.evolution.${item}.year`)}</p>
              <h3 className="mt-5 text-lg text-slate-950">{t(`about.corporate.evolution.${item}.title`)}</h3>
              <p className="mt-3 leading-relaxed text-slate-600">{t(`about.corporate.evolution.${item}.description`)}</p>
              <span className="mt-5 block text-xs font-bold uppercase tracking-[0.22em] text-primary">{String(index + 1).padStart(2, '0')}</span>
            </article>
          ))}
        </div>
      </MotionSection>

      <MotionSection className="bg-slate-950 px-6 py-20 text-white md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-primary">{t('about.corporate.dna.eyebrow')}</p>
            <h2 className="text-3xl leading-tight md:text-5xl">{t('about.corporate.dna.title')}</h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">{t('about.corporate.dna.description')}</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {['vision', 'mission'].map((item) => (
              <article key={item} className="border border-white/15 bg-white/5 p-7 backdrop-blur-sm md:p-8">
                <span className="text-xs font-bold uppercase tracking-[0.24em] text-primary">{t(`about.corporate.dna.${item}.label`)}</span>
                <h3 className="mt-5 text-2xl leading-snug text-white">{t(`about.corporate.dna.${item}.title`)}</h3>
                <p className="mt-5 leading-relaxed text-slate-300">{t(`about.corporate.dna.${item}.description`)}</p>
              </article>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-primary">{t('about.corporate.values.eyebrow')}</p>
            <h2 className="text-3xl leading-tight text-slate-950 md:text-5xl">{t('about.corporate.values.title')}</h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-slate-600">{t('about.corporate.values.description')}</p>
          </div>
          <div className="grid gap-px overflow-hidden border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-3">
            {valueIds.map((valueId, index) => (
              <article key={valueId} className="bg-white p-6 transition-colors hover:bg-primary/10">
                <span className="text-xs font-bold tracking-[0.2em] text-primary">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="mt-7 text-lg text-slate-950">{t(`about.values.${valueId}.title`)}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{t(`about.values.${valueId}.description`)}</p>
              </article>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-slate-100 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-primary">{t('about.corporate.pillars.eyebrow')}</p>
            <h2 className="text-3xl leading-tight text-slate-950 md:text-5xl">{t('about.corporate.pillars.title')}</h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">{t('about.corporate.pillars.description')}</p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {pillarIds.map((pillarId, index) => {
              const Icon = pillarIcons[index]
              return (
                <article key={pillarId} className="group overflow-hidden border border-slate-200 bg-white shadow-sm">
                  <img
                    src={pillarImages[index]}
                    alt={t(`about.corporate.pillars.${pillarId}.title`)}
                    width={pillarDimensions[index].width}
                    height={pillarDimensions[index].height}
                    loading="lazy"
                    decoding="async"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="p-7">
                    <div className="flex items-center justify-between gap-5">
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">{t('about.corporate.pillars.label', { number: String(index + 1).padStart(2, '0') })}</span>
                      <Icon className="text-2xl text-slate-700" aria-hidden="true" />
                    </div>
                    <h3 className="mt-5 text-2xl leading-tight text-slate-950">{t(`about.corporate.pillars.${pillarId}.title`)}</h3>
                    <p className="mt-4 leading-relaxed text-slate-600">{t(`about.corporate.pillars.${pillarId}.description`)}</p>
                    <ul className="mt-6 space-y-3 border-t border-slate-100 pt-6 text-sm leading-relaxed text-slate-600">
                      {[1, 2, 3].map((item) => (
                        <li key={item} className="flex gap-3">
                          <HiOutlineBadgeCheck className="mt-0.5 shrink-0 text-lg text-primary" aria-hidden="true" />
                          <span>{t(`about.corporate.pillars.${pillarId}.point${item}`)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:py-28 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-primary">{t('about.corporate.capacity.eyebrow')}</p>
          <h2 className="text-3xl leading-tight text-slate-950 md:text-5xl">{t('about.corporate.capacity.title')}</h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">{t('about.corporate.capacity.description')}</p>
          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            {['lifting', 'deployment', 'team', 'safety'].map((item) => (
              <article key={item} className="border-l-2 border-primary bg-slate-50 px-5 py-4">
                <h3 className="text-base text-slate-950">{t(`about.corporate.capacity.${item}.title`)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{t(`about.corporate.capacity.${item}.description`)}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="overflow-hidden border border-slate-200 bg-slate-100">
          <img
            src={capacityImage}
            alt={t('about.corporate.capacity.imageAlt')}
            width="1080"
            height="810"
            loading="lazy"
            decoding="async"
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="h-full min-h-[320px] w-full object-cover"
          />
        </div>
      </MotionSection>

      <MotionSection className="bg-slate-950 px-6 py-20 text-white md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-primary">{t('about.corporate.fleet.eyebrow')}</p>
            <h2 className="text-3xl leading-tight md:text-5xl">{t('about.corporate.fleet.title')}</h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-300">{t('about.corporate.fleet.description')}</p>
          </div>

          <div className="mt-12 overflow-x-auto border border-white/15">
            <table className="min-w-[760px] w-full border-collapse text-left">
              <thead className="bg-white/10 text-xs uppercase tracking-[0.16em] text-primary">
                <tr>
                  <th className="p-5 font-bold">{t('about.corporate.fleet.pillarColumn')}</th>
                  {fleetColumns.map((column) => <th key={column} className="border-l border-white/15 p-5 font-bold">{t(`about.corporate.fleet.columns.${column}`)}</th>)}
                </tr>
              </thead>
              <tbody className="text-sm text-slate-200">
                {fleetRows.map((row) => (
                  <tr key={row} className="border-t border-white/15">
                    <th scope="row" className="p-5 font-bold text-white">{t(`about.corporate.fleet.rows.${row}.label`)}</th>
                    {fleetColumns.map((column) => <td key={column} className="border-l border-white/15 p-5 leading-relaxed">{t(`about.corporate.fleet.rows.${row}.${column}`)}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-primary">{t('about.corporate.partners.eyebrow')}</p>
            <h2 className="text-3xl leading-tight text-slate-950 md:text-5xl">{t('about.corporate.partners.title')}</h2>
          </div>
          <p className="max-w-2xl text-lg leading-relaxed text-slate-600">{t('about.corporate.partners.description')}</p>
        </div>
        <div className="mt-12 grid gap-px overflow-hidden border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-3">
          {partnerIds.map((partner) => (
            <div key={partner} className="flex min-h-28 items-center justify-center bg-white p-6 text-center text-2xl font-bold tracking-tight text-slate-950 transition-colors hover:bg-primary/15 md:text-3xl">
              {t(`about.corporate.partners.${partner}`)}
            </div>
          ))}
        </div>
      </MotionSection>

      <MotionSection className="bg-slate-100 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-primary">{t('about.corporate.alignment.eyebrow')}</p>
            <h2 className="text-3xl leading-tight text-slate-950 md:text-5xl">{t('about.corporate.alignment.title')}</h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">{t('about.corporate.alignment.description')}</p>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {alignmentIds.map((item, index) => (
              <article key={item} className="border border-slate-200 bg-white p-7 md:p-8">
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-primary">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="mt-8 text-2xl text-slate-950">{t(`about.corporate.alignment.${item}.title`)}</h3>
                <p className="mt-5 leading-relaxed text-slate-600">{t(`about.corporate.alignment.${item}.description`)}</p>
              </article>
            ))}
          </div>
        </div>
      </MotionSection>

      <section className="bg-primary px-6 py-20 md:py-24">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-slate-800">{t('about.corporate.cta.eyebrow')}</p>
            <h2 className="mt-5 text-3xl leading-tight text-slate-950 md:text-5xl">{t('about.corporate.cta.title')}</h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-800">{t('about.corporate.cta.description')}</p>
          </div>
          <PrimaryButton to="/contacto" className="shrink-0 rounded-none bg-slate-950 px-7 py-4 text-xs uppercase tracking-[0.2em] text-white hover:bg-slate-800">
            {t('about.corporate.cta.button')}
          </PrimaryButton>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default About
