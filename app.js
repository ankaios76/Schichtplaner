const loginView = document.getElementById("loginView");
const appView = document.getElementById("appView");
const loginBtn = document.getElementById("loginBtn");
const loginUser = document.getElementById("loginUser");
const loginPass = document.getElementById("loginPass");
const loginError = document.getElementById("loginError");
const loginForm = document.getElementById("loginForm");
const setupView = document.getElementById("setupView");
const supervisorSetupView = document.getElementById("supervisorSetupView");
const setupBtn = document.getElementById("setupBtn");
const setupError = document.getElementById("setupError");
const companyName = document.getElementById("companyName");
const companyLogo = document.getElementById("companyLogo");
const dbSetupView = document.getElementById("dbSetupView");
const dbSetupBtn = document.getElementById("dbSetupBtn");
const dbSetupError = document.getElementById("dbSetupError");
const dbSetupResult = document.getElementById("dbSetupResult");
const dbSetupLogo = document.getElementById("dbSetupLogo");
const dbSetupTitle = document.getElementById("dbSetupTitle");
const dbClient = document.getElementById("dbClient");
const dbMode = document.getElementById("dbMode");
const dbExternalFields = document.getElementById("dbExternalFields");
const dbHost = document.getElementById("dbHost");
const dbPort = document.getElementById("dbPort");
const dbName = document.getElementById("dbName");
const dbUser = document.getElementById("dbUser");
const dbPass = document.getElementById("dbPass");
const dbSetupActions = document.getElementById("dbSetupActions");
const dbSetupCopy = document.getElementById("dbSetupCopy");
const dbSetupContinue = document.getElementById("dbSetupContinue");
const supervisorSetupBtn = document.getElementById("supervisorSetupBtn");
const supervisorSetupError = document.getElementById("supervisorSetupError");
const supervisorName = document.getElementById("supervisorName");
const supervisorUser = document.getElementById("supervisorUser");
const supervisorPass = document.getElementById("supervisorPass");
const supervisorState = document.getElementById("supervisorState");
const loginLogo = document.getElementById("loginLogo");
const loginCompany = document.getElementById("loginCompany");
const setupLogo = document.getElementById("setupLogo");
const setupTitle = document.getElementById("setupTitle");
const supervisorSetupLogo = document.getElementById("supervisorSetupLogo");
const supervisorSetupTitle = document.getElementById("supervisorSetupTitle");
const menuList = document.getElementById("menuList");
const greeting = document.getElementById("greeting");
const todayText = document.getElementById("todayText");
const sidebarName = document.getElementById("sidebarName");
const sidebarRole = document.getElementById("sidebarRole");
const sidebarAvatar = document.getElementById("sidebarAvatar");
const profileName = document.getElementById("profileName");
const profilePhoto = document.getElementById("profilePhoto");
const profilePosition = document.getElementById("profilePosition");
const pageHierarchy = document.getElementById("pageHierarchy");
const pageTeam = document.getElementById("pageTeam");
const pageUser = document.getElementById("pageUser");
const pageProfile = document.getElementById("pageProfile");
const pageSwap = document.getElementById("pageSwap");
const hierarchyTree = document.getElementById("hierarchyTree");
const teamList = document.getElementById("teamList");
const teamSearch = document.getElementById("teamSearch");
const teamFilter = document.getElementById("teamFilter");
const addMemberBtn = document.getElementById("addMember");
const addTeamBtn = document.getElementById("addTeam");
const addRootBtn = document.getElementById("addRoot");
const weeklyTargetInput = document.getElementById("weeklyTarget");
const weeklyStatus = document.getElementById("weeklyStatus");
const swapRequestBtn = document.getElementById("swapRequest");
const swapHint = document.getElementById("swapHint");
const avatarUpload = document.getElementById("avatarUpload");
const removeAvatarBtn = document.getElementById("removeAvatar");
const templateGrid = document.getElementById("templateGrid");
const applyTemplateBtn = document.getElementById("applyTemplate");
const clearMonthBtn = document.getElementById("clearMonth");
const templateNotice = document.getElementById("templateNotice");
const calendarGrid = document.getElementById("calendarGrid");
const monthLabel = document.getElementById("monthLabel");
const prevMonthBtn = document.getElementById("prevMonth");
const nextMonthBtn = document.getElementById("nextMonth");
const weeklyTotal = document.getElementById("weeklyTotal");
const defaultDashboard = document.getElementById("defaultDashboard");
const pageAdminDashboard = document.getElementById("pageAdminDashboard");
const pageUserDashboard = document.getElementById("pageUserDashboard");
const userTeamCalendar = document.getElementById("userTeamCalendar");
const userWeekLabel = document.getElementById("userWeekLabel");
const userPrevMonth = document.getElementById("userPrevMonth");
const userNextMonth = document.getElementById("userNextMonth");
const statusLegend = document.getElementById("statusLegend");
const adminTeamList = document.getElementById("adminTeamList");
const adminSwapList = document.getElementById("adminSwapList");
const adminSickList = document.getElementById("adminSickList");
const adminAddMember = document.getElementById("adminAddMember");
const teamPageTitle = document.getElementById("teamPageTitle");
const teamPageDesc = document.getElementById("teamPageDesc");
const swapRequestsCard = document.getElementById("swapRequestsCard");

const dayModal = document.getElementById("dayModal");
const modalDate = document.getElementById("modalDate");
const segmentsContainer = document.getElementById("segments");
const addSegmentBtn = document.getElementById("addSegment");
const closeModalBtn = document.getElementById("closeModal");
const saveDayBtn = document.getElementById("saveDay");
const deleteDayBtn = document.getElementById("deleteDay");
const dayTotal = document.getElementById("dayTotal");
const dayStatus = document.getElementById("dayStatus");
const holidayNotice = document.getElementById("holidayNotice");

const hierarchyModal = document.getElementById("hierarchyModal");
const hierarchyModalTitle = document.getElementById("hierarchyModalTitle");
const closeHierarchyModal = document.getElementById("closeHierarchyModal");
const hierarchyType = document.getElementById("hierarchyType");
const hierarchyName = document.getElementById("hierarchyName");
const deleteHierarchyBtn = document.getElementById("deleteHierarchy");
const saveHierarchyBtn = document.getElementById("saveHierarchy");

const memberModal = document.getElementById("memberModal");
const memberModalTitle = document.getElementById("memberModalTitle");
const closeMemberModal = document.getElementById("closeMemberModal");
const memberName = document.getElementById("memberName");
const memberEmail = document.getElementById("memberEmail");
const memberPhone = document.getElementById("memberPhone");
const memberRole = document.getElementById("memberRole");
const memberSystemRole = document.getElementById("memberSystemRole");
const memberTeam = document.getElementById("memberTeam");
const memberStatus = document.getElementById("memberStatus");
const deleteMemberBtn = document.getElementById("deleteMember");
const saveMemberBtn = document.getElementById("saveMember");
const memberUser = document.getElementById("memberUser");
const memberPass = document.getElementById("memberPass");
const memberError = document.getElementById("memberError");
const memberState = document.getElementById("memberState");

const memberDetailModal = document.getElementById("memberDetailModal");
const memberDetailBody = document.getElementById("memberDetailBody");
const closeMemberDetail = document.getElementById("closeMemberDetail");
const closeMemberDetailFooter = document.getElementById("closeMemberDetailFooter");

const memberConfirmModal = document.getElementById("memberConfirmModal");
const closeMemberConfirm = document.getElementById("closeMemberConfirm");
const memberConfirmDetails = document.getElementById("memberConfirmDetails");
const memberConfirmCopy = document.getElementById("memberConfirmCopy");
const memberConfirmContinue = document.getElementById("memberConfirmContinue");
const memberConfirmAck = document.getElementById("memberConfirmAck");

const swapList = document.getElementById("swapList");
const swapCount = document.getElementById("swapCount");
const swapModal = document.getElementById("swapModal");
const closeSwapModal = document.getElementById("closeSwapModal");
const cancelSwap = document.getElementById("cancelSwap");
const submitSwap = document.getElementById("submitSwap");
const swapDate = document.getElementById("swapDate");
const swapReason = document.getElementById("swapReason");
const logoutBtn = document.getElementById("logoutBtn");
const teamModal = document.getElementById("teamModal");
const closeTeamModal = document.getElementById("closeTeamModal");
const cancelTeam = document.getElementById("cancelTeam");
const saveTeam = document.getElementById("saveTeam");
const teamParent = document.getElementById("teamParent");
const teamName = document.getElementById("teamName");

const API_BASE = `${location.origin}`;

const state = {
  user: null,
  activePage: "dashboard",
  calendarDate: new Date(),
  dayEntries: JSON.parse(localStorage.getItem("dayEntries") || "{}"),
  template: JSON.parse(localStorage.getItem("template") || "{}"),
  selectedDateKey: null,
  modalSegments: [],
  hierarchy: [],
  members: [],
  swaps: [],
  teamOptions: [],
  teamWeekShifts: {},
  hierarchyDraft: null,
  memberDraft: null,
  pendingMember: null,
  userMonthDate: new Date(),
};

const typeLabels = {
  company: "Company",
  bereich: "Bereich",
  abteilung: "Abteilung",
  team: "Team",
  subteam: "Subteam",
};

const childTypes = {
  company: ["bereich"],
  bereich: ["abteilung"],
  abteilung: ["team"],
  team: ["subteam"],
  subteam: [],
};

const menus = {
  supervisor: [
    { id: "hierarchy", label: "Unternehmen" },
    { id: "team", label: "Teamleiter" },
  ],
  admin: [
    { id: "dashboard", label: "Teamleiter-Dashboard" },
    { id: "team", label: "Team" },
    { id: "user", label: "Meine Arbeitszeit" },
    { id: "profile", label: "Mein Profil" },
    { id: "swap", label: "Schichttausch" },
  ],
  user: [
    { id: "dashboard", label: "Startseite" },
    { id: "team", label: "Team" },
    { id: "user", label: "Meine Arbeitszeit" },
    { id: "profile", label: "Mein Profil" },
    { id: "swap", label: "Schichttausch" },
  ],
};

const weekdayLabels = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];

function resetToLogin() {
  loginView.hidden = false;
  setupView.hidden = true;
  dbSetupView.hidden = true;
  supervisorSetupView.hidden = true;
  appView.hidden = true;
  if (dayModal) dayModal.hidden = true;
  if (hierarchyModal) hierarchyModal.hidden = true;
  if (memberModal) memberModal.hidden = true;
  if (memberDetailModal) memberDetailModal.hidden = true;
  if (swapModal) swapModal.hidden = true;
  loginUser.value = "";
  loginPass.value = "";
  loginError.hidden = true;
}

function setCompanyBranding(settings) {
  if (settings?.companyName) {
    loginCompany.textContent = settings.companyName;
    setupTitle.textContent = settings.companyName;
    supervisorSetupTitle.textContent = settings.companyName;
    if (dbSetupTitle) dbSetupTitle.textContent = settings.companyName;
  }
  if (settings?.logo) {
    [loginLogo, setupLogo, supervisorSetupLogo, dbSetupLogo].forEach((el) => {
      if (!el) return;
      el.style.backgroundImage = `url(${settings.logo})`;
      el.textContent = "";
    });
  }
}

async function apiFetch(path, options = {}) {
  const response = await fetch(`${API_BASE}${path}`, {
    headers: { "Content-Type": "application/json", ...(options.headers || {}) },
    ...options,
  });
  if (!response.ok) {
    const payload = await response.json().catch(() => ({}));
    throw new Error(payload.error || "API error");
  }
  return response.json();
}

function formatDate(date) {
  return date.toLocaleDateString("de-DE", {
    weekday: "long",
    day: "2-digit",
    month: "long",
  });
}

function dateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function dateKeyUtc(date) {
  return date.toISOString().split("T")[0];
}

function normalizeDateKey(value) {
  if (!value) return "";
  if (typeof value === "string") return value.split("T")[0];
  return dateKey(new Date(value));
}

function getEntryForDate(map, date) {
  const localKey = dateKey(date);
  if (map[localKey]) return map[localKey];
  const isoKey = `${localKey}T00:00:00.000Z`;
  return map[isoKey] || null;
}

function rangeKey(from, to) {
  return `${from}_${to}`;
}

function formatSegments(segments) {
  if (!segments || segments.length === 0) return "-";
  return segments.map((seg) => `${seg.start}-${seg.end}`).join(", ");
}

const statusColors = {
  Support: "#d7f5de",
  Projekt: "#e3ebff",
  Betriebsrat: "#fff2c2",
  Urlaub: "#dff6ff",
  "Urlaub halber Tag": "#ffe8bf",
  Krank: "#ffd9d9",
  "Rufbereitschaft Voice/Daten": "#ede2ff",
  "Rufbereitschaft Fraud": "#ffe3f2",
  Keine: "#eeeeee",
};

function statusColor(status, hasSegments) {
  if (!hasSegments) return statusColors.Keine;
  return statusColors[status] || statusColors.Support;
}

const stateOptions = [
  { code: "NW", label: "Nordrhein-Westfalen" },
  { code: "HB", label: "Bremen" },
  { code: "BW", label: "Baden-Württemberg" },
  { code: "BY", label: "Bayern" },
  { code: "BE", label: "Berlin" },
  { code: "BB", label: "Brandenburg" },
  { code: "HH", label: "Hamburg" },
  { code: "HE", label: "Hessen" },
  { code: "MV", label: "Mecklenburg-Vorpommern" },
  { code: "NI", label: "Niedersachsen" },
  { code: "RP", label: "Rheinland-Pfalz" },
  { code: "SL", label: "Saarland" },
  { code: "SN", label: "Sachsen" },
  { code: "ST", label: "Sachsen-Anhalt" },
  { code: "SH", label: "Schleswig-Holstein" },
  { code: "TH", label: "Thüringen" },
  { code: "MALL", label: "Mallorca" },
  { code: "BUND", label: "Bundesweit" },
];

function renderStateOptions() {
  memberState.innerHTML = stateOptions
    .map((state) => `<option value="${state.code}">${state.label}</option>`)
    .join("");
}

function easterSunday(year) {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(year, month - 1, day);
}

function addDays(date, days) {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
}

function holidayMapForYear(year) {
  const map = {};
  const addHoliday = (date, name, states) => {
    const key = dateKey(date);
    states.forEach((state) => {
      map[state] = map[state] || {};
      map[state][key] = map[state][key] ? `${map[state][key]} / ${name}` : name;
    });
  };

  const allStates = stateOptions.map((s) => s.code).filter((c) => c !== "MALL");
  const nationwideStates = allStates.filter((c) => c !== "BUND");

  addHoliday(new Date(year, 0, 1), "Neujahr", nationwideStates);
  addHoliday(new Date(year, 4, 1), "Tag der Arbeit", nationwideStates);
  addHoliday(new Date(year, 9, 3), "Tag der Deutschen Einheit", nationwideStates);
  addHoliday(new Date(year, 11, 25), "1. Weihnachtstag", nationwideStates);
  addHoliday(new Date(year, 11, 26), "2. Weihnachtstag", nationwideStates);

  const easter = easterSunday(year);
  addHoliday(addDays(easter, -2), "Karfreitag", nationwideStates);
  addHoliday(addDays(easter, 1), "Ostermontag", nationwideStates);
  addHoliday(addDays(easter, 39), "Christi Himmelfahrt", nationwideStates);
  addHoliday(addDays(easter, 50), "Pfingstmontag", nationwideStates);

  addHoliday(new Date(year, 0, 6), "Heilige Drei Könige", ["BW", "BY", "ST"]);
  addHoliday(new Date(year, 2, 8), "Internationaler Frauentag", ["BE", "MV"]);
  addHoliday(new Date(year, 4, 30), "Fronleichnam", ["BW", "BY", "HE", "NW", "RP", "SL"]);
  addHoliday(new Date(year, 7, 15), "Mariä Himmelfahrt", ["BY", "SL"]);
  addHoliday(new Date(year, 9, 31), "Reformationstag", ["BB", "MV", "SN", "ST", "TH", "HB", "HH", "NI", "SH"]);
  addHoliday(new Date(year, 10, 1), "Allerheiligen", ["BW", "BY", "NW", "RP", "SL"]);
  addHoliday(new Date(year, 8, 20), "Weltkindertag", ["TH"]);

  const nov23 = new Date(year, 10, 23);
  const dayOfWeek = nov23.getDay();
  const offset = (dayOfWeek + 4) % 7;
  const buss = new Date(year, 10, 23 - offset);
  addHoliday(buss, "Buß- und Bettag", ["SN"]);

  return map;
}

const holidayCache = {};

function getHoliday(date, stateCode) {
  const year = date.getFullYear();
  if (!holidayCache[year]) holidayCache[year] = holidayMapForYear(year);
  const map = holidayCache[year];
  const key = dateKey(date);
  const state = stateCode || "BUND";
  const stateMap = map[state] || {};
  return stateMap[key] || null;
}

function initials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function isSameDay(a, b) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

function setActivePage(pageId) {
  state.activePage = pageId;
  pageHierarchy.hidden = pageId !== "hierarchy";
  pageTeam.hidden = pageId !== "team";
  pageUser.hidden = pageId !== "user";
  pageProfile.hidden = pageId !== "profile";
  pageSwap.hidden = pageId !== "swap";
  pageUserDashboard.hidden = true;
  const showDashboard = pageId === "dashboard";
  if (state.user && state.user.role === "admin") {
    defaultDashboard.style.display = "none";
    pageAdminDashboard.hidden = !showDashboard;
  } else if (state.user && state.user.role === "user") {
    defaultDashboard.style.display = "none";
    pageAdminDashboard.hidden = true;
    pageUserDashboard.hidden = !showDashboard;
  } else {
    defaultDashboard.style.display = showDashboard ? "grid" : "none";
    pageAdminDashboard.hidden = true;
  }

  document.querySelectorAll(".menu button").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.page === pageId);
  });
}

function renderMenu(role) {
  menuList.innerHTML = "";
  menus[role].forEach((item) => {
    const btn = document.createElement("button");
    btn.textContent = item.label;
    btn.dataset.page = item.id;
    btn.addEventListener("click", () => setActivePage(item.id));
    menuList.appendChild(btn);
  });
  setActivePage("dashboard");
}

function applyRoleUI() {
  const role = state.user.role;
  addRootBtn.hidden = role !== "supervisor";
  addMemberBtn.hidden = role === "user";
  addTeamBtn.hidden = role === "user";
  if (swapRequestsCard) swapRequestsCard.hidden = role === "supervisor";

  if (teamPageTitle && teamPageDesc) {
    if (role === "supervisor") {
      teamPageTitle.textContent = "Teamleiter";
      teamPageDesc.textContent = "Supervisoren und Teamleiter anlegen, Teams zuordnen und Benutzer verwalten.";
    } else {
      teamPageTitle.textContent = "Team-Übersicht";
      teamPageDesc.textContent = "Team-Mitglieder bearbeiten und Schichttausch-Anfragen prüfen.";
    }
  }

  if (role === "admin" || role === "user") {
    const teamValue = String(state.user.team || "unassigned");
    teamFilter.value = teamValue;
    teamFilter.disabled = true;
  } else {
    teamFilter.value = "all";
    teamFilter.disabled = false;
  }
}

function collectNodesByType(nodes, type, bucket = []) {
  nodes.forEach((node) => {
    if (node.type === type) bucket.push(node);
    if (node.children && node.children.length) collectNodesByType(node.children, type, bucket);
  });
  return bucket;
}

function updateTeamOptions() {
  const teams = collectNodesByType(state.hierarchy, "team");
  state.teamOptions = teams.map((team) => ({ id: String(team.id), label: team.name }));
  state.teamOptions.unshift({ id: "unassigned", label: "Ohne Team" });

  teamFilter.innerHTML = `<option value="all">Alle Teams</option>` +
    state.teamOptions.map((t) => `<option value="${t.id}">${t.label}</option>`).join("");

  memberTeam.innerHTML = state.teamOptions.map((t) => `<option value="${t.id}">${t.label}</option>`).join("");

  const departments = collectNodesByType(state.hierarchy, "abteilung");
  teamParent.innerHTML = departments.map((d) => `<option value="${d.id}">${d.name}</option>`).join("");
}

function findNode(nodes, id, parent = null) {
  for (const node of nodes) {
    if (node.id === id) return { node, parent };
    if (node.children && node.children.length) {
      const found = findNode(node.children, id, node);
      if (found) return found;
    }
  }
  return null;
}

function renderHierarchy() {
  hierarchyTree.innerHTML = "";
  const canEdit = state.user && state.user.role === "supervisor";
  function walk(nodes, depth = 0) {
    nodes.forEach((node) => {
      const item = document.createElement("div");
      item.className = "hierarchy-item";
      item.style.paddingLeft = `${16 + depth * 12}px`;
      const typeLabel = typeLabels[node.type] || node.type;
      item.dataset.id = node.id;
      item.draggable = canEdit;
      item.innerHTML = `
        <div>
          <strong>${typeLabel}</strong> · ${node.name}
        </div>
        <div class="hierarchy-actions">
          ${canEdit && childTypes[node.type].length ? "<button class=\"ghost\" data-action=\"add\" data-id=\"" + node.id + "\">+ Kind</button>" : ""}
          ${canEdit ? "<button class=\"ghost\" data-action=\"edit\" data-id=\"" + node.id + "\">Bearbeiten</button>" : ""}
        </div>
      `;
      hierarchyTree.appendChild(item);
      if (node.children) walk(node.children, depth + 1);
    });
  }
  walk(state.hierarchy);
}

function isDescendant(sourceId, targetId) {
  const source = findNode(state.hierarchy, sourceId);
  if (!source) return false;
  function walk(nodes) {
    for (const node of nodes) {
      if (node.id === targetId) return true;
      if (node.children && walk(node.children)) return true;
    }
    return false;
  }
  return walk(source.node.children || []);
}

async function moveNode(sourceId, targetId) {
  if (sourceId === targetId) return;
  if (isDescendant(sourceId, targetId)) return;

  const source = findNode(state.hierarchy, sourceId);
  const target = findNode(state.hierarchy, targetId);
  if (!source || !target) return;
  if (!childTypes[target.node.type].includes(source.node.type)) return;

  await apiFetch("/api/hierarchy/move", {
    method: "POST",
    body: JSON.stringify({ sourceId, targetId }),
  });
  await loadData();
}

function renderTeam() {
  teamList.innerHTML = "";
  const canEdit = state.user && state.user.role !== "user";
  const search = teamSearch.value.trim().toLowerCase();
  const filter = teamFilter.value;
  const teamScope = state.user.role === "admin" ? String(state.user.team || "") : filter;

  const members = state.members.filter((member) => {
    if (state.user.role === "supervisor" && member.systemRole === "supervisor") return false;
    const matchesSearch = member.name.toLowerCase().includes(search) || member.role.toLowerCase().includes(search);
    const matchesTeam = teamScope === "all" ? true : String(member.team || "") === String(teamScope);
    return matchesSearch && matchesTeam;
  });

  members.forEach((member) => {
    const card = document.createElement("div");
    card.className = "team-card";
    const teamLabel = state.teamOptions.find((t) => String(t.id) === String(member.team))?.label || member.team || "-";
    const canEditMember = canEdit || (state.user.role === "user" && state.user.memberId === member.id);
    const systemRoleLabel =
      member.systemRole === "supervisor" ? "Supervisor" : member.systemRole === "admin" ? "Teamleiter" : "Benutzer";
    card.innerHTML = `
      <div class="avatar">${initials(member.name)}</div>
      <div><strong>${member.name}</strong></div>
      <div class="muted">${member.role} · ${teamLabel}</div>
      <div class="badges">
        <span class="badge">${systemRoleLabel}</span>
        <span class="badge">${member.status}</span>
      </div>
      <div class="swap-actions">
        <button class="ghost" data-action="view" data-id="${member.id}">Details</button>
        ${canEditMember ? "<button class=\"ghost\" data-action=\"edit\" data-id=\"" + member.id + "\">Bearbeiten</button>" : ""}
      </div>
    `;
    teamList.appendChild(card);
  });
}

function renderTemplates() {
  templateGrid.innerHTML = "";
  weekdayLabels.slice(0, 5).forEach((day, index) => {
    const key = `day-${index}`;
    const entry = state.template[key] || { start: "07:00", end: "15:30" };
    const card = document.createElement("div");
    card.className = "template-day";
    card.innerHTML = `
      <strong>${day}</strong>
      <label class="field">
        <span>Von</span>
        <input type="time" data-template="${key}" data-field="start" value="${entry.start}" />
      </label>
      <label class="field">
        <span>Bis</span>
        <input type="time" data-template="${key}" data-field="end" value="${entry.end}" />
      </label>
    `;
    templateGrid.appendChild(card);
  });
}

function saveTemplate() {
  localStorage.setItem("template", JSON.stringify(state.template));
}

function updateTemplateFromInputs() {
  templateGrid.querySelectorAll("input[type='time']").forEach((input) => {
    const key = input.dataset.template;
    const field = input.dataset.field;
    state.template[key] = state.template[key] || { start: "07:00", end: "15:30" };
    state.template[key][field] = input.value;
  });
  saveTemplate();
}

function minutesBetween(start, end) {
  const [sh, sm] = start.split(":").map(Number);
  const [eh, em] = end.split(":").map(Number);
  return (eh * 60 + em) - (sh * 60 + sm);
}

function formatHours(minutes) {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return `${h}:${m.toString().padStart(2, "0")}h`;
}

function randomPassword(length = 14) {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789!#$%+-_";
  let out = "";
  for (let i = 0; i < length; i += 1) {
    out += chars[Math.floor(Math.random() * chars.length)];
  }
  return out;
}

function calculateDayTotal(segments) {
  let total = 0;
  segments.forEach((seg) => {
    if (seg.start && seg.end) {
      total += Math.max(0, minutesBetween(seg.start, seg.end));
    }
  });
  if (total > 0) total = Math.max(0, total - 30);
  return total;
}

function renderCalendar() {
  calendarGrid.innerHTML = "";
  const date = new Date(state.calendarDate.getFullYear(), state.calendarDate.getMonth(), 1);
  const month = date.getMonth();
  const year = date.getFullYear();

  monthLabel.textContent = date.toLocaleDateString("de-DE", { month: "long", year: "numeric" });

  weekdayLabels.forEach((label) => {
    const header = document.createElement("div");
    header.className = "calendar-day weekday";
    header.innerHTML = `<div class=\"date\">${label}</div>`;
    calendarGrid.appendChild(header);
  });

  const startDay = (date.getDay() + 6) % 7; // Monday = 0
  const totalDays = new Date(year, month + 1, 0).getDate();

  for (let i = 0; i < startDay; i++) {
    const empty = document.createElement("div");
    empty.className = "calendar-day";
    empty.style.opacity = "0.4";
    empty.innerHTML = `<div class=\"date\"></div>`;
    calendarGrid.appendChild(empty);
  }

  for (let day = 1; day <= totalDays; day++) {
    const current = new Date(year, month, day);
    const entry = getEntryForDate(state.dayEntries, current);
    const minutes = entry ? calculateDayTotal(entry.segments || []) : 0;
    const holiday = state.user ? getHoliday(current, state.user.state) : null;

    const cell = document.createElement("div");
    cell.className = "calendar-day";
    if (holiday) cell.classList.add("holiday");
    cell.innerHTML = `
      <div class=\"date\">${day}</div>
      <div class=\"hours\">${minutes > 0 ? formatHours(minutes) : "-"}</div>
    `;
    if (holiday) {
      const label = document.createElement("div");
      label.className = "holiday-label";
      label.textContent = holiday;
      cell.appendChild(label);
    }
    cell.addEventListener("click", () => openDayModal(current));
    calendarGrid.appendChild(cell);
  }

  updateWeeklyTotal();
}

function updateWeeklyTotal() {
  const target = Number(weeklyTargetInput.value || 0);
  const today = new Date();
  const start = new Date(today);
  start.setDate(today.getDate() - ((today.getDay() + 6) % 7));

  let minutes = 0;
  for (let i = 0; i < 7; i++) {
    const current = new Date(start);
    current.setDate(start.getDate() + i);
    const entry = getEntryForDate(state.dayEntries, current);
    if (entry) minutes += calculateDayTotal(entry.segments || []);
  }

  const hours = minutes / 60;
  const diff = hours - target;
  const diffLabel = diff === 0 ? "genau" : diff < 0 ? `${Math.abs(diff).toFixed(1)}h zu wenig` : `${diff.toFixed(1)}h zu viel`;

  weeklyStatus.textContent = `Diese Woche: ${hours.toFixed(1)}h (${diffLabel})`;
  weeklyTotal.textContent = `Woche ${hours.toFixed(1)}h / ${target}h`;
}

async function refreshUserCalendar() {
  if (!state.user) return;
  const base = state.user && state.user.role === "user" ? state.userMonthDate : state.calendarDate;
  const date = new Date(base.getFullYear(), base.getMonth(), 1);
  const year = date.getFullYear();
  const month = date.getMonth();
  const from = new Date(year, month, 1);
  const to = new Date(year, month + 1, 0);
  const fromKey = dateKey(from);
  const toKey = dateKey(to);
  try {
    const shifts = await apiFetch(`/api/shifts?userId=${state.user.memberId}&from=${fromKey}&to=${toKey}`);
    state.dayEntries = {};
    shifts.forEach((shift) => {
      const key = normalizeDateKey(shift.date);
      state.dayEntries[key] = { segments: shift.segments, status: shift.status || "Support" };
    });
    renderCalendar();
  } catch (err) {
    renderCalendar();
  }
}

async function loadTeamWeekShifts() {
  if (!state.user) return;
  if (state.user.role === "user") {
    const date = new Date(state.userMonthDate.getFullYear(), state.userMonthDate.getMonth(), 1);
    const year = date.getFullYear();
    const month = date.getMonth();
    const fromKey = dateKey(new Date(year, month, 1));
    const toKey = dateKey(new Date(year, month + 1, 0));
    try {
      const shifts = await apiFetch(`/api/shifts?teamId=${state.user.team}&from=${fromKey}&to=${toKey}`);
      state.teamWeekShifts = shifts.reduce((acc, shift) => {
        const key = normalizeDateKey(shift.date);
        acc[key] = acc[key] || [];
        acc[key].push({ ...shift, date: key });
        return acc;
      }, {});
    } catch (err) {
      state.teamWeekShifts = {};
    }
    return;
  }

  const today = new Date();
  const fromKey = dateKey(today);
  const end = new Date(today);
  end.setDate(today.getDate() + 6);
  const toKey = dateKey(end);
  try {
    const shifts = await apiFetch(`/api/shifts?teamId=${state.user.team}&from=${fromKey}&to=${toKey}`);
    state.teamWeekShifts = shifts.reduce((acc, shift) => {
      const key = normalizeDateKey(shift.date);
      acc[key] = acc[key] || [];
      acc[key].push({ ...shift, date: key });
      return acc;
    }, {});
  } catch (err) {
    state.teamWeekShifts = {};
  }
}

function openDayModal(date) {
  state.selectedDateKey = dateKey(date);
  modalDate.textContent = date.toLocaleDateString("de-DE", { weekday: "long", day: "2-digit", month: "long" });
  const entry = state.dayEntries[state.selectedDateKey] || { segments: [{ start: "07:00", end: "15:30" }], status: "Support" };
  state.modalSegments = (entry.segments || []).map((seg) => ({ ...seg }));
  const normalized = (entry.status || "Support").trim();
  dayStatus.value = normalized;
  if (!dayStatus.value) dayStatus.value = "Support";
  const holiday = getHoliday(date, state.user.state);
  holidayNotice.textContent = holiday ? `Feiertag: ${holiday}` : "";
  renderSegments();
  dayModal.hidden = false;
}

function renderSegments() {
  segmentsContainer.innerHTML = "";
  state.modalSegments.forEach((seg, index) => {
    const row = document.createElement("div");
    row.className = "segment";
    row.innerHTML = `
      <input type=\"time\" value=\"${seg.start}\" data-index=\"${index}\" data-field=\"start\" />
      <input type=\"time\" value=\"${seg.end}\" data-index=\"${index}\" data-field=\"end\" />
      <button class=\"ghost\" data-remove=\"${index}\">Entfernen</button>
    `;
    segmentsContainer.appendChild(row);
  });
  const totalMinutes = calculateDayTotal(state.modalSegments);
  dayTotal.textContent = `Gesamt: ${formatHours(totalMinutes)}`;
}

async function saveDay() {
  const segments = state.modalSegments.filter((seg) => seg.start && seg.end);
  const status = dayStatus.value || "Support";
  state.dayEntries[state.selectedDateKey] = { segments, status };
  localStorage.setItem("dayEntries", JSON.stringify(state.dayEntries));
  await apiFetch("/api/shifts", {
    method: "POST",
    body: JSON.stringify({
      userId: state.user.memberId,
      date: state.selectedDateKey,
      segments,
      status,
    }),
  });
  dayModal.hidden = true;
  await refreshUserCalendar();
  await loadTeamWeekShifts();
  renderUserDashboard();
}

function deleteDay() {
  delete state.dayEntries[state.selectedDateKey];
  localStorage.setItem("dayEntries", JSON.stringify(state.dayEntries));
  dayModal.hidden = true;
  apiFetch("/api/shifts", {
    method: "DELETE",
    body: JSON.stringify({ userId: state.user.memberId, date: state.selectedDateKey }),
  }).then(async () => {
    await refreshUserCalendar();
    await loadTeamWeekShifts();
    renderUserDashboard();
  });
}

async function applyTemplateToMonth() {
  updateTemplateFromInputs();
  const date = new Date(state.calendarDate.getFullYear(), state.calendarDate.getMonth(), 1);
  const month = date.getMonth();
  const year = date.getFullYear();
  const totalDays = new Date(year, month + 1, 0).getDate();

  const hasAnyTemplate = weekdayLabels
    .slice(0, 5)
    .some((_, idx) => state.template[`day-${idx}`] && state.template[`day-${idx}`].start && state.template[`day-${idx}`].end);
  if (!hasAnyTemplate) {
    templateNotice.textContent = "Bitte zuerst ein Template hinterlegen.";
    return;
  }

  let failures = 0;
  for (let day = 1; day <= totalDays; day++) {
    const current = new Date(year, month, day);
    const weekday = (current.getDay() + 6) % 7; // Monday index
    if (weekday <= 4) {
      const template = state.template[`day-${weekday}`];
      if (template) {
        const key = dateKey(current);
        const segments = [{ start: template.start, end: template.end }];
        state.dayEntries[key] = { segments, status: "Support" };
        try {
          await apiFetch("/api/shifts", {
            method: "POST",
            body: JSON.stringify({
              userId: state.user.memberId,
              date: key,
              segments,
              status: "Support",
            }),
          });
        } catch {
          failures += 1;
        }
      }
    }
    if (weekday > 4) {
      const key = dateKey(current);
      if (state.dayEntries[key]) {
        delete state.dayEntries[key];
      }
      try {
        await apiFetch("/api/shifts", {
          method: "DELETE",
          body: JSON.stringify({ userId: state.user.memberId, date: key }),
        });
      } catch {
        failures += 1;
      }
    }
  }

  localStorage.setItem("dayEntries", JSON.stringify(state.dayEntries));
  templateNotice.textContent = failures
    ? `Template angewendet, aber ${failures} Einträge konnten nicht gespeichert werden.`
    : "Template wurde auf den Monat angewendet.";
  await refreshUserCalendar();
  await loadTeamWeekShifts();
  renderUserDashboard();
}

async function clearMonth() {
  const date = new Date(state.calendarDate.getFullYear(), state.calendarDate.getMonth(), 1);
  const year = date.getFullYear();
  const month = date.getMonth();
  const totalDays = new Date(year, month + 1, 0).getDate();

  const deletes = [];
  for (let day = 1; day <= totalDays; day++) {
    const current = new Date(year, month, day);
    const key = dateKey(current);
    if (state.dayEntries[key]) delete state.dayEntries[key];
    deletes.push(
      apiFetch("/api/shifts", {
        method: "DELETE",
        body: JSON.stringify({ userId: state.user.memberId, date: key }),
      })
    );
  }

  await Promise.all(deletes);
  localStorage.setItem("dayEntries", JSON.stringify(state.dayEntries));
  await refreshUserCalendar();
  await loadTeamWeekShifts();
  renderUserDashboard();
}

function updateUserProfile() {
  const avatar = localStorage.getItem("avatar");
  if (avatar) {
    profilePhoto.style.backgroundImage = `url(${avatar})`;
    sidebarAvatar.style.backgroundImage = `url(${avatar})`;
    sidebarAvatar.textContent = "";
  } else {
    profilePhoto.style.backgroundImage = "none";
    sidebarAvatar.style.backgroundImage = "none";
    sidebarAvatar.textContent = initials(state.user.name);
  }
}

function checkSwapNotice() {
  const flagKey = `swapNotice_${state.user.team}`;
  const show = localStorage.getItem(flagKey) === "true";
  if (show && state.user.role !== "supervisor") {
    const banner = document.createElement("div");
    banner.className = "card";
    banner.style.border = "1px solid var(--accent-soft)";
    banner.style.background = "#fff4f7";
    banner.innerHTML = "<strong>Schichttausch-Anfrage</strong><div class='muted'>Ein Teammitglied hat einen Schichttausch angefragt.</div>";
    document.querySelector(".grid").prepend(banner);
    localStorage.setItem(flagKey, "false");
  }
}

function openHierarchyModal({ mode, parentId = null, nodeId = null }) {
  state.hierarchyDraft = { mode, parentId, nodeId };
  hierarchyModalTitle.textContent = mode === "edit" ? "Element bearbeiten" : "Neues Element";
  deleteHierarchyBtn.hidden = mode !== "edit";

  if (mode === "edit") {
    const found = findNode(state.hierarchy, nodeId);
    if (!found) return;
    hierarchyType.innerHTML = `<option value=\"${found.node.type}\">${typeLabels[found.node.type]}</option>`;
    hierarchyType.value = found.node.type;
    hierarchyType.disabled = true;
    hierarchyName.value = found.node.name;
  } else {
    const allowedTypes = parentId
      ? childTypes[findNode(state.hierarchy, parentId).node.type] || []
      : ["company"];
    hierarchyType.innerHTML = allowedTypes
      .map((type) => `<option value=\"${type}\">${typeLabels[type]}</option>`)
      .join("");
    hierarchyType.disabled = false;
    hierarchyName.value = "";
  }

  hierarchyModal.hidden = false;
}

function closeHierarchy() {
  hierarchyModal.hidden = true;
  hierarchyName.value = "";
}

async function saveHierarchyDraft() {
  const name = hierarchyName.value.trim();
  const type = hierarchyType.value;
  if (!name) return;

  if (state.hierarchyDraft.mode === "edit") {
    await apiFetch(`/api/hierarchy/${state.hierarchyDraft.nodeId}`, {
      method: "PUT",
      body: JSON.stringify({ name }),
    });
  } else {
    await apiFetch("/api/hierarchy", {
      method: "POST",
      body: JSON.stringify({
        parentId: state.hierarchyDraft.parentId,
        type,
        name,
      }),
    });
  }

  await loadData();
  closeHierarchy();
}

async function deleteHierarchy() {
  const { nodeId } = state.hierarchyDraft;
  if (!nodeId) return;
  await apiFetch(`/api/hierarchy/${nodeId}`, { method: "DELETE" });
  await loadData();
  closeHierarchy();
}

function openMemberModal({ mode, memberId = null }) {
  if (state.user.role === "user") {
    if (!memberId || state.user.memberId !== memberId) return;
  }
  state.memberDraft = { mode, memberId };
  memberModalTitle.textContent = mode === "edit" ? "Teammitglied bearbeiten" : "Benutzer hinzufügen";
  deleteMemberBtn.hidden = mode !== "edit";

  if (mode === "edit") {
    const member = state.members.find((m) => m.id === memberId);
    if (!member) return;
    memberName.value = member.name;
    memberEmail.value = member.email || "";
    memberPhone.value = member.phone || "";
    memberRole.value = member.role || "Mitarbeiter";
    memberSystemRole.value = member.systemRole || "user";
    memberTeam.value = member.team;
    memberStatus.value = member.status;
    memberState.value = member.state || "NW";
    memberUser.value = member.username || "";
    memberPass.value = "";
  } else {
    memberName.value = "";
    memberEmail.value = "";
    memberPhone.value = "";
    memberRole.value = "Mitarbeiter";
    memberSystemRole.value = "user";
    memberTeam.value = state.user.role === "admin" ? String(state.user.team || "unassigned") : (state.teamOptions[0]?.id || "unassigned");
    memberStatus.value = "aktiv";
    memberState.value = "NW";
    memberUser.value = "";
    memberPass.value = "";
  }
  memberError.hidden = true;

  memberTeam.disabled = state.user.role === "admin";
  memberSystemRole.disabled = state.user.role !== "supervisor";
  memberSystemRole.innerHTML =
    state.user.role === "supervisor"
      ? "<option value=\"admin\">Teamleiter</option><option value=\"supervisor\">Supervisor</option>"
      : "<option value=\"user\">Benutzer</option>";

  memberModal.hidden = false;
}

function closeMember() {
  memberModal.hidden = true;
}

function closeMemberConfirmModal() {
  if (memberConfirmModal) memberConfirmModal.hidden = true;
  if (memberConfirmContinue) memberConfirmContinue.disabled = true;
  if (memberConfirmCopy) memberConfirmCopy.textContent = "Daten kopieren";
  if (memberConfirmAck) memberConfirmAck.checked = false;
}

function showMemberConfirm(payload) {
  if (!memberConfirmModal) return;
  const details = [
    `Name: ${payload.name}`,
    `Benutzername: ${payload.username}`,
    `Passwort: ${payload.password}`,
    `Systemrolle: ${payload.systemRole === "admin" ? "Teamleiter" : payload.systemRole === "supervisor" ? "Supervisor" : "Benutzer"}`,
    `Funktion: ${payload.role}`,
    `Team: ${payload.team}`,
  ];
  if (payload.email) details.push(`E-Mail: ${payload.email}`);
  if (payload.phone) details.push(`Telefon: ${payload.phone}`);
  if (payload.state) details.push(`Bundesland: ${payload.state}`);
  memberConfirmDetails.textContent = details.join("\n");
  memberConfirmContinue.disabled = true;
  memberConfirmCopy.textContent = "Daten kopieren";
  if (memberConfirmAck) memberConfirmAck.checked = false;

  memberConfirmCopy.onclick = async () => {
    const text = memberConfirmDetails.textContent;
    const fallbackCopy = () => {
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy");
        memberConfirmCopy.textContent = "Kopiert";
      } catch {
        memberConfirmCopy.textContent = "Kopieren fehlgeschlagen";
      }
      document.body.removeChild(ta);
    };
    try {
      await navigator.clipboard.writeText(text);
      memberConfirmCopy.textContent = "Kopiert";
    } catch {
      fallbackCopy();
    }
  };

  if (memberConfirmAck) {
    memberConfirmAck.onchange = () => {
      memberConfirmContinue.disabled = !memberConfirmAck.checked;
    };
  }

  memberConfirmContinue.onclick = async () => {
    if (!state.pendingMember) return;
    try {
      await apiFetch("/api/users", {
        method: "POST",
        body: JSON.stringify(state.pendingMember),
      });
      await loadData();
      closeMember();
      closeMemberConfirmModal();
      state.pendingMember = null;
    } catch (err) {
      memberError.textContent = "Speichern fehlgeschlagen (Benutzername evtl. vergeben).";
      memberError.hidden = false;
    }
  };

  memberConfirmModal.hidden = false;
}

async function saveMemberDraft() {
  const name = memberName.value.trim();
  const role = memberRole.value.trim() || "Mitarbeiter";
  const usernameValue = memberUser.value.trim();
  const passwordValue = memberPass.value.trim();
  if (!name) return;
  if (state.memberDraft.mode === "add" && !usernameValue) return;
  if (!memberTeam.value) return;
  memberError.hidden = true;

  if (state.user.role === "supervisor") {
    if (memberSystemRole.value !== "admin" && memberSystemRole.value !== "supervisor") {
      memberError.textContent = "Supervisor kann nur Teamleiter oder Supervisor anlegen.";
      memberError.hidden = false;
      return;
    }
  }

  if (state.memberDraft.mode === "edit") {
    const payload = {
      name,
      role,
      systemRole: state.user.role === "supervisor" ? memberSystemRole.value : undefined,
      team: state.user.role === "admin" ? state.user.team : memberTeam.value,
      status: memberStatus.value,
      email: memberEmail.value.trim(),
      phone: memberPhone.value.trim(),
      username: usernameValue || undefined,
      password: passwordValue || undefined,
      state: memberState.value,
    };
    try {
      await apiFetch(`/api/users/${state.memberDraft.memberId}`, {
        method: "PUT",
        body: JSON.stringify(payload),
      });
    } catch (err) {
      memberError.textContent = "Speichern fehlgeschlagen.";
      memberError.hidden = false;
      return;
    }
  } else {
    const payload = {
      name,
      role,
      systemRole: state.user.role === "supervisor" ? memberSystemRole.value : "user",
      team: state.user.role === "admin" ? state.user.team : memberTeam.value,
      status: memberStatus.value,
      email: memberEmail.value.trim(),
      phone: memberPhone.value.trim(),
      username: usernameValue,
      password: passwordValue || randomPassword(),
      state: memberState.value,
    };
    state.pendingMember = payload;
    showMemberConfirm(payload);
    return;
  }

  await loadData();
  closeMember();
}

async function deleteMember() {
  const id = state.memberDraft.memberId;
  await apiFetch(`/api/users/${id}`, { method: "DELETE" });
  await loadData();
  closeMember();
}

function openMemberDetail(memberId) {
  const member = state.members.find((m) => m.id === memberId);
  if (!member) return;
  const teamLabel = state.teamOptions.find((t) => String(t.id) === String(member.team))?.label || member.team || "-";
  memberDetailBody.innerHTML = `
    <div class="profile-header">
      <div class="avatar">${initials(member.name)}</div>
      <div>
        <div><strong>${member.name}</strong></div>
        <div class="muted">${member.role}</div>
      </div>
    </div>
    <div class="field-row">
      <div class="badge">${member.systemRole}</div>
      <div class="badge">${member.status}</div>
      <div class="badge">${teamLabel}</div>
    </div>
    <div class="field-row">
      <div><strong>E-Mail:</strong> ${member.email || "-"}</div>
      <div><strong>Telefon:</strong> ${member.phone || "-"}</div>
    </div>
    <div class="field-row">
      <div><strong>Benutzername:</strong> ${member.username || "-"}</div>
    </div>
  `;
  memberDetailModal.hidden = false;
}

function closeMemberDetailModal() {
  memberDetailModal.hidden = true;
}

function renderSwaps() {
  if (!swapList) return;
  const role = state.user.role;
  const teamScope = role === "admin" || role === "user" ? state.user.team : null;
  const swaps = state.swaps.filter((swap) => (teamScope ? swap.team === teamScope : true));
  const openCount = swaps.filter((swap) => swap.status === "offen").length;
  swapCount.textContent = `${openCount} offen`;
  swapList.innerHTML = "";

  swaps.forEach((swap) => {
    const item = document.createElement("div");
    item.className = "swap-item";
    item.innerHTML = `
      <div><strong>${swap.requester}</strong> · ${swap.date}</div>
      <div class="muted">${swap.reason || "Kein Kommentar"}</div>
      <div class="badges">
        <span class="badge">${swap.status}</span>
        <span class="badge">${swap.team}</span>
      </div>
      ${role !== "user" && swap.status === "offen" ? `
        <div class="swap-actions">
          <button class="primary" data-action="approve" data-id="${swap.id}">Freigeben</button>
          <button class="ghost" data-action="deny" data-id="${swap.id}">Ablehnen</button>
        </div>` : ""
      }
    `;
    swapList.appendChild(item);
  });
}

function renderAdminDashboard() {
  if (!state.user || state.user.role !== "admin") return;
  const teamId = String(state.user.team || "unassigned");

  const members = state.members.filter((m) => String(m.team || "unassigned") === teamId);
  adminTeamList.innerHTML = "";
  members.forEach((member) => {
    const card = document.createElement("div");
    card.className = "team-card";
    card.innerHTML = `
      <div class="avatar">${initials(member.name)}</div>
      <div><strong>${member.name}</strong></div>
      <div class="muted">${member.role}</div>
      <div class="badges">
        <span class="badge">${member.status}</span>
      </div>
      <div class="swap-actions">
        <button class="ghost" data-action="edit" data-id="${member.id}">Bearbeiten</button>
        <button class="ghost" data-action="delete" data-id="${member.id}">Löschen</button>
      </div>
    `;
    adminTeamList.appendChild(card);
  });

  const swaps = state.swaps.filter((swap) => swap.team === teamId);
  adminSwapList.innerHTML = "";
  swaps.forEach((swap) => {
    const item = document.createElement("div");
    item.className = "swap-item";
    item.innerHTML = `
      <div><strong>${swap.requester}</strong> · ${swap.date}</div>
      <div class="muted">${swap.reason || "Kein Kommentar"}</div>
      <div class="badges">
        <span class="badge">${swap.status}</span>
      </div>
    `;
    adminSwapList.appendChild(item);
  });

  const sick = members.filter((m) => m.status === "abwesend");
  adminSickList.innerHTML = "";
  sick.forEach((member) => {
    const item = document.createElement("div");
    item.className = "swap-item";
    item.innerHTML = `
      <div><strong>${member.name}</strong></div>
      <div class="muted">${member.role}</div>
    `;
    adminSickList.appendChild(item);
  });
}

function renderUserDashboard() {
  if (!state.user || state.user.role !== "user") return;
  const teamId = String(state.user.team || "unassigned");
  const members = state.members.filter((m) => String(m.team || "unassigned") === teamId);

  const monthStart = new Date(state.userMonthDate.getFullYear(), state.userMonthDate.getMonth(), 1);
  monthStart.setDate(1);
  const year = monthStart.getFullYear();
  const month = monthStart.getMonth();
  const totalDays = new Date(year, month + 1, 0).getDate();
  const startDay = (monthStart.getDay() + 6) % 7; // Monday = 0

  const days = [];
  for (let i = 0; i < startDay; i += 1) {
    const d = new Date(year, month, 1 - (startDay - i));
    days.push(d);
  }
  for (let day = 1; day <= totalDays; day += 1) {
    days.push(new Date(year, month, day));
  }
  while (days.length % 7 !== 0) {
    const last = days[days.length - 1];
    const next = new Date(last);
    next.setDate(last.getDate() + 1);
    days.push(next);
  }

  userWeekLabel.textContent = monthStart.toLocaleDateString("de-DE", { month: "long", year: "numeric" });
  userTeamCalendar.innerHTML = "";
  statusLegend.innerHTML = Object.entries(statusColors)
    .filter(([key]) => key !== "Keine")
    .map(
      ([label, color]) =>
        `<div class="legend-item"><span class="legend-swatch" style="background:${color}"></span>${label}</div>`
    )
    .join("") +
    `<div class="legend-item"><span class="legend-swatch" style="background:${statusColors.Keine}"></span>Keine Arbeitszeit</div>`;

  days.forEach((date) => {
    const cell = document.createElement("div");
    cell.className = "calendar-day";
    const isCurrentMonth = date.getMonth() === month;
    if (!isCurrentMonth) cell.classList.add("empty");
    if (isSameDay(date, new Date())) cell.classList.add("today");

    const dayLabel = date.toLocaleDateString("de-DE", { weekday: "short", day: "2-digit", month: "short" });
    cell.innerHTML = `<div class="date">${dayLabel}</div>`;
    if (isCurrentMonth) {
      cell.addEventListener("click", () => openDayModal(date));
    }

    if (members.length === 0) {
      cell.innerHTML += `<div class="hours muted">Keine Teammitglieder</div>`;
    } else {
      members.forEach((member) => {
        const row = document.createElement("div");
        row.className = "hours team-row";
        const localKey = dateKey(date);
        const entries = (state.teamWeekShifts[localKey] || []).filter(
          (s) => s.userId === member.id
        );
        const segments = entries.length ? entries[0].segments : [];
        const hasWork = segments.length > 0;
        const totalMinutes = calculateDayTotal(segments);
        const status = hasWork ? entries[0].status || "Support" : "Keine";
        const timeLabel = hasWork ? `${formatSegments(segments)} (${formatHours(totalMinutes)})` : "Keine Arbeitszeit";
        const holiday = getHoliday(date, member.state);
        const holidayLabel = holiday ? ` · Feiertag: ${holiday}` : "";
        row.textContent = `${member.name}: ${timeLabel} · ${status}${holidayLabel}`;
        row.style.background = statusColor(status, segments.length > 0);
        cell.appendChild(row);
      });
    }

    if (isCurrentMonth) {
      const editBtn = document.createElement("button");
      editBtn.className = "ghost";
      editBtn.textContent = "Meinen Tag bearbeiten";
      editBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        openDayModal(date);
      });
      cell.appendChild(editBtn);
    }

    userTeamCalendar.appendChild(cell);
  });
}

function openSwapModal() {
  const today = new Date().toISOString().split("T")[0];
  swapDate.value = today;
  swapReason.value = "";
  swapModal.hidden = false;
}

function closeSwapModalDialog() {
  swapModal.hidden = true;
}

async function submitSwapRequest() {
  const date = swapDate.value;
  if (!date) return;
  await apiFetch("/api/swaps", {
    method: "POST",
    body: JSON.stringify({
      requester: state.user.name,
      team: state.user.team,
      date,
      reason: swapReason.value.trim(),
      status: "offen",
    }),
  });
  await loadData();
  const flagKey = `swapNotice_${state.user.team}`;
  localStorage.setItem(flagKey, "true");
  swapHint.hidden = false;
  closeSwapModalDialog();
}

async function loadData() {
  const results = await Promise.allSettled([
    apiFetch("/api/hierarchy"),
    apiFetch("/api/users"),
    apiFetch("/api/swaps"),
  ]);

  const hierarchy = results[0].status === "fulfilled" ? results[0].value : [];
  const users = results[1].status === "fulfilled" ? results[1].value : [];
  const swaps = results[2].status === "fulfilled" ? results[2].value : [];

  state.hierarchy = hierarchy.map((node) => ({
    id: node.id,
    type: node.type,
    name: node.name,
    children: node.children || [],
  }));
  state.members = users.map((u) => ({
    id: u.id,
    name: u.name,
    username: u.username,
    systemRole: u.systemRole,
    team: u.team,
    status: u.status,
    role: u.role,
    email: u.email,
    phone: u.phone,
    state: u.state || "NW",
  }));
  state.swaps = swaps;
  updateTeamOptions();
  renderHierarchy();
  renderTeam();
  renderSwaps();
  renderAdminDashboard();
}

function ensureDefaultStateForUser(member) {
  if (!member) return "NW";
  if (!member.state) {
    member.state = "NW";
  }
  return member.state;
}

function handleLogin(event) {
  if (event) event.preventDefault();
  const username = loginUser.value.trim();
  const password = loginPass.value.trim();
  if (!username || !password) {
    loginError.textContent = "Bitte Benutzername und Passwort eingeben.";
    loginError.hidden = false;
    return;
  }
  loginError.textContent = "Login läuft...";
  loginError.hidden = false;

  apiFetch("/api/login", {
    method: "POST",
    body: JSON.stringify({ username, password }),
  })
    .then((member) => {
      loginError.hidden = true;
      state.user = {
        role: member.systemRole,
        name: member.name,
        team: member.team,
        memberId: member.id,
        state: ensureDefaultStateForUser(member),
      };
      loginView.hidden = true;
      appView.hidden = false;

      const roleLabel = member.systemRole === "supervisor" ? "Supervisor" : member.systemRole === "admin" ? "Teamleiter" : "Benutzer";
      greeting.textContent = `Hallo, ${member.name}`;
      todayText.textContent = formatDate(new Date());
      sidebarName.textContent = member.name;
      sidebarRole.textContent = roleLabel;
      sidebarRole.hidden = member.name.trim().toLowerCase() === roleLabel.toLowerCase();
      sidebarAvatar.textContent = initials(member.name);
      profileName.textContent = member.name;
      profilePosition.textContent = member.role;

      renderMenu(member.systemRole);
      applyRoleUI();
      renderTemplates();
      refreshUserCalendar();
      updateUserProfile();
      checkSwapNotice();

      if (member.systemRole === "supervisor") {
        setActivePage("hierarchy");
      } else if (member.systemRole === "user") {
        setActivePage("dashboard");
      }

      loadData()
        .then(loadTeamWeekShifts)
        .then(renderUserDashboard)
        .catch(() => renderUserDashboard());
      renderAdminDashboard();
    })
    .catch((err) => {
      loginError.textContent = err && err.message ? `Login fehlgeschlagen: ${err.message}` : "Login fehlgeschlagen.";
      loginError.hidden = false;
      loginError.removeAttribute("hidden");
    });
}

async function initSetup() {
  try {
    const bootstrap = await apiFetch("/api/bootstrap/status");
    if (bootstrap?.needsDbConfig) {
      loginView.hidden = true;
      setupView.hidden = true;
      dbSetupView.hidden = true;
      const branding = { companyName: bootstrap.companyName, logo: bootstrap.logo };
      setCompanyBranding(branding);
      if (!bootstrap.companyName) {
        setupView.hidden = false;
        if (bootstrap.companyName) companyName.value = bootstrap.companyName;
      } else {
        dbSetupView.hidden = false;
      }
      return;
    }
  } catch {
    // Not in bootstrap mode
  }

  const settings = await apiFetch("/api/settings");
  if (!settings?.companyName) {
    setupView.hidden = false;
    loginView.hidden = true;
    return;
  }
  setCompanyBranding(settings);
  if (!settings?.hasSupervisor) {
    supervisorSetupView.hidden = false;
    loginView.hidden = true;
    return;
  }
  loginView.hidden = false;
}

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  handleLogin(event);
});
loginBtn.addEventListener("click", handleLogin);
loginUser.addEventListener("keydown", (event) => {
  if (event.key === "Enter") handleLogin(event);
});
loginPass.addEventListener("keydown", (event) => {
  if (event.key === "Enter") handleLogin(event);
});

setupBtn.addEventListener("click", async () => {
  const name = companyName.value.trim();
  if (!name) {
    setupError.hidden = false;
    return;
  }
  setupError.hidden = true;
  let logoData = null;
  if (companyLogo.files && companyLogo.files[0]) {
    logoData = await new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.readAsDataURL(companyLogo.files[0]);
    });
  }

  try {
    await apiFetch("/api/bootstrap/company", {
      method: "POST",
      body: JSON.stringify({ companyName: name, logo: logoData }),
    });
    setupView.hidden = true;
    dbSetupView.hidden = false;
  } catch (err) {
    setupError.textContent = "Setup fehlgeschlagen.";
    setupError.hidden = false;
  }
});

function updateDbFields() {
  const isExternal = dbMode.value === "external";
  dbExternalFields.hidden = !isExternal;
}

dbMode.addEventListener("change", updateDbFields);
dbClient.addEventListener("change", updateDbFields);
updateDbFields();

dbSetupBtn.addEventListener("click", async () => {
  dbSetupError.hidden = true;
  dbSetupResult.hidden = true;
  if (dbSetupActions) dbSetupActions.hidden = true;

  const payload = { dbClient: dbClient.value, mode: dbMode.value };
  if (payload.mode === "external") {
    payload.dbHost = dbHost.value.trim();
    payload.dbPort = dbPort.value.trim();
    payload.dbName = dbName.value.trim();
    payload.dbUser = dbUser.value.trim();
    payload.dbPassword = dbPass.value;
    if (!payload.dbHost || !payload.dbPort || !payload.dbName || !payload.dbUser || !payload.dbPassword) {
      dbSetupError.hidden = false;
      return;
    }
  }

  try {
    const result = await apiFetch("/api/bootstrap/config", {
      method: "POST",
      body: JSON.stringify(payload),
    });
    dbSetupResult.textContent = `DB eingerichtet. Benutzer: ${result.dbUser}, Passwort: ${result.dbPassword}, DB: ${result.dbName}, Host: ${result.dbHost}:${result.dbPort}. Bitte Daten kopieren und anschließend auf „Weiter“ klicken.`;
    dbSetupResult.hidden = false;
    if (dbSetupActions) dbSetupActions.hidden = false;
    if (dbSetupCopy) {
      dbSetupCopy.onclick = async () => {
        const text = `DB Benutzer: ${result.dbUser}\nDB Passwort: ${result.dbPassword}\nDB Name: ${result.dbName}\nDB Host: ${result.dbHost}\nDB Port: ${result.dbPort}`;
        try {
          await navigator.clipboard.writeText(text);
          dbSetupCopy.textContent = "Kopiert";
          setTimeout(() => (dbSetupCopy.textContent = "Daten kopieren"), 2000);
        } catch {
          dbSetupCopy.textContent = "Kopieren fehlgeschlagen";
          setTimeout(() => (dbSetupCopy.textContent = "Daten kopieren"), 2000);
        }
      };
    }
    if (dbSetupContinue) {
      dbSetupContinue.onclick = () => location.reload();
    }
  } catch (err) {
    dbSetupError.textContent = err && err.message ? `Datenbank-Setup fehlgeschlagen: ${err.message}` : "Datenbank-Setup fehlgeschlagen.";
    dbSetupError.hidden = false;
  }
});

supervisorSetupBtn.addEventListener("click", async () => {
  const user = supervisorUser.value.trim();
  const pass = supervisorPass.value.trim();
  if (!user || !pass) {
    supervisorSetupError.hidden = false;
    return;
  }
  supervisorSetupError.hidden = true;
  await apiFetch("/api/setup", {
    method: "POST",
    body: JSON.stringify({
      name: supervisorName.value.trim() || "Supervisor",
      username: user,
      password: pass,
      state: supervisorState.value,
    }),
  });
  supervisorSetupView.hidden = true;
  loginView.hidden = false;
});

weeklyTargetInput.addEventListener("input", updateWeeklyTotal);

addRootBtn.addEventListener("click", () => {
  if (state.user.role !== "supervisor") return;
  openHierarchyModal({ mode: "add" });
});

hierarchyTree.addEventListener("click", (event) => {
  const btn = event.target.closest("button");
  if (!btn || state.user.role !== "supervisor") return;
  const action = btn.dataset.action;
  const id = btn.dataset.id;
  if (action === "add") openHierarchyModal({ mode: "add", parentId: Number(id) });
  if (action === "edit") openHierarchyModal({ mode: "edit", nodeId: Number(id) });
});

hierarchyTree.addEventListener("dragstart", (event) => {
  const item = event.target.closest(".hierarchy-item");
  if (!item || state.user.role !== "supervisor") return;
  event.dataTransfer.setData("text/plain", item.dataset.id);
});

hierarchyTree.addEventListener("dragover", (event) => {
  const item = event.target.closest(".hierarchy-item");
  if (!item || state.user.role !== "supervisor") return;
  const sourceId = Number(event.dataTransfer.getData("text/plain"));
  const targetId = Number(item.dataset.id);
  if (!sourceId || !targetId) return;
  const source = findNode(state.hierarchy, sourceId);
  const target = findNode(state.hierarchy, targetId);
  if (!source || !target) return;
  if (childTypes[target.node.type].includes(source.node.type) && !isDescendant(sourceId, targetId)) {
    event.preventDefault();
    item.classList.add("drag-target");
  }
});

hierarchyTree.addEventListener("dragleave", (event) => {
  const item = event.target.closest(".hierarchy-item");
  if (item) item.classList.remove("drag-target");
});

hierarchyTree.addEventListener("drop", (event) => {
  const item = event.target.closest(".hierarchy-item");
  if (!item || state.user.role !== "supervisor") return;
  const sourceId = Number(event.dataTransfer.getData("text/plain"));
  const targetId = Number(item.dataset.id);
  item.classList.remove("drag-target");
  moveNode(sourceId, targetId);
});

saveHierarchyBtn.addEventListener("click", saveHierarchyDraft);
deleteHierarchyBtn.addEventListener("click", deleteHierarchy);
closeHierarchyModal.addEventListener("click", closeHierarchy);

swapRequestBtn.addEventListener("click", () => {
  openSwapModal();
});

avatarUpload.addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    localStorage.setItem("avatar", reader.result);
    updateUserProfile();
  };
  reader.readAsDataURL(file);
});

removeAvatarBtn.addEventListener("click", () => {
  localStorage.removeItem("avatar");
  updateUserProfile();
});

applyTemplateBtn.addEventListener("click", applyTemplateToMonth);
templateGrid.addEventListener("change", updateTemplateFromInputs);
clearMonthBtn.addEventListener("click", clearMonth);

teamSearch.addEventListener("input", renderTeam);
teamFilter.addEventListener("change", renderTeam);

addMemberBtn.addEventListener("click", () => {
  if (state.user.role === "user") return;
  if (!state.teamOptions.length) return;
  openMemberModal({ mode: "add" });
});

adminAddMember.addEventListener("click", () => {
  if (state.user.role !== "admin") return;
  openMemberModal({ mode: "add" });
});

addTeamBtn.addEventListener("click", () => {
  if (state.user.role === "user") return;
  if (!teamParent.value) return;
  teamName.value = "";
  teamModal.hidden = false;
});

function closeTeamModalDialog() {
  teamModal.hidden = true;
}

saveTeam.addEventListener("click", () => {
  const name = teamName.value.trim();
  if (!name || !teamParent.value) return;
  apiFetch("/api/hierarchy", {
    method: "POST",
    body: JSON.stringify({
      parentId: Number(teamParent.value),
      type: "team",
      name,
    }),
  }).then(() => {
    closeTeamModalDialog();
    loadData();
  });
});

closeTeamModal.addEventListener("click", closeTeamModalDialog);
cancelTeam.addEventListener("click", closeTeamModalDialog);

teamList.addEventListener("click", (event) => {
  const btn = event.target.closest("button");
  if (!btn) return;
  if (btn.dataset.action === "edit") openMemberModal({ mode: "edit", memberId: Number(btn.dataset.id) });
  if (btn.dataset.action === "view") openMemberDetail(Number(btn.dataset.id));
});

adminTeamList.addEventListener("click", (event) => {
  const btn = event.target.closest("button");
  if (!btn) return;
  const id = Number(btn.dataset.id);
  if (btn.dataset.action === "edit") openMemberModal({ mode: "edit", memberId: id });
  if (btn.dataset.action === "delete") {
    state.memberDraft = { mode: "edit", memberId: id };
    deleteMember();
  }
});

saveMemberBtn.addEventListener("click", saveMemberDraft);
deleteMemberBtn.addEventListener("click", deleteMember);
closeMemberModal.addEventListener("click", closeMember);
if (closeMemberConfirm) closeMemberConfirm.addEventListener("click", closeMemberConfirmModal);

closeMemberDetail.addEventListener("click", closeMemberDetailModal);
closeMemberDetailFooter.addEventListener("click", closeMemberDetailModal);

swapList.addEventListener("click", (event) => {
  const btn = event.target.closest("button");
  if (!btn) return;
  const id = Number(btn.dataset.id);
  const swap = state.swaps.find((s) => s.id === id);
  if (!swap) return;
  if (btn.dataset.action === "approve") swap.status = "freigegeben";
  if (btn.dataset.action === "deny") swap.status = "abgelehnt";
  apiFetch(`/api/swaps/${id}`, {
    method: "PUT",
    body: JSON.stringify({ status: swap.status }),
  }).then(loadData);
});

submitSwap.addEventListener("click", submitSwapRequest);
closeSwapModal.addEventListener("click", closeSwapModalDialog);
cancelSwap.addEventListener("click", closeSwapModalDialog);

prevMonthBtn.addEventListener("click", () => {
  state.calendarDate.setMonth(state.calendarDate.getMonth() - 1);
  refreshUserCalendar();
});

nextMonthBtn.addEventListener("click", () => {
  state.calendarDate.setMonth(state.calendarDate.getMonth() + 1);
  refreshUserCalendar();
});

if (userPrevMonth) {
  userPrevMonth.addEventListener("click", async () => {
    state.userMonthDate.setMonth(state.userMonthDate.getMonth() - 1);
    await refreshUserCalendar();
    await loadTeamWeekShifts();
    renderUserDashboard();
  });
}

if (userNextMonth) {
  userNextMonth.addEventListener("click", async () => {
    state.userMonthDate.setMonth(state.userMonthDate.getMonth() + 1);
    await refreshUserCalendar();
    await loadTeamWeekShifts();
    renderUserDashboard();
  });
}

segmentsContainer.addEventListener("input", (event) => {
  const target = event.target;
  const index = Number(target.dataset.index);
  const field = target.dataset.field;
  if (Number.isNaN(index)) return;
  state.modalSegments[index][field] = target.value;
  renderSegments();
});

segmentsContainer.addEventListener("click", (event) => {
  const btn = event.target.closest("button");
  if (!btn) return;
  const removeIndex = btn.dataset.remove;
  if (removeIndex !== undefined) {
    state.modalSegments.splice(Number(removeIndex), 1);
    if (state.modalSegments.length === 0) {
      state.modalSegments.push({ start: "07:00", end: "15:30" });
    }
    renderSegments();
  }
});

addSegmentBtn.addEventListener("click", () => {
  state.modalSegments.push({ start: "17:00", end: "20:00" });
  renderSegments();
});

closeModalBtn.addEventListener("click", () => {
  dayModal.hidden = true;
});

saveDayBtn.addEventListener("click", saveDay);

deleteDayBtn.addEventListener("click", deleteDay);

logoutBtn.addEventListener("click", () => {
  state.user = null;
  resetToLogin();
});

window.addEventListener("click", (event) => {
  return event;
});

renderStateOptions();
supervisorState.innerHTML = memberState.innerHTML;
resetToLogin();
initSetup();
