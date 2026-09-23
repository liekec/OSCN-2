/* ============================================================
   OSCN — news data + card renderer
   Used by: index.html      → renderNewsCard(a, "", "pages/")
            pages/news.html → renderNewsCard(a, "../", "")
            pages/article.html → reads newsArticles directly, matches by ?slug=
   ============================================================ */

// To add a new article: copy one of the objects below, give it a
// unique "slug" (used in the URL, e.g. article.html?slug=your-slug),
// and fill in date / title / excerpt / content. "image" is optional
// — path relative to the site root, e.g. "images/news/my-photo.jpg".
// Leave "image" out (or empty) to fall back to the plain gradient thumb.
const newsArticles = [
  {
    slug: "sig-open-education",
    date: "June 10, 2026",
    title: "Meet-up SIG Open Education: Connecting the Opens",
    excerpt: "Open Science and Open Education are both growing, but are they also growing towards one another?",
    image: "images/news/open_education.png",
    content: `
      <p>Open Science and Open Education are both growing, but are they also growing towards one another? In this SIG Open Education Meeting (HAN, RU, Radboudumc), we explore where this separation comes from, what is currently happening around openness in higher education, and where opportunities lie to connect both movements.</p>

      <h3>Open Science and Open Education</h3>
      <p>At their core, Open Science and Open Education are closely related movements: both aim to increase the accessibility, transparency and societal impact of knowledge. In practice, however, they have often developed separately, with their own networks, infrastructures, incentives and policy frameworks. This historical separation has led to a certain degree of siloing, meaning that opportunities to connect education and research, both in content and organisation, are still not being fully utilised.</p>
      <p>By looking at these movements more in relation to one another, opportunities arise to strengthen both sides. Open educational resources can directly benefit from research results and data, while educational practices can help researchers translate their work into greater societal and educational impact. In addition, the growing attention to recognition and rewards provides an important starting point for making open contributions visible and meaningfully incorporating them into the career paths of both educators and researchers.</p>

      <h3>During the session</h3>
      <p>In this session, we will explore how this separation emerged, what is currently happening in higher education around openness, and where the greatest opportunities for connection can be found. We will pay attention to themes such as shared infrastructures, open knowledge practices, professional development and new forms of recognising and rewarding open work.</p>
      <p>The central question is how we can connect Open Science and Open Education into one coherent ecosystem in which education and research strengthen one another structurally, rather than existing alongside each other in parallel.</p>
      <p>This session is intended for anyone with an interest in, and some familiarity with, Open Science and Open Education.</p>

      <h3>Speakers</h3>
      <p>This SIG Open Education Meeting is organised by HAN University of Applied Sciences, Radboud University and Radboudumc. The speakers are: Nicolai van der Woert (RU), Marijn Post (HAN). The speaker representing Open Science Nijmegen will be announced at a later date.</p>

      <p><strong>Date:</strong> 2 July 2026<br>
      <strong>Time:</strong> 16:00–17:00<br>
      <strong>Location:</strong> Kapittelweg 33, Nijmegen, room B1.05</p>

      <p>Register <a href="https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=t-dzXeGzAE2zAwVhQLKjtEVFI-kFpotOoQ2Gk3drR5NUNEI0MEo1TFNZVUwxNlROTU9QNVRQV1FYSy4u" target="_blank" rel="noopener noreferrer">here</a>.</p>
    `
  },
  {
    slug: "oscnl-barcamp-festival-2026",
    date: "May 26, 2026",
    title: "OSC-NL Barcamp + National Open Science Festival 2026",
    excerpt: "This October, Delft will become the meeting place for the Dutch open science community — two inspiring back-to-back events.",
    image: "images/news/barcamp-2026.jpg",
    content: `
      <p>This October, Delft will become the meeting place for the Dutch open science community with two inspiring back-to-back events:</p>

      <h3>Tuesday 13 October 2026 — OSC-NL Barcamp 2026</h3>
      <p>A community-driven day of open science, peer exchange, collaboration, and pizza. The Barcamp has no predetermined programme: participants propose and shape the sessions together on the spot. From newcomers to experienced practitioners, everyone is welcome to join the conversation and contribute ideas.</p>
      <p>🎟 Register here: <a href="https://osc-international.com/osc-nl-barcamp-2026/" target="_blank" rel="noopener noreferrer">https://osc-international.com/osc-nl-barcamp-2026/</a></p>

      <h3>Wednesday 14 October 2026 — National Open Science Festival 2026</h3>
      <p>Hosted this year together with Delft University of Technology, the festival is the place to be for anyone working on or interested in open science. Expect inspiring sessions, practical examples, networking opportunities, and discussions with researchers, support staff, and open science communities from across the Netherlands.</p>
      <p>🎟 Register for free or submit a contribution: <a href="https://lnkd.in/ekMWAspu" target="_blank" rel="noopener noreferrer">https://lnkd.in/ekMWAspu</a></p>

      <p>Whether you join one or both events, these two days offer a fantastic opportunity to connect and help shape the future of open science together.</p>
      <p>We hope to see many of you in Delft this October!</p>
    `
  },
  {
    slug: "turning-the-tide",
    date: "April 16, 2026",
    title: "Turning the Tide: Stories of Open Science",
    excerpt: "In this short film, seven people with different roles in academia share the personal turning points that led them toward open science.",
    image: "images/news/turning-the-tide.jpg",
    content: `
      <p>During the Open Science Retreat in Schoorl, a project was developed titled "Turning the Tide: Stories of Open Science." In this short film, featuring seven people with different roles in academia, researchers share their personal turning points. These are the moments that led them toward open science. They also reflect on what openness in research means in their own work.</p>
      <p>This film aims to empower others to also start their journey, which might be feeling like going against the tide. But maybe you are riding a new wave, together with more and more of your peers?</p>
      <p>You can watch the short film here: <a href="https://video.edu.nl/w/2xfukHs4FUbM7U71MttgQ3" target="_blank" rel="noopener noreferrer">https://video.edu.nl/w/2xfukHs4FUbM7U71MttgQ3</a></p>
      <p>OSCN is sharing this with credit to Nami Sunami and all contributors involved in this film!</p>
    `
  }
];

// rootPrefix: path back to the site root ("" on index.html, "../" on pages/news.html) — used for the image
// pagePrefix: path to the pages/ folder for internal links ("pages/" on index.html, "" on pages/news.html)
function renderNewsCard(article, rootPrefix, pagePrefix) {
  const thumb = article.image
    ? `<div class="news-thumb" style="background-image:url('${rootPrefix}${article.image}'); background-size:cover; background-position:center;"></div>`
    : `<div class="news-thumb"></div>`;

  return `
    <a class="news-card reveal is-visible" href="${pagePrefix}article.html?slug=${article.slug}">
      ${thumb}
      <div class="news-body">
        <div class="news-date">${article.date}</div>
        <h3>${article.title}</h3>
        <p>${article.excerpt}</p>
        <span class="continue-reading">Continue reading →</span>
      </div>
    </a>
  `;
}
