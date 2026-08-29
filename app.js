// LocalPulse AI — Interactive App Logic

document.addEventListener('DOMContentLoaded', () => {
  // Industry Demo Data
  const industryData = {
    tires: {
      url: 'https://apex-tires-chicago.com',
      badge: 'Tires In Stock • Same-Day Installation',
      title: "CHICAGO'S #1 RATED TIRE & BRAKE CENTER",
      text: 'Get instant tire pricing online, check bay availability, and schedule your appointment with our clean, high-converting digital storefront.',
      cta: 'FIND MY TIRE SIZE',
      avatarQuote: '"Plug in our 24/7 AI Phone Agent, Outbound Lead Machine, or Live Video Avatar to turn this website into an autonomous revenue engine."',
      botName: 'Apex Tire AI Assistant',
      msg1: 'Hi there! Need new tires, brake inspection, or oil change today? Let me know your vehicle make/model for an instant quote!',
      msg2: 'Do you have 225/65R17 Michelin tires in stock for a Toyota RAV4?',
      msg3: 'Yes! We have 8 Michelin Defender sets ready for same-day install. Would you like to lock in the $140/tire promo?',
      f1: 'Ultra-Fast Mobile 3D Layout',
      f2: 'Built-in Local SEO & Schema',
      f3: 'Optional 24/7 AI Phone Agent',
      f4: 'Optional Outbound Lead Machine'
    },
    salon: {
      url: 'https://luxe-nails-spa.com',
      badge: 'Walk-ins & Online Appointments Welcome',
      title: 'LUXURY GEL & ACRYLIC NAIL STUDIO',
      text: 'Browse our signature nail art gallery, check technician availability, and book your appointment directly on your smartphone.',
      cta: 'BOOK NAIL APPOINTMENT',
      avatarQuote: '"Our optional 24/7 AI Voice Phone Receptionist can answer calls and book chairs while your technicians are busy doing nails."',
      botName: 'Luxe Nail AI Concierge',
      msg1: 'Welcome to Luxe Nails! Looking for a gel manicure, pedicure, or custom acrylic set this week?',
      msg2: 'Do you have availability for a Russian manicure this Saturday at 2 PM?',
      msg3: 'We have an opening with Senior Artist Mia at 2:15 PM! Would you like me to reserve that slot for you right now?',
      f1: 'Interactive Nail Art Gallery',
      f2: 'Built-in Local Salon SEO',
      f3: 'Optional 24/7 Voice Booking',
      f4: 'Optional SMS Review Booster'
    },
    bakery: {
      url: 'https://sweetcraft-donuts.com',
      badge: 'Fresh Daily at 5:00 AM • Custom Party Orders',
      title: 'ARTISANAL DONUT & SPECIALTY COFFEE HOUSE',
      text: 'Order custom catering boxes, check daily rotating flavors, and let corporate offices place large orders with ease.',
      cta: 'ORDER CUSTOM BOX ONLINE',
      avatarQuote: '"Add our Outbound Lead Machine to continuously scrape and deliver contact lists for every corporate office in a 10-mile radius."',
      botName: 'SweetCraft AI Helper',
      msg1: 'Fresh donuts just came out! Looking for individual donuts, catering for an office, or weekend custom flavors?',
      msg2: 'Can I order 3 dozen assorted donuts for a corporate breakfast tomorrow morning?',
      msg3: 'Absolutely! I can prepare 3 dozen gourmet glazed, maple bacon, and seasonal fruit rings for 7:30 AM pickup. Shall I lock that in?',
      f1: 'Modern Visual Menu Showcase',
      f2: 'Built-in Local Bakery SEO',
      f3: 'Optional Outbound Lead Machine',
      f4: 'Optional 24/7 Phone Answering'
    },
    mechanic: {
      url: 'https://precision-auto-repair.com',
      badge: 'ASE Certified • 3-Year / 36k Mile Warranty',
      title: 'COMPLETE AUTO DIAGNOSTICS & TRANSMISSION REPAIR',
      text: 'Check engine light on? Get instant service estimates and schedule diagnostic bay time without calling around.',
      cta: 'GET DIAGNOSTIC ESTIMATE',
      avatarQuote: '"Stop wiping grease off your hands to answer price calls—our optional AI Phone Agent handles quotes and bookings for you."',
      botName: 'Precision Auto AI Tech',
      msg1: 'Hello! Experiencing brake squeal, check engine light, or need routine maintenance?',
      msg2: 'My 2018 Ford F-150 is making a grinding noise when braking at low speed.',
      msg3: 'That typically indicates worn brake pads or rotor contact. We offer a free multi-point brake inspection. Can I book you in for 9:00 AM tomorrow?',
      f1: 'Diagnostic Symptom Quote Form',
      f2: 'Built-in Mechanic Local SEO',
      f3: 'Optional 24/7 Voice Dispatch',
      f4: 'Optional Commercial Fleet Leads'
    },
    hvac: {
      url: 'https://metro-cooling-heating.com',
      badge: 'Fast Emergency Dispatch • 0% Financing',
      title: 'FAST RESIDENTIAL AC & HEATING REPAIR',
      text: 'AC blowing warm air? Our emergency dispatch request form connects you with a certified technician in under 60 seconds.',
      cta: 'REQUEST DISPATCH NOW',
      avatarQuote: '"When AC breaks at 8 PM on a Sunday, our optional 24/7 Voice AI dispatches technicians in under 2 seconds."',
      botName: 'Metro Climate AI Dispatch',
      msg1: 'Emergency AC or furnace issue? Our certified technicians are on call across the metro area.',
      msg2: 'Our AC stopped cooling and it is 85 degrees inside our house.',
      msg3: 'Our on-call tech Mike is in your area and can arrive between 1:00 PM and 2:30 PM. What is your street address?',
      f1: 'Fast Emergency Request Form',
      f2: 'Built-in Local HVAC SEO',
      f3: 'Optional 24/7 Voice AI Dispatch',
      f4: 'Optional Review Booster SMS'
    }
  };

  // Switch Industry Mockup
  const indTabs = document.querySelectorAll('.ind-tab');
  const mockupUrl = document.getElementById('mockup-url');
  const previewBadge = document.getElementById('preview-badge');
  const previewTitle = document.getElementById('preview-title');
  const previewText = document.getElementById('preview-text');
  const previewCtaBtn = document.getElementById('preview-cta-btn');
  const avatarDialogue = document.getElementById('avatar-dialogue');
  const widgetName = document.getElementById('widget-name');
  const widgetMsg1 = document.getElementById('widget-msg-1');
  const widgetMsg2 = document.getElementById('widget-msg-2');
  const widgetMsg3 = document.getElementById('widget-msg-3');
  const stripF1 = document.getElementById('strip-f1');
  const stripF2 = document.getElementById('strip-f2');
  const stripF3 = document.getElementById('strip-f3');
  const stripF4 = document.getElementById('strip-f4');

  indTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      indTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const ind = tab.getAttribute('data-ind');
      const data = industryData[ind];
      if (!data) return;

      mockupUrl.textContent = data.url;
      previewBadge.textContent = data.badge;
      previewTitle.textContent = data.title;
      previewText.textContent = data.text;
      previewCtaBtn.textContent = data.cta;
      if (avatarDialogue) avatarDialogue.textContent = data.avatarQuote;
      widgetName.textContent = data.botName;
      widgetMsg1.textContent = data.msg1;
      widgetMsg2.textContent = data.msg2;
      widgetMsg3.textContent = data.msg3;
      stripF1.textContent = data.f1;
      stripF2.textContent = data.f2;
      stripF3.textContent = data.f3;
      stripF4.textContent = data.f4;
    });
  });

  // Pricing & Add-on Calculator
  const BASE_PRICE = 299;
  const BASE_SETUP = 299; // $299 setup + $299 M1 = $598 Month 1
  const checkboxes = document.querySelectorAll('.addon-checkbox');
  const monthlyTotalEl = document.getElementById('monthly-total');
  const firstMonthTotalEl = document.getElementById('first-month-total');
  const selectedAddonsList = document.getElementById('selected-addons-list');
  const modalPlanTotal = document.getElementById('modal-plan-total');
  const roiValEl = document.getElementById('roi-val');

  function calculateTotal() {
    let monthlyTotal = BASE_PRICE;
    let selectedAddons = [];

    checkboxes.forEach(cb => {
      if (cb.checked) {
        const price = parseInt(cb.getAttribute('data-price'), 10) || 0;
        const name = cb.getAttribute('data-name');
        monthlyTotal += price;
        selectedAddons.push({ name, price });
      }
    });

    const firstMonthTotal = monthlyTotal + BASE_SETUP;

    monthlyTotalEl.textContent = monthlyTotal;
    firstMonthTotalEl.textContent = `$${firstMonthTotal}`;
    if (modalPlanTotal) {
      modalPlanTotal.textContent = `$${monthlyTotal}/mo ($${firstMonthTotal} Month 1)`;
    }

    // Populate selected addons list in summary
    selectedAddonsList.innerHTML = '';
    if (selectedAddons.length === 0) {
      selectedAddonsList.innerHTML = '<div class="breakdown-row" style="color:#64748b;"><em>No additional AI modules selected (Base Plan Only)</em></div>';
    } else {
      selectedAddons.forEach(item => {
        const row = document.createElement('div');
        row.className = 'breakdown-row';
        row.innerHTML = `<span>+ ${item.name}</span><strong>+$${item.price}/mo</strong>`;
        selectedAddonsList.appendChild(row);
      });
    }

    // Dynamic ROI Estimator
    const activeCount = selectedAddons.length;
    const estimatedJobs = 2 + Math.round(activeCount * 1.8);
    const estimatedRevenue = estimatedJobs * 250;
    roiValEl.textContent = `+$${estimatedRevenue.toLocaleString()} / mo`;
  }

  checkboxes.forEach(cb => {
    cb.addEventListener('change', calculateTotal);
  });

  calculateTotal();

  // FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      faqItems.forEach(i => i.classList.remove('active'));
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // Modal Control
  const launchModal = document.getElementById('launch-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const navLaunchBtn = document.getElementById('nav-launch-btn');
  const checkoutLaunchBtn = document.getElementById('checkout-launch-btn');
  const bottomLaunchBtn = document.getElementById('bottom-launch-btn');
  const onboardingForm = document.getElementById('onboarding-form');
  const modalSuccess = document.getElementById('modal-success');
  const successCloseBtn = document.getElementById('success-close-btn');

  function openModal() {
    launchModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    launchModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (navLaunchBtn) navLaunchBtn.addEventListener('click', openModal);
  if (checkoutLaunchBtn) checkoutLaunchBtn.addEventListener('click', openModal);
  if (bottomLaunchBtn) bottomLaunchBtn.addEventListener('click', openModal);
  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (successCloseBtn) {
    successCloseBtn.addEventListener('click', () => {
      closeModal();
      onboardingForm.reset();
      onboardingForm.style.display = 'flex';
      modalSuccess.style.display = 'none';
    });
  }

  launchModal.addEventListener('click', (e) => {
    if (e.target === launchModal) {
      closeModal();
    }
  });

  // Form submission handler
  if (onboardingForm) {
    onboardingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      onboardingForm.style.display = 'none';
      modalSuccess.style.display = 'block';
    });
  }
});
