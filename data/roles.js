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
 *   color     — accent color class: "ancient" | "science" | "art" | "nature" | "neutral"
 *   dataFile  — filename in /data/exhibits/ (without .js)
 */

const ROLES = [
  {
    id:       "lawyer",
    name:     "Lawyer | محامى",
    icon:     "⚖️",
    color:    "ancient",
    dataFile: "lawyer",
  },
  {
    id:       "artist",
    name:     "Artist | فنان",
    icon:     "🎨",
    color:    "art",
    dataFile: "artist",
  },
  {
    id:       "programmer",
    name:     "Programmer | مهندس كمبيوتر",
    icon:     "💻",
    color:    "science",
    dataFile: "programmer",
  },
  {
    id:       "architect",
    name:     "Architect | مهندس معمارى",
    icon:     "🏗️",
    color:    "neutral",
    dataFile: "architect",
  },
];
