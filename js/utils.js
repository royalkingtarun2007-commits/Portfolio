export function setupUtilities() {
  window.scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  window.copyEmail = () => {
    navigator.clipboard.writeText('royalkingtarun.2007@gmail.com');
    alert('Email copied');
  };
}
