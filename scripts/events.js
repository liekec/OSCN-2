// ======================================================
// EVENT DATA
// Voeg hier nieuwe events toe.
// Voor ieder event hoef je alleen hieronder een nieuw
// object toe te voegen.
// ======================================================

const events = [
  {
    id: "coding-cafe-metadata-2026-09",
    date: "2026-09-17T11:30:00",
    endTime: "12:30",
    tag: "workshop",
    tagLabel: "Workshop",
    title: "Coding Café - Metadata",
    location: "EOS N 00.330",
    image: "images/events/Poster_coding_cafe.png",

    // Korte tekst voor events.html
    shortDescription:
      "A hands-on Coding Café about research software metadata, with a code-along using your own project.",

    // Volledige tekst voor event.html
    description:
      "Metadata helps others find, understand and reuse your research software, and can even help your work get more citations. During this hands-on Coding Café, we'll explore why metadata matters, what information you need, and how you can automate its creation. After a short introduction and demonstration of the tool, we'll get hands-on with a code-along so you can try it out with your own research software project — bring your own laptop! No need to be a metadata expert, just bring your project and your curiosity. This event is sponsored by and in collaboration with eScience Center. Registration is required for catering purposes.",

    link: "#"
  },

  {
    id: "community-cafe-2026-09",
    date: "2026-09-17T16:00:00",
    endTime: "18:00",
    tag: "meetup",
    tagLabel: "Meet-up",
    title: "Community Café",
    location: "EOS 01.220 & The Yard",
    image: "images/events/Poster_community_cafe.png",

    shortDescription:
      "Meet the people behind Open Science in Nijmegen, hear their stories and connect with colleagues over drinks and bites.",

    description:
      "Who are the people behind Open Science in Nijmegen, and what are they working on? During our Community Café, community members from HAN, Radboudumc, Radboud University and MPI will take the stage for short presentations, sharing their Open Science initiatives, experiences and tips. After the pitches (approximately around 16:45h), we'll move to The Yard for free drinks, bites and plenty of time to connect with colleagues. Everyone is welcome!",

    link: "#"
  }

  // Voeg hier meer events toe.
];


// ======================================================
// EVENTS OVERVIEW
// ======================================================

function renderEvents() {
  const now = new Date();

  const upcoming = [];
  const past = [];

  events.forEach(ev => {
    const evDate = new Date(ev.date);

    if (evDate >= now) {
      upcoming.push({ ...ev, _date: evDate });
    } else {
      past.push({ ...ev, _date: evDate });
    }
  });

  // Eerstvolgende event eerst
  upcoming.sort((a, b) => a._date - b._date);

  // Meest recente oude event eerst
  past.sort((a, b) => b._date - a._date);

  const upcomingList = document.getElementById("upcomingEventsList");
  const pastList = document.getElementById("pastEventsList");

  if (upcomingList) {
    upcomingList.innerHTML = upcoming.length
      ? upcoming.map(ev => eventCard(ev, false)).join("")
      : '<p class="no-events">There are currently no events planned.</p>';
  }

  if (pastList) {
    pastList.innerHTML = past.length
      ? past.map(ev => eventCard(ev, true)).join("")
      : '<p class="no-events">There are currently no past events listed.</p>';
  }
}


// ======================================================
// EVENT CARD
// Dit is het korte blokje op events.html
// ======================================================

function eventCard(ev, isPast) {
  const month = ev._date
    .toLocaleString("en-US", { month: "short" })
    .toUpperCase();

  const day = ev._date.getDate();

  const startTime = ev._date.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit"
  });

  const locationHtml = ev.location
    ? ` · ${ev.location}`
    : "";

  return `
    <a
      class="event${isPast ? " past" : ""}"
      href="event.html?id=${encodeURIComponent(ev.id)}"
    >

      <div class="event-date">
        <span class="month">${month}</span>
        <span class="day">${day}</span>
      </div>

      <div class="event-content">

        <span class="event-tag ${ev.tag}">
          ${ev.tagLabel}
        </span>

        <h3>${ev.title}</h3>

        <p>
          ${ev.shortDescription || ev.description}
        </p>

        <div class="event-meta">
          ${startTime}–${ev.endTime}${locationHtml}
        </div>

      </div>

    </a>
  `;
}


// Render de events op events.html
renderEvents();


// ======================================================
// PREVIOUS EVENTS TOGGLE
// ======================================================

const toggleBtn = document.getElementById("togglePast");
const pastList = document.getElementById("pastEventsList");

if (toggleBtn && pastList) {
  toggleBtn.addEventListener("click", () => {

    const expanded =
      toggleBtn.getAttribute("aria-expanded") === "true";

    toggleBtn.setAttribute(
      "aria-expanded",
      String(!expanded)
    );

    pastList.hidden = expanded;

    toggleBtn.textContent = expanded
      ? "Show past events"
      : "Hide past events";
  });
}


// ======================================================
// EVENT DETAIL PAGE
// Dit gedeelte wordt alleen uitgevoerd op event.html
//
// Bijvoorbeeld:
// event.html?id=coding-cafe-metadata-2026-09
// ======================================================

function renderEventDetail() {

  const eventTitle = document.getElementById("eventTitle");

  // We zitten niet op event.html
  if (!eventTitle) {
    return;
  }

  // Lees ?id=... uit de URL
  const params = new URLSearchParams(window.location.search);
  const eventId = params.get("id");

  // Zoek het juiste event
  const ev = events.find(event => event.id === eventId);

  // Event bestaat niet
  if (!ev) {

    document.getElementById("eventPageContent").innerHTML = `
      <div class="wrap">
        <h1>Event not found</h1>
        <p>
          Sorry, this event could not be found.
        </p>
        <p>
          <a href="events.html">← Back to events</a>
        </p>
      </div>
    `;

    return;
  }


  // Datum en tijd
  const d = new Date(ev.date);

  const dateLabel = d.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric"
  });

  const startTime = d.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit"
  });


  // Pagina titel
  document.title = `${ev.title} | OSCN`;


  // Titel
  document.getElementById("eventTitle").textContent =
    ev.title;


  // Tag
  const tag = document.getElementById("eventTag");

  tag.textContent = ev.tagLabel;
  tag.className = `event-tag ${ev.tag}`;


  // Meta informatie
  document.getElementById("eventMeta").textContent =
    `${dateLabel} · ${startTime}–${ev.endTime}` +
    (ev.location ? ` · ${ev.location}` : "");


  // Afbeelding
  const image = document.getElementById("eventImage");

  if (ev.image) {

    image.src = "../" + ev.image;
    image.alt = ev.title;
    image.style.display = "block";

  } else {

    image.style.display = "none";

  }


  // Volledige beschrijving
  document.getElementById("eventDescription").textContent =
    ev.description;


  // Registratieknop
  const register = document.getElementById("eventRegister");

  const isPast = d < new Date();

  if (!isPast && ev.link && ev.link !== "#") {

    register.href = ev.link;
    register.style.display = "inline-block";

  } else {

    register.style.display = "none";

  }
}


// Detailpagina uitvoeren indien nodig
renderEventDetail();
