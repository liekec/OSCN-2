/* ======================================================
EVENT DATA
====================================================== */

const events = [

{
id: "coding-cafe-metadata-2026-09",
date: "2026-09-17T11:30:00",
endTime: "12:30",

```
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
```

},

{
id: "community-cafe-2026-09",
date: "2026-09-17T16:00:00",
endTime: "18:00",

```
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
```

}

// Add new events here.
];

/* ======================================================
RENDER EVENTS
====================================================== */

function renderEvents() {

const now = new Date();

const upcoming = [];
const past = [];

events.forEach(event => {

```
const eventDate = new Date(event.date);

if (eventDate >= now) {

  upcoming.push({
    ...event,
    _date: eventDate
  });

} else {

  past.push({
    ...event,
    _date: eventDate
  });

}
```

});

// Upcoming: soonest first
upcoming.sort((a, b) => a._date - b._date);

// Previous: newest first
past.sort((a, b) => b._date - a._date);

const upcomingList =
document.getElementById("upcomingEventsList");

const pastList =
document.getElementById("pastEventsList");

if (upcomingList) {

```
upcomingList.innerHTML = upcoming.length

  ? upcoming
      .map(event => eventCard(event, false))
      .join("")

  : '<p class="no-events">There are currently no events planned.</p>';
```

}

if (pastList) {

```
pastList.innerHTML = past.length

  ? past
      .map(event => eventCard(event, true))
      .join("")

  : '<p class="no-events">There are currently no past events listed.</p>';
```

}

}

/* ======================================================
EVENT CARD
====================================================== */

function eventCard(event, isPast) {

const month =
event._date
.toLocaleString("en-US", {
month: "short"
})
.toUpperCase();

const day =
event._date.getDate();

const startTime =
event._date.toLocaleTimeString("en-GB", {
hour: "2-digit",
minute: "2-digit"
});

const location =
event.location
? ` · ${event.location}`
: "";

return `

```
<article
  class="event${isPast ? " past" : ""}"
  onclick="openEvent('${event.id}')"
  role="button"
  tabindex="0"
>

  <div class="event-date">

    <span class="month">
      ${month}
    </span>

    <span class="day">
      ${day}
    </span>

  </div>


  <div class="event-content">

    <span class="event-tag ${event.tag}">
      ${event.tagLabel}
    </span>

    <h3>
      ${event.title}
    </h3>

    <p>
      ${event.shortDescription}
    </p>

    <div class="event-meta">
      ${startTime}–${event.endTime}${location}
    </div>

  </div>

</article>
```

`;
}

/* ======================================================
OPEN EVENT
====================================================== */

function openEvent(id) {

const event =
events.find(item => item.id === id);

if (!event) return;

const overview =
document.getElementById("eventsOverview");

const detail =
document.getElementById("eventDetail");

if (!overview || !detail) return;

const date =
new Date(event.date);

const dateLabel =
date.toLocaleDateString("en-US", {
weekday: "long",
month: "long",
day: "numeric",
year: "numeric"
});

const startTime =
date.toLocaleTimeString("en-GB", {
hour: "2-digit",
minute: "2-digit"
});

/* TITLE */

document.getElementById(
"eventDetailTitle"
).textContent = event.title;

/* TAG */

const tag =
document.getElementById("eventDetailTag");

tag.textContent =
event.tagLabel;

tag.className =
`event-tag ${event.tag}`;

/* META */

document.getElementById(
"eventDetailMeta"
).textContent =

```
`${dateLabel} · ${startTime}–${event.endTime}` +

(
  event.location
    ? ` · ${event.location}`
    : ""
);
```

/* DESCRIPTION */

document.getElementById(
"eventDetailDescription"
).textContent =
event.description;

/* POSTER */

const image =
document.getElementById("eventDetailImage");

if (event.image) {

```
/*
  events.html staat in /pages/
  De afbeelding staat vanaf de root in /images/
*/

image.src =
  "../" + event.image;

image.alt =
  event.title;

image.style.display =
  "block";
```

} else {

```
image.style.display =
  "none";
```

}

/* REGISTER BUTTON */

const register =
document.getElementById(
"eventDetailRegister"
);

const isPast =
date < new Date();

if (
!isPast &&
event.link &&
event.link !== "#"
) {

```
register.href =
  event.link;

register.style.display =
  "inline-block";
```

} else {

```
register.style.display =
  "none";
```

}

/* SHOW DETAIL */

overview.style.display =
"none";

detail.style.display =
"block";

/* UPDATE URL WITHOUT LOADING A NEW PAGE */

const newUrl =
`${window.location.pathname}?id=${encodeURIComponent(event.id)}`;

window.history.pushState(
{
eventId: event.id
},
"",
newUrl
);

/* GO TO TOP */

window.scrollTo({
top: 0,
behavior: "smooth"
});

}

/* ======================================================
CLOSE EVENT
====================================================== */

function closeEventDetail() {

const overview =
document.getElementById("eventsOverview");

const detail =
document.getElementById("eventDetail");

if (!overview || !detail) return;

detail.style.display =
"none";

overview.style.display =
"block";

/* Remove ?id=... */

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

/* ======================================================
BROWSER BACK / FORWARD
====================================================== */

window.addEventListener(
"popstate",
() => {

```
const params =
  new URLSearchParams(
    window.location.search
  );

const id =
  params.get("id");


if (id) {

  openEventWithoutHistory(id);

} else {

  showEventOverview();

}
```

}
);

/* ======================================================
OPEN EVENT WITHOUT ADDING ANOTHER HISTORY ENTRY
====================================================== */

function openEventWithoutHistory(id) {

const event =
events.find(item => item.id === id);

if (!event) return;

const overview =
document.getElementById("eventsOverview");

const detail =
document.getElementById("eventDetail");

if (!overview || !detail) return;

const date =
new Date(event.date);

const dateLabel =
date.toLocaleDateString("en-US", {
weekday: "long",
month: "long",
day: "numeric",
year: "numeric"
});

const startTime =
date.toLocaleTimeString("en-GB", {
hour: "2-digit",
minute: "2-digit"
});

document.getElementById(
"eventDetailTitle"
).textContent = event.title;

const tag =
document.getElementById(
"eventDetailTag"
);

tag.textContent =
event.tagLabel;

tag.className =
`event-tag ${event.tag}`;

document.getElementById(
"eventDetailMeta"
).textContent =

```
`${dateLabel} · ${startTime}–${event.endTime}` +

(
  event.location
    ? ` · ${event.location}`
    : ""
);
```

document.getElementById(
"eventDetailDescription"
).textContent =
event.description;

const image =
document.getElementById(
"eventDetailImage"
);

if (event.image) {

```
image.src =
  "../" + event.image;

image.alt =
  event.title;

image.style.display =
  "block";
```

} else {

```
image.style.display =
  "none";
```

}

const register =
document.getElementById(
"eventDetailRegister"
);

const isPast =
date < new Date();

if (
!isPast &&
event.link &&
event.link !== "#"
) {

```
register.href =
  event.link;

register.style.display =
  "inline-block";
```

} else {

```
register.style.display =
  "none";
```

}

overview.style.display =
"none";

detail.style.display =
"block";

}

/* ======================================================
SHOW OVERVIEW
====================================================== */

function showEventOverview() {

const overview =
document.getElementById(
"eventsOverview"
);

const detail =
document.getElementById(
"eventDetail"
);

if (!overview || !detail) return;

detail.style.display =
"none";

overview.style.display =
"block";

}

/* ======================================================
PREVIOUS EVENTS TOGGLE
====================================================== */

const toggleBtn =
document.getElementById(
"togglePast"
);

const pastList =
document.getElementById(
"pastEventsList"
);

if (toggleBtn && pastList) {

toggleBtn.addEventListener(
"click",
() => {

```
  const expanded =
    toggleBtn.getAttribute(
      "aria-expanded"
    ) === "true";


  toggleBtn.setAttribute(
    "aria-expanded",
    String(!expanded)
  );


  pastList.hidden =
    expanded;


  toggleBtn.textContent =
    expanded
      ? "Show past events"
      : "Hide past events";

}
```

);

}

/* ======================================================
INITIALISE
====================================================== */

renderEvents();

/* ======================================================
OPEN EVENT FROM URL
====================================================== */

const params =
new URLSearchParams(
window.location.search
);

const eventId =
params.get("id");

if (eventId) {

openEventWithoutHistory(
eventId
);

}
