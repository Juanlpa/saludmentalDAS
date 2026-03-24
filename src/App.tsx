import { MessageCircle, Heart, Shield, Clock, Phone } from 'lucide-react';

// Configuración fácil del número de WhatsApp
const WHATSAPP_NUMBER = "593958992514"; // Número actualizado para develop
const WHATSAPP_MESSAGE = "Hola, necesito ayuda profesional. ¿Podemos hablar?";

function App() {
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-teal-100 selection:text-teal-900">
      {/* Background Orbs */}
      <div className="fixed inset-0 overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-100/50 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-teal-50/50 blur-[120px]" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between backdrop-blur-md bg-white/40 border border-white/20 rounded-2xl px-6 py-3 shadow-sm">
          <div className="flex items-center gap-2">
            <Heart className="w-6 h-6 text-teal-600 fill-teal-600/10" />
            <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-teal-700 to-blue-700 bg-clip-text text-transparent">
              Salud Mental
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            <span className="flex items-center gap-1.5"><Shield className="w-4 h-4" /> Seguro</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> Sin Esperas</span>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Hero Section */}
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-sm font-semibold shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
              </span>
              Disponible ahora para ti
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
              Tu bienestar mental no puede <span className="text-teal-600">esperar más.</span>
            </h1>
            
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Accede a apoyo profesional de forma inmediata, sin trámites, sin registros y sin complicaciones. Tu primer paso hacia la calma comienza aquí.
            </p>
          </div>

          {/* CTA Section */}
          <div className="flex flex-col items-center gap-6 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200 ease-out">
            <button
              onClick={handleWhatsAppClick}
              className="group relative flex items-center gap-3 px-10 py-5 bg-teal-600 hover:bg-teal-700 text-white rounded-2xl font-bold text-xl transition-all duration-300 shadow-[0_20px_50px_rgba(13,148,136,0.3)] hover:shadow-[0_25px_60px_rgba(13,148,136,0.5)] active:scale-95 group overflow-hidden"
            >
              <div className="absolute inset-x-0 bottom-0 h-1 bg-white/20 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <MessageCircle className="w-8 h-8 md:w-9 md:h-9" />
              <span>Hablar con un Profesional</span>
            </button>
            <p className="text-slate-400 text-sm flex items-center gap-2">
              <Phone className="w-4 h-4" /> Conexión directa a través de WhatsApp
            </p>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 animate-in fade-in duration-1000 delay-500">
            {[
              { icon: Heart, label: "Atención Humana", desc: "Dialoga directamente con un profesional real." },
              { icon: Shield, label: "Privacidad Total", desc: "Tus conversaciones están protegidas de extremo a extremo." },
              { icon: Clock, label: "Respuesta Rápida", desc: "Olvídate de las listas de espera de semanas." }
            ].map((feature, i) => (
              <div key={i} className="group p-6 rounded-3xl bg-white/50 border border-white/20 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg mb-2">{feature.label}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200/50 py-10 px-6 text-center text-slate-400 text-sm">
        <p>© 2026 Acceso a la Salud Mental. Todos los derechos reservados.</p>
        <p className="mt-2 text-xs">Diseñado para ayudar a nuestra comunidad.</p>
      </footer>
    </div>
  );
}

export default App;
