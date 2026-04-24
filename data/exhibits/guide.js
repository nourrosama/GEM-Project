/**
 * ═══════════════════════════════════════════════
 * ROLE DATA — TOUR GUIDE
 * ═══════════════════════════════════════════════
 *
 * This file defines what a Tour Guide sees in the app.
 * Replace all placeholder values with real museum data.
 *
 * STRUCTURE:
 *   ROLE_DATA["guide"] = {
 *     homeGreeting  — headline shown on the home screen
 *     homeTagline   — subtitle shown on the home screen
 *     sections      — list of content sections (shown as tabs or cards)
 *     exhibits      — gallery/exhibit entries
 *     artifacts     — individual artifact entries
 *   }
 */

ROLE_DATA["guide"] = {

  homeGreeting: "Welcome, <em>Tour Guide</em>",
  homeTagline:  "Your complete reference for today's exhibits and visitor talking points.",

  /* ── HIGHLIGHTS shown on home screen ── */
  highlights: [
    {
      id:    "ancient",
      icon:  "🏺",
      name:  "Ancient Civilizations Gallery",
      brief: "Today's featured exhibit — see talking points inside.",
    },
    {
      id:    "science",
      icon:  "🔭",
      name:  "Science & Innovation Gallery",
      brief: "Interactive stations open from 10am.",
    },
  ],

  /* ── EXHIBITS ──────────────────────────────────
   * Each exhibit card links to a detail page.
   * mapRoom: must match a room id in /views/map.js
   */
  exhibits: [
    {
      id:         "ancient",
      tag:        "Gallery 1",
      name:       "Ancient Civilizations",
      brief:      "Journey through Egypt, Mesopotamia, Greece, and Rome.",
      emoji:      "🏺",
      thumbClass: "thumb-ancient",
      mapRoom:    "room-ancient-gf",

      description: "[ REPLACE: Full description of the exhibit for guides. Include historical context, key themes, and what to emphasize to visitors. ]",

      facts: [
        { label: "Period",   val: "3000 BCE – 500 CE" },
        { label: "Artifacts",val: "[ number ]" },
        { label: "Location", val: "Wing A, Ground Floor" },
        { label: "Duration", val: "~45 min" },
      ],

      // Talking points — shown only in guide view
      talkingPoints: [
        "[ REPLACE: Key fact or story to share with visitors ]",
        "[ REPLACE: Another engaging point ]",
        "[ REPLACE: A surprising detail visitors love ]",
      ],
    },
    {
      id:         "science",
      tag:        "Gallery 2",
      name:       "Science & Innovation",
      brief:      "From early astronomy to modern computing.",
      emoji:      "🔭",
      thumbClass: "thumb-science",
      mapRoom:    "room-science-gf",

      description: "[ REPLACE: Full description for guides. ]",

      facts: [
        { label: "Era",         val: "Renaissance – Present" },
        { label: "Artifacts",   val: "[ number ]" },
        { label: "Location",    val: "Wing B, Ground Floor" },
        { label: "Interactive", val: "12 stations" },
      ],

      talkingPoints: [
        "[ REPLACE: Key talking point ]",
        "[ REPLACE: Key talking point ]",
      ],
    },
    // ── ADD MORE EXHIBITS BELOW ──────────────────
  ],

  /* ── ARTIFACTS ─────────────────────────────────
   * exhibitId must match an exhibit id above.
   */
  artifacts: [
    {
      id:          "mask",
      name:        "[ Artifact Name ]",
      origin:      "[ Origin, Date ]",
      exhibitId:   "ancient",
      emoji:       "👑",
      bg:          "thumb-ancient",
      description: "[ REPLACE: Description of the artifact for guide context. ]",
      facts: [
        { label: "Material", val: "[ material ]" },
        { label: "Origin",   val: "[ location ]" },
        { label: "Period",   val: "[ period ]" },
        { label: "Gallery",  val: "Ancient Civilizations" },
      ],
    },
    // ── ADD MORE ARTIFACTS BELOW ─────────────────
  ],

};