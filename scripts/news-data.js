// scripts/news-data.js

// prefix = "" wanneer je al in de pages/ map zit (bv. news.html)
// prefix = "pages/" wanneer je op de index.html zit (hoofdmap)
function renderNewsCard(article, imgPrefix, linkPrefix) {
  return `
    <a href="${linkPrefix}article.html?slug=${article.slug}" class="news-card" style="display:block;">
      <div class="news-thumb" style="background-image:url('${imgPrefix}${article.image}'); background-size:cover; background-position:center;"></div>
      <div class="news-body">
        <div class="news-date">${article.date}</div>
        <h3>${article.title}</h3>
        <p>${article.excerpt}</p>
        <span>Read more →</span>
      </div>
    </a>
  `;
}

const newsArticles = [
  {
    slug: "Open-Science-Week-2026",
    date: "September 9, 2026",
    title: "Celebrate the National Open Science Week with OSCN!",
    excerpt: "The Open Science Community Nijmegen (OSCN) is organising two events on 17 September as part of the national Open Science Week.",
    image: "images/news/Landscape poster1.png",
    content: `
      <p>The Open Science Community Nijmegen (OSCN) is organising two events on 17 September as part of the national Open Science Week.</p>

      <p><strong>Coding Café – Why metadata matters and how to automate its creation</strong><br>
      11:30–12:30 | EOS N 00.330</p>

      <p>This hands-on session explores how researchers can automate the creation of metadata for their research software. After a short introduction to why metadata matters and what information is needed, participants will learn how to use a tool for automated metadata creation and try it out through a hands-on code-along using their own project. Free pizza will be provided afterwards. You can <a href="https://docs.google.com/forms/d/e/1FAIpQLSdzVWbI4uCp83ds8fuC-eqEjRmE1VBqZDdBq9Q28mbjVXg7YQ/viewform?usp=header" target="_blank" rel="noopener noreferrer">register here</a>.</p>

      <p><strong>Community Café – Meet the faces of OSCN</strong><br>
      16:00–18:00 | EOS 01.220 & The Yard</p>

      <p>The afternoon programme brings together researchers, support staff, educators and students from HAN, Radboudumc, Radboud University and MPI. Through short lightning pitches, community members will share their Open Science initiatives, experiences and tips. A great chance to get to know the people behind Open Science in Nijmegen! The pitches will be followed by an informal networking session with free drinks and bites at The Yard. You can <a href="https://docs.google.com/forms/d/e/1FAIpQLSdqv1ygQ6mtKCzsEr-V3jOzXFKrXrdJDDCeRW96HcIGb8vUZg/viewform?usp=header" target="_blank" rel="noopener noreferrer">register here</a>.</p>

      <p>Everyone interested in Open Science is welcome.</p>

      <p>Registration is required for both events for catering purposes.<br>
      Coding Café: <a href="https://docs.google.com/forms/d/e/1FAIpQLSdzVWbI4uCp83ds8fuC-eqEjRmE1VBqZDdBq9Q28mbjVXg7YQ/viewform?usp=header" target="_blank" rel="noopener noreferrer">Register here</a><br>
      Community Café: <a href="https://docs.google.com/forms/d/e/1FAIpQLSdqv1ygQ6mtKCzsEr-V3jOzXFKrXrdJDDCeRW96HcIGb8vUZg/viewform?usp=header" target="_blank" rel="noopener noreferrer">Register here</a></p>

      <img src="images/news/Landscape poster1.png" alt="Open Science Week 2026 poster" style="width:100%; border-radius:12px; margin-top:24px;">
    `
  },
  {

    
    slug: "meetup-open-education",
    date: "June 10, 2026",
    title: "Meet-up SIG Open Education: Connecting the Opens",
    excerpt: "Open Science and Open Education are both growing, but are they also growing towards one another?",
    image: "images/news/open_education.png",
    content: content: `
  <p>Open Science and Open Education are both growing, but are they also growing towards one another? In this SIG Open Education Meeting (HAN, RU, Radboudumc), we explore where this separation comes from, what is currently happening around openness in higher education, and where opportunities lie to connect both movements.</p>
  <p><strong>Open Science and Open Education</strong><br>
  At their core, Open Science and Open Education are closely related movements: both aim to increase the accessibility, transparency and societal impact of knowledge. In practice, however, they have often developed separately, with their own networks, infrastructures, incentives and policy frameworks. This historical separation has led to a certain degree of siloing, meaning that opportunities to connect education and research, both in content and organisation, are still not being fully utilised.</p>
  <p>By looking at these movements more in relation to one another, opportunities arise to strengthen both sides. Open educational resources can directly benefit from research results and data, while educational practices can help researchers translate their work into greater societal and educational impact. In addition, the growing attention to recognition and rewards provides an important starting point for making open contributions visible and meaningfully incorporating them into the career paths of both educators and researchers.</p>
  <p><strong>During the session</strong><br>
  In this session, we will explore how this separation emerged, what is currently happening in higher education around openness, and where the greatest opportunities for connection can be found. We will pay attention to themes such as shared infrastructures, open knowledge practices, professional development and new forms of recognising and rewarding open work.</p>
  <p>The central question is how we can connect Open Science and Open Education into one coherent ecosystem in which education and research strengthen one another structurally, rather than existing alongside each other in parallel.</p>
  <p>This session is intended for anyone with an interest in, and some familiarity with, Open Science and Open Education.</p>
  <p><strong>Speakers</strong><br>
  This SIG Open Education Meeting is organised by HAN University of Applied Sciences, Radboud University and Radboudumc. The speakers are: Nicolai van der Woert (RU), Marijn Post (HAN). The speaker representing Open Science Nijmegen will be announced at a later date.</p>
  <p><strong>Date:</strong> 2 July 2026<br>
  <strong>Time:</strong> 16:00–17:00<br>
  <strong>Location:</strong> Kapittelweg 33, Nijmegen, room B1.05</p>
  <p><a href="#" target="_blank" rel="noopener noreferrer">Register here</a></p>
`,
  },
  {
    slug: "barcamp-2026",
    date: "May 26, 2026",
    title: "OSC-NL Barcamp + National Open Science Festival 2026",
    excerpt: "This October, Delft becomes the meeting place for the Dutch open science community.",
    image: "images/news/barcamp-2026.jpg",
    content: content: `
  <p>This October, Delft will become the meeting place for the Dutch open science community with two inspiring back-to-back events:</p>
  <p>📅 <strong>Tuesday 13 October 2026</strong><br>
  <strong>OSC-NL Barcamp 2026</strong><br>
  A community-driven day of open science, peer exchange, collaboration, and pizza 🍕. The Barcamp has no predetermined programme: participants propose and shape the sessions together on the spot. From newcomers to experienced practitioners, everyone is welcome to join the conversation and contribute ideas.<br>
  🎟 Register here: <a href="https://osc-international.com/osc-nl-barcamp-2026/" target="_blank" rel="noopener noreferrer">https://osc-international.com/osc-nl-barcamp-2026/</a></p>
  <p>📅 <strong>Wednesday 14 October 2026</strong><br>
  <strong>National Open Science Festival 2026</strong><br>
  Hosted this year together with Delft University of Technology, the festival is the place to be for anyone working on or interested in open science. Expect inspiring sessions, practical examples, networking opportunities, and discussions with researchers, support staff, and open science communities from across the Netherlands.<br>
  🎟 Register for free or submit a contribution: <a href="https://lnkd.in/ekMWAspu" target="_blank" rel="noopener noreferrer">https://lnkd.in/ekMWAspu</a></p>
  <p>Whether you join one or both events, these two days offer a fantastic opportunity to connect and help shape the future of open science together.</p>
  <p>We hope to see many of you in Delft this October!</p>
`,
  }
];
