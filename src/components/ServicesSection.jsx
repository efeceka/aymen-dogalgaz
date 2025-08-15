import { WrenchScrewdriverIcon, FireIcon, Cog6ToothIcon, BuildingStorefrontIcon, WrenchIcon, BoltIcon } from "@heroicons/react/24/outline";

const services = [
  {
    title: "Kombi Bakımı",
    description: "Kombinizin ömrünü uzatmak ve verimliliğini artırmak için periyodik bakım.",
    icon: Cog6ToothIcon,
  },
  {
    title: "Kombi Tamiri",
    description: "Her marka ve model kombi arızalarının hızlı ve garantili onarımı.",
    icon: WrenchScrewdriverIcon,
  },
  {
    title: "Gaz Kaçağı Tespiti",
    description: "Profesyonel ekipman ile güvenli ve hızlı kaçak tespiti ve onarımı.",
    icon: FireIcon,
  },
  {
    title: "Satış ve Montaj",
    description: "Yeni kombi ve doğalgaz tesisatı satış ve montaj hizmetleri.",
    icon: BuildingStorefrontIcon,
  },
  {
    title: "Ocak Montajı",
    description: "Doğalgazlı ocak bağlantı ve montaj işlemleri.",
    icon: WrenchIcon,
  },
  {
    title: "Başkentgaz Yetkili Hizmet",
    description: "Başkentgaz prosedürlerine uygun kurulum ve tamir.",
    icon: BoltIcon,
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Hizmetlerimiz
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition"
            >
              <service.icon className="h-12 w-12 text-emerald-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-6">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}