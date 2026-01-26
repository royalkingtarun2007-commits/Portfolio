import { initAnimations } from './animations.js';
import { initModal } from './modal.js';
import { loadProjects } from './projects.js';
import { setupUtilities } from './utils.js';

document.addEventListener('DOMContentLoaded', () => {
  initAnimations();
  initModal();
  loadProjects();
  setupUtilities();
});
