const book = document.getElementById('book');

function toggle(){
  const isOpen = book.dataset.open === 'true';
  book.dataset.open = String(!isOpen);
}

book.addEventListener('click', (e) => {
  if (e.target.closest('.page-link')) return;
  toggle();
});

book.addEventListener('keydown', (e) => {
  if ((e.key === 'Enter' || e.key === ' ') && !e.target.closest('.page-link')) {
    e.preventDefault();
    toggle();
  }
});