const path = require('path');

module.exports={
  "title": "Point Network",
  "tagline": "Web 3.0 Implementation",
  "url": "https://pointnetwork.github.io",
  "baseUrl": "/",
  "organizationName": "pointnetwork",
  "projectName": "docs",
  "favicon": "img/favicon.ico",
  "customFields": {
    "markdownPlugins": [
      null
    ],
    "repoUrl": "https://github.com/pointnetwork"
  },
  "onBrokenLinks": "log",
  "onBrokenMarkdownLinks": "log",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "showLastUpdateAuthor": true,
          "showLastUpdateTime": true,
          "path": "docs",
          "sidebarPath": "../website/sidebars.json"
        },
        "theme": {
          "customCss": "../src/css/customTheme.css"
        }
      }
    ],
    [
      'redocusaurus',
      {
        "specs": [
          {
            spec: 'openapi/pointnetwork.yml',
            routePath: '/api/',
          },
        ]
      }
    ],
  ],
  "themeConfig": {
    "navbar": {
      "title": "Point Network",
      "logo": {
        "src": "img/pointlogo.png",
        "href": 'https://pointnetwork.io/'
      },
      "items": [
        {
          "to": "docs/",
          "label": "Getting Started",
          "position": "left"
        },
        {
          "to": "api/",
          "label": "API",
          "position": "left"
        }
      ]
    },
    "footer": {
      "links": [],
      "copyright": "Copyright © 2021 Point Network Limited",
      "logo": {
        "src": "img/pointlogo.png"
      }
    }
  }
}