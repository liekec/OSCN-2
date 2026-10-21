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
slug: "Radboud-university-on-codeberg",
date: "October 21, 2026",
title: "Radboud University on Codeberg!",
excerpt: "Looking for an alternative for github? Than Codeberg might be something for you. Radboud University’s Digital Competence Centre has created an organisation on Codeberg, where you can develop and share your research software.",
image: "images/news/Codeberg_logo.png",
content: `
  <div class="artikel-tekst">
  <p>Earlier this year GitHub <a href="https://github.blog/news-insights/company-news/updates-to-github-copilot-interaction-data-usage-policy/" target="_blank" rel="noopener">decided</a> to use all of your interactions with Copilot to train their AI models, unless you opt out (or are a Copilot Business or Enterprise user). This means that even if you use a private repository, Copilot will use your input and the code context of said repo for training purposes. This, together with worries and heightened awareness about <a href="https://www.ru.nl/medewerkers/nieuws/radboud-universiteit-start-programma-digitale-soevereiniteit" target="_blank" rel="noopener">digital sovereignty</a>, has led us to explore alternatives.</p>

  <p>Codeberg, a non-profit company based in the EU, has shown a lot of promise. Radboud University’s Digital Competence Centre has therefore created a <a href="https://codeberg.org/radboud-university-nijmegen" target="_blank" rel="noopener">Radboud University organisation on Codeberg</a>! Here you can develop and share your research software and other relevant code and code-related matters. There is documentation to <a href="https://codeberg.org/radboud-university-nijmegen/fair4rs-toolbox/src/branch/main/getting_started.md" target="_blank" rel="noopener">get started</a> and one can easily create repos or migrate existing ones from GitHub. It also tells you <a href="https://codeberg.org/radboud-university-nijmegen#why-not-github-or-gitlab" target="_blank" rel="noopener">how to opt out</a> of GitHub's AI training ;)</p>

  <p>So do have a look and join us! For questions, contact Linus Band (linus.band@ru.nl)🦉💻</p>
  </div>
`
},
   
{
  slug: "looking-back-open-science-week",
  date: "October 15, 2026",
  title: "Looking back: Open Science Week in Nijmegen",
  excerpt: "Two events, one community: a hands-on Coding Café and a Community Café full of curious people and enthusiasm for Open Science.",
  image: "images/news/open-science-week-1.png",
  content: `
    <p>What better way to celebrate Open Science Week than by bringing the community together? On September 17, we did exactly that with two OSCN events in Nijmegen: a hands-on Coding Café in the morning and a Community Café in the afternoon. Two very different events, but with one thing in common: lots of curious people and plenty of enthusiasm for Open Science.</p>

    <h3>CODING CAFÉ</h3>
    <p>We started the day with a Coding Café on metadata. A Coding Café is a format where researchers come together to code, debug, learn and share their experiences. It’s a space where knowledge can be gained, best practices can be exchanged, and pizzas can be shared. In this Coding Café, Charlie Greene (research software engineer at VU) talked about metadata and autoMETAte, a tool that automatically creates and populates your metadata file. We ended the session with a lot of pizza, sponsored by the eScience Center.</p>
    <p>Because so much of what we learn comes from sharing our experiences with others, we believe that a Coding Café will be a great way to build and strengthen our community. That is why OSCN will adopt this format. So, if you missed this one: don’t worry, more Coding Cafés are coming! We would love your input to help shape what these events can look like. So, please let us know what topics you would like to see being covered by one of our Coding Cafés. We’re welcoming ideas for starters (e.g., how to start with GitHub) as well as more advanced topics. Anything is possible :D Also, please reach out to us if you would like to be involved in the organization of these Coding Cafés.</p>

    <h3>COMMUNITY CAFÉ</h3>
    <p>In the afternoon, we swapped our laptops for presentations, drinks, and conversations at the OSCN Community Café. Six speakers from across our community shared how they put Open Science into practice. Each speaker had just five minutes to present their work and experiences, which, as we quickly discovered, is not nearly as much time as it sounds! ⏱️</p>

    <p><strong>The Speakers:</strong></p>
    <ul>
      <li>Kris Bevelander, Radboud umc — Citizen Science</li>
      <li>Alex Lehr, RU — Open Education</li>
      <li>Meng-Yun (Henrik) Wang, MPI — Replication in Global Collaborations</li>
      <li>Julian Kosciessa, RU — Open Source Software</li>
      <li>Maximiliano Cenci, Radboud umc — Diamond Open Access</li>
      <li>Heleen Pennings, HAN — Reproducibility and Replicability</li>
    </ul>

    <p>From citizen science to open source software and from replication to open education, the talks showed just how many different ways there are to make research and education more open. Afterwards, over drinks and bites at The Yard, people from different institutions and disciplines met and exchanged ideas.</p>
    <p>Couldn’t make it to the Community Café, or want to revisit one of the talks? We’ve got you covered! The speakers have kindly shared their presentations, so you can catch up on the talks and explore some of the Open Science work happening across our community. Take a look at the slides of the presentations:</strong><br>• <a href='../PDF/Events/Open%20Diamond.pdf' target='_blank'>Max Cenci – Open Diamond</a><br>• <a href='../PDF/Events/Julian%20Kosciessa_Open%20Source%20Software.pdf' target='_blank'>Julian Kosciessa – Open Source Software</a><br>• <a href='../PDF/Events/Mengyun%20Wang_Global%20Collaborations.pdf' target='_blank'>Mengyun Wang – Global Collaborations</a><br>• <a href='../PDF/Events/Alex%20Lehr_Open%20Education.pdf' target='_blank'>Alex Lehr – Open Education</a>"</p>

    <p>A big thank you to everyone who joined us, to all our speakers for sharing their work and experiences, and to the eScience Center for collaborating with us on the Coding Café.</p>
  `
},
   
{
  slug: "open-science-week",
  date: "September 10, 2026",
  title: "Celebrate Open Science Week with OSCN!",
  excerpt: "Open Science and Open Education are both growing, but are they also growing towards one another?",
  image: "/images/news/Landscape poster1.png",
  content: `
    <p>On behalf of the OSCN organising team, we are happy to invite you to join us in celebrating National Open Science Week!</p>
    <p>To celebrate together as a community, we’ve organised two special events on Thursday, September 17. We’re excited to finally share them with you – you can find more information below.</p>
    <p>Both events are open to members and non-members, so feel free to bring along a colleague or friend who might be interested as well. We’d especially love to see as many of you as possible at our Community Café in the afternoon – a great opportunity to meet, celebrate, and connect with others who are passionate about Open Science in Nijmegen.</p>
    <p>We look forward to celebrating Open Science Week with you!</p>

    <h3>CODING CAFÉ – METADATA</h3>
    <p><strong>11:30–12:30 | EOS N 00.330</strong></p>
    <p>Metadata helps others find, understand, and reuse your research software, and can even help your work get more citations. But creating metadata can also feel like yet another administrative task on your to-do list.</p>
    <p>During this hands-on Coding Café, we’ll explore why metadata matters, what information you need, and how you can automate its creation. After a short introduction and demonstration of the tool, we’ll get hands-on with a code-along so you can try it out with your own research software project.</p>
    <p>So bring your own laptop! No need to be a metadata expert – just bring your project and your curiosity.</p>
    <p>And of course, there will be free pizza afterwards 🍕</p>
    <p>This event is sponsored by and organised in collaboration with the eScience Center. Registration is required for catering purposes.</p>

    <h3>COMMUNITY CAFÉ</h3>
    <p><strong>16:00–18:00 | EOS 01.220 & The Yard</strong></p>
    <p>Who are the people behind Open Science in Nijmegen, and what are they working on?</p>
    <p>During our Community Café, community members from HAN, Radboudumc, Radboud University, and MPI will take the stage for short presentations. They’ll share their Open Science initiatives, experiences, and tips – giving you a chance to discover what others are doing and meet the people behind Open Science in our community.</p>
    <p>After the pitches (approximately around 16:45), we’ll move to The Yard for free drinks, bites, and plenty of time to connect with colleagues.</p>
    <p>Everyone is welcome!</p>
  `
},
   
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
