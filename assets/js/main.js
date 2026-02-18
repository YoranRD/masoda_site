(function () {
  "use strict";

  const CONFIG = window.MASODA_CONFIG || {};
  const DATA_PATH = "./data/events.json";
  const FALLBACK_IMAGE = "./assets/img/placeholder-event.svg";

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function safeExternalUrl(value) {
    if (typeof value !== "string" || value.trim() === "") {
      return "";
    }
    try {
      const parsed = new URL(value);
      if (parsed.protocol === "http:" || parsed.protocol === "https:") {
        return parsed.href;
      }
      return "";
    } catch (_error) {
      return "";
    }
  }

  function safeImageUrl(value) {
    if (typeof value !== "string" || value.trim() === "") {
      return FALLBACK_IMAGE;
    }
    if (value.startsWith("./") || value.startsWith("../") || value.startsWith("/")) {
      return value;
    }
    const external = safeExternalUrl(value);
    return external || FALLBACK_IMAGE;
  }

  function formatDateParis(dateValue) {
    return new Intl.DateTimeFormat("fr-FR", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "Europe/Paris"
    }).format(dateValue);
  }

  function formatTimeParis(dateValue) {
    return new Intl.DateTimeFormat("fr-FR", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: "Europe/Paris"
    }).format(dateValue);
  }

  function formatDateRange(startIso, endIso) {
    const start = new Date(startIso);
    const end = new Date(endIso);
    if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) {
      return "Date à confirmer";
    }
    return `${formatDateParis(start)} · ${formatTimeParis(start)}–${formatTimeParis(end)}`;
  }

  function markdownToHtml(markdown) {
    if (typeof markdown !== "string" || markdown.trim() === "") {
      return "";
    }

    const lines = markdown.replace(/\r/g, "").split("\n");
    let html = "";
    let listOpen = false;

    lines.forEach((rawLine) => {
      const line = rawLine.trim();
      if (line === "") {
        if (listOpen) {
          html += "</ul>";
          listOpen = false;
        }
        return;
      }

      if (line.startsWith("- ")) {
        if (!listOpen) {
          html += "<ul>";
          listOpen = true;
        }
        html += `<li>${escapeHtml(line.slice(2))}</li>`;
        return;
      }

      if (listOpen) {
        html += "</ul>";
        listOpen = false;
      }
      html += `<p>${escapeHtml(line)}</p>`;
    });

    if (listOpen) {
      html += "</ul>";
    }

    return html;
  }

  function deriveStatus(eventItem, nowMs) {
    const endDate = new Date(eventItem.datetime_end);
    if (Number.isNaN(endDate.getTime())) {
      return "upcoming";
    }
    return endDate.getTime() >= nowMs ? "upcoming" : "past";
  }

  function firstSentence(markdown) {
    if (typeof markdown !== "string") {
      return "";
    }
    const plain = markdown
      .replace(/\n/g, " ")
      .replace(/-\s+/g, "")
      .replace(/\s+/g, " ")
      .trim();
    if (plain.length <= 180) {
      return plain;
    }
    return `${plain.slice(0, 177)}...`;
  }

  function validateEvent(eventItem, nowMs) {
    const checks = {
      physical: [],
      numerical: [],
      mathematical: [],
      dimensional: [],
      sanity: []
    };

    const requiredFields = [
      "title",
      "datetime_start",
      "datetime_end",
      "location",
      "city",
      "capacity",
      "description_md"
    ];

    requiredFields.forEach((field) => {
      if (eventItem[field] === undefined || eventItem[field] === null || eventItem[field] === "") {
        checks.sanity.push(`Champ requis manquant: ${field}`);
      }
    });

    const startMs = new Date(eventItem.datetime_start).getTime();
    const endMs = new Date(eventItem.datetime_end).getTime();

    if (!Number.isFinite(startMs) || !Number.isFinite(endMs)) {
      checks.numerical.push("Date invalide dans datetime_start ou datetime_end");
    }

    if (Number.isFinite(startMs) && Number.isFinite(endMs)) {
      if (endMs <= startMs) {
        checks.mathematical.push("datetime_end doit être strictement après datetime_start");
      }

      const durationMinutes = (endMs - startMs) / 60000;
      if (!Number.isFinite(durationMinutes)) {
        checks.numerical.push("Durée non calculable");
      } else {
        if (durationMinutes < 30 || durationMinutes > 720) {
          checks.dimensional.push("Durée hors plage réaliste (30 à 720 minutes)");
        }
      }
    }

    if (!Number.isInteger(eventItem.capacity)) {
      checks.numerical.push("capacity doit être un entier");
    } else {
      if (eventItem.capacity <= 0 || eventItem.capacity > 200) {
        checks.physical.push("capacity doit rester dans la plage réaliste 1 à 200");
      }
    }

    if (typeof eventItem.status === "string" && eventItem.status !== "upcoming" && eventItem.status !== "past") {
      checks.sanity.push("status doit être upcoming ou past");
    }

    const inferred = deriveStatus(eventItem, nowMs);
    if (typeof eventItem.status === "string" && eventItem.status !== inferred) {
      checks.sanity.push(`status incohérent avec les dates (attendu: ${inferred})`);
    }

    return checks;
  }

  function summarizeChecks(checks) {
    return Object.values(checks).reduce((sum, values) => sum + values.length, 0);
  }

  function validateDataset(data) {
    const nowMs = Date.now();
    const diagnostics = [];

    if (!data || typeof data !== "object") {
      return {
        valid: false,
        diagnostics: ["Le jeu de données est vide ou invalide"]
      };
    }

    if (!data.next_event || typeof data.next_event !== "object") {
      diagnostics.push("next_event absent ou invalide");
    }

    if (!Array.isArray(data.events)) {
      diagnostics.push("events doit être un tableau");
    }

    if (Array.isArray(data.events)) {
      data.events.forEach((eventItem, index) => {
        const checks = validateEvent(eventItem, nowMs);
        if (summarizeChecks(checks) > 0) {
          diagnostics.push(`Event #${index + 1} (${eventItem.title || "Sans titre"})`);
          Object.entries(checks).forEach(([group, values]) => {
            values.forEach((message) => diagnostics.push(`- [${group}] ${message}`));
          });
        }
      });

      if (data.next_event && typeof data.next_event === "object") {
        const nextId = data.next_event.id;
        const matchFound = data.events.some((eventItem) => eventItem.id && eventItem.id === nextId);
        if (!matchFound) {
          diagnostics.push("next_event doit aussi exister dans events");
        }
      }
    }

    return {
      valid: diagnostics.length === 0,
      diagnostics
    };
  }

  function setCurrentYear() {
    const yearNodes = document.querySelectorAll("[data-current-year]");
    const year = new Date().getFullYear();
    yearNodes.forEach((node) => {
      node.textContent = String(year);
    });
  }

  function injectConfigValues() {
    document.querySelectorAll("[data-config-text]").forEach((node) => {
      const key = node.getAttribute("data-config-text");
      if (key && CONFIG[key]) {
        node.textContent = CONFIG[key];
      }
    });

    document.querySelectorAll("[data-config-href]").forEach((node) => {
      const key = node.getAttribute("data-config-href");
      const value = key ? CONFIG[key] : "";
      const url = safeExternalUrl(value);
      if (!url) {
        return;
      }
      node.setAttribute("href", url);
      if (node.getAttribute("target") === "_blank") {
        node.setAttribute("rel", "noopener noreferrer");
      }
    });

    const mailNode = document.querySelector("[data-contact-mailto]");
    if (mailNode && typeof CONFIG.CONTACT_EMAIL === "string" && CONFIG.CONTACT_EMAIL.includes("@")) {
      const safeMail = escapeHtml(CONFIG.CONTACT_EMAIL.trim());
      mailNode.setAttribute("href", `mailto:${safeMail}`);
      mailNode.textContent = safeMail;
    }
  }

  function setupActiveNav() {
    const path = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".primary-nav a").forEach((link) => {
      const href = link.getAttribute("href") || "";
      if (href.endsWith(path)) {
        link.setAttribute("aria-current", "page");
      }
    });
  }

  function setupMobileMenu() {
    const toggle = document.querySelector(".menu-toggle");
    const nav = document.getElementById("primary-nav");
    if (!toggle || !nav) {
      return;
    }

    const closeMenu = () => {
      toggle.setAttribute("aria-expanded", "false");
      nav.classList.remove("is-open");
    };

    toggle.addEventListener("click", () => {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      nav.classList.toggle("is-open", !expanded);
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        closeMenu();
      });
    });

    window.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    });
  }

  function eventCardHtml(eventItem, options) {
    const nowMs = Date.now();
    const status = deriveStatus(eventItem, nowMs);
    const imageUrl = safeImageUrl(eventItem.cover_image);
    const excerpt = eventItem.excerpt || firstSentence(eventItem.description_md) || "Atelier créatif et bien-être.";
    const ticketUrl = safeExternalUrl(eventItem.ticket_url);
    const statusLabel = status === "upcoming" ? "À venir" : "Passé";

    const reserveAction =
      status === "upcoming" && ticketUrl
        ? `<a class="btn btn-small" href="${ticketUrl}" target="_blank" rel="noopener noreferrer">Réserver</a>`
        : "";

    const descriptionBlock = options.withDescription
      ? `<div class="event-description">${markdownToHtml(eventItem.description_md || "")}</div>`
      : `<p class="event-excerpt">${escapeHtml(excerpt)}</p>`;

    return `
      <article class="card event-card" data-status="${status}">
        <img src="${imageUrl}" alt="Illustration de l'atelier ${escapeHtml(eventItem.title || "")}" loading="lazy" width="640" height="360" />
        <div class="event-content">
          <div class="event-meta-line">
            <span class="status-pill status-${status}">${statusLabel}</span>
            <span class="event-capacity">${escapeHtml(String(eventItem.capacity || ""))} places</span>
          </div>
          <h3>${escapeHtml(eventItem.title || "Atelier Masoda")}</h3>
          <p class="event-datetime">${escapeHtml(formatDateRange(eventItem.datetime_start, eventItem.datetime_end))}</p>
          <p class="event-location">${escapeHtml(eventItem.location || "Lieu à confirmer")}</p>
          ${descriptionBlock}
          <div class="event-actions">
            ${reserveAction}
          </div>
        </div>
      </article>
    `;
  }

  function renderNextEvent(containerId, eventItem) {
    const container = document.getElementById(containerId);
    if (!container) {
      return;
    }

    if (!eventItem || typeof eventItem !== "object") {
      container.innerHTML = "<p class=\"muted\">Le prochain atelier sera annoncé bientôt.</p>";
      return;
    }

    container.innerHTML = eventCardHtml(eventItem, { withDescription: true });
  }

  function renderPastEvents(containerId, events) {
    const container = document.getElementById(containerId);
    if (!container) {
      return;
    }

    const pastEvents = events
      .filter((eventItem) => deriveStatus(eventItem, Date.now()) === "past")
      .sort((a, b) => new Date(b.datetime_start).getTime() - new Date(a.datetime_start).getTime())
      .slice(0, 6);

    if (pastEvents.length === 0) {
      container.innerHTML = "<p class=\"muted\">Les premiers ateliers passés apparaîtront ici.</p>";
      return;
    }

    container.innerHTML = pastEvents.map((eventItem) => eventCardHtml(eventItem, { withDescription: false })).join("");
  }

  function setupCalendarEmbed() {
    const frameHost = document.getElementById("calendar-embed");
    const addLink = document.getElementById("calendar-add-link");
    const helper = document.getElementById("calendar-helper");

    if (!frameHost) {
      return;
    }

    const embedUrl = safeExternalUrl(CONFIG.GOOGLE_CALENDAR_EMBED_URL || "");
    const publicUrl = safeExternalUrl(CONFIG.GOOGLE_CALENDAR_PUBLIC_URL || "");

    if (embedUrl) {
      frameHost.innerHTML = `<iframe src="${embedUrl}" title="Agenda Les ateliers Masoda" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>`;
      if (helper) {
        helper.textContent = "Agenda Google Calendar intégré.";
      }
    } else {
      frameHost.innerHTML = `
        <div class="embed-placeholder">
          <p>L'agenda Google Calendar n'est pas encore connecté.</p>
          <p>Ajouter l'URL d'embed dans <code>./assets/js/config.js</code> via <code>GOOGLE_CALENDAR_EMBED_URL</code>.</p>
        </div>
      `;
      if (helper) {
        helper.textContent = "Un lien d'ajout au calendrier reste disponible dès qu'une URL publique est renseignée.";
      }
    }

    if (!addLink) {
      return;
    }

    if (publicUrl) {
      addLink.setAttribute("href", publicUrl);
      addLink.classList.remove("is-hidden");
      return;
    }

    addLink.classList.add("is-hidden");
  }

  function setupContactFormEmbed() {
    const frameHost = document.getElementById("contact-form-embed");
    if (!frameHost) {
      return;
    }

    const rawFormUrl = typeof CONFIG.GOOGLE_FORM_EMBED_URL === "string" ? CONFIG.GOOGLE_FORM_EMBED_URL.trim() : "";
    const formUrl = safeExternalUrl(rawFormUrl);
    if (!formUrl) {
      frameHost.innerHTML = `
        <div class="embed-placeholder">
          <p>Le formulaire Google Form n'est pas encore ajouté.</p>
          <p>Coller l'URL d'embed dans <code>./assets/js/config.js</code> via <code>GOOGLE_FORM_EMBED_URL</code>.</p>
        </div>
      `;
      return;
    }

    frameHost.innerHTML = `<iframe src="${escapeHtml(rawFormUrl)}" title="Formulaire de contact Les ateliers Masoda" loading="lazy" frameborder="0" marginheight="0" marginwidth="0"></iframe>`;
  }

  function setupAteliersFilters(events) {
    const grid = document.getElementById("ateliers-grid");
    const tabs = Array.from(document.querySelectorAll(".filter-tab"));

    if (!grid || tabs.length === 0) {
      return;
    }

    const sorted = [...events].sort((a, b) => new Date(b.datetime_start).getTime() - new Date(a.datetime_start).getTime());

    function render(filter) {
      const nowMs = Date.now();
      const filtered = sorted.filter((eventItem) => {
        const status = deriveStatus(eventItem, nowMs);
        if (filter === "all") {
          return true;
        }
        return status === filter;
      });

      if (filtered.length === 0) {
        grid.innerHTML = "<p class=\"muted\">Aucun atelier pour ce filtre.</p>";
        return;
      }

      grid.innerHTML = filtered.map((eventItem) => eventCardHtml(eventItem, { withDescription: false })).join("");
    }

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        tabs.forEach((button) => {
          button.classList.remove("is-active");
          button.setAttribute("aria-selected", "false");
        });
        tab.classList.add("is-active");
        tab.setAttribute("aria-selected", "true");

        const filter = tab.getAttribute("data-filter") || "all";
        render(filter);
      });
    });

    render("all");
  }

  async function loadEventsData() {
    try {
      const response = await fetch(DATA_PATH, { cache: "no-store" });
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Chargement events.json impossible:", error);
      return null;
    }
  }

  function showValidationBanner(diagnostics) {
    if (!diagnostics || diagnostics.length === 0) {
      return;
    }
    const container = document.querySelector("[data-validation-output]");
    if (!container) {
      return;
    }

    const list = diagnostics.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
    container.innerHTML = `<ul class=\"validation-list\">${list}</ul>`;
    container.classList.remove("is-hidden");
  }

  async function initDataDrivenSections() {
    const data = await loadEventsData();
    if (!data) {
      renderNextEvent("home-next-event", null);
      renderNextEvent("agenda-next-event", null);
      return;
    }

    const validation = validateDataset(data);
    if (!validation.valid) {
      console.warn("Diagnostic événements:", validation.diagnostics);
      showValidationBanner(validation.diagnostics);
    }

    const events = Array.isArray(data.events) ? data.events : [];
    const nextEvent = data.next_event || events.find((eventItem) => deriveStatus(eventItem, Date.now()) === "upcoming") || null;

    renderNextEvent("home-next-event", nextEvent);
    renderNextEvent("agenda-next-event", nextEvent);
    renderPastEvents("agenda-past-events", events);
    setupAteliersFilters(events);
    setupCalendarEmbed();
  }

  function init() {
    setCurrentYear();
    injectConfigValues();
    setupActiveNav();
    setupMobileMenu();
    setupContactFormEmbed();
    initDataDrivenSections();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
