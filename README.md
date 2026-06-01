# Screen Wake Lock Module

Requests a Screen Wake Lock so players' screens don't sleep during sessions.
Gracefully degrades — browsers that don't support the Wake Lock API are unaffected.

## Installation

The module directory should already be present at:

```
<FoundryVTT data path>/Data/modules/wake-lock/
├── module.json
├── wake-lock.mjs
└── README.md
```

If you need to recreate it after a data loss, copy these three files into a fresh
`wake-lock/` directory at the path above.

## Activation

1. Restart the FoundryVTT server if you just added the module files.
2. In the game: **Game Settings → Manage Modules**
3. Enable **"Screen Wake Lock"** and click **Save Module Settings**.

The setting is stored in the world database and persists across server restarts.

## After a FoundryVTT upgrade

The module directory lives outside the Foundry application folder, so upgrading
FoundryVTT will **not** overwrite it. After an upgrade:

1. Verify the module still appears under Manage Modules.
2. Re-enable it if it was deactivated.

No files need to be changed.

## Requirements

- **HTTPS (secure context)** — the Wake Lock API requires the page to be served
  over HTTPS or via `localhost`. Plain `http://` LAN addresses will not work.
  Check the browser console if the lock is not being acquired.

## Console messages

Open the browser console (F12 → Console) to verify:

| Message | Meaning |
|---|---|
| `Screen wake lock acquired.` | Working correctly |
| `Screen Wake Lock requires a secure context (HTTPS).` | Serve over HTTPS or `localhost` |
| `Screen Wake Lock API not supported in this browser.` | Browser lacks support (e.g. Firefox, older Safari) — no action needed |
