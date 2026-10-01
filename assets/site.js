// Add the business phone in international format (for example, 905xxxxxxxxx).
// The same number powers the call buttons and WhatsApp inquiry form.
const CONTACT = {
  phone: "905455658589",
  whatsapp: "905455658589"
};

const phoneDigits = CONTACT.phone.replace(/\D/g, "");
const whatsappDigits = (CONTACT.whatsapp || CONTACT.phone).replace(/\D/g, "");
const displayPhone = "+90 545 565 85 89";

document.querySelectorAll("[data-phone-link]").forEach((link) => {
  if (phoneDigits) {
    link.href = `tel:+${phoneDigits}`;
    link.removeAttribute("aria-disabled");
  } else {
    link.href = "iletisim.html#talep";
  }
});

document.querySelectorAll("[data-phone-label]").forEach((node) => {
  if (phoneDigits) {
    node.textContent = displayPhone;
    node.href = `tel:+${phoneDigits}`;
  } else {
    node.hidden = true;
  }
});

const year = document.querySelector("[data-year]");
if (year) year.textContent = new Date().getFullYear();

const menuButton = document.querySelector("[data-menu-toggle]");
const menu = document.querySelector("[data-main-nav]");
if (menuButton && menu) {
  menuButton.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Menüyü kapat" : "Menüyü aç");
  });
  menu.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
    menu.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
  }));
}

const inquiryForm = document.querySelector("[data-inquiry-form]");
if (inquiryForm) {
  inquiryForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const status = inquiryForm.querySelector("[data-form-status]");
    if (!whatsappDigits) {
      status.textContent = "Talep formunu etkinleştirmek için assets/site.js dosyasına Boztech Bilişim telefon/WhatsApp numarası eklenmeli.";
      return;
    }
    const values = new FormData(inquiryForm);
    const message = [
      "Merhaba, Boztech Bilişim web sitesinden keşif/teklif talebi iletiyorum.",
      `Ad soyad: ${values.get("name")}`,
      `Telefon: ${values.get("customerPhone")}`,
      `Hizmet: ${values.get("service")}`,
      `Not: ${values.get("message") || "Belirtilmedi"}`
    ].join("\n");
    window.open(`https://wa.me/${whatsappDigits}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    status.textContent = "WhatsApp mesajınız hazır. Göndermek için yeni penceredeki sohbeti onaylayın.";
  });
}
