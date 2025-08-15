"use client";
import { useState } from "react";

export default function WhatsappForm() {
  const [formData, setFormData] = useState({ name: "", phone: "", service: "", message: "" });
  const whatsappNumber = "905072604552";

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `📋 *Hizmet Talebi*\n\n👤 *İsim:* ${formData.name}\n📞 *Telefon:* ${formData.phone}\n🔧 *Hizmet Türü:* ${formData.service}\n📝 *Not:* ${formData.message}`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="relative bg-cover bg-center" style={{ backgroundImage: "url('/images/form-image.jpg')" }}>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      <div className="relative max-w-3xl mx-auto px-6 py-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-white">WhatsApp Üzerinden Hizmet Talebi</h2>
        <form onSubmit={handleSubmit} className="bg-white/95 backdrop-blur-md rounded-xl shadow-lg border border-gray-200 p-6 space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Ad Soyad</label>
            <input type="text" required value={formData.name} onChange={(e)=>setFormData({ ...formData, name: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500 outline-none"/>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Telefon Numaranız</label>
            <input type="tel" required placeholder="05xx xxx xx xx" value={formData.phone}
              onChange={(e)=>setFormData({ ...formData, phone: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500 outline-none"/>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Hizmet Türü</label>
            <select required value={formData.service} onChange={(e)=>setFormData({ ...formData, service: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500 outline-none">
              <option value="">Seçiniz...</option>
              <option>Kombi Bakımı</option><option>Kombi Tamiri</option><option>Gaz Kaçağı Tespiti</option>
              <option>Ocak Montajı</option><option>Doğalgaz Tesisatı</option><option>Diğer</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Ek Not</label>
            <textarea rows={3} value={formData.message} onChange={(e)=>setFormData({ ...formData, message: e.target.value })}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500 outline-none"/>
          </div>
          <button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 rounded-lg shadow-md transition">
            📲 WhatsApp ile Gönder
          </button>
        </form>
      </div>
    </section>
  );
}