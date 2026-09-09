// scripts/news-data.js

function renderNewsCard(article) {
  return `
    <article class="news-card reveal">
      <div class="news-thumb" style="background-image:url('${article.image}'); background-size:cover; background-position:center;"></div>
      <div class="news-body">
        <div class="news-date">${article.date}</div>
        <h3>${article.title}</h3>
        <p>${article.excerpt}</p>
        <a href="pages/article.html?slug=${article.slug}">Read more →</a>
      </div>
    </article>
  `;
}

const newsArticles = [
  {
    slug: "turning-the-tide",
    date: "April 16, 2026",
    title: "Turning the Tide: Stories of Open Science",
    excerpt: "Researchers share personal turning points that led them toward open science.",
    image: "../images/news/turning-the-tide.jpg",
    content: `<p>During the Open Science Retreat in Schoorl, a project was developed titled "Turning the Tide: Stories of Open Science." In this short film, featuring seven people with different roles in academia, researchers share their personal turning points. These are the moments that led them toward open science. They also reflect on what openness in research means in their own work.</p>
      <p>This film aims to empower others to also start their journey, which might be feeling like going against the tide. But maybe you are riding a new wave, together with more and more of your peers?</p>
      <p>You can watch the short film here: <a href="https://video.edu.nl/w/2xfukHs4FUbM7U71MttgQ3" target="_blank" rel="noopener noreferrer">https://video.edu.nl/w/2xfukHs4FUbM7U71MttgQ3</a></p>
      <p>OSCN is sharing this with credit to Nami Sunami and all contributors involved in this film!</p>
    `
  }
];
