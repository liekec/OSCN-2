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
    image: "../images/events/Poster coding cafe + QR.png",
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

function formatDate(dateString) {
  var date = new Date(dateString);

  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
}

function formatTime(dateString, endTime) {
  var date = new Date(dateString);

  var start = date.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit"
  });

  return start + "–" + endTime;
}

function createEventCard(event) {
  var date = new Date(event.date);
  var day = date.getDate();
  var month = date.toLocaleDateString("en-GB", {
    month: "short"
  });

  return (
    '<article class="event" data-event-id="' +
    event.id +
    '" tabindex="0" role="button" aria-label="Open event: ' +
    event.title +
    '">' +
    '<div class="event-date">' +
    /* class names now match style.css (.event-date .day / .event-date .month) */
    '<span class="day">' +
    day +
    '</span>' +
    '<span class="month">' +
    month +
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
    '<p class="event-meta">' +
    formatDate(event.date) +
    ' · ' +
    formatTime(event.date, event.endTime) +
    ' · ' +
    event.location +
    '</p>' +
    '<p>' +
    event.shortDescription +
    '</p>' +
    '</div>' +
    '</article>'
  );
}

function renderEvents() {
  var upcomingContainer =
    document.getElementById("upcomingEventsList");

  var pastContainer =
    document.getElementById("pastEventsList");

  if (!upcomingContainer || !pastContainer) {
    return;
  }

  var now = new Date();
  var upcoming = [];
  var past = [];

  events.forEach(function(event) {
    var date = new Date(event.date);

    if (date >= now) {
      upcoming.push(event);
    } else {
      past.push(event);
    }
  });

  upcoming.sort(function(a, b) {
    return new Date(a.date) - new Date(b.date);
  });

  past.sort(function(a, b) {
    return new Date(b.date) - new Date(a.date);
  });

  if (upcoming.length > 0) {
    upcomingContainer.classList.remove("is-empty");
    upcomingContainer.innerHTML =
      upcoming.map(createEventCard).join("");
  } else {
    upcomingContainer.classList.add("is-empty");
    /* class name now matches style.css (.no-events) */
    upcomingContainer.innerHTML =
      '<p class="no-events">There are currently no events planned.</p>';
  }

  if (past.length > 0) {
    pastContainer.classList.remove("is-empty");
    pastContainer.innerHTML =
      past.map(createEventCard).join("");
  } else {
    pastContainer.classList.add("is-empty");
    pastContainer.innerHTML =
      '<p class="no-events">There are no previous events.</p>';
  }

  setupEventCards();
}

function setupEventCards() {
  var cards =
    document.querySelectorAll(".event[data-event-id]");

  cards.forEach(function(card) {
    card.addEventListener("click", function() {
      openEvent(
        card.getAttribute("data-event-id")
      );
    });

    card.addEventListener("keydown", function(e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();

        openEvent(
          card.getAttribute("data-event-id")
        );
      }
    });
  });
}

function openEvent(eventId) {
  var event = events.find(function(item) {
    return item.id === eventId;
  });

  if (!event) {
    return;
  }

  var overview =
    document.getElementById("eventsOverview");

  var detail =
    document.getElementById("eventDetail");

  if (!overview || !detail) {
    return;
  }

  var detailImage =
    document.getElementById("eventDetailImage");

  var detailTag =
    document.getElementById("eventDetailTag");

  var detailTitle =
    document.getElementById("eventDetailTitle");

  var detailMeta =
    document.getElementById("eventDetailMeta");

  var detailDescription =
    document.getElementById("eventDetailDescription");

  var detailRegister =
    document.getElementById("eventDetailRegister");

  if (detailImage) {
    if (event.image) {
      detailImage.src = event.image;
      detailImage.alt = event.title;
      detailImage.hidden = false;
    } else {
      detailImage.hidden = true;
    }
  }

  if (detailTag) {
    detailTag.textContent = event.tagLabel;
    detailTag.className =
      "event-tag " + event.tag;
  }

  if (detailTitle) {
    detailTitle.textContent = event.title;
  }

  if (detailMeta) {
    detailMeta.textContent =
      formatDate(event.date) +
      " · " +
      formatTime(event.date, event.endTime) +
      " · " +
      event.location;
  }

  if (detailDescription) {
    detailDescription.textContent =
      event.description;
  }

  if (detailRegister) {
    if (event.link && event.link !== "#") {
      detailRegister.href = event.link;
      detailRegister.hidden = false;
    } else {
      detailRegister.hidden = true;
    }
  }

  overview.style.display = "none";
  detail.style.display = "block";

  window.history.pushState(
    { eventId: event.id },
    "",
    "?id=" + encodeURIComponent(event.id)
  );

  /* Scroll to the top of the detail section itself, not the whole page.
     Offset accounts for the sticky 80px header so the title isn't hidden under it. */
  var headerOffset = 80;
  var elementPosition =
    detail.getBoundingClientRect().top + window.pageYOffset;

  window.scrollTo({
    top: elementPosition - headerOffset,
    behavior: "smooth"
  });
}

function closeEvent() {
  var overview =
    document.getElementById("eventsOverview");

  var detail =
    document.getElementById("eventDetail");

  if (!overview || !detail) {
    return;
  }

  detail.style.display = "none";
  overview.style.display = "block";

  window.history.pushState(
    {},
    "",
    window.location.pathname
  );
}

document.addEventListener(
  "DOMContentLoaded",
  function() {
    renderEvents();

    var togglePast =
      document.getElementById("togglePast");

    var pastEventsList =
      document.getElementById("pastEventsList");

    if (togglePast && pastEventsList) {
      togglePast.addEventListener(
        "click",
        function() {
          pastEventsList.hidden =
            !pastEventsList.hidden;

          togglePast.textContent =
            pastEventsList.hidden
              ? "Show past events"
              : "Hide past events";
        }
      );
    }

    var backButton =
      document.getElementById("backToEvents");

    if (backButton) {
      backButton.addEventListener(
        "click",
        function() {
          closeEvent();
        }
      );
    }

    var params =
      new URLSearchParams(
        window.location.search
      );

    var eventId =
      params.get("id");

    if (eventId) {
      openEvent(eventId);
    }
  }
);

window.addEventListener(
  "popstate",
  function() {
    var params =
      new URLSearchParams(
        window.location.search
      );

    var eventId =
      params.get("id");

    if (eventId) {
      openEvent(eventId);
    } else {
      var detail =
        document.getElementById("eventDetail");

      var overview =
        document.getElementById("eventsOverview");

      if (detail && overview) {
        detail.style.display = "none";
        overview.style.display = "block";
      }
    }
  }
);
