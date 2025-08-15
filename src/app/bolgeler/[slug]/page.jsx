import { notFound } from "next/navigation";
import Link from "next/link";    

const siteUrl = "http://localhost:3000/"; // canlı alan adını yaz

// İlçe verileri
const bolgelerData = {
  batikent: {
    title: "Batıkent Doğalgaz Servisi",
    description:
      "Batıkent doğalgaz servisi olarak kombi bakımı, kombi tamiri, doğalgaz tesisatı, gaz kaçağı tespiti ve Başkentgaz yetkili işlemleri ile profesyonel hizmet sunuyoruz.",
    content: `Batıkent ve çevresinde doğalgaz ile ilgili tüm ihtiyaçlarınız için profesyonel teknik ekibimizle hizmetinizdeyiz. Kombi bakımı, kombi tamiri, doğalgaz tesisatı kurulumu, gaz kaçağı tespiti ve onarımı gibi tüm işlemleri Başkentgaz prosedürlerine uygun şekilde gerçekleştiriyoruz.

Yıllardır Batıkent bölgesinde edindiğimiz tecrübe sayesinde hızlı, güvenli ve garantili çözümler sunuyoruz. Doğalgaz tesisatı montajı, kombi değişimi, petek temizliği, gaz basınç ayarı ve resmi gaz açma işlemleri gibi hizmetlerimizle hem güvenliğinizi hem de cihazlarınızın verimliliğini artırıyoruz.

Batıkent’te doğalgaz ile ilgili ihtiyaçlarınız için hemen bizimle iletişime geçebilir, 7/24 teknik destek alabilirsiniz.`,
    hero: "/images/form-image.jpg",
    heroAlt: "Batıkent doğalgaz servisi kombi tamiri ve bakım ekibi"
  },
  cankaya: {
  title: "Çankaya Doğalgaz Servisi",
  description:
    "Çankaya doğalgaz servisi olarak kombi bakım, tamir, tesisat montajı ve gaz kaçağı tespiti hizmetleri sunuyoruz. Başkentgaz prosedürlerine uygun profesyonel çözümler.",
  content: `Çankaya ve çevresinde doğalgaz alanında uzman ekibimiz ile hizmet veriyoruz. Kombi bakımı, kombi tamiri, doğalgaz tesisatı kurulumu, gaz kaçağı tespiti ve onarımı gibi tüm işlemleri güvenle gerçekleştiriyoruz.

Başkentgaz standartlarına uygun tesisat montajı, kombi değişimi, petek temizliği ve gaz açma işlemleri ile hem güvenliğinizi hem de ısınma verimliliğinizi artırıyoruz. Yılların tecrübesiyle hızlı ve garantili çözümler sunuyoruz.

Çankaya doğalgaz ihtiyaçlarınız için hemen bizi arayın, 7/24 teknik destek alın.`,
  hero: "/images/form-image.jpg",
  heroAlt: "Çankaya doğalgaz servisi kombi bakım ve tamir ekibi"
},

kecioren: {
  title: "Keçiören Doğalgaz Servisi",
  description:
    "Keçiören doğalgaz servisi olarak kombi bakımı, tamiri, tesisat kurulumu ve gaz kaçağı onarımı hizmetleri sunuyoruz. Başkentgaz yetkili işlemleriyle güvenli çözümler.",
  content: `Keçiören’de doğalgaz hizmetleri için uzman teknik ekibimizle yanınızdayız. Kombi bakımı, kombi tamiri, doğalgaz tesisatı kurulumu ve gaz kaçağı tespitinde garantili hizmet sunuyoruz.

Tesisat montajı, petek temizliği, gaz basınç ayarı ve resmi gaz açma işlemleri dahil tüm hizmetlerimizi Başkentgaz standartlarına uygun şekilde gerçekleştiriyoruz.

Keçiören doğalgaz servisi ihtiyacınız olduğunda hemen arayın, hızlı ve güvenli çözümlerden yararlanın.`,
  hero: "/images/form-image.jpg",
  heroAlt: "Keçiören doğalgaz servisi kombi bakım ekibi"
},

etimesgut: {
  title: "Etimesgut Doğalgaz Servisi",
  description:
    "Etimesgut doğalgaz servisi kombi bakım, kombi tamiri, tesisat montajı ve gaz kaçağı onarımında uzman çözümler sunar. Başkentgaz onaylı işlemler.",
  content: `Etimesgut ve çevresinde doğalgaz hizmetleri sunan deneyimli ekibimizle 7/24 yanınızdayız. Kombi bakım ve tamiri, doğalgaz tesisatı montajı, gaz kaçağı tespiti gibi işlemleri profesyonel şekilde yapıyoruz.

Resmi Başkentgaz prosedürlerine uygun kombi montajı, petek temizliği, gaz basınç ayarı ve gaz açma hizmetleri ile güvenliğinizi ve ısınma performansınızı artırıyoruz.

Etimesgut doğalgaz servisi olarak hızlı, güvenilir ve garantili çözümler için hemen bizi arayın.`,
  hero: "/images/form-image.jpg",
  heroAlt: "Etimesgut doğalgaz servisi kombi onarım ekibi"
},

yenimahalle: {
  title: "Yenimahalle Doğalgaz Servisi",
  description:
    "Yenimahalle doğalgaz servisi kombi bakım, tamir, tesisat montajı ve gaz kaçağı tespitinde uzman hizmet sunar. Başkentgaz onaylı güvenli çözümler.",
  content: `Yenimahalle ve civarında doğalgaz hizmetlerinde uzman ekibimiz ile güvenli ve hızlı çözümler üretiyoruz. Kombi bakımı, kombi tamiri, doğalgaz tesisatı kurulumu, gaz kaçağı tespiti gibi tüm işlemleri titizlikle gerçekleştiriyoruz.

Başkentgaz standartlarına uygun tesisat montajı, kombi değişimi, petek temizliği ve gaz açma hizmetleri ile hem güvenliğinizi hem de enerji verimliliğinizi artırıyoruz.

Yenimahalle doğalgaz servisi için hemen bizimle iletişime geçin.`,
  hero: "/images/form-image.jpg",
  heroAlt: "Yenimahalle doğalgaz servisi kombi bakım ve tamir ekibi"
},

mamak: {
  title: "Mamak Doğalgaz Servisi",
  description:
    "Mamak doğalgaz servisi olarak kombi bakım, tamir, tesisat montajı ve gaz kaçağı onarımında uzman ekibimizle hizmet veriyoruz.",
  content: `Mamak bölgesinde doğalgaz alanında profesyonel hizmet sunuyoruz. Kombi bakımı, kombi tamiri, doğalgaz tesisatı kurulumu, gaz kaçağı tespiti ve onarımı işlemlerinde hızlı ve güvenli çözümler sağlıyoruz.

Başkentgaz prosedürlerine uygun olarak tesisat montajı, petek temizliği, gaz basınç ayarı ve gaz açma hizmetleri sunuyoruz.

Mamak doğalgaz ihtiyaçlarınız için 7/24 teknik destek alabilirsiniz.`,
  hero: "/images/form-image.jpg",
  heroAlt: "Mamak doğalgaz servisi kombi tamir ekibi"
}

  // Yeni ilçeler buraya eklenebilir
};

export function generateStaticParams() {
  return Object.keys(bolgelerData).map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const slug = params.slug; // ❗ await yok
  const b = bolgelerData[slug];
  if (!b) return { title: "Bölge bulunamadı | Doğalgaz Teknik" };

  const imageUrl = b.hero ? siteUrl + b.hero : undefined;
  return {
    title: `${b.title} | Doğalgaz Teknik`,
    description: b.description,
    openGraph: {
      title: `${b.title} | Doğalgaz Teknik`,
      description: b.description,
      url: `${siteUrl}/bolgeler/${slug}`,
      images: imageUrl ? [{ url: imageUrl }] : [],
      locale: "tr_TR",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${b.title} | Doğalgaz Teknik`,
      description: b.description,
      images: imageUrl ? [imageUrl] : [],
    },
  };
}

export default function BolgePage({ params }) {
  const slug = params.slug; // ❗ await yok
  const bolge = bolgelerData[slug];
  if (!bolge) return notFound();

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* İÇERİK — mobilde önce */}
      <main className="md:col-span-3 order-1 md:order-none">
        {/* HERO kart */}
        <section
          className="relative bg-cover bg-center rounded-lg overflow-hidden mb-8"
          style={{ backgroundImage: `url('${bolge.hero}')`, minHeight: "250px" }}
          aria-label={bolge.heroAlt || bolge.title}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative p-6 flex items-end h-full">
            <div>
              <p className="text-sm text-white/80">Bölgeler</p>
              <h1 className="text-2xl md:text-4xl font-bold text-white">{bolge.title}</h1>
              <p className="mt-3 text-white/90">{bolge.description}</p>
            </div>
          </div>
        </section>

        {/* Metin */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{bolge.title}</h2>
        <p className="text-lg text-gray-800 mb-6">{bolge.description}</p>
        <div className="prose max-w-none text-gray-700 whitespace-pre-line leading-8">
          {bolge.content}
        </div>
      </main>

      {/* LİSTE — mobilde altta */}
      <aside className="md:col-span-1 order-2 md:order-none">
        <h3 className="text-lg font-semibold mb-3 text-white border rounded-2xl text-center bg-gray-900 p-3">Tüm Bölgeler</h3>
        <ul className="border rounded-lg divide-y divide-gray-200 shadow-sm">
          {Object.entries(bolgelerData).map(([key, item]) => (
            <li key={key}>
              <Link
                href={`/bolgeler/${key}`}
                className={`block px-4 py-3 hover:bg-gray-50 transition ${
                  key === slug ? "bg-gray-100 font-semibold border-l-4 border-blue-500" : "text-gray-700"
                }`}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}