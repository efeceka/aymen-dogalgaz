// app/iletisim/page.jsx
import Script from "next/script";

const siteUrl = "https://www.siteniz.com"; // canlı alan adınız
const business = {
  name: "Aymen Doğalgaz",
  phone: "+905072604552",
  email: "info@siteniz.com",
  address: "Batıkent, Ankara, Türkiye",
};

export async function generateMetadata() {
  const title = `İletişim | ${business.name}`;
  const description =
    "Aymen Doğalgaz ile hızlıca iletişime geçin. Telefon, WhatsApp ve e-posta ile destek. Ankara genelinde aynı gün servis imkânı.";

  return {
    title,
    description,
    alternates: { canonical: `${siteUrl}/iletisim` },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/iletisim`,
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

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    name: business.name,
    telephone: business.phone,
    email: business.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ankara",
      addressCountry: "TR",
    },
    url: `${siteUrl}/iletisim`,
  };

  return (
    <>
      {/* SEO JSON-LD */}
      <Script
        id="contact-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="relative bg-emerald-600 text-white pt-16">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <h1 className="text-3xl md:text-5xl font-bold">İletişim</h1>
          <p className="mt-3 text-lg">
            Bize telefon, WhatsApp veya e-posta ile ulaşabilirsiniz.
          </p>
        </div>
      </section>

      {/* İLETİŞİM BLOKLARI */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        {/* Telefon */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 text-center">
          <h3 className="text-xl font-semibold text-gray-900">Telefon</h3>
          <p className="mt-2 text-gray-600">
            <a href={`tel:${business.phone}`} className="font-medium text-emerald-600">
              0507 260 45 52
            </a>
          </p>
        </div>

        {/* WhatsApp */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 text-center">
          <h3 className="text-xl font-semibold text-gray-900">WhatsApp</h3>
          <p className="mt-2 text-gray-600">
            <a
              href={`https://wa.me/${business.phone.replace("+", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-emerald-600"
            >
              Mesaj Gönder
            </a>
          </p>
        </div>

        {/* E-Posta */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 text-center">
          <h3 className="text-xl font-semibold text-gray-900">E-Posta</h3>
          <p className="mt-2 text-gray-600">
            <a href={`mailto:${business.email}`} className="font-medium text-emerald-600">
              {business.email}
            </a>
          </p>
        </div>
      </section>

      {/* HARİTA */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Konumumuz
        </h2>
        <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3058.0674310378645!2d32.69374527598861!3d39.9622450715163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDU3JzQ0LjEiTiAzMsKwNDEnNDYuOCJF!5e0!3m2!1str!2sde!4v1755284700783!5m2!1str!2sde"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
}