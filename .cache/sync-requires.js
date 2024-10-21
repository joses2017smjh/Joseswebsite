
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/workspaces/Joseswebsite/.cache/dev-404-page.js")),
  "component---src-pages-contact-js": preferDefault(require("/workspaces/Joseswebsite/src/pages/contact.js")),
  "component---src-pages-index-js": preferDefault(require("/workspaces/Joseswebsite/src/pages/index.js")),
  "component---src-pages-projects-js": preferDefault(require("/workspaces/Joseswebsite/src/pages/projects.js"))
}

