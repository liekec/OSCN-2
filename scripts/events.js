// ======================================================
// EVENT DATA
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

    shortDescription:
      "A hands-on Coding Café about research software metadata, with a code-along using your own project.",

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

  // Voeg hier later nieuwe events toe
];


// ======================================================
// EVENT OVERVIEW
// ======================================================

function renderEvents() {

  const now = new Date();

  const upcoming = [];
  const past = [];

  events.forEach(ev => {

    const evDate = new Date(ev.date);

    if (evDate >= now) {
      upcoming.push({
        ...ev,
        _date: evDate
      });
    } else {
      past.push({
        ...ev,
        _date: evDate
      });
    }

  });


  // Eerstvolgende event eerst
  upcoming.sort((a, b) => a._date - b._date);

  // Meest recente oude event eerst
  past.sort((a, b) => b._date - a._date);


  const upcomingList =
    document.getElementById("upcomingEventsList");

  const pastList =
    document.getElementById("pastEventsList");


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
// ======================================================

function eventCard(ev, isPast) {

  const month = ev._date
    .toLocaleString("en-US", {
      month: "short"
    })
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
    <article
      class="event${isPast ? " past" : ""}"
      onclick="openEvent('${ev.id}')"
      role="button"
      tabindex="0"
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

    </article>
  `;
}


// ======================================================
// OPEN EVENT DETAIL
// ======================================================

function openEvent(id) {

  const ev = events.find(event => event.id === id);

  if (!ev) return;


  const overview =
    document.getElementById("eventsOverview");

  const detail =
    document.getElementById("eventDetail");


  if (!overview || !detail) return;


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


  // Titel
  document.getElementById("eventDetailTitle").textContent =
    ev.title;


  // Tag
  const tag =
    document.getElementById("eventDetailTag");

  tag.textContent = ev.tagLabel;
  tag.className = `event-tag ${ev.tag}`;


  // Datum / tijd / locatie
  document.getElementById("eventDetailMeta").textContent =
    `${dateLabel} · ${startTime}–${ev.endTime}` +
    (ev.location ? ` · ${ev.location}` : "");


  // Beschrijving
  document.getElementById("eventDetailDescription").textContent =
    ev.description;


  // Poster
  const image =
    document.getElementById("eventDetailImage");

  if (ev.image) {

    image.src = ev.image;
    image.alt = ev.title;
    image.style.display = "block";

  } else {

    image.style.display = "none";

  }


  // Registratieknop
  const register =
    document.getElementById("eventDetailRegister");

  const isPast = d < new Date();

  if (!isPast && ev.link && ev.link !== "#") {

    register.href = ev.link;
    register.style.display = "inline-block";

  } else {

    register.style.display = "none";

  }


  // Overzicht verbergen
  overview.style.display = "none";


  // Detail tonen
  detail.style.display = "block";


  // URL aanpassen zonder nieuwe pagina
  const newUrl =
    `${window.location.pathname}?id=${encodeURIComponent(ev.id)}`;

  window.history.pushState(
    { eventId: ev.id },
    "",
    newUrl
  );


  // Naar boven
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


// ======================================================
// CLOSE EVENT DETAIL
// ======================================================

function closeEventDetail() {

  const overview =
    document.getElementById("eventsOverview");

  const detail =
    document.getElementById("eventDetail");


  if (!overview || !detail) return;


  detail.style.display = "none";
  overview.style.display = "block";


  // URL terug naar gewone events pagina
  window.history.pushState(
    {},
    "",
    window.location.pathname
  );


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


// ======================================================
// PREVIOUS EVENTS TOGGLE
// ======================================================

const toggleBtn =
  document.getElementById("togglePast");

const pastList =
  document.getElementById("pastEventsList");


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
// INITIALISE
// ======================================================

renderEvents();


// ======================================================
// OPEN EVENT FROM URL
// Bijvoorbeeld:
// events.html?id=coding-cafe-metadata-2026-09
// ======================================================

const urlParams =
  new URLSearchParams(window.location.search);

const eventId =
  urlParams.get("id");


if (eventId) {
  openEvent(eventId);
}
