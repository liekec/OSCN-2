let allMembers = [];

fetch("https://opensheet.elk.sh/1-xLa6VPYhSVbPR40bHJCF8nnQgSGWAOa3sb4yjjVfkU/1")
.then(response => response.json())
.then(data => {
  allMembers = data.map(member => ({
    firstName: member.Name,
    lastName: member["Last name"],
    email: member["E-mail"],
    position: member.Position,
    institute: member.Institute,
    unit: member["Faculty / Department"],
    expertise: member.Expertise
      ? member.Expertise.split(",").map(item => item.trim())
      : [],
    interest: member.Interest
      ? member.Interest.split(",").map(item => item.trim())
      : [],
    photo: member["Profile photo"]
      ? "../images/members/" + member["Profile photo"]
      : "../images/members/default-profile.png"
  }));
  displayMembers(allMembers);
});

function displayMembers(members) {
  const container = document.getElementById("membersGrid");
  container.innerHTML = "";

  if (members.length === 0) {
    container.innerHTML = '<p class="members-empty">No members match your search.</p>';
    return;
  }

  members.forEach(member => {
    const card = document.createElement("div");
    card.className = "member-card";
    card.innerHTML = `
      <img class="member-photo" src="${member.photo}" alt="${member.firstName} ${member.lastName}">
      <h3>${member.firstName} ${member.lastName}</h3>
      <p class="member-position"><strong>Position:</strong><br>${member.position}</p>
      <p><strong>Institute:</strong><br>${member.institute}</p>
      <p><strong>Faculty / Department:</strong><br>${member.unit || "Not specified"}</p>
      <h4>Expertise</h4>
      <div class="tags">
        ${member.expertise.length
          ? member.expertise.map(item => `<span>${item}</span>`).join("")
          : "<span>No expertise listed</span>"
        }
      </div>
      <h4>Interest</h4>
      <div class="tags">
        ${member.interest.length
          ? member.interest.map(item => `<span>${item}</span>`).join("")
          : "<span>No interests listed</span>"
        }
      </div>
      <p class="member-email">✉ ${member.email}</p>
    `;
    container.appendChild(card);
  });
}

function filterMembers() {
  const search = document.getElementById("search-input").value.toLowerCase();
  const institute = document.getElementById("institute-filter").value;
  const position = document.getElementById("position-filter").value;
  const expertise = document.getElementById("expertise-filter").value;
  const interest = document.getElementById("interest-filter").value;

  const filtered = allMembers.filter(member => {
    return (
      `${member.firstName} ${member.lastName}`.toLowerCase().includes(search) &&
      (institute === "" || member.institute === institute) &&
      (position === "" || member.position === position) &&
      (expertise === "" || member.expertise.includes(expertise)) &&
      (interest === "" || member.interest.includes(interest))
    );
  });

  displayMembers(filtered);
}

document.getElementById("search-input").addEventListener("input", filterMembers);
document.getElementById("institute-filter").addEventListener("change", filterMembers);
document.getElementById("position-filter").addEventListener("change", filterMembers);
document.getElementById("expertise-filter").addEventListener("change", filterMembers);
document.getElementById("interest-filter").addEventListener("change", filterMembers);
