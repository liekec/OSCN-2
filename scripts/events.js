// ---- Event data: voeg hier nieuwe events toe ----
const events = [
  {
    date: "2026-09-17T11:30:00",
    endTime: "12:30",
    tag: "workshop",
    tagLabel: "Workshop",
    title: "Coding Café - Metadata",
    location: "EOS N 00.330",
    image: "images/events/Poster_coding_cafe.png",
    description: "Metadata helps others find, understand and reuse your research software, and can even help your work get more citations. During this hands-on Coding Café, we'll explore why metadata matters, what information you need, and how you can automate its creation. After a short introduction and demonstration of the tool, we'll get hands-on with a code-along so you can try it out with your own research software project — bring your own laptop! No need to be a metadata expert, just bring your project and your curiosity. This event is sponsored by and in collaboration with eScience Center. Registration is required for catering purposes.",
    link: "#"
  },
  {
    date: "2026-09-17T16:00:00",
    endTime: "18:00",
    tag: "meetup",
    tagLabel: "Meet-up",
    title: "Community Café",
    location: "EOS 01.220 & The Yard",
    image: "images/events/Poster_community_cafe.png",
    description: "Who are the people behind Open Science in Nijmegen, and what are they working on? During our Community Café, community members from HAN, Radboudumc, Radboud University and MPI will take the stage for short presentations, sharing their Open Science initiatives, experiences and tips. After the pitches (approximately around 16:45h), we'll move to The Yard for free drinks, bites and plenty of time to connect with colleagues. Everyone is welcome!",
    link: "#"
  }
  // voeg hier meer events toe, ook oude — die verschijnen automatisch bij "Previous Events"
  // "image" is optioneel: pad relatief aan de site-root, bv. "images/events/mijn-poster.png"
];

function renderEvents() {
  const now = new Date();
  const upcoming = [];
  const past = [];

  events.forEach(ev => {
    const evDate = new Date(ev.date);
    (evDate >= now ? upcoming : past).push({ ...ev, _date: evDate });
  });

  // aankomend: oplopend sorteren (eerstvolgende eerst)
  upcoming.sort((a, b) => a._date - b._date);
  // verleden: aflopend sorteren (meest recente eerst)
  past.sort((a, b) => b._date - a._date);

  const upcomingList = document.getElementById('upcomingEventsList');
  const pastList = document.getElementById('pastEventsList');

if (upcomingList) {
  upcomingList.innerHTML = upcoming.length
    ? upcoming.map(ev => eventCard(ev, false)).join('')
    : '<p class="no-events">There are currently no events planned.</p>';
}

if (pastList) {
  pastList.innerHTML = past.length
    ? past.map(ev => eventCard(ev, true)).join('')
    : '<p class="no-events">There are currently no past events listed.</p>';
}
}

function eventCard(ev, isPast) {
  const month = ev._date.toLocaleString('en-US', { month: 'short' }).toUpperCase();
  const day = ev._date.getDate();
  const startTime = ev._date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });

  const locationHtml = ev.location ? ` · ${ev.location}` : '';
  const linkHtml = (!isPast && ev.link)
    ? `<a class="event-link" href="${ev.link}" target="_blank" rel="noopener noreferrer">Register →</a>`
    : '';
  const posterHtml = ev.image
    ? `<img src="../${ev.image}" alt="${ev.title} poster" style="width:100%;max-height:180px;object-fit:cover;border-radius:10px;margin-bottom:14px;">`
    : '';

  return `
    <article class="event${isPast ? ' past' : ''}">
      <div class="event-date"><span class="month">${month}</span><span class="day">${day}</span></div>
      <div class="event-content">
        ${posterHtml}
        <span class="event-tag ${ev.tag}">${ev.tagLabel}</span>
        <h3>${ev.title}</h3>
        <p>${ev.description}</p>
        <div class="event-meta">${startTime}–${ev.endTime}${locationHtml}</div>
        ${linkHtml}
      </div>
    </article>
  `;
}

renderEvents();

// Toggle voor previous events
const toggleBtn = document.getElementById('togglePast');
const pastList = document.getElementById('pastEventsList');
if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    const expanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    toggleBtn.setAttribute('aria-expanded', String(!expanded));
    pastList.hidden = expanded;
    toggleBtn.textContent = expanded ? 'Show past events' : 'Hide past events';
  });
}
