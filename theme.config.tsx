import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  project: {
    link: 'https://github.com/holovin777/portfolionextra',
  },
  docsRepositoryBase: 'https://github.com/holovin777/portfolionextra/',
  logo: <span>Viktor Holovin</span>,
  footer: {
    text: 'Viktor Holovin',
  },
  i18n: [
    { locale: 'en', text: 'English' },
    { locale: 'it', text: 'Italiano' }
  ]
}

export default config
