# Hotel Pooja Inn, Pandharpur — Premium Direct Booking Website & Client Pitch Kit

A high-converting, mobile-first, bilingual (English & मराठी) website and client-closing pitch deck engineered specifically for **Hotel Pooja Inn, Pandharpur** (located near K.B.P. College Road / Chandrabhaga Bus Stand, Isbavi, Pandharpur, Maharashtra 413304).

Designed to help you **close Hotel Pooja Inn as a paying web development / digital marketing client** by proving how this website eliminates 18%–25% OTA commission fees (MakeMyTrip, Goibibo, Booking.com) and channels bookings directly into the hotel owner's WhatsApp and phone.

---

## 📁 Project Structure

```text
hotel-pooja-inn/
├── index.html            # Main showcase homepage (Hero, Booking Engine, Amenities, Rooms, Aarti Timings, Reviews, Google Maps, FAQ)
├── rooms.html            # Dedicated room catalog, rates, and full amenities comparison matrix
├── darshan-guide.html    # Pandharpur Darshan Guide (Vitthal Mandir Aarti timings, Mukh vs Charansparsh queues, Chandrabhaga snan)
├── pitch-kit.html        # Agency Pitch Deck with Live Commission ROI Calculator & Marathi/English closing scripts
├── css/
│   └── styles.css        # Custom styles, devotional palette, typography, glassmorphism, responsive tweaks
├── js/
│   ├── translations.js   # Complete English & Marathi bilingual dictionary
│   └── app.js            # Booking logic, price calculator, WhatsApp message builder, mobile navigation
└── README.md             # Client closing blueprint and deployment guide
```

---

## ⚡ 30-Second Customization

To personalize the hotel's phone number or WhatsApp before presenting to the owner, open [js/app.js](file:///C:/Users/user/.gemini/antigravity/scratch/hotel-pooja-inn/js/app.js#L12-L28) and edit the `HOTEL_CONFIG` object:

```javascript
const HOTEL_CONFIG = {
  name: "Hotel Pooja Inn Pandharpur",
  phone: "+91 94226 78910",        // Hotel front desk display number
  phoneRaw: "919422678910",        // Raw digits for tel: links
  whatsapp: "+91 94226 78910",     // WhatsApp display number
  whatsappRaw: "919422678910",     // Raw number for WhatsApp API
  address: "Plot No. 19, K.B.P. College Road, Gokul Nagar, Isbavi, Pandharpur 413304"
};
```

---

## 🎯 Why This Website Closes the Hotel Owner

### 1. 0% Commission Direct WhatsApp Bookings
- MakeMyTrip and Booking.com charge **18% to 25%** on every single room booked.
- On 80 bookings a month at ₹2,200 avg rate, the owner loses **₹35,000+ every month** to OTAs!
- This website features an **Instant WhatsApp Booking Engine**: When a guest enters their dates, room type, and guest count, it auto-generates a pre-formatted booking inquiry directly to the hotel owner's WhatsApp.

### 2. Full Marathi (मराठी) & English Bilingual Support
- Devotees, warkaris, and families across Maharashtra can read the entire site in pure Marathi with a single tap. This immediately builds cultural trust and emotional connection with the owner.

### 3. Addresses Real Pandharpur Travel Realities
- **Safe Dedicated Parking**: Street parking near Vitthal Mandir is notoriously impossible. The site heavily emphasizes Hotel Pooja Inn's private gated parking.
- **24/7 Hot Water for 4:00 AM Kakad Aarti**: Devotees need hot water for early morning bath before kakad aarti.
- **Elevator / Lift**: Vital for elderly parents and grandparents who cannot climb stairs.
- **1.8 km (5 Mins) Distance to Mandir**: Highlights that the hotel is peacefully away from temple noise and crowds, yet only 5 minutes by auto.

---

## 💼 The Sales Pitch Blueprint (How to Book the Client)

### Step 1: Open the Pitch Kit
Open [pitch-kit.html](file:///C:/Users/user/.gemini/antigravity/scratch/hotel-pooja-inn/pitch-kit.html) on your phone, tablet, or laptop.

### Step 2: Show the Owner the Live Commission Loss Calculator
- Slide the monthly bookings slider to 80 bookings.
- Show them the big red number: **₹35,200 lost every month to OTAs**.
- Say: *"Sir, you are paying over ₹4 Lakhs every year to booking apps. Even if this website saves you just 15 direct bookings a month, it pays for itself in the very first month!"*

### Step 3: Present in Marathi (The Closer Script)
> *"नमस्कार मालक, मी तुमच्या हॉटेल पूजा इन (Hotel Pooja Inn) चे गुगलवर रेटिंग आणि रिव्ह्यूज पाहिले – भाविकांचा अनुभव खूप छान आहे.*  
> *पण मला दिसलं की तुमचे बहुतेक ग्राहक मेकमायट्रिप किंवा गोआयबिबोवरून बुक करतात, जिथे तुम्हाला प्रत्येक रूमवर १८% ते २५% कमिशन द्यावं लागतं. महिन्याला तुमचे २५,००० ते ४०,००० रुपये फक्त कमिशनमध्ये जात आहेत.*  
> *मी तुमच्या हॉटेलसाठी एक खास वेबसाइट तयार केली आहे – ज्यामध्ये भाविक एका क्लिकवर थेट तुमच्या व्हॉट्सॲपवर बुकिंग करू शकतात. शिवाय ही वेबसाइट पूर्णपणे मराठी आणि इंग्रजी दोन्ही भाषेत आहे, जेणेकरून महाराष्ट्रातील कोणत्याही भाविकाला बुकिंग करणे अगदी सोपे जाईल.*  
> *मी तुम्हाला ही वेबसाइट लाईव्ह दाखवतो, आवडली तरच आपण पुढे बोलू. काय म्हणता?"*

### Step 4: Propose the Package
- **Starter Package**: ₹12,999 (Domain, Hosting, Mobile WhatsApp Engine)
- **Hospitality Growth (Recommended)**: ₹24,999 (Everything + Full Marathi engine, Custom domain, Reception QR Standee design, Google Business Profile SEO)
- **Market Leader VIP**: ₹39,999 (Everything + Ashadhi/Kartiki Ekadashi rush campaign, automated follow-up bot)

---

## 🚀 How to Deploy in 60 Seconds (Free Live Link)

### Option A: Vercel (Instant)
```bash
cd C:\Users\user\.gemini\antigravity\scratch\hotel-pooja-inn
npx vercel
```
Follow prompts to get an instant `https://hotel-pooja-inn-pandharpur.vercel.app` link.

### Option B: Netlify Drop
Drag and drop the `hotel-pooja-inn` folder directly onto [app.netlify.com/drop](https://app.netlify.com/drop) for an immediate live URL.

### Option C: GitHub Pages
Push the folder to a GitHub repository and turn on GitHub Pages in repository settings.

---

## 📍 Verified Hotel Coordinates & Google Maps Link
- **Coordinates:** `17.6796458, 75.3220648`
- **Google Maps Place:** [Hotel Pooja Inn Pandharpur](https://www.google.com/maps/place/Hotel+Pooja+Inn+Pandharpur/@17.6796458,75.3220648,17z/data=!3m1!4b1!4m9!3m8!1s0x3bc419e23143e1eb:0xf19ce3ce51952f30!5m2!4m1!1i2!8m2!3d17.6796458!4d75.3220648)
- **Address:** Plot No. 19, K.B.P. College Road, Gokul Nagar, Isbavi, near Chandrabhaga Bus Stand, Pandharpur, Maharashtra 413304
