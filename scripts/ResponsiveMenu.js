const menuBtn = document.querySelector('.menu-btn');
menuBtn.addEventListener('click', () => {
  document.getElementById('menu-dialog').classList.add('open');
  document.body.style.minBlockSize = '100vh';
  document.body.style.overflow = 'hidden';
});

const closeBtn = document.querySelector('.close-btn');
const closeDialog = () => {
  document.getElementById('menu-dialog').classList.remove('open');
  document.body.style.minBlockSize = 'inherit';
  document.body.style.overflow = 'auto';
}

closeBtn.addEventListener('click', closeDialog);
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeDialog();
})
document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', closeDialog);
})
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    closeDialog();
  }
})