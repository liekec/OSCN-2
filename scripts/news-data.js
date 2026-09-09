// scripts/news-data.js

// prefix = "" wanneer je al in de pages/ map zit (bv. news.html)
// prefix = "pages/" wanneer je op de index.html zit (hoofdmap)
function renderNewsCard(article, imgPrefix, linkPrefix) {
  return `
    <article class="news-card">
      <div class="news-thumb" style="background-image:url('${imgPrefix}${article.image}'); background-size:cover; background-position:center;"></div>
      <div class="news-body">
        <div class="news-date">${article.date}</div>
        <h3>${article.title}</h3>
        <p>${article.excerpt}</p>
        <a href="${linkPrefix}article.html?slug=${article.slug}">Read more →</a>
      </div>
    </article>
  `;
} 

const newsArticles = [
  {slug: "Open-Science-Week-2026",
    date: "September 9, 2026",
    title: "Celebrate the National Open Science Week with OSCN!",
    excerpt: "The Open Science Community Nijmegen (OSCN) is organising two events on 17 September as part of the national Open Science Week.",
    image: "images/news/Landscape poster1.png",
    content: `<p>The Open Science Community Nijmegen (OSCN) is organising two events on 17 September as part of the national Open Science Week.
Coding Café – Why metadata matters and how to automate its creation
11:30–12:30 | [location]
This hands-on session explores how researchers can automate the creation of metadata for their research software. After a short introduction to why metadata matters and what information is needed, participants will learn how to use a tool for automated metadata creation and try it out through a hands-on code-along using their own project. Free pizza will be provided afterwards. You can register here.
Community Café – Meet the faces of OSCN
16:00–18:00 | EOS 01.220 & The Yard
The afternoon programme brings together researchers, support staff, educators and students from HAN, Radboudumc, Radboud University and MPI. Through short lightning pitches, community members will share their Open Science initiatives, experiences and tips. A great chance to get to know the people behind Open Science in Nijmegen! The pitches will be followed by an informal networking session with free drinks and bites at The Yard.                      You can register here.
Everyone interested in Open Science is welcome. Registration is required for both events for catering purposes.
<p>`
    },
  {

    
    slug: "meetup-open-education",
    date: "June 10, 2026",
    title: "Meet-up SIG Open Education: Connecting the Opens",
    excerpt: "Open Science and Open Education are both growing, but are they also growing towards one another?",
    image: "images/news/open_education.png",
    content: `<p>Open Science and Open Education are both growing, but are they also growing towards one another? In this SIG Open Education Meeting (HAN, RU, Radboudumc), we explore where this separation comes from, what is currently happening around openness in higher education, and where opportunities lie to connect both movements.

Open Science and Open Education
At their core, Open Science and Open Education are closely related movements: both aim to increase the accessibility, transparency and societal impact of knowledge. In practice, however, they have often developed separately, with their own networks, infrastructures, incentives and policy frameworks. This historical separation has led to a certain degree of siloing, meaning that opportunities to connect education and research, both in content and organisation, are still not being fully utilised.

By looking at these movements more in relation to one another, opportunities arise to strengthen both sides. Open educational resources can directly benefit from research results and data, while educational practices can help researchers translate their work into greater societal and educational impact. In addition, the growing attention to recognition and rewards provides an important starting point for making open contributions visible and meaningfully incorporating them into the career paths of both educators and researchers.

During the session
In this session, we will explore how this separation emerged, what is currently happening in higher education around openness, and where the greatest opportunities for connection can be found. We will pay attention to themes such as shared infrastructures, open knowledge practices, professional development and new forms of recognising and rewarding open work.

The central question is how we can connect Open Science and Open Education into one coherent ecosystem in which education and research strengthen one another structurally, rather than existing alongside each other in parallel.

This session is intended for anyone with an interest in, and some familiarity with, Open Science and Open Education.

Speakers
This SIG Open Education Meeting is organised by HAN University of Applied Sciences, Radboud University and Radboudumc. The speakers are: Nicolai van der Woert (RU), Marijn Post (HAN), The speaker representing Open Science Nijmegen will be announced at a later date.

Date: 2 July 2026

Time: 16:00–17:00

Location: Kapittelweg 33, Nijmegen, room B1.05

Register here</p>`
  },
  {
    slug: "barcamp-2026",
    date: "May 26, 2026",
    title: "OSC-NL Barcamp + National Open Science Festival 2026",
    excerpt: "This October, Delft becomes the meeting place for the Dutch open science community.",
    image: "images/news/barcamp-2026.jpg",
    content: `<p>This October, Delft will become the meeting place for the Dutch open science community with two inspiring back-to-back events:

📅 Tuesday 13 October 2026
OSC-NL Barcamp 2026
A community-driven day of open science, peer exchange, collaboration, and pizza 🍕. The Barcamp has no predetermined programme: participants propose and shape the sessions together on the spot. From newcomers to experienced practitioners, everyone is welcome to join the conversation and contribute ideas.
🎟 Register here: https://osc-international.com/osc-nl-barcamp-2026/

📅 Wednesday 14 October 2026
National Open Science Festival 2026
Hosted this year together with Delft University of Technology, the festival is the place to be for anyone working on or interested in open science. Expect inspiring sessions, practical examples, networking opportunities, and discussions with researchers, support staff, and open science communities from across the Netherlands.
🎟 Register for free or submit a contribution: https://lnkd.in/ekMWAspu

Whether you join one or both events, these two days offer a fantastic opportunity to connect and help shape the future of open science together.

We hope to see many of you in Delft this October!</p>`
  },
  {
    slug: "turning-the-tide",
    date: "April 16, 2026",
    title: "Turning the Tide: Stories of Open Science",
    excerpt: "Researchers share personal turning points that led them toward open science.",
    image: "images/news/turning-the-tide.jpg",
    content: `
      <p>During the Open Science Retreat in Schoorl, a project was developed titled "Turning the Tide: Stories of Open Science." In this short film, featuring seven people with different roles in academia, researchers share their personal turning points. These are the moments that led them toward open science. They also reflect on what openness in research means in their own work.</p>
      <p>This film aims to empower others to also start their journey, which might be feeling like going against the tide. But maybe you are riding a new wave, together with more and more of your peers?</p>
      <p>You can watch the short film here: <a href="https://video.edu.nl/w/2xfukHs4FUbM7U71MttgQ3" target="_blank" rel="noopener noreferrer">https://video.edu.nl/w/2xfukHs4FUbM7U71MttgQ3</a></p>
      <p>OSCN is sharing this with credit to Nami Sunami and all contributors involved in this film!</p>
    `
  }
];
