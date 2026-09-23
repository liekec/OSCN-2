/* ============================================================
EVENT DATA
============================================================ */

const events = [
{
id: "coding-cafe-metadata-2026-09",
date: "2026-09-17T11:30:00",
endTime: "12:30",
tag: "workshop",
tagLabel: "Workshop",
title: "Coding Café - Metadata",
location: "EOS N 00.330",
image: "../images/events/Poster_coding_cafe.png",
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
image: "../images/events/Poster_community_cafe.png",
shortDescription:
"Meet the people behind Open Science in Nijmegen, hear their stories and connect with colleagues over drinks and bites.",
description:
"Who are the people behind Open Science in Nijmegen, and what are they working on? During our Community Café, community members from HAN, Radboudumc, Radboud University and MPI will take the stage for short presentations, sharing their Open Science initiatives, experiences and tips. After the pitches (approximately around 16:45h), we'll move to The Yard for free drinks, bites and plenty of time to connect with colleagues. Everyone is welcome!",
link: "#"
}
];

/* ============================================================
GET EVENT DATE
============================================================ */

function getEventDate(event) {
return new Date(event.date);
}

/* ============================================================
FORMAT TIME
============================================================ */

function formatTime(date) {
return date.toLocaleTimeString("en-GB", {
hour: "2-digit",
minute: "2-digit"
});
}

/* ============================================================
CREATE EVENT CARD
============================================================ */

function createEventCard(event, isPast) {
const date = getEventDate(event);

const month = date
.toLocaleString("en-US", {
month: "short"
})
.toUpperCase();

const day = date.getDate();
const time = formatTime(date);

let location = "";

if (event.location) {
location = " · " + event.location;
}

return (
'<article class="event' +
(isPast ? " past" : "") +
'" data-event-id="' +
event.id +
'" tabindex="0" role="button" aria-label="Open event: ' +
event.title +
'">' +

```
  '<div class="event-date">' +
    '<span class="month">' +
      month +
    '</span>' +

    '<span class="day">' +
      day +
    '</span>' +
  '</div>' +

  '<div class="event-content">' +

    '<span class="event-tag ' +
      event.tag +
    '">' +
      event.tagLabel +
    '</span>' +

    '<h3>' +
      event.title +
    '</h3>' +

    '<p>' +
      event.shortDescription +
    '</p>' +

    '<div class="event-meta">' +
      time +
      "–" +
      event.endTime +
      location +
    '</div>' +

  '</div>' +

'</article>'
```

);
}

/* ============================================================
RENDER EVENTS
============================================================ */

function renderEvents() {
const now = new Date();

const upcoming = [];
const past = [];

events.forEach(function(event) {
const date = getEventDate(event);

```
if (date >= now) {
  upcoming.push(event);
} else {
  past.push(event);
}
```

});

/* Upcoming: earliest first */

upcoming.sort(function(a, b) {
return getEventDate(a) - getEventDate(b);
});

/* Past: most recent first */

past.sort(function(a, b) {
return getEventDate(b) - getEventDate(a);
});

const upcomingList =
document.getElementById("upcomingEventsList");

const pastList =
document.getElementById("pastEventsList");

/* ==========================================================
UPCOMING EVENTS
========================================================== */

if (upcomingList) {

```
if (upcoming.length > 0) {

  upcomingList.innerHTML =
    upcoming
      .map(function(event) {
        return createEventCard(event, false);
      })
      .join("");

} else {

  upcomingList.innerHTML =
    '<p class="no-events">There are currently no events planned.</p>';
}
```

}

/* ==========================================================
PAST EVENTS
========================================================== */

if (pastList) {

```
if (past.length > 0) {

  pastList.innerHTML =
    past
      .map(function(event) {
        return createEventCard(event, true);
      })
      .join("");

} else {

  pastList.innerHTML =
    '<p class="no-events">There are currently no past events listed.</p>';
}
```

}
}

/* ============================================================
OPEN EVENT DETAIL
============================================================ */

function openEvent(id, updateUrl) {

if (typeof updateUrl === "undefined") {
updateUrl = true;
}

const event =
events.find(function(item) {
return item.id === id;
});

if (!event) {
return;
}

const overview =
document.getElementById("eventsOverview");

const detail =
document.getElementById("eventDetail");

if (!overview || !detail) {
return;
}

const date =
getEventDate(event);

/* Date */

const dateLabel =
date.toLocaleDateString("en-US", {
weekday: "long",
month: "long",
day: "numeric",
year: "numeric"
});

/* Time */

const startTime =
formatTime(date);

/* Title */

const titleElement =
document.getElementById("eventDetailTitle");

if (titleElement) {
titleElement.textContent =
event.title;
}

/* Tag */

const tag =
document.getElementById("eventDetailTag");

if (tag) {
tag.textContent =
event.tagLabel;

```
tag.className =
  "event-tag " + event.tag;
```

}

/* Meta */

const meta =
document.getElementById("eventDetailMeta");

if (meta) {

```
let metaText =
  dateLabel +
  " · " +
  startTime +
  "–" +
  event.endTime;

if (event.location) {
  metaText +=
    " · " +
    event.location;
}

meta.textContent =
  metaText;
```

}

/* Description */

const description =
document.getElementById(
"eventDetailDescription"
);

if (description) {
description.textContent =
event.description;
}

/* Image */

const image =
document.getElementById(
"eventDetailImage"
);

if (image) {

```
if (event.image) {

  image.src =
    event.image;

  image.alt =
    event.title;

  image.style.display =
    "block";

} else {

  image.removeAttribute("src");

  image.alt =
    "";

  image.style.display =
    "none";
}
```

}

/* Register button */

const register =
document.getElementById(
"eventDetailRegister"
);

if (register) {

```
const isPast =
  date < new Date();

if (
  !isPast &&
  event.link &&
  event.link !== "#"
) {

  register.href =
    event.link;

  register.style.display =
    "inline-block";

} else {

  register.style.display =
    "none";
}
```

}

/* Switch overview to detail */

overview.style.display =
"none";

detail.style.display =
"block";

/* Update URL */

if (updateUrl) {

```
const url =
  window.location.pathname +
  "?id=" +
  encodeURIComponent(event.id);

history.pushState(
  { eventId: event.id },
  "",
  url
);
```

}

/* Scroll to top */

window.scrollTo({
top: 0,
behavior: "smooth"
});
}

/* ============================================================
CLOSE EVENT DETAIL
============================================================ */

function closeEventDetail(updateUrl) {

if (typeof updateUrl === "undefined") {
updateUrl = true;
}

const overview =
document.getElementById(
"eventsOverview"
);

const detail =
document.getElementById(
"eventDetail"
);

if (!overview || !detail) {
return;
}

detail.style.display =
"none";

overview.style.display =
"block";

if (updateUrl) {

```
history.pushState(
  {},
  "",
  window.location.pathname
);
```

}

window.scrollTo({
top: 0,
behavior: "smooth"
});
}

/* ============================================================
BACK TO EVENTS BUTTON
============================================================ */

document.addEventListener(
"DOMContentLoaded",
function() {

```
const backButton =
  document.getElementById(
    "backToEvents"
  );

if (backButton) {

  backButton.addEventListener(
    "click",
    function() {
      closeEventDetail();
    }
  );
}
```

}
);

/* ============================================================
EVENT CARD CLICK
============================================================ */

document.addEventListener(
"click",
function(event) {

```
const card =
  event.target.closest(
    ".event[data-event-id]"
  );

if (!card) {
  return;
}

openEvent(
  card.dataset.eventId
);
```

}
);

/* ============================================================
EVENT CARD KEYBOARD
============================================================ */

document.addEventListener(
"keydown",
function(event) {

```
if (
  event.key !== "Enter" &&
  event.key !== " "
) {
  return;
}

const card =
  event.target.closest(
    ".event[data-event-id]"
  );

if (!card) {
  return;
}

event.preventDefault();

openEvent(
  card.dataset.eventId
);
```

}
);

/* ============================================================
PAST EVENTS TOGGLE
============================================================ */

document.addEventListener(
"DOMContentLoaded",
function() {

```
const togglePast =
  document.getElementById(
    "togglePast"
  );

const pastEvents =
  document.getElementById(
    "pastEventsList"
  );

if (
  !togglePast ||
  !pastEvents
) {
  return;
}


togglePast.addEventListener(
  "click",
  function() {

    const isOpen =
      !pastEvents.hasAttribute(
        "hidden"
      );


    if (isOpen) {

      pastEvents.setAttribute(
        "hidden",
        ""
      );

      togglePast.textContent =
        "Show past events";

      togglePast.setAttribute(
        "aria-expanded",
        "false"
      );

    } else {

      pastEvents.removeAttribute(
        "hidden"
      );

      togglePast.textContent =
        "Hide past events";

      togglePast.setAttribute(
        "aria-expanded",
        "true"
      );
    }

  }
);
```

}
);

/* ============================================================
BROWSER BACK / FORWARD
============================================================ */

window.addEventListener(
"popstate",
function() {

```
const params =
  new URLSearchParams(
    window.location.search
  );

const id =
  params.get("id");


if (id) {

  openEvent(
    id,
    false
  );

} else {

  closeEventDetail(
    false
  );
}
```

}
);

/* ============================================================
INITIALISE
============================================================ */

renderEvents();

/* ============================================================
OPEN EVENT FROM URL
============================================================ */

const initialParams =
new URLSearchParams(
window.location.search
);

const initialEventId =
initialParams.get("id");

if (initialEventId) {

openEvent(
initialEventId,
false
);
}


