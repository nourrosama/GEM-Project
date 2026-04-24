/**
 * ═══════════════════════════════════════════════
 * ROLE DATA — CURATOR
 * ═══════════════════════════════════════════════
 */

ROLE_DATA["curator"] = {

  homeGreeting: "Curator's <em>Reference</em>",
  homeTagline:  "Artifact records, condition reports, and collection notes.",

  highlights: [
    {
      id:    "ancient",
      icon:  "🏺",
      name:  "Ancient Civilizations",
      brief: "[ X ] artifacts — [ Y ] requiring condition review.",
    },
  ],

  exhibits: [
    {
      id:         "ancient",
      tag:        "Collection A",
      name:       "Ancient Civilizations",
      brief:      "Full artifact inventory and condition status.",
      emoji:      "🏺",
      thumbClass: "thumb-ancient",
      mapRoom:    "room-ancient-gf",

      description: "[ REPLACE: Curatorial notes about this collection — provenance, acquisition history, display rationale. ]",

      facts: [
        { label: "Total Items",    val: "[ number ]" },
        { label: "On Display",     val: "[ number ]" },
        { label: "In Storage",     val: "[ number ]" },
        { label: "Last Reviewed",  val: "[ date ]" },
      ],

      talkingPoints: [],
    },
  ],

  artifacts: [
    {
      id:          "mask",
      name:        "[ Artifact Name ]",
      origin:      "[ Origin, Date ]",
      exhibitId:   "ancient",
      emoji:       "👑",
      bg:          "thumb-ancient",
      description: "[ REPLACE: Curatorial description — acquisition notes, condition, provenance. ]",
      facts: [
        { label: "Accession No.", val: "[ number ]" },
        { label: "Condition",     val: "[ Good / Fair / Needs Review ]" },
        { label: "Last Inspected",val: "[ date ]" },
        { label: "Location",      val: "[ display case / storage ref ]" },
      ],
    },
  ],

};