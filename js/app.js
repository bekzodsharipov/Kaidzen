const cards = document.querySelectorAll('.opinion__card');

cards.forEach(card => {
    card.addEventListener('click', () => {
        cards.forEach(c => {
            c.innerHTML = `<img class="opinion__images" src="/images/opinions/play.avif" alt="play icon">`;
        });
        card.innerHTML = `
      <iframe 
          width="100%" 
          height="100%" 
          src="https://www.youtube.com/embed/oa7TTcTc8Rc?autoplay=1" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowfullscreen>
      </iframe>
    `;
    });
});

document.querySelectorAll('.opinion__card').forEach(card => {
    const bgNum = card.getAttribute('data-bg'); // 1,2,3,...
    card.style.backgroundImage = `url('/images/opinions/${bgNum}.avif')`;
});
