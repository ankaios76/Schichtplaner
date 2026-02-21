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
const companyAccent = document.getElementById("companyAccent");
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
const sidebarCompany = document.getElementById("sidebarCompany");
const sidebarLogo = document.getElementById("sidebarLogo");
const profileName = document.getElementById("profileName");
const profilePhoto = document.getElementById("profilePhoto");
const profilePosition = document.getElementById("profilePosition");
const printCard = document.getElementById("printCard");
const printRange = document.getElementById("printRange");
const printDate = document.getElementById("printDate");
const printDateField = document.getElementById("printDateField");
const printMonth = document.getElementById("printMonth");
const printMonthField = document.getElementById("printMonthField");
const printDownload = document.getElementById("printDownload");
const printHint = document.getElementById("printHint");
const pageHierarchy = document.getElementById("pageHierarchy");
const pageTeam = document.getElementById("pageTeam");
const pageUser = document.getElementById("pageUser");
const pageOncall = document.getElementById("pageOncall");
const pageProfile = document.getElementById("pageProfile");
const pageSwap = document.getElementById("pageSwap");
const pageSupport = document.getElementById("pageSupport");
const pageTeamCalendar = document.getElementById("pageTeamCalendar");
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
const oncallTemplateGrid = document.getElementById("oncallTemplateGrid");
const oncallApplyTemplateBtn = document.getElementById("oncallApplyTemplate");
const oncallClearMonthBtn = document.getElementById("oncallClearMonth");
const oncallTemplateNotice = document.getElementById("oncallTemplateNotice");
const oncallCalendarGrid = document.getElementById("oncallCalendarGrid");
const oncallMonthLabel = document.getElementById("oncallMonthLabel");
const oncallPrevMonthBtn = document.getElementById("oncallPrevMonth");
const oncallNextMonthBtn = document.getElementById("oncallNextMonth");
const weeklyTotal = document.getElementById("weeklyTotal");
const defaultDashboard = document.getElementById("defaultDashboard");
const pageAdminDashboard = document.getElementById("pageAdminDashboard");
const pageUserDashboard = document.getElementById("pageUserDashboard");
const userTeamCalendar = document.getElementById("userTeamCalendar");
const userWeekLabel = document.getElementById("userWeekLabel");
const userPrevPage = document.getElementById("userPrevPage");
const userNextPage = document.getElementById("userNextPage");
const userPrevDay = document.getElementById("userPrevDay");
const userNextDay = document.getElementById("userNextDay");
const userDayPager = document.getElementById("userDayPager");
const dashboardMode = document.getElementById("dashboardMode");
const modeWork = document.getElementById("modeWork");
const modeOncall = document.getElementById("modeOncall");
const teamCalendarGrid = document.getElementById("teamCalendarGrid");
const teamCalendarLabel = document.getElementById("teamCalendarLabel");
const teamCalendarPrev = document.getElementById("teamCalendarPrev");
const teamCalendarNext = document.getElementById("teamCalendarNext");
const teamCalendarLegend = document.getElementById("teamCalendarLegend");
const teamCalendarPrevDay = document.getElementById("teamCalendarPrevDay");
const teamCalendarNextDay = document.getElementById("teamCalendarNextDay");
const teamCalendarDayPager = document.getElementById("teamCalendarDayPager");
const teamCoreCard = document.getElementById("teamCoreCard");
const teamCoreStart = document.getElementById("teamCoreStart");
const teamCoreEnd = document.getElementById("teamCoreEnd");
const teamCoreSave = document.getElementById("teamCoreSave");
const statusLegend = document.getElementById("statusLegend");
const adminTeamList = document.getElementById("adminTeamList");
const adminSwapList = document.getElementById("adminSwapList");
const adminSickList = document.getElementById("adminSickList");
const adminAddMember = document.getElementById("adminAddMember");
const teamPageTitle = document.getElementById("teamPageTitle");
const teamPageDesc = document.getElementById("teamPageDesc");
const swapRequestsCard = document.getElementById("swapRequestsCard");
const supportFrame = document.getElementById("supportFrame");
const supportTitle = document.getElementById("supportTitle");
const supportDownload = document.getElementById("supportDownload");

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
const memberOncall = document.getElementById("memberOncall");
const memberRoleField = document.getElementById("memberRoleField");
const memberTeamField = document.getElementById("memberTeamField");
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
const avatarCropModal = document.getElementById("avatarCropModal");
const avatarCropCanvas = document.getElementById("avatarCropCanvas");
const avatarCropZoom = document.getElementById("avatarCropZoom");
const closeAvatarCrop = document.getElementById("closeAvatarCrop");
const cancelAvatarCrop = document.getElementById("cancelAvatarCrop");
const applyAvatarCrop = document.getElementById("applyAvatarCrop");

const swapList = document.getElementById("swapList");
const swapCount = document.getElementById("swapCount");
const swapModal = document.getElementById("swapModal");
const closeSwapModal = document.getElementById("closeSwapModal");
const cancelSwap = document.getElementById("cancelSwap");
const submitSwap = document.getElementById("submitSwap");
const swapDate = document.getElementById("swapDate");
const swapReason = document.getElementById("swapReason");
const logoutBtn = document.getElementById("logoutBtn");
const settingsCompany = document.getElementById("settingsCompany");
const settingsLogo = document.getElementById("settingsLogo");
const settingsAccent = document.getElementById("settingsAccent");
const settingsSave = document.getElementById("settingsSave");
const settingsFooter = document.getElementById("settingsFooter");
const globalFooter = document.getElementById("globalFooter");
const appFooter = document.getElementById("appFooter");
const holidayState = document.getElementById("holidayState");
const holidayDate = document.getElementById("holidayDate");
const holidayName = document.getElementById("holidayName");
const holidayAdd = document.getElementById("holidayAdd");
const holidayRemove = document.getElementById("holidayRemove");
const holidayList = document.getElementById("holidayList");
const holidayViewState = document.getElementById("holidayViewState");
const holidayComputedList = document.getElementById("holidayComputedList");
const activityInput = document.getElementById("activityInput");
const activityAdd = document.getElementById("activityAdd");
const activityList = document.getElementById("activityList");
const oncallInput = document.getElementById("oncallInput");
const oncallAdd = document.getElementById("oncallAdd");
const oncallList = document.getElementById("oncallList");
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
  oncallCalendarDate: new Date(),
  oncallDayEntries: JSON.parse(localStorage.getItem("oncallEntries") || "{}"),
  oncallTemplate: JSON.parse(localStorage.getItem("oncallTemplate") || "{}"),
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
  pendingMemberSubmitting: false,
  userWeekStart: null,
  userWeekOffset: 0,
  userWeekPageSize: 1,
  teamCalendarWeekStart: null,
  teamCalendarWeekOffset: 0,
  teamCalendarWeekPageSize: 1,
  activeShiftType: "work",
  dashboardMode: "work",
  settings: {},
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
    { id: "settings", label: "Grundeinstellungen" },
    { id: "team", label: "Teamleiter und Supervisor" },
    { id: "support", label: "Hilfe" },
  ],
  admin: [
    { id: "dashboard", label: "Teamleiter-Dashboard" },
    { id: "team-calendar", label: "Teamkalender" },
    { id: "team", label: "Team" },
    { id: "user", label: "Meine Arbeitszeit" },
    { id: "profile", label: "Mein Profil" },
    { id: "swap", label: "Schichttausch" },
    { id: "support", label: "Hilfe" },
  ],
  user: [
    { id: "dashboard", label: "Startseite" },
    { id: "team", label: "Team" },
    { id: "user", label: "Meine Arbeitszeit" },
    { id: "oncall", label: "Meine Rufbereitschaft" },
    { id: "profile", label: "Mein Profil" },
    { id: "swap", label: "Schichttausch" },
    { id: "support", label: "Hilfe" },
  ],
};

const weekdayLabels = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];
let holidayOverrides = {};

const menuIcons = {
  dashboard: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1v-9z" /></svg>`,
  hierarchy: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h6v6H4zM14 4h6v6h-6zM9 14h6v6H9zM7 10h10v2H7zM12 12v2" /></svg>`,
  settings: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm8.5 3.5l-2 1 .2 2.2-2.2.8-1.2 1.9-2.2-.7-1.6 1.6-1.6-1.6-2.2.7-1.2-1.9-2.2-.8.2-2.2-2-1 2-1-.2-2.2 2.2-.8 1.2-1.9 2.2.7 1.6-1.6 1.6 1.6 2.2-.7 1.2 1.9 2.2.8-.2 2.2 2 1z" /></svg>`,
  team: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 12a3 3 0 1 0-3-3 3 3 0 0 0 3 3zm10 0a3 3 0 1 0-3-3 3 3 0 0 0 3 3zM3 20a4 4 0 0 1 8 0zM13 20a4 4 0 0 1 8 0z" /></svg>`,
  "team-calendar": `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 2v3M17 2v3M3 8h18M5 6h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" /></svg>`,
  user: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm-7 9a7 7 0 0 1 14 0z" /></svg>`,
  profile: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm-7 9a7 7 0 0 1 14 0z" /></svg>`,
  swap: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 7h9l-2-2M17 17H8l2 2M7 7l-2 2m12 8l2-2" /></svg>`,
  oncall: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.5 3A2.5 2.5 0 0 0 4 5.5v13A2.5 2.5 0 0 0 6.5 21h11a2.5 2.5 0 0 0 2.5-2.5v-13A2.5 2.5 0 0 0 17.5 3h-11zm5.5 5a4 4 0 1 1-4 4 4 4 0 0 1 4-4zm0 2a2 2 0 1 0 2 2 2 2 0 0 0-2-2zm-3.5 8h7v-1a3.5 3.5 0 0 0-7 0z"/></svg>`,
  support: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 17a1.25 1.25 0 1 1 1.25-1.25A1.25 1.25 0 0 1 12 19zm1.6-5.2c-.9.6-1.1 1-1.1 1.7v.5h-2v-.8c0-1.2.5-2 1.8-2.9.8-.6 1.2-1 1.2-1.8a1.8 1.8 0 0 0-3.6 0H8a3.8 3.8 0 0 1 7.6 0c0 1.4-.8 2.4-2 3.3z" /></svg>`,
};

function setAccentColor(color) {
  if (!color) return;
  const hex = color.replace("#", "");
  if (hex.length !== 6) return;
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  const dark = (v) => Math.max(0, Math.min(255, Math.round(v * 0.78)));
  const soft = (v) => Math.max(0, Math.min(255, Math.round(v + (255 - v) * 0.75)));
  document.documentElement.style.setProperty("--accent", `#${hex}`);
  document.documentElement.style.setProperty("--accent-dark", `rgb(${dark(r)}, ${dark(g)}, ${dark(b)})`);
  document.documentElement.style.setProperty("--accent-soft", `rgb(${soft(r)}, ${soft(g)}, ${soft(b)})`);
}

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
    if (sidebarCompany) sidebarCompany.textContent = settings.companyName;
  }
  if (settings?.logo) {
    [loginLogo, setupLogo, supervisorSetupLogo, dbSetupLogo, sidebarLogo].forEach((el) => {
      if (!el) return;
      el.style.backgroundImage = `url(${settings.logo})`;
      el.style.backgroundColor = "#ffffff";
      el.textContent = "";
    });
  } else {
    [loginLogo, setupLogo, supervisorSetupLogo, dbSetupLogo, sidebarLogo].forEach((el) => {
      if (!el) return;
      el.style.backgroundImage = "";
      el.style.backgroundColor = "var(--accent)";
    });
  }
  if (settings?.accent) {
    setAccentColor(settings.accent);
  }
  if (settings?.footerText) {
    if (globalFooter) globalFooter.innerHTML = settings.footerText;
    if (appFooter) appFooter.innerHTML = settings.footerText;
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

function formatDateShort(value) {
  if (!value) return "";
  const date = typeof value === "string" ? new Date(value) : value;
  if (Number.isNaN(date.getTime())) return String(value);
  return date.toLocaleDateString("de-DE", { day: "2-digit", month: "2-digit", year: "numeric" });
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

const defaultActivityOptions = [
  { name: "Support", color: statusColors.Support },
  { name: "Projekt", color: statusColors.Projekt },
  { name: "Betriebsrat", color: statusColors.Betriebsrat },
  { name: "Urlaub", color: statusColors.Urlaub },
  { name: "Urlaub halber Tag", color: statusColors["Urlaub halber Tag"] },
  { name: "Krank", color: statusColors.Krank },
  { name: "Rufbereitschaft Voice/Daten", color: statusColors["Rufbereitschaft Voice/Daten"] },
  { name: "Rufbereitschaft Fraud", color: statusColors["Rufbereitschaft Fraud"] },
];

let activityOptions = [...defaultActivityOptions];

const defaultOncallOptions = [
  { name: "Keine Rufbereitschaft", color: "#eeeeee" },
  { name: "KM Voice/Daten", color: "#e3f2ff" },
  { name: "KC Voice", color: "#e9ffe6" },
  { name: "KC Access", color: "#fff4d6" },
  { name: "Fraudbereitschaft", color: "#ffe1ec" },
];

let oncallOptions = [...defaultOncallOptions];

function statusColor(status, hasSegments) {
  if (!hasSegments) return statusColors.Keine;
  const found = activityOptions.find((opt) => opt.name === status);
  return (found && found.color) || statusColors[status] || statusColors.Support;
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
  if (holidayOverrides[state] && Object.prototype.hasOwnProperty.call(holidayOverrides[state], key)) {
    return holidayOverrides[state][key] || null;
  }
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

function getWeekStart(date) {
  const d = new Date(date);
  const day = (d.getDay() + 6) % 7; // Monday = 0
  d.setDate(d.getDate() - day);
  d.setHours(0, 0, 0, 0);
  return d;
}

function dateKeyFromDate(date) {
  const d = new Date(date);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function getMonthRange(date) {
  const d = new Date(date.getFullYear(), date.getMonth(), 1);
  const start = new Date(d);
  const end = new Date(d.getFullYear(), d.getMonth() + 1, 0);
  return { start, end };
}

function setActivePage(pageId) {
  state.activePage = pageId;
  pageHierarchy.hidden = pageId !== "hierarchy";
  pageTeam.hidden = pageId !== "team";
  pageUser.hidden = pageId !== "user";
  if (pageOncall) pageOncall.hidden = pageId !== "oncall";
  pageProfile.hidden = pageId !== "profile";
  pageSwap.hidden = pageId !== "swap";
  if (pageSupport) pageSupport.hidden = pageId !== "support";
  const pageSettings = document.getElementById("pageSettings");
  if (pageSettings) pageSettings.hidden = pageId !== "settings";
  if (pageTeamCalendar) pageTeamCalendar.hidden = pageId !== "team-calendar";
  pageUserDashboard.hidden = true;
  const showDashboard = pageId === "dashboard";
  if (state.user && state.user.role === "admin") {
    defaultDashboard.style.display = "none";
    pageAdminDashboard.hidden = !showDashboard;
    if (!pageTeamCalendar.hidden) {
      loadTeamWeekShifts().then(renderTeamCalendar).catch(() => renderTeamCalendar());
    }
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

function renderTeamCalendar() {
  if (!state.user || state.user.role !== "admin") return;
  if (!teamCalendarGrid) return;
  const teamId = String(state.user.team || "unassigned");
  const members = state.members.filter((m) => String(m.team || "unassigned") === teamId);

  if (!state.teamCalendarWeekStart) state.teamCalendarWeekStart = getWeekStart(new Date());
  const weekStart = new Date(state.teamCalendarWeekStart);
  const days = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(weekStart);
    d.setDate(weekStart.getDate() + i);
    return d;
  });

  const startLabel = days[0].toLocaleDateString("de-DE");
  const endLabel = days[6].toLocaleDateString("de-DE");
  teamCalendarLabel.textContent = `${startLabel} – ${endLabel}`;
  teamCalendarLegend.innerHTML =
    activityOptions
      .map(
        (opt) =>
          `<div class="legend-item"><span class="legend-swatch" style="background:${opt.color || statusColors.Support}"></span>${opt.name}</div>`
      )
      .join("") +
    `<div class="legend-item"><span class="legend-swatch" style="background:${statusColors.Keine}"></span>Keine Arbeitszeit</div>`;

  teamCalendarGrid.innerHTML = "";

  const dayWidth = 260;
  const containerWidth = teamCalendarGrid.getBoundingClientRect().width || 780;
  const daysPerPage = Math.max(1, Math.floor(containerWidth / dayWidth));
  state.teamCalendarWeekPageSize = daysPerPage;
  const maxOffset = Math.max(0, 7 - daysPerPage);
  state.teamCalendarWeekOffset = Math.min(state.teamCalendarWeekOffset, maxOffset);
  const visibleDays = days.slice(state.teamCalendarWeekOffset, state.teamCalendarWeekOffset + daysPerPage);

  if (teamCalendarDayPager) teamCalendarDayPager.hidden = maxOffset === 0;
  if (teamCalendarPrevDay) teamCalendarPrevDay.disabled = state.teamCalendarWeekOffset === 0;
  if (teamCalendarNextDay) teamCalendarNextDay.disabled = state.teamCalendarWeekOffset >= maxOffset;

  const usersWithShifts = new Map();
  days.forEach((date) => {
    const key = dateKey(date);
    (state.teamWeekShifts[key] || []).forEach((entry) => {
      if (!usersWithShifts.has(entry.userId)) {
        const member = members.find((m) => m.id === entry.userId);
        usersWithShifts.set(entry.userId, {
          id: entry.userId,
          name: entry.name || (member ? member.name : "Unbekannt"),
          avatar: member ? member.avatar : null,
        });
      }
    });
  });

  const userList = Array.from(usersWithShifts.values()).sort((a, b) => a.name.localeCompare(b.name));
  const columnWidth = 28;
  const core = getCurrentTeamCore();

  visibleDays.forEach((date) => {
    const cell = document.createElement("div");
    cell.className = "day-column";
    if (isSameDay(date, new Date())) cell.classList.add("today");

    const dayLabel = date.toLocaleDateString("de-DE", { weekday: "short", day: "2-digit", month: "short" });
    const header = document.createElement("div");
    header.className = "day-header";
    header.textContent = dayLabel;

    const body = document.createElement("div");
    body.className = "day-body";

    for (let h = 0; h <= 24; h += 1) {
      const label = document.createElement("div");
      label.className = "hour-label";
      label.style.top = `${(h / 24) * 100}%`;
      label.textContent = `${String(h).padStart(2, "0")}:00`;
      body.appendChild(label);
    }

    addCoreLines(body, core);

    const key = dateKey(date);
    const entries = state.teamWeekShifts[key] || [];
    entries.forEach((entry) => {
      const userIndex = userList.findIndex((u) => u.id === entry.userId);
      if (userIndex === -1) return;
      const left = 44 + userIndex * columnWidth;
      const segments = entry.segments || [];
      segments.forEach((seg) => {
        const start = minutesBetween("00:00", seg.start);
        const end = minutesBetween("00:00", seg.end);
        if (end <= start) return;
        const top = (start / 1440) * 100;
        const height = ((end - start) / 1440) * 100;
        const bar = document.createElement("div");
        bar.className = "shift-bar";
        bar.style.top = `${top}%`;
        bar.style.height = `${height}%`;
        bar.style.left = `${left}px`;
        bar.style.background = statusColor(entry.status || "Support", true);
        body.appendChild(bar);
      });
      if (segments.length) {
        const u = userList[userIndex];
        segments.forEach((seg) => {
          const start = minutesBetween("00:00", seg.start);
          const top = (start / 1440) * 100;
          body.appendChild(createShiftAvatar(u, top, left));
        });
      }
    });

    cell.appendChild(header);
    cell.appendChild(body);
    teamCalendarGrid.appendChild(cell);
  });
}

function renderMenu(role) {
  menuList.innerHTML = "";
  const items = menus[role].filter((item) => {
    if (item.id !== "oncall") return true;
    const types = Array.isArray(state.user?.oncallType) ? state.user.oncallType : [state.user?.oncallType];
    return types && types.some((entry) => entry && entry !== "Keine Rufbereitschaft");
  });
  items.forEach((item) => {
    const btn = document.createElement("button");
    const icon = menuIcons[item.id] || "";
    btn.innerHTML = `${icon}<span>${item.label}</span>`;
    btn.dataset.page = item.id;
    btn.addEventListener("click", () => setActivePage(item.id));
    menuList.appendChild(btn);
  });
  setActivePage("dashboard");
}

function renderHolidayOverrides() {
  if (!holidayList) return;
  const state = holidayState ? holidayState.value : "BUND";
  const map = (holidayOverrides && holidayOverrides[state]) || {};
  const entries = Object.entries(map).sort(([a], [b]) => (a < b ? -1 : 1));
  holidayList.innerHTML = entries.length
    ? entries
        .map(
          ([date, name]) =>
            `<div class="template-day"><strong>${formatDateShort(date)}</strong><div class="muted">${name || "entfernt"}</div></div>`
        )
        .join("")
    : `<div class="muted">Keine Korrekturen.</div>`;
}

function renderComputedHolidays() {
  if (!holidayComputedList) return;
  const state = holidayViewState ? holidayViewState.value : "BUND";
  const year = new Date().getFullYear();
  const map = holidayMapForYear(year)[state] || {};
  const entries = Object.entries(map).sort(([a], [b]) => (a < b ? -1 : 1));
  holidayComputedList.innerHTML = entries.length
    ? entries
        .map(
          ([date, name]) =>
            `<div class="template-day"><strong>${formatDateShort(date)}</strong><div class="muted">${name || "Feiertag"}</div></div>`
        )
        .join("")
    : `<div class="muted">Keine Feiertage gefunden.</div>`;
}

function renderActivityOptions() {
  if (!activityList) return;
  activityList.innerHTML = activityOptions
    .map(
      (opt, index) =>
        `<div class="template-day">
          <div class="legend-item">
            <span class="legend-swatch" style="background:${opt.color || statusColors.Support}"></span>
            <strong>${opt.name}</strong>
          </div>
          <label class="field">
            <span>Farbe</span>
            <input type="color" data-color="${index}" value="${opt.color || statusColors.Support}" />
          </label>
          <button class="ghost" data-remove="${opt.name}">Entfernen</button>
        </div>`
    )
    .join("");
}

function renderOncallOptions() {
  if (!oncallList) return;
  oncallList.innerHTML = oncallOptions
    .map(
      (opt, index) =>
        `<div class="template-day">
          <div class="legend-item">
            <span class="legend-swatch" style="background:${opt.color || '#eeeeee'}"></span>
            <strong>${opt.name}</strong>
          </div>
          <label class="field">
            <span>Farbe</span>
            <input type="color" data-oncall-color="${index}" value="${opt.color || '#eeeeee'}" />
          </label>
          ${opt.name === "Keine Rufbereitschaft" ? "" : `<button class="ghost" data-remove="${opt.name}">Entfernen</button>`}
        </div>`
    )
    .join("");
}

function updateOncallSelects() {
  if (!memberOncall) return;
  memberOncall.innerHTML = oncallOptions.map((opt) => `<option value="${opt.name}">${opt.name}</option>`).join("");
}

function ensureOncallOption(name) {
  if (!name) return;
  if (!oncallOptions.find((opt) => opt.name === name)) {
    oncallOptions.push({ name, color: "#e3f2ff" });
  }
}

function normalizeOncallSelection(list) {
  const unique = Array.from(new Set(list.filter(Boolean)));
  if (!unique.length) return ["Keine Rufbereitschaft"];
  if (unique.length > 1) return unique.filter((name) => name !== "Keine Rufbereitschaft");
  return unique;
}

function getSelectedOncallTypes() {
  if (!memberOncall) return ["Keine Rufbereitschaft"];
  const selected = Array.from(memberOncall.selectedOptions || []).map((opt) => opt.value);
  return normalizeOncallSelection(selected);
}

function setSelectedOncallTypes(list) {
  if (!memberOncall) return;
  const normalized = normalizeOncallSelection(list || []);
  Array.from(memberOncall.options).forEach((opt) => {
    opt.selected = normalized.includes(opt.value);
  });
}

function applyActivityOptionsToUI() {
  if (!dayStatus) return;
  const selected = dayStatus.value;
  dayStatus.innerHTML = activityOptions.map((opt) => `<option value="${opt.name}">${opt.name}</option>`).join("");
  const names = activityOptions.map((opt) => opt.name);
  dayStatus.value = selected && names.includes(selected) ? selected : names[0] || "Support";
  statusLegend.innerHTML = activityOptions
    .map(
      (opt) =>
        `<div class="legend-item"><span class="legend-swatch" style="background:${opt.color || statusColors.Support}"></span>${opt.name}</div>`
    )
    .join("") +
    `<div class="legend-item"><span class="legend-swatch" style="background:${statusColors.Keine}"></span>Keine Arbeitszeit</div>`;
}

async function saveSettingsWithLogo(logoData) {
  const payload = {
    companyName: settingsCompany.value.trim(),
    logo: logoData !== null ? logoData : (state.settings.logo || null),
    accent: settingsAccent.value || null,
    holidayOverrides,
    activityOptions,
    oncallOptions,
    footerText: settingsFooter ? settingsFooter.value.trim() : null,
  };
  await apiFetch("/api/settings", {
    method: "POST",
    body: JSON.stringify(payload),
  });
  state.settings = { ...state.settings, ...payload };
  setCompanyBranding(payload);
}

function applyRoleUI() {
  const role = state.user.role;
  addRootBtn.hidden = role !== "supervisor";
  addMemberBtn.hidden = role === "user";
  addTeamBtn.hidden = role !== "admin";
  if (swapRequestsCard) swapRequestsCard.hidden = role === "supervisor";
  if (teamCoreCard) teamCoreCard.hidden = role !== "admin";
  if (printCard) printCard.hidden = role === "supervisor";

  const teamFilters = document.getElementById("teamFilters");
  if (role === "supervisor") {
    if (teamFilters) teamFilters.remove();
  }

  if (teamPageTitle && teamPageDesc) {
    if (role === "supervisor") {
      teamPageTitle.textContent = "Teamleiter und Supervisor";
      teamPageDesc.textContent = "Supervisoren und Teamleiter anlegen und verwalten.";
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
  state.teamOptions = teams.map((team) => ({ id: String(team.id), label: team.name, coreStart: team.core_start, coreEnd: team.core_end }));
  state.teamOptions.unshift({ id: "unassigned", label: "Ohne Team" });

  teamFilter.innerHTML = `<option value="all">Alle Teams</option>` +
    state.teamOptions.map((t) => `<option value="${t.id}">${t.label}</option>`).join("");

  memberTeam.innerHTML = state.teamOptions.map((t) => `<option value="${t.id}">${t.label}</option>`).join("");

  const departments = collectNodesByType(state.hierarchy, "abteilung");
  teamParent.innerHTML = departments.map((d) => `<option value="${d.id}">${d.name}</option>`).join("");
}

function getTeamNodeById(id) {
  const found = findNode(state.hierarchy, Number(id));
  return found ? found.node : null;
}

function getCurrentTeamCore() {
  const teamNode = getTeamNodeById(state.user.team);
  return {
    start: (teamNode && teamNode.core_start) || "07:00",
    end: (teamNode && teamNode.core_end) || "20:00",
  };
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

  if (state.user && state.user.role === "admin" && teamCoreStart && teamCoreEnd) {
    const core = getCurrentTeamCore();
    teamCoreStart.value = core.start;
    teamCoreEnd.value = core.end;
  }

  const members = state.members.filter((member) => {
    if (state.user.role === "supervisor") {
      if (member.systemRole !== "supervisor" && member.systemRole !== "admin") return false;
    }
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
    const roleTeamLine =
      state.user.role === "supervisor" ? "" : `<div class="muted">${member.role} · ${teamLabel}</div>`;
    const avatarUrl = member.avatar || "";
    const avatarStyle = avatarUrl ? `style="background-image: url('${avatarUrl}');"` : "";
    const avatarText = avatarUrl ? "" : initials(member.name);
    card.innerHTML = `
      <div class="avatar" ${avatarStyle}>${avatarText}</div>
      <div><strong>${member.name}</strong></div>
      ${roleTeamLine}
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

function renderOncallTemplates() {
  if (!oncallTemplateGrid) return;
  oncallTemplateGrid.innerHTML = "";
  weekdayLabels.slice(0, 5).forEach((day, index) => {
    const key = `day-${index}`;
    const entry = state.oncallTemplate[key] || { start: "07:00", end: "15:30" };
    const card = document.createElement("div");
    card.className = "template-day";
    card.innerHTML = `
      <div class="day-title">${day}</div>
      <label>
        <span>Von</span>
        <input type="time" value="${entry.start}" data-template="${key}" data-field="start" />
      </label>
      <label>
        <span>Bis</span>
        <input type="time" value="${entry.end}" data-template="${key}" data-field="end" />
      </label>
    `;
    oncallTemplateGrid.appendChild(card);
  });
}

function saveTemplate() {
  localStorage.setItem("template", JSON.stringify(state.template));
}

function saveOncallTemplate() {
  localStorage.setItem("oncallTemplate", JSON.stringify(state.oncallTemplate));
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

function updateOncallTemplateFromInputs() {
  if (!oncallTemplateGrid) return;
  oncallTemplateGrid.querySelectorAll("input[type='time']").forEach((input) => {
    const key = input.dataset.template;
    const field = input.dataset.field;
    state.oncallTemplate[key] = state.oncallTemplate[key] || { start: "07:00", end: "15:30" };
    state.oncallTemplate[key][field] = input.value;
  });
  saveOncallTemplate();
}

function minutesBetween(start, end) {
  const [sh, sm] = start.split(":").map(Number);
  const [eh, em] = end.split(":").map(Number);
  return (eh * 60 + em) - (sh * 60 + sm);
}

function addCoreLines(container, core) {
  if (!container || !core || !core.start || !core.end) return;
  const startMinutes = minutesBetween("00:00", core.start);
  const endMinutes = minutesBetween("00:00", core.end);
  if (Number.isFinite(startMinutes)) {
    const line = document.createElement("div");
    line.className = "core-line core-start";
    line.style.top = `${(Math.max(0, Math.min(1440, startMinutes)) / 1440) * 100}%`;
    container.appendChild(line);
  }
  if (Number.isFinite(endMinutes)) {
    const line = document.createElement("div");
    line.className = "core-line core-end";
    line.style.top = `${(Math.max(0, Math.min(1440, endMinutes)) / 1440) * 100}%`;
    container.appendChild(line);
  }
}

function createShiftAvatar(user, top, left) {
  const avatar = document.createElement("div");
  avatar.className = "shift-avatar";
  avatar.style.top = `calc(${top}% - 16px)`;
  avatar.style.left = `${left - 6}px`;
  if (user && user.avatar) {
    avatar.style.backgroundImage = `url(${user.avatar})`;
    avatar.textContent = "";
  } else {
    avatar.textContent = initials(user && user.name ? user.name : "");
  }
  return avatar;
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

function renderOncallCalendar() {
  if (!oncallCalendarGrid) return;
  oncallCalendarGrid.innerHTML = "";
  const date = new Date(state.oncallCalendarDate.getFullYear(), state.oncallCalendarDate.getMonth(), 1);
  const month = date.getMonth();
  const year = date.getFullYear();

  if (oncallMonthLabel) {
    oncallMonthLabel.textContent = date.toLocaleDateString("de-DE", { month: "long", year: "numeric" });
  }

  weekdayLabels.forEach((label) => {
    const header = document.createElement("div");
    header.className = "calendar-day weekday";
    header.innerHTML = `<div class=\"date\">${label}</div>`;
    oncallCalendarGrid.appendChild(header);
  });

  const startDay = (date.getDay() + 6) % 7;
  const totalDays = new Date(year, month + 1, 0).getDate();

  for (let i = 0; i < startDay; i++) {
    const empty = document.createElement("div");
    empty.className = "calendar-day";
    empty.style.opacity = "0.4";
    empty.innerHTML = `<div class=\"date\"></div>`;
    oncallCalendarGrid.appendChild(empty);
  }

  for (let day = 1; day <= totalDays; day++) {
    const current = new Date(year, month, day);
    const entry = getEntryForDate(state.oncallDayEntries, current);
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
    cell.addEventListener("click", () => openDayModalWithType(current, "oncall"));
    oncallCalendarGrid.appendChild(cell);
  }
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
  const date = new Date(state.calendarDate.getFullYear(), state.calendarDate.getMonth(), 1);
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

async function refreshOncallCalendar() {
  if (!state.user) return;
  const date = new Date(state.oncallCalendarDate.getFullYear(), state.oncallCalendarDate.getMonth(), 1);
  const year = date.getFullYear();
  const month = date.getMonth();
  const from = new Date(year, month, 1);
  const to = new Date(year, month + 1, 0);
  const fromKey = dateKey(from);
  const toKey = dateKey(to);
  try {
    const shifts = await apiFetch(`/api/oncall_shifts?userId=${state.user.memberId}&from=${fromKey}&to=${toKey}`);
    state.oncallDayEntries = {};
    shifts.forEach((shift) => {
      const key = normalizeDateKey(shift.date);
      state.oncallDayEntries[key] = { segments: shift.segments, status: shift.status || "Support" };
    });
    renderOncallCalendar();
  } catch (err) {
    renderOncallCalendar();
  }
}

async function loadTeamWeekShifts() {
  if (!state.user) return;
  if (state.user.role === "user") {
    if (!state.userWeekStart) state.userWeekStart = getWeekStart(new Date());
    const fromKey = dateKey(state.userWeekStart);
    const end = new Date(state.userWeekStart);
    end.setDate(end.getDate() + 6);
    const toKey = dateKey(end);
    try {
      const endpoint = state.dashboardMode === "oncall" ? "/api/oncall_shifts" : "/api/shifts";
      const shifts = await apiFetch(`${endpoint}?teamId=${state.user.team}&from=${fromKey}&to=${toKey}`);
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

  if (state.user.role === "admin") {
    if (!state.teamCalendarWeekStart) state.teamCalendarWeekStart = getWeekStart(new Date());
    const fromKey = dateKey(state.teamCalendarWeekStart);
    const end = new Date(state.teamCalendarWeekStart);
    end.setDate(end.getDate() + 6);
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

function openDayModalWithType(date, type) {
  state.activeShiftType = type || "work";
  state.selectedDateKey = dateKey(date);
  modalDate.textContent = date.toLocaleDateString("de-DE", { weekday: "long", day: "2-digit", month: "long" });
  const entries = state.activeShiftType === "oncall" ? state.oncallDayEntries : state.dayEntries;
  const entry = entries[state.selectedDateKey] || { segments: [{ start: "07:00", end: "15:30" }], status: "Support" };
  state.modalSegments = (entry.segments || []).map((seg) => ({ ...seg }));
  const normalized = (entry.status || "Support").trim();
  applyActivityOptionsToUI();
  dayStatus.value = normalized;
  if (!dayStatus.value) dayStatus.value = activityOptions[0] || "Support";
  const holiday = getHoliday(date, state.user.state);
  holidayNotice.textContent = holiday ? `Feiertag: ${holiday}` : "";
  renderSegments();
  dayModal.hidden = false;
}

function openDayModal(date) {
  openDayModalWithType(date, "work");
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
  const isOncall = state.activeShiftType === "oncall";
  const targetEntries = isOncall ? state.oncallDayEntries : state.dayEntries;
  targetEntries[state.selectedDateKey] = { segments, status };
  localStorage.setItem(isOncall ? "oncallEntries" : "dayEntries", JSON.stringify(targetEntries));
  await apiFetch(isOncall ? "/api/oncall_shifts" : "/api/shifts", {
    method: "POST",
    body: JSON.stringify({
      userId: state.user.memberId,
      date: state.selectedDateKey,
      segments,
      status,
    }),
  });
  dayModal.hidden = true;
  if (isOncall) {
    await refreshOncallCalendar();
  } else {
    await refreshUserCalendar();
  }
  await loadTeamWeekShifts();
  renderUserDashboard();
}

function deleteDay() {
  const isOncall = state.activeShiftType === "oncall";
  const targetEntries = isOncall ? state.oncallDayEntries : state.dayEntries;
  delete targetEntries[state.selectedDateKey];
  localStorage.setItem(isOncall ? "oncallEntries" : "dayEntries", JSON.stringify(targetEntries));
  dayModal.hidden = true;
  apiFetch(isOncall ? "/api/oncall_shifts" : "/api/shifts", {
    method: "DELETE",
    body: JSON.stringify({ userId: state.user.memberId, date: state.selectedDateKey }),
  }).then(async () => {
    if (isOncall) {
      await refreshOncallCalendar();
    } else {
      await refreshUserCalendar();
    }
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

async function applyOncallTemplateToMonth() {
  updateOncallTemplateFromInputs();
  if (!oncallTemplateNotice) return;
  const date = new Date(state.oncallCalendarDate.getFullYear(), state.oncallCalendarDate.getMonth(), 1);
  const month = date.getMonth();
  const year = date.getFullYear();
  const totalDays = new Date(year, month + 1, 0).getDate();

  const hasAnyTemplate = weekdayLabels
    .slice(0, 5)
    .some((_, idx) => state.oncallTemplate[`day-${idx}`] && state.oncallTemplate[`day-${idx}`].start && state.oncallTemplate[`day-${idx}`].end);
  if (!hasAnyTemplate) {
    oncallTemplateNotice.textContent = "Bitte zuerst ein Template hinterlegen.";
    return;
  }

  let failures = 0;
  for (let day = 1; day <= totalDays; day++) {
    const current = new Date(year, month, day);
    const weekday = (current.getDay() + 6) % 7;
    if (weekday <= 4) {
      const template = state.oncallTemplate[`day-${weekday}`];
      if (template) {
        const key = dateKey(current);
        const segments = [{ start: template.start, end: template.end }];
        state.oncallDayEntries[key] = { segments, status: "Support" };
        try {
          await apiFetch("/api/oncall_shifts", {
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
      if (state.oncallDayEntries[key]) {
        delete state.oncallDayEntries[key];
      }
      try {
        await apiFetch("/api/oncall_shifts", {
          method: "DELETE",
          body: JSON.stringify({ userId: state.user.memberId, date: key }),
        });
      } catch {
        failures += 1;
      }
    }
  }

  localStorage.setItem("oncallEntries", JSON.stringify(state.oncallDayEntries));
  oncallTemplateNotice.textContent = failures
    ? `Template angewendet, aber ${failures} Einträge konnten nicht gespeichert werden.`
    : "Template wurde auf den Monat angewendet.";
  await refreshOncallCalendar();
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

async function clearOncallMonth() {
  const date = new Date(state.oncallCalendarDate.getFullYear(), state.oncallCalendarDate.getMonth(), 1);
  const year = date.getFullYear();
  const month = date.getMonth();
  const totalDays = new Date(year, month + 1, 0).getDate();

  const deletes = [];
  for (let day = 1; day <= totalDays; day++) {
    const current = new Date(year, month, day);
    const key = dateKey(current);
    if (state.oncallDayEntries[key]) delete state.oncallDayEntries[key];
    deletes.push(
      apiFetch("/api/oncall_shifts", {
        method: "DELETE",
        body: JSON.stringify({ userId: state.user.memberId, date: key }),
      })
    );
  }

  await Promise.all(deletes);
  localStorage.setItem("oncallEntries", JSON.stringify(state.oncallDayEntries));
  await refreshOncallCalendar();
  await loadTeamWeekShifts();
  renderUserDashboard();
}

function updateUserProfile() {
  const avatar = state.user && state.user.avatar ? state.user.avatar : null;
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

function setSupportPdf() {
  if (!state.user || !supportFrame || !supportDownload) return;
  const roleMap = {
    supervisor: "supervisor",
    admin: "teamleiter",
    user: "benutzer",
  };
  const roleKey = roleMap[state.user.role] || "benutzer";
  const pdfPath = `docs/onepager-${roleKey}.pdf`;
  supportFrame.src = pdfPath;
  supportDownload.href = pdfPath;
  if (supportTitle) {
    const label = roleKey === "teamleiter" ? "Teamleiter" : roleKey.charAt(0).toUpperCase() + roleKey.slice(1);
    supportTitle.textContent = `Support-Handbuch (${label})`;
  }
}

function updatePrintInputs() {
  if (!printRange || !printDate || !printMonth) return;
  const mode = printRange.value;
  if (printDateField) printDateField.hidden = mode !== "week";
  if (printMonthField) printMonthField.hidden = mode !== "month";
  if (mode === "week") {
    if (!printDate.value) {
      printDate.value = dateKeyFromDate(new Date());
    }
  } else {
    if (!printMonth.value) {
      const now = new Date();
      printMonth.value = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
    }
  }
}

async function downloadShiftPlan() {
  if (!state.user || !printRange) return;
  const mode = printRange.value;
  let from;
  let to;
  if (mode === "week") {
    const start = printDate && printDate.value ? new Date(printDate.value) : new Date();
    const end = new Date(start);
    end.setDate(end.getDate() + 6);
    from = dateKeyFromDate(start);
    to = dateKeyFromDate(end);
  } else {
    const base = printMonth && printMonth.value ? new Date(`${printMonth.value}-01`) : new Date();
    const range = getMonthRange(base);
    from = dateKeyFromDate(range.start);
    to = dateKeyFromDate(range.end);
  }
  if (printHint) {
    printHint.textContent = "PDF wird erstellt…";
    printHint.hidden = false;
  }
  try {
    const res = await fetch(`${API_BASE}/api/shiftplan/pdf?userId=${state.user.memberId}&from=${from}&to=${to}`);
    if (!res.ok) throw new Error("PDF konnte nicht erstellt werden");
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    const name = (state.user.name || "Schichtplan").replace(/\s+/g, "_");
    a.href = url;
    a.download = `${name}_${from}_${to}.pdf`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
    if (printHint) {
      printHint.textContent = "PDF bereit.";
      setTimeout(() => (printHint.hidden = true), 1500);
    }
  } catch (err) {
    if (printHint) {
      printHint.textContent = "Download fehlgeschlagen.";
      printHint.hidden = false;
    }
  }
}

let cropImage = null;
let cropScale = 1;
let cropOffset = { x: 0, y: 0 };
let cropDragging = false;
let cropStart = { x: 0, y: 0 };
let cropOffsetStart = { x: 0, y: 0 };

function drawCropper() {
  if (!cropImage || !avatarCropCanvas) return;
  const ctx = avatarCropCanvas.getContext("2d");
  const cw = avatarCropCanvas.width;
  const ch = avatarCropCanvas.height;
  ctx.clearRect(0, 0, cw, ch);
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, cw, ch);

  const iw = cropImage.width * cropScale;
  const ih = cropImage.height * cropScale;
  const x = (cw - iw) / 2 + cropOffset.x;
  const y = (ch - ih) / 2 + cropOffset.y;
  ctx.drawImage(cropImage, x, y, iw, ih);
}

function openCropper(dataUrl) {
  if (!avatarCropModal || !avatarCropCanvas) return;
  cropImage = new Image();
  cropImage.onload = () => {
    cropScale = Math.max(avatarCropCanvas.width / cropImage.width, avatarCropCanvas.height / cropImage.height);
    cropOffset = { x: 0, y: 0 };
    if (avatarCropZoom) {
      avatarCropZoom.value = "1";
    }
    drawCropper();
    avatarCropModal.hidden = false;
  };
  cropImage.src = dataUrl;
}

function closeCropper() {
  if (avatarCropModal) avatarCropModal.hidden = true;
  cropImage = null;
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
    const oncallList = Array.isArray(member.oncallType) ? member.oncallType : [member.oncallType || "Keine Rufbereitschaft"];
    oncallList.forEach((entry) => ensureOncallOption(entry));
    updateOncallSelects();
    memberName.value = member.name;
    memberEmail.value = member.email || "";
    memberPhone.value = member.phone || "";
    memberRole.value = member.role || "Mitarbeiter";
    memberSystemRole.value = member.systemRole || "user";
    memberTeam.value = member.team;
    setSelectedOncallTypes(oncallList);
    memberStatus.value = member.status;
    memberState.value = member.state || "NW";
    memberUser.value = member.username || "";
    memberPass.value = "";
  } else {
    updateOncallSelects();
    memberName.value = "";
    memberEmail.value = "";
    memberPhone.value = "";
    memberRole.value = "Mitarbeiter";
    memberSystemRole.value = "user";
    memberTeam.value = state.user.role === "admin" ? String(state.user.team || "unassigned") : (state.teamOptions[0]?.id || "unassigned");
    setSelectedOncallTypes(["Keine Rufbereitschaft"]);
    memberStatus.value = "aktiv";
    memberState.value = "NW";
    memberUser.value = "";
    memberPass.value = "";
  }
  memberError.hidden = true;

  memberTeam.disabled = state.user.role === "admin";
  memberSystemRole.disabled = state.user.role !== "supervisor";
  if (memberRoleField) memberRoleField.hidden = state.user.role === "supervisor";
  if (memberTeamField) memberTeamField.hidden = state.user.role === "supervisor";
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
  state.pendingMemberSubmitting = false;
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
    `Rufbereitschaft: ${Array.isArray(payload.oncallType) ? payload.oncallType.join(", ") : payload.oncallType || "Keine Rufbereitschaft"}`,
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
    if (state.pendingMemberSubmitting) return;
    state.pendingMemberSubmitting = true;
    memberConfirmContinue.disabled = true;
    let created = false;
    try {
      await apiFetch("/api/users", {
        method: "POST",
        body: JSON.stringify(state.pendingMember),
      });
      created = true;
    } catch (err) {
      memberError.textContent = "Speichern fehlgeschlagen (Benutzername evtl. vergeben).";
      memberError.hidden = false;
      state.pendingMemberSubmitting = false;
      memberConfirmContinue.disabled = false;
      return;
    }

    try {
      await loadData();
    } catch (err) {
      // ignore refresh error if user was created
    }

    if (created) {
      closeMember();
      closeMemberConfirmModal();
      state.pendingMember = null;
      memberError.hidden = true;
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
      oncallType: getSelectedOncallTypes(),
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
      oncallType: getSelectedOncallTypes(),
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

  const oncallTypes = Array.isArray(state.user.oncallType) ? state.user.oncallType : [state.user.oncallType];
  const hasOncall = oncallTypes.some((entry) => entry && entry !== "Keine Rufbereitschaft");
  if (dashboardMode) dashboardMode.hidden = !hasOncall;
  if (!hasOncall) state.dashboardMode = "work";
  if (modeWork) modeWork.classList.toggle("active", state.dashboardMode === "work");
  if (modeOncall) modeOncall.classList.toggle("active", state.dashboardMode === "oncall");

  if (!state.userWeekStart) state.userWeekStart = getWeekStart(new Date());
  const weekStart = new Date(state.userWeekStart);
  const days = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(weekStart);
    d.setDate(weekStart.getDate() + i);
    return d;
  });

  const startLabel = days[0].toLocaleDateString("de-DE");
  const endLabel = days[6].toLocaleDateString("de-DE");
  userWeekLabel.textContent = `${startLabel} – ${endLabel}`;
  userTeamCalendar.innerHTML = "";
  applyActivityOptionsToUI();

  const dayWidth = 260;
  const containerWidth = userTeamCalendar.getBoundingClientRect().width || 780;
  const daysPerPage = Math.max(1, Math.floor(containerWidth / dayWidth));
  state.userWeekPageSize = daysPerPage;
  const maxOffset = Math.max(0, 7 - daysPerPage);
  state.userWeekOffset = Math.min(state.userWeekOffset, maxOffset);
  const visibleDays = days.slice(state.userWeekOffset, state.userWeekOffset + daysPerPage);

  if (userDayPager) userDayPager.hidden = maxOffset === 0;
  if (userPrevDay) userPrevDay.disabled = state.userWeekOffset === 0;
  if (userNextDay) userNextDay.disabled = state.userWeekOffset >= maxOffset;

  const usersWithShifts = new Map();
  days.forEach((date) => {
    const key = dateKey(date);
    (state.teamWeekShifts[key] || []).forEach((entry) => {
      if (!usersWithShifts.has(entry.userId)) {
        const member = members.find((m) => m.id === entry.userId);
        usersWithShifts.set(entry.userId, {
          id: entry.userId,
          name: entry.name || (member ? member.name : "Unbekannt"),
          avatar: member ? member.avatar : null,
          state: member ? member.state : "NW",
        });
      }
    });
  });

  const userList = Array.from(usersWithShifts.values()).sort((a, b) => a.name.localeCompare(b.name));
  const columnWidth = 28;

  visibleDays.forEach((date) => {
    const cell = document.createElement("div");
    cell.className = "day-column";
    if (isSameDay(date, new Date())) cell.classList.add("today");

    const dayLabel = date.toLocaleDateString("de-DE", { weekday: "short", day: "2-digit", month: "short" });
    const header = document.createElement("div");
    header.className = "day-header";
    header.textContent = dayLabel;
    header.addEventListener("click", () => openDayModalWithType(date, state.dashboardMode));
    const body = document.createElement("div");
    body.className = "day-body";
    body.addEventListener("click", () => openDayModalWithType(date, state.dashboardMode));

    for (let h = 0; h <= 24; h += 1) {
      const label = document.createElement("div");
      label.className = "hour-label";
      label.style.top = `${(h / 24) * 100}%`;
      label.textContent = `${String(h).padStart(2, "0")}:00`;
      body.appendChild(label);
    }

    addCoreLines(body, getCurrentTeamCore());

    const key = dateKey(date);
    const entries = state.teamWeekShifts[key] || [];
    entries.forEach((entry) => {
      const userIndex = userList.findIndex((u) => u.id === entry.userId);
      if (userIndex === -1) return;
      const left = 44 + userIndex * columnWidth;
      const segments = entry.segments || [];
      segments.forEach((seg) => {
        const start = minutesBetween("00:00", seg.start);
        const end = minutesBetween("00:00", seg.end);
        if (end <= start) return;
        const top = (start / 1440) * 100;
        const height = ((end - start) / 1440) * 100;
        const bar = document.createElement("div");
        bar.className = "shift-bar";
        bar.style.top = `${top}%`;
        bar.style.height = `${height}%`;
        bar.style.left = `${left}px`;
        bar.style.background = statusColor(entry.status || "Support", true);
        body.appendChild(bar);
      });
      if (segments.length) {
        const u = userList[userIndex];
        segments.forEach((seg) => {
          const start = minutesBetween("00:00", seg.start);
          const top = (start / 1440) * 100;
          body.appendChild(createShiftAvatar(u, top, left));
        });
      }
    });

    cell.appendChild(header);
    cell.appendChild(body);
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
    core_start: node.core_start || null,
    core_end: node.core_end || null,
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
    avatar: u.avatar || null,
    oncallType: Array.isArray(u.oncallType) ? u.oncallType : u.oncallType ? [u.oncallType] : ["Keine Rufbereitschaft"],
  }));
  state.swaps = swaps;
  updateTeamOptions();
  updateOncallSelects();
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
      avatar: member.avatar || null,
      oncallType: Array.isArray(member.oncallType) ? member.oncallType : member.oncallType ? [member.oncallType] : ["Keine Rufbereitschaft"],
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
      renderOncallTemplates();
      refreshUserCalendar();
      refreshOncallCalendar();
      updateUserProfile();
      setSupportPdf();
      updatePrintInputs();
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
      if (member.systemRole === "supervisor") {
        settingsCompany.value = state.settings.companyName || (sidebarCompany && sidebarCompany.textContent) || "";
        settingsAccent.value =
          state.settings.accent || getComputedStyle(document.documentElement).getPropertyValue("--accent").trim() || "#8b0f3a";
        if (settingsFooter) {
          settingsFooter.value =
            state.settings.footerText || "Made with Love in Bremen <span class=\"heart\">♥</span> by Norbert Hengsteler";
        }
        holidayState.innerHTML = stateOptions.map((opt) => `<option value="${opt.code}">${opt.label}</option>`).join("");
        holidayState.value = "NW";
        if (holidayViewState) {
          holidayViewState.innerHTML = stateOptions.map((opt) => `<option value="${opt.code}">${opt.label}</option>`).join("");
          holidayViewState.value = "NW";
          renderComputedHolidays();
        }
        renderHolidayOverrides();
        renderActivityOptions();
        renderOncallOptions();
        updateOncallSelects();
      }
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
  state.settings = settings || {};
  if (!settings?.companyName) {
    setupView.hidden = false;
    loginView.hidden = true;
    return;
  }
  holidayOverrides = settings.holidayOverrides || {};
  if (settings.activityOptions && Array.isArray(settings.activityOptions) && settings.activityOptions.length) {
    if (typeof settings.activityOptions[0] === "string") {
      activityOptions = settings.activityOptions.map((name) => ({
        name,
        color: statusColors[name] || statusColors.Support,
      }));
    } else {
      activityOptions = settings.activityOptions;
    }
  }
  if (settings.oncallOptions && Array.isArray(settings.oncallOptions) && settings.oncallOptions.length) {
    if (typeof settings.oncallOptions[0] === "string") {
      oncallOptions = settings.oncallOptions.map((name) => ({
        name,
        color: "#e3f2ff",
      }));
    } else {
      oncallOptions = settings.oncallOptions;
    }
  }
  if (companyAccent && settings.accent) companyAccent.value = settings.accent;
  if (settingsFooter) settingsFooter.value = settings.footerText || "Made with Love in Bremen <span class=\"heart\">♥</span> by Norbert Hengsteler";
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
  const accent = companyAccent ? companyAccent.value : null;

  try {
    await apiFetch("/api/bootstrap/company", {
      method: "POST",
      body: JSON.stringify({ companyName: name, logo: logoData, accent }),
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

if (settingsSave) {
  settingsSave.addEventListener("click", async () => {
    if (!settingsCompany.value.trim()) return;
    let logoData = null;
    if (settingsLogo.files && settingsLogo.files[0]) {
      logoData = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.readAsDataURL(settingsLogo.files[0]);
      });
    }
    await saveSettingsWithLogo(logoData);
  });
}

if (holidayState) {
  holidayState.addEventListener("change", renderHolidayOverrides);
}

if (holidayViewState) {
  holidayViewState.addEventListener("change", renderComputedHolidays);
}

if (holidayAdd) {
  holidayAdd.addEventListener("click", async () => {
    const state = holidayState.value;
    const date = holidayDate.value;
    const name = holidayName.value.trim();
    if (!state || !date || !name) return;
    holidayOverrides[state] = holidayOverrides[state] || {};
    holidayOverrides[state][date] = name;
    await saveSettingsWithLogo(null);
    renderHolidayOverrides();
  });
}

if (holidayRemove) {
  holidayRemove.addEventListener("click", async () => {
    const state = holidayState.value;
    const date = holidayDate.value;
    if (!state || !date) return;
    holidayOverrides[state] = holidayOverrides[state] || {};
    holidayOverrides[state][date] = null;
    await saveSettingsWithLogo(null);
    renderHolidayOverrides();
  });
}

if (activityAdd) {
  activityAdd.addEventListener("click", async () => {
    const name = (activityInput.value || "").trim();
    if (!name) return;
    if (!activityOptions.find((opt) => opt.name === name)) {
      activityOptions.push({ name, color: statusColors.Support });
    }
    activityInput.value = "";
    await saveSettingsWithLogo(null);
    renderActivityOptions();
    applyActivityOptionsToUI();
  });
}

if (activityList) {
  activityList.addEventListener("click", async (event) => {
    const btn = event.target.closest("button");
    if (!btn || !btn.dataset.remove) return;
    const name = btn.dataset.remove;
    activityOptions = activityOptions.filter((opt) => opt.name !== name);
    if (!activityOptions.length) activityOptions = [...defaultActivityOptions];
    await saveSettingsWithLogo(null);
    renderActivityOptions();
    applyActivityOptionsToUI();
  });
}

if (activityList) {
  activityList.addEventListener("input", async (event) => {
    const input = event.target;
    if (!input || !input.dataset.color) return;
    const index = Number(input.dataset.color);
    if (Number.isNaN(index) || !activityOptions[index]) return;
    activityOptions[index].color = input.value;
    await saveSettingsWithLogo(null);
    renderActivityOptions();
    applyActivityOptionsToUI();
  });
}

if (oncallAdd) {
  oncallAdd.addEventListener("click", async () => {
    const name = (oncallInput.value || "").trim();
    if (!name) return;
    if (!oncallOptions.find((opt) => opt.name === name)) {
      oncallOptions.push({ name, color: "#e3f2ff" });
    }
    oncallInput.value = "";
    await saveSettingsWithLogo(null);
    renderOncallOptions();
    updateOncallSelects();
  });
}

if (oncallList) {
  oncallList.addEventListener("click", async (event) => {
    const btn = event.target.closest("button");
    if (!btn || !btn.dataset.remove) return;
    const name = btn.dataset.remove;
    oncallOptions = oncallOptions.filter((opt) => opt.name !== name);
    if (!oncallOptions.length) oncallOptions = [...defaultOncallOptions];
    await saveSettingsWithLogo(null);
    renderOncallOptions();
    updateOncallSelects();
  });
}

if (oncallList) {
  oncallList.addEventListener("input", async (event) => {
    const input = event.target;
    if (!input || !input.dataset.oncallColor) return;
    const index = Number(input.dataset.oncallColor);
    if (Number.isNaN(index) || !oncallOptions[index]) return;
    oncallOptions[index].color = input.value;
    await saveSettingsWithLogo(null);
    renderOncallOptions();
    updateOncallSelects();
  });
}

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
    openCropper(reader.result);
  };
  reader.readAsDataURL(file);
});

removeAvatarBtn.addEventListener("click", async () => {
  try {
    await apiFetch(`/api/users/${state.user.memberId}`, {
      method: "PUT",
      body: JSON.stringify({ avatar: null }),
    });
  } catch {}
  state.user.avatar = null;
  updateUserProfile();
  await loadData();
});

if (avatarCropCanvas) {
  avatarCropCanvas.addEventListener("mousedown", (event) => {
    cropDragging = true;
    cropStart = { x: event.clientX, y: event.clientY };
    cropOffsetStart = { ...cropOffset };
  });
  window.addEventListener("mousemove", (event) => {
    if (!cropDragging) return;
    const dx = event.clientX - cropStart.x;
    const dy = event.clientY - cropStart.y;
    cropOffset = { x: cropOffsetStart.x + dx, y: cropOffsetStart.y + dy };
    drawCropper();
  });
  window.addEventListener("mouseup", () => {
    cropDragging = false;
  });

  avatarCropCanvas.addEventListener("touchstart", (event) => {
    if (!event.touches[0]) return;
    cropDragging = true;
    cropStart = { x: event.touches[0].clientX, y: event.touches[0].clientY };
    cropOffsetStart = { ...cropOffset };
  });
  window.addEventListener("touchmove", (event) => {
    if (!cropDragging || !event.touches[0]) return;
    const dx = event.touches[0].clientX - cropStart.x;
    const dy = event.touches[0].clientY - cropStart.y;
    cropOffset = { x: cropOffsetStart.x + dx, y: cropOffsetStart.y + dy };
    drawCropper();
  }, { passive: true });
  window.addEventListener("touchend", () => {
    cropDragging = false;
  });
}

if (avatarCropZoom) {
  avatarCropZoom.addEventListener("input", () => {
    if (!cropImage) return;
    const baseScale = Math.max(avatarCropCanvas.width / cropImage.width, avatarCropCanvas.height / cropImage.height);
    cropScale = baseScale * Number(avatarCropZoom.value);
    drawCropper();
  });
}

if (applyAvatarCrop) {
  applyAvatarCrop.addEventListener("click", async () => {
    if (!cropImage) return;
    const dataUrl = avatarCropCanvas.toDataURL("image/png");
    try {
      await apiFetch(`/api/users/${state.user.memberId}`, {
        method: "PUT",
        body: JSON.stringify({ avatar: dataUrl }),
      });
      state.user.avatar = dataUrl;
      updateUserProfile();
      await loadData();
      closeCropper();
    } catch (err) {
      closeCropper();
    }
  });
}

if (closeAvatarCrop) closeAvatarCrop.addEventListener("click", closeCropper);
if (cancelAvatarCrop) cancelAvatarCrop.addEventListener("click", closeCropper);

applyTemplateBtn.addEventListener("click", applyTemplateToMonth);
templateGrid.addEventListener("change", updateTemplateFromInputs);
clearMonthBtn.addEventListener("click", clearMonth);
if (oncallApplyTemplateBtn) oncallApplyTemplateBtn.addEventListener("click", applyOncallTemplateToMonth);
if (oncallTemplateGrid) oncallTemplateGrid.addEventListener("change", updateOncallTemplateFromInputs);
if (oncallClearMonthBtn) oncallClearMonthBtn.addEventListener("click", clearOncallMonth);

teamSearch.addEventListener("input", renderTeam);
teamFilter.addEventListener("change", renderTeam);

if (teamCoreSave) {
  teamCoreSave.addEventListener("click", async () => {
    if (!state.user || state.user.role !== "admin") return;
    const coreStart = teamCoreStart.value;
    const coreEnd = teamCoreEnd.value;
    if (!coreStart || !coreEnd) return;
    await apiFetch(`/api/hierarchy/${state.user.team}`, {
      method: "PUT",
      body: JSON.stringify({ coreStart, coreEnd }),
    });
    await loadData();
    renderTeamCalendar();
  });
}

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

if (printRange) printRange.addEventListener("change", updatePrintInputs);
if (printDownload) printDownload.addEventListener("click", downloadShiftPlan);

prevMonthBtn.addEventListener("click", () => {
  state.calendarDate.setMonth(state.calendarDate.getMonth() - 1);
  refreshUserCalendar();
});

nextMonthBtn.addEventListener("click", () => {
  state.calendarDate.setMonth(state.calendarDate.getMonth() + 1);
  refreshUserCalendar();
});

if (oncallPrevMonthBtn) {
  oncallPrevMonthBtn.addEventListener("click", () => {
    state.oncallCalendarDate.setMonth(state.oncallCalendarDate.getMonth() - 1);
    refreshOncallCalendar();
  });
}

if (oncallNextMonthBtn) {
  oncallNextMonthBtn.addEventListener("click", () => {
    state.oncallCalendarDate.setMonth(state.oncallCalendarDate.getMonth() + 1);
    refreshOncallCalendar();
  });
}

if (userPrevPage) {
  userPrevPage.addEventListener("click", async () => {
    if (!state.userWeekStart) state.userWeekStart = getWeekStart(new Date());
    state.userWeekStart.setDate(state.userWeekStart.getDate() - 7);
    state.userWeekOffset = 0;
    await loadTeamWeekShifts();
    renderUserDashboard();
  });
}

if (userNextPage) {
  userNextPage.addEventListener("click", async () => {
    if (!state.userWeekStart) state.userWeekStart = getWeekStart(new Date());
    state.userWeekStart.setDate(state.userWeekStart.getDate() + 7);
    state.userWeekOffset = 0;
    await loadTeamWeekShifts();
    renderUserDashboard();
  });
}

if (userPrevDay) {
  userPrevDay.addEventListener("click", () => {
    state.userWeekOffset = Math.max(0, state.userWeekOffset - state.userWeekPageSize);
    renderUserDashboard();
  });
}

if (userNextDay) {
  userNextDay.addEventListener("click", () => {
    state.userWeekOffset = Math.min(6, state.userWeekOffset + state.userWeekPageSize);
    renderUserDashboard();
  });
}

function setDashboardMode(mode) {
  if (state.dashboardMode === mode) return;
  state.dashboardMode = mode;
  loadTeamWeekShifts().then(renderUserDashboard).catch(() => renderUserDashboard());
}

if (modeWork) {
  modeWork.addEventListener("click", () => setDashboardMode("work"));
}

if (modeOncall) {
  modeOncall.addEventListener("click", () => setDashboardMode("oncall"));
}

if (teamCalendarPrev) {
  teamCalendarPrev.addEventListener("click", async () => {
    if (!state.teamCalendarWeekStart) state.teamCalendarWeekStart = getWeekStart(new Date());
    state.teamCalendarWeekStart.setDate(state.teamCalendarWeekStart.getDate() - 7);
    state.teamCalendarWeekOffset = 0;
    await loadTeamWeekShifts();
    renderTeamCalendar();
  });
}

if (teamCalendarNext) {
  teamCalendarNext.addEventListener("click", async () => {
    if (!state.teamCalendarWeekStart) state.teamCalendarWeekStart = getWeekStart(new Date());
    state.teamCalendarWeekStart.setDate(state.teamCalendarWeekStart.getDate() + 7);
    state.teamCalendarWeekOffset = 0;
    await loadTeamWeekShifts();
    renderTeamCalendar();
  });
}

if (teamCalendarPrevDay) {
  teamCalendarPrevDay.addEventListener("click", () => {
    state.teamCalendarWeekOffset = Math.max(0, state.teamCalendarWeekOffset - state.teamCalendarWeekPageSize);
    renderTeamCalendar();
  });
}

if (teamCalendarNextDay) {
  teamCalendarNextDay.addEventListener("click", () => {
    state.teamCalendarWeekOffset = Math.min(6, state.teamCalendarWeekOffset + state.teamCalendarWeekPageSize);
    renderTeamCalendar();
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
