/**
 * ═══════════════════════════════════════════════
 * ROLE PICKER — Screen logic
 * ═══════════════════════════════════════════════
 *
 * Renders the role selection cards on first open.
 * Stores the selected role in sessionStorage so the
 * app remembers it if the user navigates back home.
 *
 * To reset the role (go back to picker), call:
 *   resetRole();
 */

let currentRole = null;

function renderRolePicker() {
  const grid = document.getElementById("role-grid");
  if (!grid) return;

  grid.innerHTML = ROLES.map(role => `
    <div class="role-card" onclick="selectRole('${role.id}')">
      <span class="role-icon">${role.icon}</span>
      <div class="role-name">${role.name}</div>
    </div>
  `).join('');
}

function selectRole(roleId) {
  const role = ROLES.find(r => r.id === roleId);
  if (!role) return;

  currentRole = role;
  sessionStorage.setItem('museum_role', roleId);

  // Load that role's data
  const data = ROLE_DATA[roleId];
  if (!data) {
    alert(`Data for role "${roleId}" not found. Check /data/exhibits/${role.dataFile}.js`);
    return;
  }

  // Boot the home screen with this role's data
  renderHome(role, data);
  showPage('page-home');
  setNav('home');
}

function resetRole() {
  sessionStorage.removeItem('museum_role');
  currentRole = null;
  showPage('page-role-picker');
}

/* ── On load: restore role if already chosen ── */
function initRolePicker() {
  renderRolePicker();

  const saved = sessionStorage.getItem('museum_role');
  if (saved) {
    selectRole(saved);
  } else {
    showPage('page-role-picker');
  }
}