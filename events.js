// ---- Event data: voeg hier nieuwe events toe ----
const events = [
  {
    date: "2026-09-17T12:00:00",
    endTime: "13:00",
    tag: "workshop",
    tagLabel: "Workshop",
    title: "Coding Café",
    description: "Learn all about metadata and get hands-on experience."
  },
  {
    date: "2026-09-17T16:00:00",
    endTime: "18:00",
    tag: "meetup",
    tagLabel: "Meet-up",
    title: "Community Café",
    description: "A celebration of the Open Science Week with short member pitches."
  }
  // voeg hier meer events toe, ook oude — die verschijnen automatisch bij "Previous Events"
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
      : '<p class="no-events">No upcoming events right now — check back soon!</p>';
  }

  if (pastList) {
    pastList.innerHTML = past.map(ev => eventCard(ev, true)).join('');
  }
}

function eventCard(ev, isPast) {
  const month = ev._date.toLocaleString('en-US', { month: 'short' }).toUpperCase();
  const day = ev._date.getDate();
  const startTime = ev._date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });

  return `
    <article class="event reveal${isPast ? ' past' : ''}">
      <div class="event-date"><span class="month">${month}</span><span class="day">${day}</span></div>
      <div class="event-content">
        <span class="event-tag ${ev.tag}">${ev.tagLabel}</span>
        <h3>${ev.title}</h3>
        <p>${ev.description}</p>
        <div class="event-meta">${startTime}–${ev.endTime}</div>
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
