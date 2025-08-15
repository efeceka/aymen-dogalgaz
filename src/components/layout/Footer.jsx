export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10 items-center">
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">Doğalgaz Teknik</h3>
          <p className="text-sm leading-6">
            Ankara’nın her yerine doğalgaz tesisat, kombi tamiri ve gaz kaçağı hizmetleri. Güvenli, hızlı ve garantili çözümler.
          </p>
        </div>

        <div className="text-center">
          <p className="text-sm mb-2">7/24 İletişim</p>
          <a href="tel:+905072604552" className="text-2xl font-bold text-yellow-400 hover:text-yellow-300 transition">
            📞 0507 260 45 52
          </a>
        </div>

        <div className="text-md md:text-right">
          <p>📍 Batıkent, Ankara</p>
          <a href="mailto:info@dogalgazteknik.com" className="block mt-2 hover:text-white transition">
            ✉️ info@dogalgazteknik.com
          </a>
        </div>
      </div>

      <div className="border-t border-gray-700 py-4 text-center text-sm">
        © {new Date().getFullYear()} Doğalgaz Teknik — Tüm Hakları Saklıdır.
      </div>
    </footer>
  );
}