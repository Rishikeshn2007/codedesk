const SUBJECTS = {
  matlab: { label: "Matlab", file: "data/matlab.json" },
  dsa: { label: "DSA", file: "data/dsa.json" },
  python: { label: "Python", file: "data/python.json" },
  dbms: { label: "DBMS", file: "data/dbms.json" }
};

const state = {
  currentSubject: "matlab",
  programs: [],
  filteredPrograms: []
};

const subjectSelect = document.getElementById("subject-select");
const searchInput = document.getElementById("search-input");
const programGrid = document.getElementById("program-grid");
const statusText = document.getElementById("status-text");
const helpPanel = document.getElementById("help-panel");
const emptyState = document.getElementById("empty-state");
const programCardTemplate = document.getElementById("program-card-template");
const programCount = document.getElementById("program-count");
const subjectCount = document.getElementById("subject-count");
const themeToggle = document.getElementById("theme-toggle");

document.addEventListener("DOMContentLoaded", initializeApp);

function initializeApp() {
  subjectCount.textContent = Object.keys(SUBJECTS).length;
  applySavedTheme();
  subjectSelect.value = state.currentSubject;

  subjectSelect.addEventListener("change", (event) => {
    loadSubject(event.target.value);
  });

  searchInput.addEventListener("input", () => {
    filterPrograms(searchInput.value);
  });

  themeToggle.addEventListener("click", toggleTheme);

  loadSubject(state.currentSubject);
}

async function loadSubject(subjectKey) {
  const subject = SUBJECTS[subjectKey];

  if (!subject) {
    state.programs = [];
    state.filteredPrograms = [];
    renderPrograms([]);
    emptyState.hidden = false;
    helpPanel.hidden = true;
    statusText.textContent = `Unknown subject: ${subjectKey}`;
    console.warn(`Unknown subject requested: ${subjectKey}`);
    return;
  }

  state.currentSubject = subjectKey;
  statusText.textContent = `Loading ${subject.label} programs...`;
  programGrid.innerHTML = "";
  emptyState.hidden = true;
  helpPanel.hidden = true;

  try {
    if (isFileProtocol()) {
      const bundledPrograms = window.SUBJECT_DATA?.[subjectKey];

      if (!bundledPrograms) {
        throw new Error(`Missing bundled data for ${subjectKey}`);
      }

      state.programs = normalizePrograms(bundledPrograms);
      filterPrograms(searchInput.value);
      statusText.textContent = `Showing ${state.filteredPrograms.length} ${subject.label} programs.`;
      return;
    }

    const response = await fetch(subject.file);

    if (!response.ok) {
      throw new Error(`Failed to load ${subject.file}`);
    }

    const programs = await response.json();
    state.programs = normalizePrograms(programs);
    filterPrograms(searchInput.value);
    statusText.textContent = `Showing ${state.filteredPrograms.length} ${subject.label} programs.`;
  } catch (error) {
    state.programs = [];
    state.filteredPrograms = [];
    renderPrograms([]);
    emptyState.hidden = false;
    helpPanel.hidden = false;
    statusText.textContent =
      isFileProtocol()
        ? `Unable to load ${subject.label} data in file mode.`
        : `Unable to load ${subject.label} data from ${subject.file}.`;
    console.warn(error);
  }
}

function normalizePrograms(programs) {
  return programs.map((program) => ({
    serial: program.serial,
    title: program.title,
    description: program.description,
    explanation: program.explanation || "No explanation available for this program yet.",
    example: {
      input: program.example?.input || "No sample input provided.",
      output: program.example?.output || "No sample output provided."
    },
    code: decodeCode(program.code || ""),
    keywords: Array.isArray(program.keywords) ? program.keywords : []
  }));
}

function decodeCode(code) {
  return code
    .replace(/\\r\\n/g, "\n")
    .replace(/\\n/g, "\n")
    .replace(/\\t/g, "\t");
}

function filterPrograms(query) {
  const normalizedQuery = query.trim().toLowerCase();

  state.filteredPrograms = state.programs.filter((program) => {
    if (!normalizedQuery) {
      return true;
    }

    const haystack = [
      String(program.serial),
      program.title,
      program.description,
      ...program.keywords
    ]
      .join(" ")
      .toLowerCase();

    return haystack.includes(normalizedQuery);
  });

  renderPrograms(state.filteredPrograms);
  updateEmptyState(normalizedQuery);
}

function renderPrograms(programs) {
  programGrid.innerHTML = "";

  const fragment = document.createDocumentFragment();

  programs.forEach((program) => {
    const card = programCardTemplate.content.firstElementChild.cloneNode(true);
    const serialBadge = card.querySelector(".serial-badge");
    const title = card.querySelector(".program-title");
    const description = card.querySelector(".program-description");
    const explanation = card.querySelector(".program-explanation");
    const exampleInput = card.querySelector(".example-input");
    const exampleOutput = card.querySelector(".example-output");
    const code = card.querySelector(".program-code");
    const keywordRow = card.querySelector(".keyword-row");
    const copyButton = card.querySelector(".copy-button");

    serialBadge.textContent = `Program ${program.serial}`;
    title.textContent = program.title;
    description.textContent = program.description;
    explanation.textContent = program.explanation;
    exampleInput.textContent = program.example.input;
    exampleOutput.textContent = program.example.output;
    code.textContent = program.code;

    keywordRow.innerHTML = "";
    program.keywords.forEach((keyword) => {
      const chip = document.createElement("span");
      chip.className = "keyword-chip";
      chip.textContent = keyword;
      keywordRow.appendChild(chip);
    });

    if (program.keywords.length === 0) {
      keywordRow.setAttribute("hidden", "true");
    } else {
      keywordRow.removeAttribute("hidden");
    }

    copyButton.addEventListener("click", () => copyProgramCode(program.code, copyButton));

    fragment.appendChild(card);
  });

  programGrid.appendChild(fragment);
  programCount.textContent = String(programs.length);
}

function updateEmptyState(query) {
  const hasResults = state.filteredPrograms.length > 0;
  emptyState.hidden = hasResults;

  if (!hasResults) {
    statusText.textContent = query
      ? `No results found in ${SUBJECTS[state.currentSubject].label} for "${query}".`
      : `No programs available for ${SUBJECTS[state.currentSubject].label}.`;
    programCount.textContent = "0";
    return;
  }

  statusText.textContent = query
    ? `Found ${state.filteredPrograms.length} matching programs in ${SUBJECTS[state.currentSubject].label}.`
    : `Showing ${state.filteredPrograms.length} ${SUBJECTS[state.currentSubject].label} programs.`;
}

async function copyProgramCode(code, button) {
  const originalText = button.textContent;

  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(code);
    } else {
      copyUsingSelectionFallback(code);
    }
    button.textContent = "Copied!";
    button.classList.add("copied");
  } catch (error) {
    button.textContent = "Copy failed";
    console.error(error);
  }

  window.setTimeout(() => {
    button.textContent = originalText;
    button.classList.remove("copied");
  }, 1600);
}

function copyUsingSelectionFallback(code) {
  const helperTextArea = document.createElement("textarea");
  helperTextArea.value = code;
  helperTextArea.setAttribute("readonly", "");
  helperTextArea.style.position = "fixed";
  helperTextArea.style.opacity = "0";
  document.body.appendChild(helperTextArea);
  helperTextArea.select();
  document.execCommand("copy");
  document.body.removeChild(helperTextArea);
}

function toggleTheme() {
  const isDark = document.body.classList.toggle("dark-mode");
  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeToggle.querySelector(".theme-toggle-text").textContent = isDark ? "Light mode" : "Dark mode";
  localStorage.setItem("gm-code-desk-theme", isDark ? "dark" : "light");
}

function applySavedTheme() {
  const savedTheme = localStorage.getItem("gm-code-desk-theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const shouldUseDark = savedTheme ? savedTheme === "dark" : prefersDark;

  if (shouldUseDark) {
    document.body.classList.add("dark-mode");
  }

  themeToggle.setAttribute("aria-pressed", String(shouldUseDark));
  themeToggle.querySelector(".theme-toggle-text").textContent = shouldUseDark ? "Light mode" : "Dark mode";
}

function isFileProtocol() {
  return window.location.protocol === "file:";
}
