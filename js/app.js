/**
 * Hotel Pooja Inn, Pandharpur - Core Application Script
 * Features:
 * 1. Bilingual Switcher (English / Marathi)
 * 2. Instant WhatsApp Booking Generator with Live Price Calculator
 * 3. Mobile Responsive Navigation & Sticky Bottom Bar
 * 4. Room Filtering & Details Modal
 * 5. Aarti Timing & Temple Distance Helper
 * 6. Agency Pitch Deck Toggle & ROI Commission Calculator
 */

// HOTEL CONFIGURATION (Easily customizable for the client)
const HOTEL_CONFIG = {
  name: "Hotel Pooja Inn Pandharpur",
  tagline: "Serene & Comfortable Pilgrim Lodging",
  phone: "+91 94226 78910", // Primary front desk phone (customizable placeholder)
  phoneRaw: "919422678910",
  whatsapp: "+91 94226 78910",
  whatsappRaw: "919422678910", // Clean number for WhatsApp API
  address: "Plot No. 19, K.B.P. College Road, Gokul Nagar, Isbavi, near Chandrabhaga Bus Stand, Pandharpur, Maharashtra 413304",
  mapCoordinates: "17.6796458,75.3220648",
  googleMapsUrl: "https://www.google.com/maps/place/Hotel+Pooja+Inn+Pandharpur/@17.6796458,75.3220648,17z/data=!3m1!4b1!4m9!3m8!1s0x3bc419e23143e1eb:0xf19ce3ce51952f30!5m2!4m1!1i2!8m2!3d17.6796458!4d75.3220648!16s%2Fg%2F11m6qzzgnd",
  googleDirectionsUrl: "https://www.google.com/maps/dir/?api=1&destination=17.6796458,75.3220648",
  checkInTime: "12:00 PM",
  checkOutTime: "10:00 AM",
  rating: "4.2",
  reviewCount: "280+"
};

// ROOM CATALOG WITH REALISTIC PANDHARPUR PILGRIM PRICING
const ROOMS_DATA = [
  {
    id: "deluxe-ac",
    type: "ac",
    titleEn: "Classic Deluxe AC Room",
    titleMr: "क्लासिक डीलक्स एसी रूम",
    badgeEn: "Most Popular for Couples & Small Families",
    badgeMr: "जोडप्यांसाठी व लहान कुटुंबांसाठी लोकप्रिय",
    pricePerNight: 2199,
    capacity: "2 Adults + 1 Child",
    bed: "1 Queen / King Bed",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
    features: [
      "Split Air Conditioner",
      "24/7 Geyser Hot Water (for Kakad Aarti)",
      "32-inch LED TV with DTH",
      "High-speed Free Wi-Fi",
      "Sanitized Cotton Linens & Towels",
      "Dedicated Room Service & Intercom"
    ],
    featuresMr: [
      "स्प्लिट एअर कंडिशनर (AC)",
      "काकड आरतीसाठी २४ तास गिझर गरम पाणी",
      "३२ इंच एलईडी टीव्ही",
      "हाय-स्पीड मोफत वाय-फाय",
      "स्वच्छ कॉटन चादरी व टॉवेल्स",
      "इंटरकॉम व २४ तास रूम सर्व्हिस"
    ]
  },
  {
    id: "family-4bed-ac",
    type: "family",
    titleEn: "Executive 4-Bed Family Suite (AC)",
    titleMr: "एक्झिक्युटिव्ह ४-बेड फॅमिली सूट (AC)",
    badgeEn: "Perfect for Pandharpur Warkari & Family Groups",
    badgeMr: "वारकरी मंडळी व कुटुंबांसाठी उत्तम",
    pricePerNight: 3499,
    capacity: "4 to 5 Adults",
    bed: "2 Queen Beds / 4 Single Beds",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80",
    features: [
      "2 Large Queen Beds for 4-5 persons",
      "Twin AC Units & Ceiling Fans",
      "Spacious Attached Western Bathroom",
      "24/7 Instant Hot Water",
      "Ample Space for Luggage & Bags",
      "Electric Kettle & Tea Kit on request"
    ],
    featuresMr: [
      "४ ते ५ जणांसाठी २ मोठे क्वीन बेड्स",
      "दोन एसी व सिलिंग फॅन",
      "प्रशस्त वेस्टर्न बाथरुम",
      "२४ तास गरम पाणी",
      "सामान ठेवण्यासाठी मोठी जागा",
      "मागणीनुसार गरम पाण्यासाठी इलेक्ट्रिक केटल"
    ]
  },
  {
    id: "standard-non-ac",
    type: "non-ac",
    titleEn: "Economy Standard Room (Non-AC)",
    titleMr: "इकॉनॉमी स्टँडर्ड रूम (नॉन-एसी)",
    badgeEn: "Best Value for Budget Pilgrims",
    badgeMr: "कमी खर्चात स्वच्छ मुक्काम",
    pricePerNight: 1399,
    capacity: "2 Adults",
    bed: "1 Double Bed",
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80",
    features: [
      "Well Ventilated with High-speed Ceiling Fan",
      "Attached Clean Bathroom",
      "24/7 Geyser Hot Water",
      "Daily Sanitization & Fresh Bedding",
      "Free Wi-Fi & Generator Backup",
      "Purified RO Drinking Water"
    ],
    featuresMr: [
      "हवेशीर खोली व हाय-स्पीड सिलिंग फॅन",
      "स्वच्छ अटॅच्ड बाथरुम",
      "२४ तास गिझरचे गरम पाणी",
      "दररोज सॅनिटायझेशन व फ्रेश चादरी",
      "मोफत वाय-फाय व जनरेटर बॅकअप",
      "शुद्ध आरओ पिण्याचे पाणी"
    ]
  },
  {
    id: "triple-ac",
    type: "ac",
    titleEn: "Super Deluxe 3-Bed AC Room",
    titleMr: "सुपर डीलक्स ३-बेड एसी रूम",
    badgeEn: "Ideal for Parents with Senior Citizens",
    badgeMr: "पालक व आजी-आजोबांसोबतच्या यात्रेसाठी",
    pricePerNight: 2799,
    capacity: "3 Adults",
    bed: "1 Double + 1 Single Bed",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
    features: [
      "1 Double Bed + 1 Single Bed",
      "Whisper-quiet AC",
      "Lift Access right near room",
      "Western Commode with Grab Rails",
      "24/7 Hot Water for Morning Pooja",
      "Complimentary Mineral Water bottles"
    ],
    featuresMr: [
      "१ डबल बेड + १ सिंगल बेड",
      "शांत व आरामदायी एसी",
      "खोलीच्या अगदी जवळ लिफ्टची सोय",
      "वयस्करांसाठी सोयीस्कर वेस्टर्न टॉयलेट",
      "सकाळच्या पूजेसाठी २४ तास गरम पाणी",
      "मोफत मिनरल वॉटर"
    ]
  }
];

// STATE
let currentLang = localStorage.getItem("pooja_inn_lang") || "en";

// INITIALIZATION
document.addEventListener("DOMContentLoaded", () => {
  setupLanguageSwitcher();
  setupDatePickers();
  renderRoomsGrid();
  setupBookingForm();
  setupPitchBar();
  setupMobileNav();
  setupTempleTimings();
  updateStaticContent();
});

// 1. LANGUAGE SWITCHING
function setupLanguageSwitcher() {
  const langToggleBtn = document.getElementById("lang-toggle-btn");
  const langDisplay = document.getElementById("current-lang-text");

  if (langToggleBtn) {
    langToggleBtn.addEventListener("click", () => {
      currentLang = currentLang === "en" ? "mr" : "en";
      localStorage.setItem("pooja_inn_lang", currentLang);
      applyLanguage(currentLang);
    });
  }

  // Also support any mobile toggle
  const mobileLangBtn = document.getElementById("mobile-lang-btn");
  if (mobileLangBtn) {
    mobileLangBtn.addEventListener("click", () => {
      currentLang = currentLang === "en" ? "mr" : "en";
      localStorage.setItem("pooja_inn_lang", currentLang);
      applyLanguage(currentLang);
    });
  }

  applyLanguage(currentLang);
}

function applyLanguage(lang) {
  // Update indicator text
  const currentLangText = document.querySelectorAll(".lang-label-indicator");
  currentLangText.forEach(el => {
    el.textContent = lang === "en" ? "मराठी (MR)" : "English (EN)";
  });

  const activeLangBadge = document.querySelectorAll(".active-lang-badge");
  activeLangBadge.forEach(el => {
    el.textContent = lang === "en" ? "EN" : "मराठी";
  });

  // Apply translations to all elements with data-i18n
  document.querySelectorAll("[data-i18n]").forEach(elem => {
    const key = elem.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      if (elem.tagName === "INPUT" && elem.getAttribute("placeholder")) {
        elem.placeholder = translations[lang][key];
      } else {
        elem.innerHTML = translations[lang][key];
      }
    }
  });

  // Re-render rooms with current language
  renderRoomsGrid();
}

function updateStaticContent() {
  // Update dynamic numbers like phone, address across website
  document.querySelectorAll(".hotel-phone-text").forEach(el => el.textContent = HOTEL_CONFIG.phone);
  document.querySelectorAll(".hotel-phone-link").forEach(el => el.href = `tel:${HOTEL_CONFIG.phoneRaw}`);
  document.querySelectorAll(".hotel-whatsapp-link").forEach(el => {
    el.href = `https://wa.me/${HOTEL_CONFIG.whatsappRaw}?text=${encodeURIComponent("Hello Hotel Pooja Inn Pandharpur, I would like to inquire about room availability.")}`;
  });
  document.querySelectorAll(".hotel-address-text").forEach(el => el.textContent = HOTEL_CONFIG.address);
  document.querySelectorAll(".hotel-map-link").forEach(el => el.href = HOTEL_CONFIG.googleDirectionsUrl);
}

// 2. SETUP DATE PICKERS WITH DEFAULT TODAY & TOMORROW
function setupDatePickers() {
  const checkinInput = document.getElementById("checkin-date");
  const checkoutInput = document.getElementById("checkout-date");

  if (!checkinInput || !checkoutInput) return;

  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);

  const formatDate = (d) => {
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  checkinInput.min = formatDate(today);
  checkinInput.value = formatDate(today);

  checkoutInput.min = formatDate(tomorrow);
  checkoutInput.value = formatDate(tomorrow);

  checkinInput.addEventListener("change", () => {
    const selectedCheckin = new Date(checkinInput.value);
    const nextDay = new Date(selectedCheckin);
    nextDay.setDate(selectedCheckin.getDate() + 1);
    checkoutInput.min = formatDate(nextDay);
    if (new Date(checkoutInput.value) <= selectedCheckin) {
      checkoutInput.value = formatDate(nextDay);
    }
    updateLiveQuote();
  });

  checkoutInput.addEventListener("change", updateLiveQuote);
  
  const roomSelect = document.getElementById("room-select");
  const guestsSelect = document.getElementById("guests-count");
  if (roomSelect) roomSelect.addEventListener("change", updateLiveQuote);
  if (guestsSelect) guestsSelect.addEventListener("change", updateLiveQuote);

  updateLiveQuote();
}

// 3. LIVE TARIFF & QUOTATION CALCULATOR
function updateLiveQuote() {
  const checkinVal = document.getElementById("checkin-date")?.value;
  const checkoutVal = document.getElementById("checkout-date")?.value;
  const roomVal = document.getElementById("room-select")?.value;
  const quoteDisplay = document.getElementById("live-quote-box");
  const quotePriceEl = document.getElementById("quote-estimated-price");
  const quoteNightsEl = document.getElementById("quote-nights-count");
  const directSavingEl = document.getElementById("quote-direct-saving");

  if (!checkinVal || !checkoutVal || !quoteDisplay) return;

  const d1 = new Date(checkinVal);
  const d2 = new Date(checkoutVal);
  const diffTime = Math.max(1, d2 - d1);
  const nights = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  const roomObj = ROOMS_DATA.find(r => r.id === roomVal) || ROOMS_DATA[0];
  const baseRate = roomObj.pricePerNight;
  const subtotal = baseRate * nights;
  const otaEquivalent = Math.round(subtotal * 1.25); // OTAs charge 20-25% more
  const directSavings = otaEquivalent - subtotal;

  if (quotePriceEl) quotePriceEl.textContent = `₹${subtotal.toLocaleString('en-IN')}`;
  if (quoteNightsEl) quoteNightsEl.textContent = `${nights} ${nights > 1 ? 'Nights' : 'Night'}`;
  if (directSavingEl) directSavingEl.textContent = `Save ₹${directSavings.toLocaleString('en-IN')} (Direct Booking Privilege)`;
}

// 4. RENDER ROOMS GRID
function renderRoomsGrid(filter = "all") {
  const container = document.getElementById("rooms-grid-container");
  if (!container) return;

  const filtered = filter === "all" ? ROOMS_DATA : ROOMS_DATA.filter(r => r.type === filter);

  container.innerHTML = filtered.map(room => {
    const title = currentLang === "mr" ? room.titleMr : room.titleEn;
    const badge = currentLang === "mr" ? room.badgeMr : room.badgeEn;
    const featuresList = currentLang === "mr" ? room.featuresMr : room.features;

    return `
      <div class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-200 flex flex-col group">
        <div class="relative overflow-hidden h-64 bg-stone-100">
          <img src="${room.image}" alt="${title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy">
          <div class="absolute top-3 left-3 bg-amber-600/95 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
            <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
            ${badge}
          </div>
          <div class="absolute bottom-3 right-3 bg-slate-900/90 text-amber-400 font-bold px-3 py-1 rounded-lg text-sm backdrop-blur-sm border border-amber-500/30">
            ₹${room.pricePerNight.toLocaleString('en-IN')}<span class="text-xs text-stone-300 font-normal"> / night</span>
          </div>
        </div>

        <div class="p-6 flex-1 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between text-xs text-stone-500 mb-2">
              <span class="flex items-center gap-1">
                <svg class="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
                ${room.capacity}
              </span>
              <span class="flex items-center gap-1">
                <svg class="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
                ${room.bed}
              </span>
            </div>

            <h3 class="text-xl font-serif font-bold text-stone-900 mb-3">${title}</h3>

            <ul class="space-y-2 mb-6">
              ${featuresList.slice(0, 4).map(f => `
                <li class="flex items-start gap-2 text-xs text-stone-600">
                  <svg class="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
                  <span>${f}</span>
                </li>
              `).join('')}
            </ul>
          </div>

          <div class="pt-4 border-t border-stone-100 flex items-center gap-2">
            <button onclick="openQuickBookModal('${room.id}')" class="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs py-2.5 px-3 rounded-xl transition-colors flex items-center justify-center gap-1.5 shadow-sm">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              <span>${currentLang === "mr" ? 'थेट बुक करा' : 'WhatsApp Book'}</span>
            </button>
            <a href="tel:${HOTEL_CONFIG.phoneRaw}" class="border border-stone-300 hover:border-amber-600 hover:text-amber-700 text-stone-700 p-2.5 rounded-xl transition-colors flex items-center justify-center" title="Call Hotel Pooja Inn">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
            </a>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// 5. SETUP QUICK BOOKING FORM & WHATSAPP REDIRECT
function setupBookingForm() {
  const form = document.getElementById("direct-booking-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const checkin = document.getElementById("checkin-date").value;
    const checkout = document.getElementById("checkout-date").value;
    const roomSelect = document.getElementById("room-select");
    const roomId = roomSelect.value;
    const guests = document.getElementById("guests-count").value;
    const guestName = document.getElementById("guest-name")?.value.trim() || "Guest";
    const guestPhone = document.getElementById("guest-phone")?.value.trim() || "";
    const specialRequest = document.getElementById("guest-request")?.value.trim() || "None";

    const roomObj = ROOMS_DATA.find(r => r.id === roomId) || ROOMS_DATA[0];
    const roomName = currentLang === "mr" ? roomObj.titleMr : roomObj.titleEn;

    // Calculate nights
    const d1 = new Date(checkin);
    const d2 = new Date(checkout);
    const nights = Math.max(1, Math.ceil((d2 - d1) / (1000 * 60 * 60 * 24)));
    const totalEst = roomObj.pricePerNight * nights;

    // Compose formatted WhatsApp Message
    const message = `*🚩 NEW ROOM INQUIRY - HOTEL POOJA INN PANDHARPUR*
----------------------------------------
*Guest Name:* ${guestName}
${guestPhone ? `*Contact:* ${guestPhone}` : ''}
*Room Category:* ${roomName}
*Check-In:* ${checkin} (After 12:00 PM)
*Check-Out:* ${checkout} (Before 10:00 AM)
*Duration:* ${nights} Night(s)
*Number of Guests:* ${guests}
*Special Requirement:* ${specialRequest}
*Estimated Tariff:* ₹${totalEst.toLocaleString('en-IN')} (Direct Booking Rate)
----------------------------------------
_Please confirm room availability and payment details. Thank you!_`;

    const whatsappUrl = `https://wa.me/${HOTEL_CONFIG.whatsappRaw}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  });
}

function openQuickBookModal(roomId) {
  const roomSelect = document.getElementById("room-select");
  if (roomSelect) {
    roomSelect.value = roomId;
    updateLiveQuote();
  }
  const bookingSection = document.getElementById("booking-engine");
  if (bookingSection) {
    bookingSection.scrollIntoView({ behavior: 'smooth' });
  }
}

// 6. SETUP TEMPLE TIMINGS CARD
function setupTempleTimings() {
  // Aarti timings constant
  const aartis = [
    { nameEn: "Kakad Aarti", nameMr: "काकड आरती", time: "04:00 AM", noteEn: "Early morning holy aarti", noteMr: "पहाटेची मंगल आरती" },
    { nameEn: "Nitya Pooja & Snan", nameMr: "नित्यपूजा व स्नान", time: "04:30 AM - 05:30 AM", noteEn: "Panchamrut Abhishek", noteMr: "पंचामृत अभिषेक" },
    { nameEn: "Charansparsh & Mukh Darshan", nameMr: "चरणस्पर्श व मुख दर्शन", time: "06:00 AM - 11:00 PM", noteEn: "Continuous darshan queues", noteMr: "अखंड दर्शन सुरू" },
    { nameEn: "Maha Naivedya", nameMr: "महानैवेद्य", time: "11:00 AM - 12:00 PM", noteEn: "Bhog offering", noteMr: "दुपारचा महानैवेद्य" },
    { nameEn: "Dhup Aarti", nameMr: "धूप आरती", time: "07:00 PM", noteEn: "Evening incense aarti", noteMr: "संध्याकाळची आरती" },
    { nameEn: "Shej Aarti", nameMr: "शेजारती", time: "11:00 PM", noteEn: "Lord goes to rest", noteMr: "रात्रीची निद्रा आरती" }
  ];

  const container = document.getElementById("aarti-timings-list");
  if (!container) return;

  container.innerHTML = aartis.map(item => `
    <div class="flex items-center justify-between p-3 rounded-xl bg-amber-50/70 border border-amber-200/60 hover:bg-amber-100/70 transition-colors">
      <div>
        <p class="font-serif font-bold text-stone-900 text-sm">${currentLang === "mr" ? item.nameMr : item.nameEn}</p>
        <p class="text-xs text-stone-500">${currentLang === "mr" ? item.noteMr : item.noteEn}</p>
      </div>
      <div class="text-right">
        <span class="inline-block bg-amber-700 text-white font-mono text-xs px-2.5 py-1 rounded-md font-semibold">${item.time}</span>
      </div>
    </div>
  `).join('');
}

// 7. SETUP PITCH BAR (FOR THE FREELANCER/AGENCY CLOSER)
function setupPitchBar() {
  const pitchBar = document.getElementById("agency-pitch-bar");
  const toggleBtn = document.getElementById("toggle-pitch-bar");

  if (!pitchBar) return;

  // Check saved visibility state
  const isHidden = localStorage.getItem("pooja_pitch_bar_hidden");
  if (isHidden === "true") {
    pitchBar.classList.add("hidden");
  }

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      pitchBar.classList.toggle("hidden");
      localStorage.setItem("pooja_pitch_bar_hidden", pitchBar.classList.contains("hidden"));
    });
  }
}

// 8. MOBILE NAV & STICKY BOTTOM DOCK
function setupMobileNav() {
  const menuBtn = document.getElementById("mobile-menu-btn");
  const menuClose = document.getElementById("mobile-menu-close");
  const mobileMenu = document.getElementById("mobile-menu-drawer");

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.remove("translate-x-full");
    });
  }
  if (menuClose && mobileMenu) {
    menuClose.addEventListener("click", () => {
      mobileMenu.classList.add("translate-x-full");
    });
  }

  // Close when clicking nav links
  document.querySelectorAll(".mobile-nav-link").forEach(link => {
    link.addEventListener("click", () => {
      if (mobileMenu) mobileMenu.classList.add("translate-x-full");
    });
  });
}
