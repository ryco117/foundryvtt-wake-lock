/**
 * Acquire and maintain a screen wake lock for the duration of the game session,
 * preventing the display from sleeping while players are active. Re-acquires the
 * lock automatically whenever the page regains visibility. Browsers that do not
 * support the Wake Lock API are unaffected.
 */
(async function activateWakeLock() {
  if ( !("wakeLock" in navigator) ) {
    console.log("Foundry VTT | Screen Wake Lock API not supported in this browser.");
    return;
  }
  if ( !window.isSecureContext ) {
    console.warn("Foundry VTT | Screen Wake Lock requires a secure context (HTTPS). Wake lock disabled.");
    return;
  }
  console.log("Foundry VTT | Screen Wake Lock API supported. Attempting to acquire lock...");
  const acquire = async () => {
    try {
      const sentinel = await navigator.wakeLock.request("screen");
      console.log("Foundry VTT | Screen wake lock acquired.");
      sentinel.addEventListener("release", () => {
        console.log(`Foundry VTT | Screen wake lock released (visibilityState: ${document.visibilityState}).`);
        if ( document.visibilityState === "visible" ) acquire();
      });
    } catch(err) {
      console.warn(`Foundry VTT | Failed to acquire screen wake lock: ${err.name}: ${err.message}`);
    }
  };
  document.addEventListener("visibilitychange", () => {
    if ( document.visibilityState === "visible" ) acquire();
  });
  await acquire();
})();
