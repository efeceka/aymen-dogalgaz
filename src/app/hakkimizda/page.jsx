// app/hakkimizda/page.jsx
import Script from "next/script";

const siteUrl = "https://www.siteniz.com"; // canlı alan adınız
const business = {
  name: "Aymen Doğalgaz",
  phone: "+905072604552",
  email: "info@siteniz.com",
  area: "Ankara",
  address: "Ankara, Türkiye",
};

export async function generateMetadata() {
  const title = `Hakkımızda | ${business.name}`;
  const description =
    "Aymen Doğalgaz; Ankara genelinde kombi bakımı, kombi tamiri, doğalgaz tesisatı ve gaz kaçağı tespitinde uzman teknik servis. Faturalı işçilik, aynı gün servis, Başkentgaz prosedürlerine uygun uygulamalar.";

  return {
    title,
    description,
    alternates: { canonical: `${siteUrl}/hakkimizda` },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/hakkimizda`,
      images: [{ url: `${siteUrl}/images/og-default.jpg` }],
      locale: "tr_TR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${siteUrl}/images/og-default.jpg`],
    },
  };
}

export default function AboutPage() {
  const faqs = [
    {
      q: "Hangi bölgelerde hizmet veriyorsunuz?",
      a: "Ankara’nın tüm ilçelerinde; özellikle Batıkent, Çankaya, Keçiören, Etimesgut, Yenimahalle ve Mamak bölgelerinde aynı gün servis."
    },
    {
      q: "Faturalı ve garantili mi çalışıyorsunuz?",
      a: "Evet. Tüm işçiliklerimiz faturalıdır; kullanılan yedek parçalar orijinaldir ve işçilik garantisi verilir."
    },
    {
      q: "Acil gaz kaçağı durumunda ne yapmalıyım?",
      a: "Gaz vanasını kapatın, ortamı havalandırın, kıvılcım oluşturabilecek ekipmanları kullanmayın ve bizi hemen arayın."
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    name: business.name,
    telephone: business.phone,
    email: business.email,
    areaServed: business.area,
    address: { "@type": "PostalAddress", addressLocality: business.area, addressCountry: "TR" },
    url: `${siteUrl}/hakkimizda`,
    sameAs: [],
    openingHours: "Mo-Su 00:00-23:59",
    image: `${siteUrl}/images/og-default.jpg`,
    makesOffer: [
      { "@type": "Offer", name: "Kombi Bakımı" },
      { "@type": "Offer", name: "Kombi Tamiri" },
      { "@type": "Offer", name: "Doğalgaz Tesisatı" },
      { "@type": "Offer", name: "Gaz Kaçağı Tespiti" }
    ],
  };

  return (
    <>
      {/* JSON-LD */}
      <Script
        id="about-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section
        className="relative bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/images/hero.jpg')", minHeight: "calc(45vh - 64px)" }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
        <div className="relative max-w-6xl mx-auto px-6 py-16 flex items-end h-full">
          <div>
            <p className="text-sm text-white/80">Kurumsal</p>
            <h1 className="text-3xl md:text-5xl font-bold">Hakkımızda</h1>
            <p className="mt-3 max-w-2xl text-white/90">
              {business.name}; Ankara’da doğalgaz ve kombi alanında güvenilir, hızlı ve standartlara uygun teknik servis hizmeti sunar.
            </p>
          </div>
        </div>
      </section>

      {/* HAKKIMIZDA METNİ */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Biz Kimiz?</h2>
          <p className="mt-4 text-lg leading-8 text-gray-700">
            {business.name}, uzun yıllara dayanan deneyimiyle kombi bakımı, kombi tamiri, doğalgaz tesisatı ve gaz kaçağı tespitinde
            profesyonel çözümler üretir. Başkentgaz prosedürlerine uygunluk, faturalı işçilik ve orijinal yedek parça kullanımı temel prensiplerimizdir.
            Hedefimiz, güvenliğinizi ve ısınma verimliliğinizi en üst seviyeye taşımaktır.
          </p>
          <p className="mt-4 text-lg leading-8 text-gray-700">
            Ankara genelinde aynı gün servis anlayışıyla, keşif, montaj, devreye alma ve bakım süreçlerini uçtan uca yönetiyoruz.
            Temiz işçilik, şeffaf fiyatlandırma ve kalıcı çözüm odaklı yaklaşımımızla fark yaratıyoruz.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            <div className="rounded-xl border border-gray-200 p-5">
              <h3 className="font-semibold text-gray-900">Neden Biz?</h3>
              <ul className="mt-3 space-y-2 text-gray-700">
                <li>• Aynı gün servis ve hızlı randevu</li>
                <li>• Faturalı işçilik, orijinal yedek parça</li>
                <li>• Başkentgaz standartlarına tam uyum</li>
                <li>• Deneyimli, eğitimli teknisyen kadrosu</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 p-5">
              <h3 className="font-semibold text-gray-900">Uzmanlık Alanlarımız</h3>
              <ul className="mt-3 space-y-2 text-gray-700">
                <li>• Kombi bakımı ve arıza onarımı</li>
                <li>• Doğalgaz tesisatı, proje ve montaj</li>
                <li>• Gaz kaçağı tespiti ve onarımı</li>
                <li>• Petek temizliği ve verim optimizasyonu</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Hızlı İletişim Kartı */}
        <aside className="md:pl-2">
          <div className="rounded-2xl bg-white shadow-lg border border-gray-100 p-6 sticky top-24">
            <h3 className="text-xl font-semibold text-gray-900">Hızlı İletişim</h3>
            <p className="mt-2 text-gray-600">
              Sorularınız ve randevu talepleriniz için bize ulaşın.
            </p>
            <div className="mt-4 space-y-2 text-gray-800">
              <a href={`tel:${business.phone}`} className="block font-semibold">
                📞 {business.phone.replace("+90", "0")}
              </a>
              <a href={`mailto:${business.email}`} className="block">
                ✉️ {business.email}
              </a>
              <p>📍 {business.address}</p>
            </div>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${business.phone}`}
                className="flex-1 inline-flex items-center justify-center rounded-lg px-5 py-3 font-semibold bg-yellow-400 hover:bg-yellow-500 text-black transition shadow"
              >
                Hemen Ara
              </a>
              <a
                href={`https://wa.me/${business.phone.replace("+", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center rounded-lg px-5 py-3 font-semibold bg-emerald-500 hover:bg-emerald-600 text-white transition shadow"
              >
                WhatsApp
              </a>
            </div>
            <p className="mt-4 text-xs text-gray-500">
              7/24 acil destek hattı • Ankara geneli servis
            </p>
          </div>
        </aside>
      </section>

      {/* SAYI & GÜVEN ALANI */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { k: "10+ yıl", v: "Tecrübe" },
            { k: "7/24", v: "Acil Servis" },
            { k: "1000+", v: "Mutlu Müşteri" },
            { k: "Faturalı", v: "Garantili İşçilik" },
          ].map((i) => (
            <div key={i.v} className="rounded-xl border border-gray-200 bg-white p-6 text-center">
              <div className="text-3xl font-bold text-gray-900">{i.k}</div>
              <div className="mt-1 text-gray-600">{i.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* HİZMET BÖLGELERİ (kısa tanıtım) */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Hizmet Verdiğimiz Bölgeler</h2>
        <p className="mt-3 text-gray-700">
          Ankara’nın tüm ilçelerinde hizmet veriyoruz; özellikle Batıkent, Çankaya, Keçiören, Etimesgut, Yenimahalle ve Mamak bölgelerinde aynı gün servis.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {["Batıkent","Çankaya","Keçiören","Etimesgut","Yenimahalle","Mamak"].map((b)=>(
            <span key={b} className="px-3 py-1 text-sm rounded-full bg-white border border-gray-200 text-gray-700">
              {b}
            </span>
          ))}
        </div>
      </section>

      {/* SSS */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Sıkça Sorulan Sorular</h2>
        <div className="mt-6 divide-y divide-gray-200 rounded-xl border border-gray-200 bg-white">
          {faqs.map((f, i) => (
            <details key={i} className="group p-5">
              <summary className="cursor-pointer font-medium text-gray-900 group-open:text-emerald-700">
                {f.q}
              </summary>
              <p className="mt-2 text-gray-700">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA BANT */}
      <section className="bg-emerald-600">
        <div className="max-w-6xl mx-auto px-6 py-8 md:py-10 text-center text-white">
          <h3 className="text-xl md:text-2xl font-semibold">
            Acil servis veya randevu için hemen iletişime geçin
          </h3>
          <div className="mt-4 flex flex-col sm:flex-row gap-3 justify-center">
            <a href={`tel:${business.phone}`} className="px-5 py-3 rounded-lg bg-yellow-400 text-black font-semibold">
              Telefon: {business.phone.replace("+90","0")}
            </a>
            <a
              href={`https://wa.me/${business.phone.replace("+","")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-lg bg-black/20 border border-white/30 font-semibold"
            >
              WhatsApp’tan Yaz
            </a>
          </div>
        </div>
      </section>
    </>
  );
}