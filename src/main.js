import './style.css'

document.querySelector('#app').innerHTML = `
  <header class="site-header">
    <a class="brand" href="#home" aria-label="Chamber Brief Bank home">
      <span class="brand-mark" aria-hidden="true">
        <svg viewBox="0 0 40 40" fill="none">
          <path d="M20 5v25M12 34h16M15 30h10M10 11h20M20 7l-2 4h4l-2-4Z" />
          <path d="m10 11-6 10h12l-6-10ZM30 11l-6 10h12l-6-10ZM4 21c0 3 2.7 5 6 5s6-2 6-5M24 21c0 3 2.7 5 6 5s6-2 6-5" />
        </svg>
      </span>
      <span class="brand-copy">
        <span class="brand-name">Chamber Brief Bank</span>
        <span class="brand-caption">Knowledge. Precedent. Practice.</span>
      </span>
    </a>

    <nav class="primary-nav" aria-label="Main navigation">
      <a class="nav-link active" href="#home">Brief library</a>
      <a class="nav-link" href="#practice-areas">Practice areas</a>
      <a class="nav-link" href="#about">About the chamber</a>
    </nav>

    <a class="login-button" href="#director-login">
      <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M10 10a3.25 3.25 0 1 0 0-6.5A3.25 3.25 0 0 0 10 10ZM4 16.5c.7-2.45 2.7-3.75 6-3.75s5.3 1.3 6 3.75" />
      </svg>
      Director Login
    </a>
  </header>

  <main id="home">
    <section class="hero" aria-labelledby="hero-title">
      <div class="hero-content">
        <p class="eyebrow"><span></span> A resource for the legal profession</p>
        <h1 id="hero-title">A stronger case<br />starts <em>with insight.</em></h1>
        <p class="hero-description">
          Search the chamber’s collection of legal briefs, opinions, and considered arguments.
          Trusted knowledge, ready when you need it.
        </p>

        <form class="search-form" role="search" action="#brief-library">
          <svg class="search-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="10.8" cy="10.8" r="6.8" />
            <path d="m16 16 4.5 4.5" />
          </svg>
          <label class="sr-only" for="brief-search">Search legal briefs</label>
          <input
            id="brief-search"
            name="q"
            type="search"
            placeholder="Search briefs, cases, topics..."
            autocomplete="off"
          />
          <button type="submit">Search library <span aria-hidden="true">→</span></button>
        </form>

        <div class="hero-footnote">
          <span class="secure-mark" aria-hidden="true">
            <svg viewBox="0 0 16 16" fill="none">
              <path d="M4.25 7V4.75a3.75 3.75 0 1 1 7.5 0V7M3 7h10v7H3z" />
            </svg>
          </span>
          A considered collection. Confidential by design.
        </div>
      </div>

      <aside class="hero-aside" aria-label="About the brief collection">
        <div class="aside-rule"></div>
        <p class="aside-kicker">The chamber collection</p>
        <p class="aside-quote">“The quality of our arguments is built on the quality of our preparation.”</p>
        <div class="aside-attribution">
          <span class="attribution-line"></span>
          <span>Director of Litigation</span>
        </div>
        <div class="collection-note">
          <span class="note-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M6 3.75h8.5L19 8.25v12H6zM14 4v5h5M9 13h7M9 16.5h7" />
            </svg>
          </span>
          <span><strong>Curated legal research</strong><small>Briefs prepared by our chambers</small></span>
        </div>
      </aside>
    </section>

    <section class="brief-library" id="brief-library" aria-labelledby="library-title">
      <div class="library-heading">
        <div>
          <p class="eyebrow"><span></span> The chamber collection</p>
          <h2 id="library-title">Brief library</h2>
          <p class="library-description">Explore considered arguments and legal research from across our practice.</p>
        </div>
        <span class="sample-label">Illustrative sample briefs</span>
      </div>

      <div class="filter-panel" aria-label="Filter briefs">
        <div class="filter-field">
          <label for="court-filter">Court level</label>
          <select id="court-filter" name="court">
            <option value="">All court levels</option>
            <option value="Supreme Court">Supreme Court</option>
            <option value="Court of Appeal">Court of Appeal</option>
            <option value="High Court">High Court</option>
          </select>
        </div>
        <div class="filter-field">
          <label for="area-filter">Area of law</label>
          <select id="area-filter" name="area">
            <option value="">All areas of law</option>
            <option value="Constitutional Law">Constitutional Law</option>
            <option value="Criminal Law">Criminal Law</option>
            <option value="Commercial Law">Commercial Law</option>
            <option value="Land & Property">Land &amp; Property</option>
            <option value="Employment Law">Employment Law</option>
            <option value="Administrative Law">Administrative Law</option>
          </select>
        </div>
        <button class="clear-filters" id="clear-filters" type="button">Clear filters</button>
      </div>

      <div class="results-heading">
        <h3>Recent briefs</h3>
        <p id="results-count" aria-live="polite"></p>
      </div>
      <div class="brief-grid" id="brief-results"></div>
      <div class="empty-state" id="empty-state" hidden>
        <span class="empty-mark" aria-hidden="true">⌕</span>
        <h3>No briefs found</h3>
        <p>Try a different search or clear one of the filters.</p>
        <button class="clear-filters" id="empty-clear-filters" type="button">Clear search and filters</button>
      </div>
    </section>
  </main>

  <footer class="site-footer" id="about">
    <span>CHAMBER BRIEF BANK</span>
    <span>For the pursuit of sound legal practice</span>
  </footer>
`

const briefs = [
  {
    title: 'The scope of fair hearing in administrative proceedings',
    court: 'Supreme Court',
    area: 'Constitutional Law',
    reference: 'CB-SC-2025-014',
    year: '2025',
    summary: 'A review of procedural fairness, the right to be heard, and the limits of administrative discretion.',
  },
  {
    title: 'Admissibility of digital evidence in criminal trials',
    court: 'Court of Appeal',
    area: 'Criminal Law',
    reference: 'CB-CA-2025-009',
    year: '2025',
    summary: 'Practical considerations for authentication, integrity, and evidentiary weight of electronic records.',
  },
  {
    title: 'Contract interpretation and commercial intention',
    court: 'High Court',
    area: 'Commercial Law',
    reference: 'CB-HC-2024-031',
    year: '2024',
    summary: 'An analysis of express terms, surrounding circumstances, and the principles guiding construction.',
  },
  {
    title: 'Competing interests in registered land',
    court: 'Supreme Court',
    area: 'Land & Property',
    reference: 'CB-SC-2024-022',
    year: '2024',
    summary: 'A considered note on priority, notice, and remedies where registered interests conflict.',
  },
  {
    title: 'Relief for unfair termination of employment',
    court: 'Court of Appeal',
    area: 'Employment Law',
    reference: 'CB-CA-2024-017',
    year: '2024',
    summary: 'A summary of available remedies and the evidence relevant to a claim of unfair dismissal.',
  },
  {
    title: 'Judicial review of public authority decisions',
    court: 'High Court',
    area: 'Administrative Law',
    reference: 'CB-HC-2023-028',
    year: '2023',
    summary: 'Grounds for review, procedural requirements, and the scope of relief against public bodies.',
  },
]

const searchForm = document.querySelector('.search-form')
const searchInput = document.querySelector('#brief-search')
const courtFilter = document.querySelector('#court-filter')
const areaFilter = document.querySelector('#area-filter')
const results = document.querySelector('#brief-results')
const resultsCount = document.querySelector('#results-count')
const emptyState = document.querySelector('#empty-state')

function renderBriefs() {
  const query = searchInput.value.trim().toLocaleLowerCase()
  const court = courtFilter.value
  const area = areaFilter.value
  const filteredBriefs = briefs.filter((brief) => {
    const searchableText = [
      brief.title,
      brief.court,
      brief.area,
      brief.reference,
      brief.year,
      brief.summary,
    ].join(' ').toLocaleLowerCase()

    return (!query || searchableText.includes(query))
      && (!court || brief.court === court)
      && (!area || brief.area === area)
  })

  results.innerHTML = filteredBriefs.map((brief) => `
    <article class="brief-card">
      <div class="brief-card-top">
        <span class="brief-court">${brief.court}</span>
        <span class="brief-year">${brief.year}</span>
      </div>
      <h4>${brief.title}</h4>
      <p class="brief-summary">${brief.summary}</p>
      <div class="brief-card-bottom">
        <span class="brief-area">${brief.area}</span>
        <span class="brief-reference">${brief.reference}</span>
      </div>
    </article>
  `).join('')

  resultsCount.textContent = `${filteredBriefs.length} ${filteredBriefs.length === 1 ? 'brief' : 'briefs'}`
  results.hidden = filteredBriefs.length === 0
  emptyState.hidden = filteredBriefs.length > 0
}

function clearFilters() {
  searchInput.value = ''
  courtFilter.value = ''
  areaFilter.value = ''
  renderBriefs()
  searchInput.focus()
}

searchInput.addEventListener('input', renderBriefs)
courtFilter.addEventListener('change', renderBriefs)
areaFilter.addEventListener('change', renderBriefs)
searchForm.addEventListener('submit', (event) => {
  event.preventDefault()
  renderBriefs()
  document.querySelector('#brief-library').scrollIntoView({ behavior: 'smooth' })
})
document.querySelector('#clear-filters').addEventListener('click', clearFilters)
document.querySelector('#empty-clear-filters').addEventListener('click', clearFilters)

renderBriefs()
