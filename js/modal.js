export function initModal() {
  const modal = document.getElementById('modal');
  const closeBtn = document.getElementById('closeModal');
  const overlay = modal.querySelector('.modal-overlay');

  function close() {
    modal.classList.add('hidden');
  }

  closeBtn.addEventListener('click', close);
  overlay.addEventListener('click', close);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });

  window.openModal = (html) => {
    document.getElementById('modalContent').innerHTML = html;
    modal.classList.remove('hidden');
  };
}
