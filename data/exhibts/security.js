/**
 * ═══════════════════════════════════════════════
 * ROLE DATA — SECURITY
 * ═══════════════════════════════════════════════
 *
 * Customize this file with security-specific info.
 * The Security role might show patrol zones, alert
 * contacts, and restricted areas instead of artifact details.
 */

ROLE_DATA["security"] = {

  homeGreeting: "Security <em>Operations</em>",
  homeTagline:  "Patrol zones, emergency protocols, and floor assignments for today.",

  highlights: [
    {
      id:    "patrol-a",
      icon:  "🛡️",
      name:  "Ground Floor Patrol",
      brief: "Wing A & B — active monitoring required.",
    },
    {
      id:    "patrol-b",
      icon:  "🚨",
      name:  "Restricted Areas",
      brief: "Storage vault and curator offices.",
    },
  ],

  exhibits: [
    {
      id:         "patrol-a",
      tag:        "Zone 1",
      name:       "Ground Floor Patrol",
      brief:      "Wing A, B, and main lobby coverage.",
      emoji:      "🛡️",
      thumbClass: "thumb-ancient",
      mapRoom:    "room-lobby-gf",

      description: "[ REPLACE: Describe patrol route, checkpoints, and timing for the ground floor. ]",

      facts: [
        { label: "Shift",    val: "[ shift hours ]" },
        { label: "Zone",     val: "Ground Floor" },
        { label: "Contact",  val: "[ radio channel / number ]" },
        { label: "Rounds",   val: "Every [ X ] minutes" },
      ],

      talkingPoints: [], // not used for security — leave empty
    },
    // ── ADD MORE PATROL ZONES BELOW ──────────────
  ],

  artifacts: [], // Security role may not need artifacts — leave empty or add relevant items

};