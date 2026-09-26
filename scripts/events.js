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

/* How many previous events are shown before the "view more" button appears */
var PAST_EVENTS_INITIAL_COUNT = 2;

/* State for the previous-events "view more" toggle */
var allPastEvents = [];
var pastExpanded = false;

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

function createEventCard(event, isPast) {
  var date = new Date(event.date);
  var day = date.getDate();
  var month = date.toLocaleDateString("en-GB", {
    month: "short"
  });

  return (
    '<article class="event' +
    (isPast ? ' past' : '') +
    '" data-event-id="' +
    event.id +
    '" tabindex="0" role="button" aria-label="Open event: ' +
    event.title +
    '">' +
    '<div class="event-date">' +
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
    '<span class="event-cta">Click for more info →</span>' +
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
      upcoming.map(function(event) {
        return createEventCard(event, false);
      }).join("");
  } else {
    upcomingContainer.classList.add("is-empty");
    upcomingContainer.innerHTML =
      '<p class="no-events">There are currently no events planned.</p>';
  }

  allPastEvents = past;
  pastExpanded = false;

  if (past.length > 0) {
    pastContainer.classList.remove("is-empty");
  } else {
    pastContainer.classList.add("is-empty");
  }

  paintPastEvents();
  setupEventCards();
}

/* Renders the previous-events list based on current allPastEvents/pastExpanded
   state, and shows/hides + labels the "view more" button accordingly. */
function paintPastEvents() {
  var pastContainer =
    document.getElementById("pastEventsList");

  var moreRow =
    document.getElementById("pastEventsMoreRow");

  var toggleBtn =
    document.getElementById("togglePast");

  if (!pastContainer) {
    return;
  }

  if (allPastEvents.length === 0) {
    pastContainer.innerHTML =
      '<p class="no-events">There are no previous events.</p>';

    if (moreRow) {
      moreRow.style.display = "none";
    }

    return;
  }

  var visible = pastExpanded
    ? allPastEvents
    : allPastEvents.slice(0, PAST_EVENTS_INITIAL_COUNT);

  pastContainer.innerHTML =
    visible.map(function(event) {
      return createEventCard(event, true);
    }).join("");

  if (moreRow && toggleBtn) {
    if (allPastEvents.length > PAST_EVENTS_INITIAL_COUNT) {
      moreRow.style.display = "";
      toggleBtn.textContent = pastExpanded
        ? "Show fewer previous events"
        : "View more previous events";
      toggleBtn.setAttribute(
        "aria-expanded",
        pastExpanded ? "true" : "false"
      );
    } else {
      moreRow.style.display = "none";
    }
  }
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

  var posterWrap =
    document.getElementById("eventDetailPosterWrap");

  if (detailImage) {
    if (event.image) {
      detailImage.src = event.image;
      detailImage.alt = event.title;

      if (posterWrap) {
        posterWrap.hidden = false;
      }
    } else if (posterWrap) {
      posterWrap.hidden = true;
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

/* ============================================================
   POSTER LIGHTBOX
   ============================================================ */

function openPosterLightbox(src, alt) {
  var backdrop =
    document.getElementById("posterLightbox");

  var img =
    document.getElementById("posterLightboxImage");

  if (!backdrop || !img || !src) {
    return;
  }

  img.src = src;
  img.alt = alt || "";

  backdrop.classList.add("open");
}

function closePosterLightbox() {
  var backdrop =
    document.getElementById("posterLightbox");

  if (!backdrop) {
    return;
  }

  backdrop.classList.remove("open");
}

document.addEventListener(
  "DOMContentLoaded",
  function() {
    renderEvents();

    var togglePast =
      document.getElementById("togglePast");

    if (togglePast) {
      togglePast.addEventListener(
        "click",
        function() {
          pastExpanded = !pastExpanded;
          paintPastEvents();
          setupEventCards();
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

    var posterWrap =
      document.getElementById("eventDetailPosterWrap");

    if (posterWrap) {
      posterWrap.addEventListener(
        "click",
        function() {
          var img =
            document.getElementById("eventDetailImage");

          if (img && img.src) {
            openPosterLightbox(img.src, img.alt);
          }
        }
      );

      posterWrap.addEventListener(
        "keydown",
        function(e) {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();

            var img =
              document.getElementById("eventDetailImage");

            if (img && img.src) {
              openPosterLightbox(img.src, img.alt);
            }
          }
        }
      );
    }

    var lightboxClose =
      document.getElementById("posterLightboxClose");

    if (lightboxClose) {
      lightboxClose.addEventListener(
        "click",
        closePosterLightbox
      );
    }

    var lightboxBackdrop =
      document.getElementById("posterLightbox");

    if (lightboxBackdrop) {
      lightboxBackdrop.addEventListener(
        "click",
        function(e) {
          if (e.target === lightboxBackdrop) {
            closePosterLightbox();
          }
        }
      );
    }

    document.addEventListener(
      "keydown",
      function(e) {
        if (e.key === "Escape") {
          closePosterLightbox();
        }
      }
    );

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
