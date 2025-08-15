
export default function BilgiBolumu() {
  return (
     <section className="relative">
      {/* Blur'lu arka plan katmanı */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-sm -z-10"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
        aria-hidden="true"
      />
      {/* karartma overlay */}
      <div className="absolute inset-0 bg-black/10 -z-10" aria-hidden="true" />

      {/* İÇERİK */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-stretch">
          {/* SOL SÜTUN */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 md:p-8 h-full">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
              Ankara’nın Her Yerine Profesyonel Doğalgaz Servisi
            </h2>
            <p className="mt-4 text-gray-800 leading-7 max-w-prose">
              Kombi bakımı, <strong>kombi tamiri</strong>, <strong>gaz kaçağı tespiti</strong>,
              teknik servis, satış ve montaj işlemlerinde hızlı ve güvenilir hizmet sunuyoruz.
              <strong> Batıkent</strong> ve çevresinde aynı gün servis imkânı.
            </p>

            {/* ÖNE ÇIKAN HİZMETLER */}
            <ul className="mt-6 space-y-3 text-gray-800">
              {[
                "Doğalgaz kaçak tespiti ve tamiratı",
                "Kombi bakımı ve arıza onarımı",
                "Demirdöküm kombi tamiri (yetkin ekip)",
                "Ocak montajı ve kombi montajı",
                "Batıkent kombi servisi • Batıkent tesisatçı",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            
          </div>

          {/* SAĞ SÜTUN – İLETİŞİM KARTI */}
          <div className="md:pl-6 h-full">
            <div className="rounded-2xl bg-white/90 backdrop-blur-sm shadow-lg border border-gray-100 p-6 md:p-8 sticky top-24 h-full">
              <h3 className="text-xl font-semibold text-gray-900">
                Hızlı Destek ve Randevu
              </h3>
              <p className="mt-2 text-gray-600">
                Arıza ve kaçak şüphesinde gecikmeyin. Uzman ekibimizle aynı gün
                servis imkânı.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+905072604552"
                  className="flex-1 inline-flex items-center justify-center rounded-lg px-5 py-3 font-semibold bg-yellow-400 hover:bg-yellow-500 text-black transition shadow"
                >
                  📞 Hemen Arayın — 0507 260 45 52
                </a>
                <a
                  href="https://wa.me/905072604552"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center rounded-lg px-5 py-3 font-semibold bg-emerald-500 hover:bg-emerald-600 text-white transition shadow"
                >
                  💬 WhatsApp’tan Ulaşın
                </a>
              </div>

              {/* Güven unsurları */}
              <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-gray-600">
                <div className="rounded-lg border border-gray-200 p-3 bg-gray-50">
                  Aynı Gün Servis
                </div>
                <div className="rounded-lg border border-gray-200 p-3 bg-gray-50">
                  Usta Garantisi
                </div>
                <div className="rounded-lg border border-gray-200 p-3 bg-gray-50">
                  Faturalı İşçilik
                </div>
                <div className="rounded-lg border border-gray-200 p-3 bg-gray-50">
                  Ankara Geneli
                </div>
              </div>

              <p className="mt-6 text-xs text-gray-500">
                Başkentgaz prosedürlerine uygun montaj ve tamir hizmetleri.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}