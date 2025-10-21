const searchInput = document.getElementById('searchInput');
const modelCards = document.querySelectorAll('.model-card');

searchInput.addEventListener('keyup', () => {
  const query = searchInput.value.toLowerCase();
  modelCards.forEach(card => {
    const name = card.querySelector('h3').textContent.toLowerCase();
    card.style.display = name.includes(query) ? 'block' : 'none';
  });
});

function filterCategory(category) {
  modelCards.forEach(card => {
    if (category === 'all' || card.dataset.category === category) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

