// ============================================================
// OSCN member directory
// Add new members by adding an object to the MEMBERS array below.
// institute must match one of the <option> values in the
// "institute-filter" select on members.html (add a new <option>
// there if you add a member from a new institute).
// ============================================================

const MEMBERS = [
  {
    name: "Anita Eerland",
    institute: "Radboud University",
    position: "Associate Professor",
    expertise: ["Research Integrity", "Open Education"],
    interests: ["Preregistration", "Open Data"],
  },
  {
    name: "Maximiliano Cenci",
    institute: "Radboud UMC",
    position: "Assistant Professor",
    expertise: ["Research Integrity"],
    interests: ["Reproducibility", "Open Data"],
  },
  {
    name: "Lieke Corbeek",
    institute: "Radboud University",
    position: "Student",
    expertise: [],
    interests: ["Open Science Communication", "Public Engagement"],
  },
  {
    name: "Tim Middeldorp",
    institute: "Radboud University",
    position: "Support Staff / Organisational Professional",
    expertise: ["Scholarly Publishing"],
    interests: ["Transparent Reporting", "Public Engagement"],
  },
  {
    name: "Karin Kastens",
    institute: "Max Planck Institute for Psycholinguistics",
    position: "Support Staff / Organisational Professional",
    expertise: ["Open Access", "Scholarly Publishing"],
    interests: ["FAIR", "Open Access"],
  },
];

function initials(name) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function renderMembers(list) {
  const grid = document.querySelector(".members-grid");
  if (!grid) return;

  if (!list.length) {
    grid.innerHTML = '<div class="members-empty">No members match your search yet.</div>';
    return;
  }

  grid.innerHTML = list
    .map((m) => {
      const tags = [...m.expertise, ...m.interests]
        .map((t) => `<span class="tag-pill">${t}</span>`)
        .join("");
      return `
        <article class="member-card reveal">
          <div class="avatar">${initials(m.name)}</div>
          <h3>${m.name}</h3>
          <span class="role">${m.position}</span>
          <div class="inst">${m.institute}</div>
          <div class="tag-row">${tags}</div>
        </article>`;
    })
    .join("");

  // Re-run scroll reveal for newly injected cards
  const revealEls = grid.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }
}

function applyFilters() {
  const search = (document.getElementById("search-input")?.value || "").toLowerCase().trim();
  const institute = document.getElementById("institute-filter")?.value || "";
  const position = document.getElementById("position-filter")?.value || "";
  const expertise = document.getElementById("expertise-filter")?.value || "";
  const interest = document.getElementById("interest-filter")?.value || "";

  const filtered = MEMBERS.filter((m) => {
    if (search && !m.name.toLowerCase().includes(search)) return false;
    if (institute && m.institute !== institute) return false;
    if (position && m.position !== position) return false;
    if (expertise && !m.expertise.includes(expertise)) return false;
    if (interest && !m.interests.includes(interest)) return false;
    return true;
  });

  renderMembers(filtered);
}

document.addEventListener("DOMContentLoaded", () => {
  renderMembers(MEMBERS);

  ["search-input", "institute-filter", "position-filter", "expertise-filter", "interest-filter"].forEach(
    (id) => {
      const el = document.getElementById(id);
      if (el) el.addEventListener("input", applyFilters);
    }
  );
});
