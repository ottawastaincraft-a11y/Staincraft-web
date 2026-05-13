const section = document.querySelector('.cursor-col-resize').closest('section');
const overlay = document.querySelector('.absolute.inset-0.overflow-hidden');
const dragBar = document.querySelector('[style*="left: 64.2149%"]');

let isDragging = false;

function getPercent(e, rect) {
  const clientX = e.touches ? e.touches[0].clientX : e.clientX;
  let percent = ((clientX - rect.left) / rect.width) * 100;
  return Math.min(Math.max(percent, 0), 100);
}

function updateSlider(percent) {
  overlay.style.clipPath = `inset(0px ${100 - percent}% 0px 0px)`;
  dragBar.style.left = `${percent}%`;
}

section.addEventListener('mousedown', (e) => {
  isDragging = true;
  updateSlider(getPercent(e, section.getBoundingClientRect()));
});

section.addEventListener('touchstart', (e) => {
  isDragging = true;
  updateSlider(getPercent(e, section.getBoundingClientRect()));
}, { passive: true });

window.addEventListener('mouseup', () => isDragging = false);
window.addEventListener('touchend', () => isDragging = false);

window.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  updateSlider(getPercent(e, section.getBoundingClientRect()));
});

window.addEventListener('touchmove', (e) => {
  if (!isDragging) return;
  updateSlider(getPercent(e, section.getBoundingClientRect()));
}, { passive: true });

section.addEventListener('mouseenter', () => {
  section.style.cursor = 'col-resize';
  if (hint) hint.style.opacity = '1';
});

section.addEventListener('mouseleave', () => {
  section.style.cursor = 'default';
  if (hint) hint.style.opacity = '0';
});

const finishes = [
  {
    name: "Amberwood",
    image: "https://media.base44.com/images/public/69fa794aa1d1ffbd0a71982e/8ac215d3a_Amberwood.JPG",
  },
  {
    name: "Honey Teak",
    image: "https://media.base44.com/images/public/69fa794aa1d1ffbd0a71982e/0ec0f10fa_Honey.JPG",
  },
  {
    name: "Mahogany Flame",
    image: "https://media.base44.com/images/public/69fa794aa1d1ffbd0a71982e/f0b2431c8_Mahoganny.JPG",
  },
  {
    name: "Jarrah Brown",
    image: "https://media.base44.com/images/public/69fa794aa1d1ffbd0a71982e/db3261a53_Brown.JPG",
  }
];

const finishSection = document.querySelector('#finishes');
const finishBgImg = finishSection.querySelector('.absolute.inset-0 img');
const finishButtons = finishSection.querySelectorAll('.grid button');
const shownLabel = finishSection.querySelector('.text-center p .text-primary');

// Create a white fade overlay on top of the background
const fadeOverlay = document.createElement('div');
fadeOverlay.style.cssText = `
  position: absolute;
  inset: 0;
  background: white;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.75s ease;
  z-index: 1;
`;
finishSection.querySelector('.absolute.inset-0').appendChild(fadeOverlay);

function switchFinish(i) {
  fadeOverlay.style.opacity = '1';

  setTimeout(() => {
    finishBgImg.src = finishes[i].image;
    fadeOverlay.style.opacity = '0';
  }, 750);

  if (shownLabel) shownLabel.textContent = finishes[i].name;

  finishButtons.forEach((b, j) => {
    if (j === i) {
    b.classList.remove('border-white/10');
    b.classList.add('border-primary', 'shadow-xl', 'ring-8', 'ring-primary');
    b.style.boxShadow = '0 12px 35px rgba(210, 100, 20, 0.65)';
    } else {
      b.classList.remove('border-primary', 'shadow-xl', 'ring-8', 'ring-primary');
      b.classList.add('border-white/10');
      b.style.boxShadow = '';
    }
  });
}

finishButtons.forEach((btn, i) => {
  btn.addEventListener('mouseenter', () => {
    btn.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    btn.style.transform = 'translateY(-4px)';
  });

  btn.addEventListener('mouseleave', () => {
    btn.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    btn.style.transform = 'translateY(0)';
  });

  btn.addEventListener('click', () => switchFinish(i));
});


import { useState } from "react";

const CONDITIONS = [
  { id: "new", label: "New / Good", description: "Recently built or in good shape", emoji: "✨" },
  { id: "weathered", label: "Weathered", description: "Faded and greyed but solid", emoji: "🌧️" },
  { id: "peeling", label: "Peeling / Damaged", description: "Old stain peeling, some damage", emoji: "⚠️" },
];

const SERVICES = [
  { id: "sand_stain", label: "Sand & Stain", price: "from $2.25/sq ft" },
  { id: "sand_only", label: "Sand Only", price: "from $1.50/sq ft" },
  { id: "stain_only", label: "Stain Only", price: "from $0.75/sq ft" },
  { id: "repair_restore", label: "Full Restoration", price: "from $3.75/sq ft" },
];

const SIZE_MARKS = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

const EMAILJS_SERVICE_ID = "service_w3css37";
const EMAILJS_TEMPLATE_ID = "template_q79ravn";
const EMAILJS_PUBLIC_KEY = "oMEl7zrLTm66y2Q12";

export default function QuotePage() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    condition: "",
    service: "",
    size: 300,
    workedTogether: "",
    workTypes: [],
    woodSpecies: [],
    name: "",
    email: "",
    phone: "",
    address: "",
    postalCode: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const setField = (key, value) => setForm((f) => ({ ...f, [key]: value }));

  const toggleArray = (key, value) => {
    setForm((f) => {
      const arr = f[key];
      return {
        ...f,
        [key]: arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value],
      };
    });
  };

  const canProceed = () => {
    if (step === 0) return !!form.condition;
    if (step === 1) return !!form.service;
    if (step === 2 || step === 3) return true;
    if (step === 4) return form.name && form.email && form.phone && form.address && form.postalCode;
    return true;
  };

  const handleSubmit = async () => {
    setSending(true);
    setError("");
    try {
      const conditionLabel = CONDITIONS.find((c) => c.id === form.condition)?.label || form.condition;
      const serviceLabel = SERVICES.find((s) => s.id === form.service)?.label || form.service;

      const templateParams = {
        from_name: form.name,
        from_email: form.email,
        phone: form.phone,
        address: form.address,
        postal_code: form.postalCode,
        condition: conditionLabel,
        service: serviceLabel,
        size: `${form.size} sq ft`,
        worked_together: form.workedTogether || "Not specified",
        work_types: form.workTypes.length ? form.workTypes.join(", ") : "Not specified",
        wood_species: form.woodSpecies.length ? form.woodSpecies.join(", ") : "Not specified",
        notes: form.notes || "None",
        to_email: "ottawastaincraft@gmail.com",
      };

      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: EMAILJS_SERVICE_ID,
          template_id: EMAILJS_TEMPLATE_ID,
          user_id: EMAILJS_PUBLIC_KEY,
          template_params: templateParams,
        }),
      });

      if (!response.ok) {
        const text = await response.text();
        throw new Error(text || "Failed to send email");
      }

      setSubmitted(true);
    } catch (err) {
      setError("Something went wrong. Please try again or call us directly at (613) 501-8131.");
      console.error("EmailJS error:", err);
    } finally {
      setSending(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="font-display text-4xl text-foreground mb-4">Quote Submitted</h2>
          <p className="font-body text-muted-foreground mb-8">
            We'll reach out within 24 hours to schedule your free on-site assessment.
          </p>
          <a href="/">
            <button className="inline-flex items-center gap-2 rounded-full h-12 px-8 font-body border border-border hover:bg-muted transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Back to Home
            </button>
          </a>
        </div>
      </div>
    );
  }

  const conditionLabel = CONDITIONS.find((c) => c.id === form.condition)?.label;
  const serviceLabel = SERVICES.find((s) => s.id === form.service)?.label;

  const steps = [
    /* Step 0 — Condition */
    <div className="space-y-6" key="condition">
      <div>
        <h3 className="font-display text-3xl text-foreground mb-2">What condition is your deck in?</h3>
        <p className="font-body text-muted-foreground">Select the option that best describes your deck's current state.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {CONDITIONS.map((c) => (
          <button
            key={c.id}
            onClick={() => setField("condition", c.id)}
            className={`p-6 rounded-2xl border-2 text-left transition-all duration-300 hover:shadow-lg ${
              form.condition === c.id ? "border-primary bg-primary/5 shadow-md" : "border-border hover:border-primary/30"
            }`}
          >
            <span className="text-3xl mb-3 block">{c.emoji}</span>
            <h4 className="font-body font-semibold text-foreground text-lg">{c.label}</h4>
            <p className="font-body text-muted-foreground text-sm mt-1">{c.description}</p>
          </button>
        ))}
      </div>
    </div>,

    /* Step 1 — Service */
    <div className="space-y-6" key="service">
      <div>
        <h3 className="font-display text-3xl text-foreground mb-2">What service do you need?</h3>
        <p className="font-body text-muted-foreground">
          Choose the level of restoration for your deck.{" "}
          <strong>Note: stain/oil cost is additional and priced per square foot.</strong>
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {SERVICES.map((s) => (
          <button
            key={s.id}
            onClick={() => setField("service", s.id)}
            className={`p-6 rounded-2xl border-2 text-left transition-all duration-300 hover:shadow-lg ${
              form.service === s.id ? "border-primary bg-primary/5 shadow-md" : "border-border hover:border-primary/30"
            }`}
          >
            <h4 className="font-body font-semibold text-foreground text-lg">{s.label}</h4>
            <p className="font-body text-primary font-medium text-sm mt-2">{s.price}</p>
          </button>
        ))}
      </div>
    </div>,

    /* Step 2 — Size */
    <div className="space-y-6" key="size">
      <div>
        <h3 className="font-display text-3xl text-foreground mb-2">How large is your deck?</h3>
        <p className="font-body text-muted-foreground">Approximate square footage. We will measure on-site.</p>
      </div>
      <div className="py-8">
        <div className="text-center mb-8">
          <span className="font-display text-6xl text-foreground">{form.size}</span>
          <span className="font-body text-muted-foreground text-xl ml-2">sq ft</span>
        </div>
        <input
          type="range"
          min={100}
          max={1000}
          step={10}
          value={form.size}
          onChange={(e) => setField("size", parseInt(e.target.value))}
          className="w-full h-2 bg-border rounded-full appearance-none cursor-pointer accent-primary"
          style={{ accentColor: "hsl(28, 54%, 51%)" }}
        />
        <div className="flex justify-between mt-3">
          {SIZE_MARKS.map((m) => (
            <span key={m} className="font-body text-xs text-muted-foreground">{m}</span>
          ))}
        </div>
      </div>
    </div>,

    /* Step 3 — About project */
    <div className="space-y-8" key="about">
      <div>
        <h3 className="font-display text-3xl text-foreground mb-2">A little more about your project</h3>
        <p className="font-body text-muted-foreground">Help us understand your needs better before we get in touch.</p>
      </div>

      {/* Worked together */}
      <div className="space-y-3">
        <p className="font-body font-semibold text-foreground">Have we worked together before?</p>
        <div className="flex gap-6 flex-wrap">
          {["Yes", "No"].map((opt) => (
            <label key={opt} className="flex items-center gap-3 cursor-pointer group">
              <div
                onClick={() => setField("workedTogether", opt)}
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-200 flex-shrink-0 ${
                  form.workedTogether === opt ? "border-primary bg-primary" : "border-border group-hover:border-primary/50"
                }`}
              >
                {form.workedTogether === opt && <div className="w-2 h-2 rounded-full bg-primary-foreground" />}
              </div>
              <span onClick={() => setField("workedTogether", opt)} className="font-body text-sm text-foreground">{opt}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Work types */}
      <div className="space-y-3">
        <p className="font-body font-semibold text-foreground">
          What are you looking to get restored, stained or sanded?{" "}
          <span className="text-muted-foreground font-normal">(select all that apply)</span>
        </p>
        <div className="flex gap-6 flex-wrap">
          {["Fence", "Gazebo", "Deck", "Other"].map((opt) => (
            <label key={opt} className="flex items-center gap-3 cursor-pointer group">
              <div
                onClick={() => toggleArray("workTypes", opt)}
                className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-200 flex-shrink-0 ${
                  form.workTypes.includes(opt) ? "border-primary bg-primary" : "border-border group-hover:border-primary/50"
                }`}
              >
                {form.workTypes.includes(opt) && (
                  <svg className="w-3 h-3 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              <span onClick={() => toggleArray("workTypes", opt)} className="font-body text-sm text-foreground">{opt}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Wood species */}
      <div className="space-y-3">
        <p className="font-body font-semibold text-foreground">
          What wood species is it made of?{" "}
          <span className="text-muted-foreground font-normal">(select all that apply)</span>
        </p>
        <div className="flex gap-3 flex-wrap">
          {["Cedar", "Pressure Treated", "Hardwood", "Other / Not Sure"].map((opt) => (
            <label key={opt} className="flex items-center gap-3 cursor-pointer group">
              <div
                onClick={() => toggleArray("woodSpecies", opt)}
                className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-200 flex-shrink-0 ${
                  form.woodSpecies.includes(opt) ? "border-primary bg-primary" : "border-border group-hover:border-primary/50"
                }`}
              >
                {form.woodSpecies.includes(opt) && (
                  <svg className="w-3 h-3 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              <span onClick={() => toggleArray("woodSpecies", opt)} className="font-body text-sm text-foreground">{opt}</span>
            </label>
          ))}
        </div>
      </div>
    </div>,

    /* Step 4 — Contact */
    <div className="space-y-6" key="contact">
      <div>
        <h3 className="font-display text-3xl text-foreground mb-2">Your contact details</h3>
        <p className="font-body text-muted-foreground">We'll reach out within 24 hours to schedule your free assessment.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          placeholder="Full Name"
          value={form.name}
          onChange={(e) => setField("name", e.target.value)}
          className="flex h-12 w-full rounded-xl border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring font-body"
        />
        <input
          placeholder="Email"
          type="email"
          value={form.email}
          onChange={(e) => setField("email", e.target.value)}
          className="flex h-12 w-full rounded-xl border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring font-body"
        />
        <input
          placeholder="Phone"
          type="tel"
          value={form.phone}
          onChange={(e) => setField("phone", e.target.value)}
          className="flex h-12 w-full rounded-xl border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring font-body"
        />
        <input
          placeholder="Address *"
          value={form.address}
          onChange={(e) => setField("address", e.target.value)}
          className="flex h-12 w-full rounded-xl border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring font-body"
        />
        <input
          placeholder="Postal Code *"
          value={form.postalCode}
          onChange={(e) => setField("postalCode", e.target.value)}
          className="flex h-12 w-full rounded-xl border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring font-body"
        />
      </div>

      <textarea
        placeholder="Any additional details about your project..."
        value={form.notes}
        onChange={(e) => setField("notes", e.target.value)}
        className="flex min-h-[100px] w-full rounded-xl border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring font-body"
      />

      {form.service && (
        <div className="bg-primary/5 rounded-2xl p-6 border border-primary/20">
          <p className="font-body text-sm text-muted-foreground mb-1">Your project summary</p>
          <div className="flex flex-wrap gap-3 mt-2">
            {conditionLabel && (
              <span className="bg-background rounded-full px-3 py-1 text-sm font-body">{conditionLabel} deck</span>
            )}
            {serviceLabel && (
              <span className="bg-background rounded-full px-3 py-1 text-sm font-body">{serviceLabel}</span>
            )}
            <span className="bg-background rounded-full px-3 py-1 text-sm font-body">{form.size} sq ft</span>
          </div>
        </div>
      )}

      {error && (
        <div className="bg-destructive/10 border border-destructive/30 rounded-xl px-4 py-3">
          <p className="font-body text-sm text-destructive">{error}</p>
        </div>
      )}
    </div>,
  ];

  return (
    <div className="min-h-screen py-12 px-6 md:px-16 lg:px-24">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <a
            href="/"
            className="flex items-center gap-2 font-body text-muted-foreground hover:text-foreground transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back
          </a>
          <img
            src="https://media.base44.com/images/public/69fa794aa1d1ffbd0a71982e/04b49eeb3_StainCraftLogo.png"
            alt="StainCraft"
            className="h-8 object-contain"
          />
        </div>

        {/* Progress bar */}
        <div className="flex gap-2 mb-12">
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={`h-1 flex-1 rounded-full transition-all duration-500 ${i <= step ? "bg-primary" : "bg-border"}`}
            />
          ))}
        </div>

        {/* Step content */}
        {steps[step]}

        {/* Navigation */}
        <div className="flex justify-between mt-12 pb-24">
          <button
            onClick={() => setStep((s) => s - 1)}
            disabled={step === 0}
            className="inline-flex items-center gap-2 rounded-full h-12 px-6 font-body border border-border hover:bg-muted transition-colors disabled:opacity-50 disabled:pointer-events-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back
          </button>

          {step < 4 ? (
            <button
              onClick={() => setStep((s) => s + 1)}
              disabled={!canProceed()}
              className="inline-flex items-center gap-2 rounded-full h-12 px-6 font-body bg-primary hover:bg-primary/90 text-primary-foreground transition-colors disabled:opacity-50 disabled:pointer-events-none shadow-lg shadow-primary/30"
            >
              Next
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7 7 7-7 7" />
              </svg>
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={!canProceed() || sending}
              className="inline-flex items-center gap-2 rounded-full h-12 px-8 font-body bg-primary hover:bg-primary/90 text-primary-foreground transition-colors disabled:opacity-50 disabled:pointer-events-none shadow-lg shadow-primary/30"
            >
              {sending ? (
                <>
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  Submit Quote
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </>
              )}
            </button>
          )}
        </div>

      </div>
    </div>
  );
}
