const destinations = [
  {
    id: 'mara',
    name: 'Maasai Mara',
    region: 'Rift Valley, Kenya',
    type: 'Safari',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1400&q=85',
    season: 'June — October',
    length: '3–5 days',
    initial: 'M',
    color: 'linear-gradient(145deg, #d7ad72, #778259 48%, #42533c)',
    blurb: 'Wide skies, golden grasslands and wildlife encounters that unfold at their own pace.',
    description: 'The Mara is a place to slow down and pay attention. Follow the rhythm of the plains with a local guide, linger over a long breakfast in the bush and let the evening light do its thing.',
    highlights: 'Guided game drives · Community visits · Open-sky sundowners'
  },
  {
    id: 'watamu',
    name: 'Watamu Coast',
    region: 'Kilifi County, Kenya',
    type: 'Coast',
    image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1400&q=85',
    season: 'January — March',
    length: '4–6 days',
    initial: 'W',
    color: 'linear-gradient(145deg, #d7c48c, #6a9b91 50%, #375e58)',
    blurb: 'Warm water, quiet coves and the kind of afternoons that have no agenda.',
    description: 'Watamu makes it easy to trade your watch for the tide. Spend the morning on the water, discover Swahili coastal cooking and leave the rest of the day deliciously unplanned.',
    highlights: 'Dhow sailing · Marine adventures · Swahili food'
  },
  {
    id: 'lamu',
    name: 'Lamu Island',
    region: 'Lamu Archipelago, Kenya',
    type: 'Culture',
    image: 'https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?auto=format&fit=crop&w=1400&q=85',
    season: 'July — March',
    length: '3–5 days',
    initial: 'L',
    color: 'linear-gradient(145deg, #d2b582, #92745b 48%, #495746)',
    blurb: 'A living island story told in coral-stone lanes and slow dhow sails.',
    description: 'Lamu invites you to explore by foot and by water. Wander its old town with a local host, pause for spiced coffee and watch the harbour turn gold at the end of the day.',
    highlights: 'Old Town walks · Dhow trips · Local craft and cuisine'
  },
  {
    id: 'aberdare',
    name: 'Aberdare Highlands',
    region: 'Central Kenya',
    type: 'Nature',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1400&q=85',
    season: 'June — September',
    length: '2–4 days',
    initial: 'A',
    color: 'linear-gradient(145deg, #b2b990, #637558 48%, #334738)',
    blurb: 'Misty forests, cool air and highland paths that reward a slower step.',
    description: 'The Aberdares offer a refreshing change of pace: forest trails, clear mountain air and warm, welcoming stays. Take the scenic route and let the landscape open up around you.',
    highlights: 'Forest walks · Waterfalls · Highland farm visits'
  },
  {
    id: 'amboseli',
    name: 'Amboseli',
    region: 'Kajiado County, Kenya',
    type: 'Safari',
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1400&q=85',
    season: 'June — October',
    length: '2–4 days',
    initial: 'A',
    color: 'linear-gradient(145deg, #e5c999, #99946f 48%, #58634a)',
    blurb: 'Open plains beneath a vast sky, with mountain views on a clear morning.',
    description: 'Amboseli is made for unhurried looking. Watch the light move across the plains, meet local hosts and take in the mountain when it appears above the clouds.',
    highlights: 'Sunrise drives · Cultural visits · Big-sky views'
  },
  {
    id: 'diani',
    name: 'Diani Beach',
    region: 'Kwale County, Kenya',
    type: 'Coast',
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1400&q=85',
    season: 'December — March',
    length: '4–7 days',
    initial: 'D',
    color: 'linear-gradient(145deg, #e5d4ad, #7db0a2 51%, #3d6c64)',
    blurb: 'A palm-lined stretch of coast made for barefoot mornings and sea swims.',
    description: 'Diani pairs long, easy beach days with lively coastal flavours. Head out on the water, find a shady lunch spot and leave plenty of room for doing absolutely nothing.',
    highlights: 'Ocean swims · Kitesurfing · Coastal dining'
  }
];

const header = document.getElementById('site-header');
const footer = document.getElementById('site-footer');
const requestedPage = location.pathname.split('/').pop() || 'index.html';
const currentPage = requestedPage === 'Home.html' ? 'index.html' : requestedPage;

function buildHeader() {
  if (!header) return;

  header.innerHTML = `
    <a class="skip-link" href="#main-content">Skip to content</a>
    <header class="site-header">
      <a class="brand" href="index.html">
        <span class="brand-mark">W</span> WONDERSTAST
      </a>
      <button class="menu-toggle" type="button" aria-label="Open navigation" aria-controls="primary-navigation" aria-expanded="false">☰</button>
      <nav class="main-nav" id="primary-navigation" aria-label="Main navigation">
        <a href="index.html">Home</a>
        <a href="destinations.html">Destinations</a>
        <a href="experiences.html">Experiences</a>
        <a href="about.html">About</a>
        <a href="favorites.html">Saved <span id="nav-saved-count">0</span></a>
        <a class="nav-cta" href="contact.html">Plan a trip ↗</a>
      </nav>
    </header>`;

  const menuButton = header.querySelector('.menu-toggle');
  const nav = header.querySelector('.main-nav');

  function closeMenu() {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
    menuButton.textContent = '☰';
  }

  menuButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', isOpen);
    menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    menuButton.textContent = isOpen ? '×' : '☰';
  });

  nav.querySelectorAll('a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.setAttribute('aria-current', 'page');
    }
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && nav.classList.contains('open')) {
      closeMenu();
      menuButton.focus();
    }
  });
  document.addEventListener('click', event => {
    if (!header.contains(event.target)) closeMenu();
  });
}

function buildFooter() {
  if (!footer) return;

  footer.innerHTML = `
    <footer class="site-footer">
      <div class="footer-top">
        <div>
          <a class="footer-brand" href="index.html">
            <span class="brand-mark">W</span> WONDERSTAST
          </a>
          <p>Thoughtful journeys for curious souls.</p>
        </div>
        <nav class="footer-nav">
          <a href="destinations.html">Destinations</a>
          <a href="experiences.html">Experiences</a>
          <a href="about.html">Our story</a>
          <a href="contact.html">Get in touch</a>
          <a href="favorites.html">Saved places</a>
        </nav>
      </div>
      <div class="footer-bottom">
        <span>© ${new Date().getFullYear()} Wonderstast Travel</span>
        <span>Made with care in Kenya · Travel well, feel more.</span>
      </div>
    </footer>`;
}

function connectHeroSlideshow() {
  const heroArt = document.querySelector('.hero-art');
  const firstImage = heroArt ? heroArt.querySelector('img') : null;
  if (!heroArt || !firstImage) return;

  const slides = [
    {
      image: firstImage,
      src: firstImage.getAttribute('src'),
      alt: firstImage.alt
    },
    {
      src: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=2200&q=88',
      alt: 'Ocean waves rolling onto a quiet beach'
    },
    {
      src: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=2200&q=88',
      alt: 'Sunlight filtering through a green highland forest'
    },
    {
      src: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=2200&q=88',
      alt: 'Palm trees and white sand along the Indian Ocean'
    }
  ];

  let completedLoads = 0;
  let intervalId;
  let currentIndex = 0;
  let isPaused = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const pauseButton = heroArt.querySelector('.slide-toggle');
  const slidePickers = [...heroArt.querySelectorAll('[data-slide]')];
  if (pauseButton && isPaused) {
    pauseButton.textContent = '▶';
    pauseButton.setAttribute('aria-label', 'Play slideshow');
    pauseButton.setAttribute('aria-pressed', 'true');
  }

  function updateControls() {
    slidePickers.forEach((button, index) => {
      const isCurrent = index === currentIndex;
      button.classList.toggle('active', isCurrent);
      button.setAttribute('aria-pressed', String(isCurrent));
    });
  }

  function showSlide(index) {
    if (!slides[index] || !slides[index].loaded) return;
    slides[currentIndex].image.classList.remove('is-active');
    slides[currentIndex].image.setAttribute('aria-hidden', 'true');
    slides[index].image.classList.add('is-active');
    slides[index].image.setAttribute('aria-hidden', 'false');
    currentIndex = index;
    updateControls();
  }

  function advanceSlide() {
    let nextIndex = (currentIndex + 1) % slides.length;
    while (!slides[nextIndex].loaded) {
      nextIndex = (nextIndex + 1) % slides.length;
      if (nextIndex === currentIndex) return;
    }
    showSlide(nextIndex);
  }

  function startSlideshow() {
    if (completedLoads !== slides.length || intervalId || document.hidden || isPaused) return;
    intervalId = window.setInterval(advanceSlide, 3000);
  }

  function stopSlideshow() {
    window.clearInterval(intervalId);
    intervalId = undefined;
  }

  slidePickers.forEach(button => {
    button.addEventListener('click', () => {
      showSlide(Number(button.dataset.slide));
    });
  });

  if (pauseButton) {
    pauseButton.addEventListener('click', () => {
      isPaused = !isPaused;
      pauseButton.textContent = isPaused ? '▶' : 'Ⅱ';
      pauseButton.setAttribute('aria-label', isPaused ? 'Play slideshow' : 'Pause slideshow');
      pauseButton.setAttribute('aria-pressed', String(isPaused));
      if (isPaused) stopSlideshow();
      else startSlideshow();
    });
  }

  slides.forEach((slide, index) => {
    const image = slide.image || document.createElement('img');
    slide.image = image;
    image.classList.add('hero-slide-image');
    image.alt = slide.alt;
    image.setAttribute('aria-hidden', index === 0 ? 'false' : 'true');
    image.decoding = 'async';

    if (index > 0) {
      image.loading = 'eager';
      heroArt.append(image);
      image.src = slide.src;
    }

    function finishLoading(isLoaded) {
      if (slide.loadHandled) return;
      slide.loadHandled = true;
      slide.loaded = isLoaded;
      completedLoads += 1;
      if (!isLoaded) {
        console.warn(`Hero slideshow image could not be loaded: ${slide.src}`);
      }
      startSlideshow();
    }

    image.addEventListener('load', () => finishLoading(true), { once: true });
    image.addEventListener('error', () => finishLoading(false), { once: true });

    if (image.complete) {
      finishLoading(image.naturalWidth > 0);
    }
  });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      stopSlideshow();
    } else {
      startSlideshow();
    }
  });

  const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
  motionPreference.addEventListener('change', event => {
    isPaused = event.matches;
    if (pauseButton) {
      pauseButton.textContent = isPaused ? '▶' : 'Ⅱ';
      pauseButton.setAttribute('aria-label', isPaused ? 'Play slideshow' : 'Pause slideshow');
      pauseButton.setAttribute('aria-pressed', String(isPaused));
    }
    if (isPaused) stopSlideshow();
    else startSlideshow();
  });
}

function getFavorites() {
  try {
    const stored = JSON.parse(localStorage.getItem('wonderstast-favorites') || '[]');
    if (!Array.isArray(stored)) throw new TypeError('Saved places data is not a list.');
    return [...new Set(stored.filter(id => destinations.some(place => place.id === id)))];
  } catch {
    showStorageNotice('Saved places could not be read from this browser.');
    return [];
  }
}

function saveFavorites(ids) {
  try {
    localStorage.setItem('wonderstast-favorites', JSON.stringify(ids));
  } catch {
    showStorageNotice('Your saved places could not be stored. Check your browser storage settings.');
  }
  updateFavoriteCounts();
}

function showStorageNotice(message) {
  let notice = document.getElementById('site-notice');
  if (!notice) {
    notice = document.createElement('p');
    notice.id = 'site-notice';
    notice.className = 'site-notice';
    notice.setAttribute('role', 'status');
    notice.setAttribute('aria-live', 'polite');
    document.body.append(notice);
  }
  notice.textContent = message;
}

function updateFavoriteCounts() {
  const count = getFavorites().length;
  document.querySelectorAll('#saved-count, #nav-saved-count').forEach(element => {
    element.textContent = count;
  });
}

function createDestinationCard(place) {
  const isSaved = getFavorites().includes(place.id);
  const savedClass = isSaved ? 'saved' : '';
  const heart = isSaved ? '♥' : '♡';
  const saveLabel = isSaved ? 'Remove' : 'Save';

  return `
    <article class="destination-card">
      <div class="destination-art">
        <a class="destination-image-link" href="destination-details.html?id=${place.id}" aria-label="Explore ${place.name}">
          <img src="${place.image}" alt="${place.name}: ${place.blurb}" loading="lazy">
          <span class="card-meta">${place.type.toUpperCase()} · KENYA</span>
        </a>
        <button
          class="save-button ${savedClass}"
          data-save="${place.id}"
          aria-label="${saveLabel} ${place.name}"
          aria-pressed="${isSaved}">
          ${heart}
        </button>
      </div>
      <a href="destination-details.html?id=${place.id}">
        <div class="destination-info">
          <div>
            <h3>${place.name}</h3>
            <p>${place.region}</p>
          </div>
          <span class="card-arrow">↗</span>
        </div>
      </a>
    </article>`;
}

function renderCards(target, places) {
  if (!target) return;
  target.innerHTML = places.map(createDestinationCard).join('');
}

function filterDestinations() {
  const searchInput = document.getElementById('destination-search');
  const searchText = (searchInput ? searchInput.value : '').trim().toLowerCase();
  const activeFilter = document.querySelector('.filter-button.active')?.dataset.filter || 'All';

  const results = destinations.filter(place => {
    const matchesFilter = activeFilter === 'All' || place.type === activeFilter;
    const searchableText = `${place.name} ${place.region} ${place.type} ${place.blurb}`.toLowerCase();
    return matchesFilter && searchableText.includes(searchText);
  });

  renderCards(document.getElementById('destination-list'), results);

  const emptyState = document.getElementById('empty-state');
  if (emptyState) emptyState.hidden = results.length > 0;
}

function renderFavorites() {
  const savedPlaces = destinations.filter(place => getFavorites().includes(place.id));
  renderCards(document.getElementById('favorites-list'), savedPlaces);

  const emptyState = document.getElementById('favorites-empty');
  if (emptyState) emptyState.hidden = savedPlaces.length > 0;
}

function renderDestinationDetails() {
  const target = document.getElementById('destination-detail');
  if (!target) return;

  const destinationId = new URLSearchParams(location.search).get('id');
  const place = destinationId
    ? destinations.find(item => item.id === destinationId)
    : destinations[0];
  if (!place) {
    target.innerHTML = `
      <div class="detail-missing">
        <p class="eyebrow">THAT PLACE IS STILL OUT THERE</p>
        <h1>We couldn’t find this <em>destination.</em></h1>
        <p>Browse all of our places and choose the one that feels right.</p>
        <a class="button button-dark" href="destinations.html">Explore destinations <span>↗</span></a>
      </div>`;
    document.title = 'Destination not found — Wonderstast Travel';
    return;
  }
  const nameParts = place.name.split(' ');
  const firstPart = nameParts.slice(0, -1).join(' ');
  const lastPart = nameParts[nameParts.length - 1];

  target.innerHTML = `
    <div class="detail-hero-art">
      <img src="${place.image}" alt="${place.name}: ${place.blurb}">
      <span class="art-label">${place.type.toUpperCase()} · ${place.region.toUpperCase()}</span>
    </div>
    <article class="detail-content">
      <p class="eyebrow">A PLACE TO FEEL MORE</p>
      <h1>${firstPart} <em>${lastPart}</em></h1>
      <p class="detail-intro">${place.blurb}</p>
      <button class="detail-save save-button ${getFavorites().includes(place.id) ? 'saved' : ''}" data-save="${place.id}" aria-label="${getFavorites().includes(place.id) ? 'Remove' : 'Save'} ${place.name}" aria-pressed="${getFavorites().includes(place.id)}">${getFavorites().includes(place.id) ? '♥ Saved' : '♡ Save this place'}</button>
      <div class="detail-columns">
        <div>
          <p>${place.description}</p>
          <p>Every Wonderstast journey is planned with care and shaped around you. Ask us about dates, stays and ways to make this place your own.</p>
          <h2 class="detail-subheading">A few ways to find your wonder</h2>
          <p>${place.highlights}</p>
          <a class="button button-dark" href="contact.html?destination=${place.id}">Plan this journey <span>↗</span></a>
        </div>
        <div class="detail-facts">
          <div><span>Best season</span><strong>${place.season}</strong></div>
          <div><span>Suggested stay</span><strong>${place.length}</strong></div>
          <div><span>Made for</span><strong>${place.type}</strong></div>
          <div><span>Good moments</span><strong>${place.highlights.split(' · ')[0]}</strong></div>
        </div>
      </div>
    </article>`;

  document.title = `${place.name} — Wonderstast Travel`;
}

function handleFavoriteClick(event) {
  const button = event.target.closest('[data-save]');
  if (!button) return;

  const destinationId = button.dataset.save;
  const favorites = getFavorites();
  const updatedFavorites = favorites.includes(destinationId)
    ? favorites.filter(id => id !== destinationId)
    : [...favorites, destinationId];

  saveFavorites(updatedFavorites);

  if (document.getElementById('destination-list')) filterDestinations();
  if (document.getElementById('favorites-list')) renderFavorites();
  if (document.getElementById('destination-detail')) renderDestinationDetails();

  const featuredCards = document.getElementById('featured-destinations');
  if (featuredCards) renderCards(featuredCards, destinations.slice(0, 3));
}

const testimonials = [
  { quote: '“Every detail felt considered, and somehow the whole trip still felt like an adventure.”', by: '— AMINA K. · MARA, KENYA' },
  { quote: '“We came home with new friends, a camera full of light, and plans to return.”', by: '— DANIEL & JO · LAMU ISLAND' },
  { quote: '“The best kind of travel: thoughtful, unhurried, and completely our own.”', by: '— NIA W. · WATAMU COAST' }
];

function connectTestimonials() {
  const quote = document.getElementById('testimonial-quote');
  const by = document.getElementById('testimonial-by');
  if (!quote || !by) return;

  document.querySelectorAll('[data-testimonial]').forEach(button => {
    button.addEventListener('click', () => {
      const testimonial = testimonials[Number(button.dataset.testimonial)];
      if (!testimonial) return;
      quote.textContent = testimonial.quote;
      by.textContent = testimonial.by;
      document.querySelectorAll('[data-testimonial]').forEach(item => {
        const isActive = item === button;
        item.classList.toggle('active', isActive);
        item.setAttribute('aria-pressed', String(isActive));
      });
    });
  });
}

function addScrollReveals() {
  const revealItems = document.querySelectorAll(
    'main section, main article.destination-card, main .experience-row'
  );
  revealItems.forEach(item => item.classList.add('reveal'));

  if (!('IntersectionObserver' in window)) {
    revealItems.forEach(item => item.classList.add('is-visible'));
    return;
  }

  document.documentElement.classList.add('reveal-ready');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.08 });

  revealItems.forEach(item => observer.observe(item));
}

function connectContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const destinationId = new URLSearchParams(location.search).get('destination');
  const destination = destinations.find(place => place.id === destinationId);
  if (destination) {
    form.elements.destination.value = destination.name;
  }

  form.addEventListener('submit', event => {
    event.preventDefault();

    const message = document.getElementById('form-message');
    if (!form.reportValidity()) {
      if (message) {
        message.textContent = 'Please check the highlighted fields and try again.';
        message.classList.add('error');
      }
      return;
    }

    if (message) {
      message.classList.remove('error');
      message.textContent = 'Thanks for reaching out. This demo does not send messages yet; email hello@wonderstast.travel to contact our team.';
    }
    form.reset();
  });
}

buildHeader();
buildFooter();
connectHeroSlideshow();
renderCards(document.getElementById('featured-destinations'), destinations.slice(0, 3));

if (document.getElementById('destination-list')) {
  filterDestinations();
}

renderFavorites();
renderDestinationDetails();
updateFavoriteCounts();
addScrollReveals();
connectContactForm();

document.addEventListener('click', handleFavoriteClick);
const destinationSearch = document.getElementById('destination-search');
if (destinationSearch) destinationSearch.addEventListener('input', filterDestinations);

document.querySelectorAll('.filter-button').forEach(button => {
  button.addEventListener('click', () => {
    const activeButton = document.querySelector('.filter-button.active');
    if (activeButton) activeButton.classList.remove('active');
    button.classList.add('active');
    filterDestinations();
  });
});

connectTestimonials();
window.addEventListener('storage', event => {
  if (event.key === 'wonderstast-favorites') {
    updateFavoriteCounts();
    if (document.getElementById('destination-list')) filterDestinations();
    if (document.getElementById('favorites-list')) renderFavorites();
    if (document.getElementById('featured-destinations')) {
      renderCards(document.getElementById('featured-destinations'), destinations.slice(0, 3));
    }
    if (document.getElementById('destination-detail')) renderDestinationDetails();
  }
});
