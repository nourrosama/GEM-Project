/**
 * ═══════════════════════════════════════════════
 * HOME, EXHIBITS & ARTIFACTS — View logic
 * ═══════════════════════════════════════════════
 */

/* ── Render home screen for the selected role ── */
function renderHome(role, data) {
  // Greeting
  document.getElementById('home-greeting').innerHTML = data.homeGreeting;
  document.getElementById('home-tagline').textContent = data.homeTagline;
  document.getElementById('home-role-text').textContent = role.name;

  // Highlights
  const hWrap = document.getElementById('home-highlights');
  hWrap.innerHTML = (data.highlights || []).map(h => `
    <div class="highlight-item" onclick="openExhibit('${h.id}')">
      <span class="highlight-icon">${h.icon}</span>
      <div style="flex:1">
        <div class="highlight-name">${h.name}</div>
        <div class="highlight-brief">${h.brief}</div>
      </div>
      <span class="highlight-arrow">›</span>
    </div>
  `).join('');

  // Render exhibits and artifacts lists (used when those pages open)
  renderExhibits(data);
  renderArtifacts(data);
}

/* ── Exhibits list ── */
function renderExhibits(data) {
  const container = document.getElementById('exhibit-list');
  if (!container || !data.exhibits) return;

  container.innerHTML = data.exhibits.map(e => `
    <div class="exhibit-card" onclick="openExhibit('${e.id}')">
      <div class="exhibit-thumb ${e.thumbClass}">${e.emoji}</div>
      <div class="exhibit-info">
        <div class="exhibit-tag">${e.tag}</div>
        <div class="exhibit-name">
          ${e.name}
          <span class="exhibit-arrow">›</span>
        </div>
        <div class="exhibit-brief">${e.brief}</div>
      </div>
    </div>
  `).join('');
}

/* ── Open exhibit detail ── */
function openExhibit(id) {
  const data = ROLE_DATA[currentRole.id];
  const e = data.exhibits.find(x => x.id === id);
  if (!e) return;

  document.getElementById('detail-topbar-title').textContent = e.name;

  // Build talking points section (only shown if role has them)
  const tpHtml = e.talkingPoints && e.talkingPoints.length
    ? `<div class="related-title" style="margin-top:28px">Talking Points</div>
       <div style="display:flex;flex-direction:column;gap:8px">
         ${e.talkingPoints.map(tp => `
           <div style="display:flex;gap:12px;padding:12px 14px;background:var(--surface-2);border:1px solid var(--border-dim);border-radius:8px;font-size:13px;color:var(--text-secondary);line-height:1.7">
             <span style="color:var(--gold);flex-shrink:0;margin-top:2px">◆</span>
             <span>${tp}</span>
           </div>
         `).join('')}
       </div>`
    : '';

  // Build "go to map" button if room is defined
  const mapBtnHtml = e.mapRoom
    ? `<button
         onclick="goToMapRoom('${e.mapRoom}')"
         style="
           display:flex;align-items:center;justify-content:center;gap:10px;
           width:100%;padding:14px;margin-bottom:28px;
           background:rgba(201,168,76,0.1);border:1px solid var(--border-mid);
           border-radius:var(--radius-sm);cursor:pointer;
           font-family:var(--font-ui);font-size:11px;font-weight:600;
           letter-spacing:2.5px;text-transform:uppercase;color:var(--gold);
           transition:background 0.2s,border-color 0.2s;
         "
         onmouseover="this.style.background='rgba(201,168,76,0.18)'"
         onmouseout="this.style.background='rgba(201,168,76,0.1)'"
       >
         <span style="font-size:16px">🗺️</span> Show on Map
       </button>`
    : '';

  // Related artifacts
  const related = (data.artifacts || []).filter(a => a.exhibitId === id);
  const relatedHtml = related.length
    ? `<div class="related-title">Related Artifacts</div>
       ${related.map(a => `
         <div class="related-item" onclick="openArtifact('${a.id}')">
           <span class="related-item-icon">${a.emoji}</span>
           <div>
             <div class="related-item-name">${a.name}</div>
             <div class="related-item-sub">${a.origin}</div>
           </div>
           <span class="related-item-arrow">›</span>
         </div>
       `).join('')}`
    : '';

  document.getElementById('exhibit-detail-content').innerHTML = `
    <div class="detail-hero ${e.thumbClass}">${e.emoji}</div>
    <div class="detail-body">
      <div class="detail-tag">${e.tag}</div>
      <div class="detail-title">${e.name}</div>
      <div class="detail-desc">${e.description}</div>
      ${mapBtnHtml}
      <div class="detail-facts">
        ${e.facts.map(f => `
          <div class="fact-row">
            <span class="fact-label">${f.label}</span>
            <span class="fact-val">${f.val}</span>
          </div>
        `).join('')}
      </div>
      ${tpHtml}
      ${relatedHtml}
    </div>
  `;

  showPage('page-exhibit-detail');
}

/* ── Artifacts grid ── */
function renderArtifacts(data) {
  const container = document.getElementById('artifact-list');
  if (!container || !data.artifacts) return;

  if (data.artifacts.length === 0) {
    container.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:48px 20px;color:var(--text-muted);font-size:13px">No artifacts listed for this role.</div>`;
    return;
  }

  container.innerHTML = data.artifacts.map(a => `
    <div class="artifact-card" onclick="openArtifact('${a.id}')">
      <div class="artifact-thumb ${a.bg}">${a.emoji}</div>
      <div class="artifact-info">
        <div class="artifact-name">${a.name}</div>
        <div class="artifact-sub">${a.origin}</div>
      </div>
    </div>
  `).join('');
}

/* ── Open artifact detail ── */
function openArtifact(id) {
  const data = ROLE_DATA[currentRole.id];
  const a = data.artifacts.find(x => x.id === id);
  if (!a) return;

  const exhibit = data.exhibits.find(e => e.id === a.exhibitId);

  document.getElementById('artifact-topbar-title').textContent = a.name;
  document.getElementById('artifact-detail-content').innerHTML = `
    <div class="artifact-detail-thumb ${a.bg}">${a.emoji}</div>
    <div class="detail-body">
      <div class="detail-tag">${exhibit ? exhibit.name : ''}</div>
      <div class="detail-title">${a.name}</div>
      <div class="detail-desc">${a.description}</div>
      ${exhibit && exhibit.mapRoom ? `
        <button
          onclick="goToMapRoom('${exhibit.mapRoom}')"
          style="display:flex;align-items:center;justify-content:center;gap:10px;
            width:100%;padding:14px;margin-bottom:28px;
            background:rgba(201,168,76,0.1);border:1px solid var(--border-mid);
            border-radius:var(--radius-sm);cursor:pointer;
            font-family:var(--font-ui);font-size:11px;font-weight:600;
            letter-spacing:2.5px;text-transform:uppercase;color:var(--gold);
            transition:background 0.2s;"
          onmouseover="this.style.background='rgba(201,168,76,0.18)'"
          onmouseout="this.style.background='rgba(201,168,76,0.1)'"
        >
          <span style="font-size:16px">🗺️</span> Show on Map
        </button>` : ''}
      <div class="detail-facts">
        ${a.facts.map(f => `
          <div class="fact-row">
            <span class="fact-label">${f.label}</span>
            <span class="fact-val">${f.val}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  showPage('page-artifact-detail');
}