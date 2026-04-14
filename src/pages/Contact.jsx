import {
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiClock,
  HiChevronRight,
} from "react-icons/hi";
import GeneralButton from "../components/buttons.jsx/GeneralButton";
import Footer from "../components/Footer";
import GeneralField from "../components/inputs/GeneraldField";
import GeneralSelect from "../components/inputs/GeneralSelect";

const contactImage =
  "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80";

function Contact() {
  const services = [
    "Transporte de Carga Pesada",
    "Mantenimiento y Equipos",
    "Proyectos de Infraestructura",
    "Soporte Operativo",
  ];
  return (
    <div>
      <div
        className="min-h-screen pt-32 pb-20 flex items-center relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0a0a0a 0%, #050505 50%, #d8b2363d 100%)",
        }}
      >
        {/* Fondo de Rejilla Tecnológica (Contexto Global de la Web) */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(216,178,54,0.15),transparent_70%)]" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 30 L30 0 M0 30 L30 30' fill='none' stroke='white' stroke-width='1'/%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-0 border border-white/10 rounded-2xl overflow-hidden bg-black/60 backdrop-blur-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            {/* SECCIÓN DE INFORMACIÓN (4/12) */}
            <div className="lg:col-span-5 relative p-10 md:p-16 border-r border-white/5 flex flex-col justify-between">
              {/* Overlay de Imagen Industrial */}
              <div className="absolute inset-0 z-0 opacity-20 grayscale">
                <img
                  src={contactImage}
                  alt="Infraestructura"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
              </div>

              <div className="relative z-10">
                <div className="w-12 h-1 bg-primary mb-8" />
                <h1 className="text-5xl font-black text-white mb-6 uppercase tracking-tighter leading-none">
                  Contacto <br />{" "}
                  <span className="text-primary italic">Corporativo</span>
                </h1>
                <p className="text-slate-400 font-medium text-lg mb-12 border-l-2 border-primary/30 pl-4">
                  Establezca comunicación directa con nuestra unidad de gestión
                  para requerimientos técnicos y comerciales a nivel nacional.
                </p>

                <div className="space-y-10">
                  <div className="flex gap-6 items-start">
                    <HiPhone className="text-primary text-2xl mt-1" />
                    <div>
                      <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-2">
                        Línea Directa
                      </h4>
                      <p className="text-slate-200 font-mono text-xl">
                        +58 426 5831206
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6 items-start">
                    <HiMail className="text-primary text-2xl mt-1" />
                    <div>
                      <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-2">
                        Email Corporativo
                      </h4>
                      <p className="text-slate-200 font-mono text-xl">
                        serlimca@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6 items-start">
                    <HiLocationMarker className="text-primary text-2xl mt-1" />
                    <div>
                      <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-2">
                        Sede Administrativa
                      </h4>
                      <p className="text-slate-200 text-lg">
                        Calle Codazzi cruce con calle el Carmen Local 1, Zona
                        Industrial – San José de Guanipa- Edo. Anzoátegui
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative z-10 mt-16 pt-8 border-t border-white/10">
                <div className="flex items-center gap-4 text-slate-500">
                  <HiClock className="text-primary text-xl" />
                  <span className="text-[10px] font-black uppercase tracking-widest">
                    Disponibilidad Técnica 24/7
                  </span>
                </div>
              </div>
            </div>

            {/* SECCIÓN FORMULARIO (7/12) */}
            <div className="lg:col-span-7 p-10 md:p-16 bg-white/[0.02]">
              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <GeneralField
                    label="Razón social / nombre"
                    placeholder="Ingrese identificación"
                    type="email"
                  />
                  <GeneralField
                    label="Correo Electrónico"
                    placeholder="example@mail.com"
                    type="email"
                  />
                </div>
                <GeneralSelect label="Servicio de Interés" options={services} />
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-1">
                    Especificaciones del Requerimiento
                  </label>
                  <textarea
                    rows="6"
                    className="bg-white/5 border border-white/10 p-4 rounded-lg text-white transition-all resize-none font-medium
               /* Aquí está la magia */
               outline-none focus:outline-none 
               ring-0 focus:ring-0 focus:ring-offset-0
               focus:border-primary"
                    placeholder="Detalle los servicios solicitados"
                  />
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-6">
                  <p className="text-gray-200 text-[9px] uppercase tracking-widest leading-relaxed max-w-xs">
                    Al enviar esta solicitud, sus datos serán procesados bajo
                    estrictos protocolos de seguridad industrial y
                    confidencialidad.
                  </p>
                  <GeneralButton
                    type="submit"
                    className="w-full md:w-auto px-12 py-4 shadow-lg shadow-primary/20 group"
                  >
                    ENVIAR SOLICITUD
                    <HiChevronRight className="group-hover:translate-x-1 transition-transform" />
                  </GeneralButton>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
