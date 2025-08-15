
export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center text-white min-h-[calc(100vh-64px)]"
      style={{ backgroundImage: "url('/images/hero1.jpg')" }}
    >
      {/* Koyu overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* İçerik */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6 py-15">
        
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="/images/aymen-logo.png"
            alt="Aymen Doğalgaz Logo"
            className="h-70 w-auto drop-shadow-lg"
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Profesyonel Doğalgaz Teknik Servis
        </h1>
        <p className="text-lg md:text-xl mb-10">
          Kombi montajı, bakım ve onarım hizmetlerinde güvenilir çözüm ortağınız.
        </p>

        {/* Butonlar */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Hemen Ara */}
          <a
            href="tel:+905551112233"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-lg shadow-lg transition"
          >
            📞 Hemen Arayın - 0555 111 22 33
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/905551112233"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition"
          >
            💬 WhatsApp’tan Ulaşın
          </a>
        </div>
      </div>
    </section>
  );
}