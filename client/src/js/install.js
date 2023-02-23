const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
// TODO: Add an event handler function for the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

function handleBeforeInstallPrompt(event) {
  window.deferredPrompt = event;
  const butInstall = document.querySelector('#butInstall');
  if (butInstall) {
    butInstall.style.visibility = 'visible';
  }
}

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {}); {
    if (window.deferredPrompt) {
      window.deferredPrompt.prompt();
      const { outcome } = await window.deferredPrompt.userChoice;
      console.log(`User response to the install prompt: ${outcome}`);
      window.deferredPrompt = null;
    }
  };

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    window.defferedPrompt = null;
});
