/**
 * ═══════════════════════════════════════════════
 * MUSEUM APP — ROLES CONFIGURATION
 * ═══════════════════════════════════════════════
 *
 * HOW TO ADD A ROLE:
 * 1. Add a new object to the ROLES array below.
 * 2. Create a matching data file in /data/exhibits/
 *    named exactly as the role's `dataFile` value.
 * 3. Add an <script> tag for it in index.html.
 *
 * FIELDS:
 *   id        — unique string key (no spaces)
 *   name      — display name shown on the card
 *   icon      — emoji icon for the card
 *   desc      — short description (1–2 lines)
 *   color     — accent color class: "ancient" | "science" | "art" | "nature" | "neutral"
 *   dataFile  — filename in /data/exhibits/ (without .js)
 */

const ROLES = [
  {
    id:       "guide",
    name:     "Tour Guide",
    icon:     "🎙️",
    desc:     "Exhibit info & visitor talking points",
    color:    "ancient",
    dataFile: "guide",
  },
  {
    id:       "security",
    name:     "Security",
    icon:     "🛡️",
    desc:     "Patrol zones, alerts & protocols",
    color:    "neutral",
    dataFile: "security",
  },
  {
    id:       "curator",
    name:     "Curator",
    icon:     "🏺",
    desc:     "Artifact records & condition notes",
    color:    "art",
    dataFile: "curator",
  },
  // ── ADD MORE ROLES BELOW ──────────────────────
  // {
  //   id:       "maintenance",
  //   name:     "Maintenance",
  //   icon:     "🔧",
  //   desc:     "Facility zones & task checklist",
  //   color:    "science",
  //   dataFile: "maintenance",
  // },
];