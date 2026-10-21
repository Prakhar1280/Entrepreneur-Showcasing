// Structured Data Arrays (Fulfills Second-Year Technical Expectation)
const milestonesData = [
  {
    year: "1992 - 2002",
    title: "Stanford Law & Frankfurt Doctorate",
    description: "Earned a J.D. from Stanford Law School (meeting future co-founder Peter Thiel), followed by a Ph.D. in neoclassical social theory at Goethe University Frankfurt under Jürgen Habermas."
  },
  {
    year: "2002",
    title: "Founding Caedmon Group",
    description: "Launched the London-based asset management fund Caedmon Group using seed capital from an inheritance, demonstrating early acumen in European high-net-worth investments."
  },
  {
    year: "2003 - 2004",
    title: "Co-Founding Palantir Technologies",
    description: "Teamed up with Peter Thiel, Joe Lonsdale, Nathan Gettings, and Stephen Cohen to develop security software aimed at stopping terrorism through data fusion."
  },
  {
    year: "2020",
    title: "NYSE Direct Public Listing",
    description: "Steered Palantir to a successful direct public listing on the New York Stock Exchange (NYSE: PLTR), proving commercial viability alongside government intelligence operations."
  },
  {
    year: "2023 - 2026",
    title: "AIP & Enterprise AI Expansion",
    description: "Pioneered Palantir's Artificial Intelligence Platform (AIP), integrating LLMs securely with private enterprise backends for autonomous supply chain and operational planning."
  }
];

const venturesData = [
  {
    name: "Palantir Gotham",
    category: "Defense",
    tag: "Defense & Counter-Terrorism",
    connection: "Co-founder & CEO. Gotham was Palantir's inaugural flagship platform designed for US defense intelligence analysts to synthesize signals, satellite feeds, and operational data.",
    link: "https://www.palantir.com/platforms/gotham/"
  },
  {
    name: "Palantir Foundry",
    category: "Enterprise",
    tag: "Enterprise Data Fabric",
    connection: "Co-founder & CEO. Spearheaded Palantir's expansion into private industry, establishing Foundry as the unified operational data backbone for manufacturing, healthcare, and finance.",
    link: "https://www.palantir.com/platforms/foundry/"
  },
  {
    name: "Palantir AIP",
    category: "Enterprise",
    tag: "Artificial Intelligence Platform",
    connection: "Chief Strategist. Conceived the secure integration layer allowing corporations and military commands to execute generative AI reasoning with strict access control.",
    link: "https://www.palantir.com/platforms/aip/"
  },
  {
    name: "Caedmon Group",
    category: "Finance",
    tag: "Asset Management",
    connection: "Founder. Karp's initial venture post-doctorate, establishing his early network among international capital allocators before joining Palantir.",
    link: "https://www.britannica.com/money/Alex-Karp"
  }
];

// DOM Render Functions
function renderTimeline() {
  const container = document.getElementById("timeline-container");
  container.innerHTML = milestonesData
    .map(
      item => `
      <div class="timeline-item">
        <span class="timeline-year">${item.year}</span>
        <h3 class="timeline-title">${item.title}</h3>
        <p class="timeline-desc">${item.description}</p>
      </div>
    `
    )
    .join("");
}

function renderVentures(filter = "all") {
  const grid = document.getElementById("ventures-grid");
  const filtered = filter === "all" ? venturesData : venturesData.filter(v => v.category === filter);

  grid.innerHTML = filtered
    .map(
      v => `
      <div class="venture-card">
        <span class="venture-tag">${v.tag}</span>
        <h3>${v.name}</h3>
        <p class="venture-desc">${v.connection}</p>
        <a class="venture-link" href="${v.link}" target="_blank" rel="noopener">Official Link &rarr;</a>
      </div>
    `
    )
    .join("");
}

// Interaction: Category Filters
function setupFilters() {
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderVentures(btn.dataset.filter);
    });
  });
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  renderTimeline();
  renderVentures();
  setupFilters();
});
