/**
 * ═══════════════════════════════════════════════
 * MAP — FLOOR PLAN DATA & RENDER LOGIC
 * ═══════════════════════════════════════════════
 *
 * HOW TO EDIT THE MAP:
 * - Each floor has a list of rooms.
 * - Each room has an `id` that links it to exhibit data
 *   via the `mapRoom` field in each role's data file.
 * - `cls` controls the color: room-ancient / room-science /
 *   room-art / room-nature / room-neutral
 * - `span2` makes a room take 2 columns (wider room).
 *
 * The map auto-highlights rooms linked to the current exhibit
 * when a user opens that exhibit's detail page.
 */

const MAP_FLOORS = [
  {
    title: "Ground Floor",
    rooms: [
      {
        id:   "room-lobby-gf",
        name: "Main Entrance & Lobby",
        icon: "🚪",
        cls:  "room-neutral span2",
        info: "Ticket counters, coat check, gift shop, and accessibility desk. Free museum maps available.",
      },
      {
        id:   "room-cafe-gf",
        name: "Café Nile",
        icon: "☕",
        cls:  "room-neutral",
        info: "Open 9am – 5pm. Hot meals, pastries, and Egyptian mint tea. Outdoor seating available.",
      },
      {
        id:   "room-ancient-gf",
        name: "Ancient Civilizations",
        icon: "🏺",
        cls:  "room-ancient",
        info: "Gallery 1 — Artifacts from Egypt, Mesopotamia, Greece, and Rome. Wing A.",
      },
      {
        id:   "room-science-gf",
        name: "Science & Innovation",
        icon: "🔭",
        cls:  "room-science",
        info: "Gallery 2 — From the Renaissance to present day. 12 interactive stations. Wing B.",
      },
      {
        id:   "room-nature-gf",
        name: "Natural World",
        icon: "🦕",
        cls:  "room-nature span2",
        info: "Gallery 4 — Fossils, specimens, and a full dinosaur skeleton. Wing D.",
      },
    ],
  },
  {
    title: "First Floor",
    rooms: [
      {
        id:   "room-art-ff",
        name: "Art & Expression",
        icon: "🎨",
        cls:  "room-art span2",
        info: "Gallery 3 — 140+ works spanning 800 years including the Flemish Masters room.",
      },
      {
        id:   "room-lecture-ff",
        name: "Lecture Hall",
        icon: "🎓",
        cls:  "room-neutral",
        info: "Capacity 120. Public talks every Saturday at 3pm.",
      },
      {
        id:   "room-library-ff",
        name: "Library",
        icon: "📚",
        cls:  "room-neutral",
        info: "Open to all visitors. Art history and natural science collections.",
      },
      {
        id:   "room-workshop-ff",
        name: "Children's Workshop",
        icon: "✏️",
        cls:  "room-science",
        info: "Drop-in creative sessions for ages 4–12. Open weekends 10am – 2pm.",
      },
      {
        id:   "room-terrace-ff",
        name: "Rooftop Terrace",
        icon: "🌅",
        cls:  "room-nature",
        info: "Panoramic city views. Open in good weather, 10am – 6pm.",
      },
    ],
  },
  // ── ADD MORE FLOORS BELOW ──────────────────────
  // {
  //   title: "Basement",
  //   rooms: [
  //     { id: "room-storage-b", name: "Storage Vault", icon: "🔒", cls: "room-neutral span2", info: "Restricted access." },
  //   ],
  // },
];

/* ── Render the full map ── */
function renderMap(highlightRoomId = null) {
  const container = document.getElementById("map-content");
  if (!container) return;

  container.innerHTML = MAP_FLOORS.map(floor => `
    <div class="floor-card">
      <div class="floor-name">📍 ${floor.title}</div>
      <div class="room-grid">
        ${floor.rooms.map(room => `
          <div
            class="room ${room.cls} ${highlightRoomId === room.id ? 'active-room' : ''}"
            id="${room.id}"
            onclick="showRoomInfo('${room.id}', '${room.name.replace(/'/g, "\\'")}', '${room.info.replace(/'/g, "\\'")}')"
          >
            <div class="room-icon">${room.icon}</div>
            <div class="room-name">${room.name}</div>
          </div>
        `).join('')}
      </div>
      <div class="room-info-panel" id="panel-${floor.title.replace(/ /g, '-')}"></div>
    </div>
  `).join('');

  // Auto-open info panel if a room is highlighted
  if (highlightRoomId) {
    const room = MAP_FLOORS.flatMap(f => f.rooms).find(r => r.id === highlightRoomId);
    if (room) {
      setTimeout(() => showRoomInfo(highlightRoomId, room.name, room.info), 300);
    }
  }
}

/* ── Show info panel for a tapped room ── */
function showRoomInfo(roomId, name, info) {
  // Close all panels first
  document.querySelectorAll('.room-info-panel').forEach(p => {
    p.classList.remove('visible');
    p.innerHTML = '';
  });
  document.querySelectorAll('.room').forEach(r => r.classList.remove('active-room'));

  // Find which floor panel to open
  const roomEl = document.getElementById(roomId);
  if (!roomEl) return;

  const floorCard = roomEl.closest('.floor-card');
  const floorTitle = floorCard.querySelector('.floor-name').textContent.replace('📍 ', '');
  const panelId = 'panel-' + floorTitle.replace(/ /g, '-');
  const panel = document.getElementById(panelId);

  if (panel) {
    panel.innerHTML = `
      <div class="room-info-name">${name}</div>
      <div class="room-info-desc">${info}</div>
    `;
    panel.classList.add('visible');
  }
  roomEl.classList.add('active-room');
}

/* ── Navigate to map with a specific room highlighted ── */
function goToMapRoom(roomId) {
  showPage('page-map');
  setNav('map');
  renderMap(roomId);
}