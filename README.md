# Screen Wake Lock Module

Requests a Screen Wake Lock so players' screens don't sleep during sessions.
Browsers that don't support the Wake Lock API are unaffected.

## Requirements

- **HTTPS (secure context)** — the Wake Lock API requires the page to be served
  over HTTPS or via `localhost`. Plain `http://` LAN addresses will not work.
  Check the browser console if the lock is not being acquired.

## Console messages

Open the browser console (F12 → Console) to verify:

| Message | Meaning |
|---------|---------|
| `Screen wake lock acquired.` | Working correctly |
| `Screen Wake Lock requires a secure context (HTTPS).` | Serve over HTTPS or `localhost` |
| `Screen Wake Lock API not supported in this browser.` | Browser lacks support (e.g. Firefox, older Safari) — no action needed |
