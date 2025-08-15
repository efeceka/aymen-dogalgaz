"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const closeTimeout = useRef(null);

  const openMenu = (i) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setOpenDropdown(i);
  };
  const scheduleClose = () => {
    closeTimeout.current = setTimeout(() => setOpenDropdown(null), 200);
  };

  const menuItems = [
    { name: "Anasayfa", href: "/" },
    {
      name: "Hizmetler",
      dropdown: [
        { name: "Doğalgaz Bakım", href: "/hizmetler/dogalgaz-bakim" },
        { name: "Doğalgaz Onarım", href: "/hizmetler/dogalgaz-onarim" },
        { name: "Kombi Montajı", href: "/hizmetler/kombi-montaji" },
        { name: "Gaz kaçağı", href: "/hizmetler/gaz-kacagi" },
        { name: "Dogalgaz Servis", href: "/hizmetler/dogalgaz-servis" },
        { name: "Doğalgaz Tesisatı", href: "/hizmetler/dogalgaz-tesisati" },
        { name: "Kombi Tamiri", href: "/hizmetler/kombi-tamiri" },
        { name: "Demirdöküm Kombi Tamiri", href: "/hizmetler/demirdokum-servis" },
        { name: "Başkentgaz Yetkili Servis", href: "/hizmetler/baskentgaz-yekili-servis" },
        { name: "Batıkent Doğalgaz Servis", href: "/hizmetler/batikent-dogalgaz-servis" },
        { name: "Ankara Doğalgaz Servis", href: "/hizmetler/ankara-dogalgaz-servis" },
      ],
    },
    {
      name: "Bölgeler",
      dropdown: [
        { name: "Ankara Batıkent Doğalgaz Servis", href: "/bolgeler/batikent" },
        { name: "Ankara Çankaya Doğalgaz Servis", href: "/bolgeler/cankaya" },
        { name: "Ankara Keçiören Doğalgaz Servis", href: "/bolgeler/kecioren" },
        { name: "Ankara Etimesgut Doğalgaz Servis", href: "/bolgeler/etimesgut" },
        { name: "Ankara Yenimahalle Doğalgaz Servis", href: "/bolgeler/yenimahalle" },
        { name: "Ankara Mamak Doğalgaz Servis", href: "/bolgeler/mamak" }
      ],
    },
    { name: "Hakkımızda", href: "/hakkimizda" },
    { name: "İletişim", href: "/iletisim" },
  ];

  return (
    <header className="bg-gray-900 text-white relative z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative font-bold">
       <Link href="/" className="flex items-center space-x-2">
        <img
            src="/images/aymen-logo2.png" // sadece görsel kısmını buraya koy
            alt="Doğalgaz Teknik Logo"
            className="h-13 w-auto"
        />
        <span className="text-2xl font-bold whitespace-nowrap hidden md:inline">
            Aymen Doğalgaz
        </span>
        </Link>

        {/* Masaüstü Menü: TAM ORTADA */}
        <nav className="hidden lg:block absolute left-1/2 -translate-x-1/2">
          <ul className="flex space-x-8">
            {menuItems.map((item, index) =>
              item.dropdown ? (
                <li
                  key={index}
                  className="relative"
                  onMouseEnter={() => openMenu(index)}
                  onMouseLeave={scheduleClose}
                >
                  <button className="hover:text-yellow-400" aria-haspopup="menu" aria-expanded={openDropdown === index}>
                    {item.name}
                  </button>
                  {openDropdown === index && (
                    <div className="absolute left-0 top-full pt-2 z-[60]">
                      <div className="bg-white text-gray-900 shadow-lg rounded-md min-w-[240px]">
                        {item.dropdown.map((subItem, subIndex) => (
                          <Link key={subIndex} href={subItem.href} className="block px-5 py-3 hover:bg-gray-100">
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              ) : (
                <li key={index}>
                  <Link href={item.href} className="hover:text-yellow-400">{item.name}</Link>
                </li>
              )
            )}
          </ul>
        </nav>

        {/* Burger – Mobil */}
        <button
          className="lg:hidden text-2xl"
          onClick={() => setMobileMenuOpen((s) => !s)}
          aria-label="Menüyü aç/kapat"
        >
          {mobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobil Menü: fixed, hero'yu itmez */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-16 z-40 bg-gray-900/95 backdrop-blur-sm border-t border-gray-800 max-h-[calc(100vh-64px)] overflow-y-auto">
          <div className="px-6 py-4 space-y-4">
            {menuItems.map((item, index) =>
              item.dropdown ? (
                <details key={index} className="group">
                  <summary className="cursor-pointer py-2 border-b border-gray-800 group-open:text-yellow-400">
                    {item.name}
                  </summary>
                  <div className="pl-4 mt-2 space-y-2">
                    {item.dropdown.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subItem.href}
                        className="block py-2 hover:text-yellow-400"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </details>
              ) : (
                <Link
                  key={index}
                  href={item.href}
                  className="block py-2 border-b border-gray-800 hover:text-yellow-400"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </header>
  );
}