import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'

const css = readFileSync(fileURLToPath(new URL('./styles.css', import.meta.url)), 'utf8')
const app = readFileSync(fileURLToPath(new URL('./App.jsx', import.meta.url)), 'utf8')

describe('mobile navigation and CTA accessibility', () => {
  it('uses a fixed mobile menu overlay and readable dark text on gold CTAs', () => {
    expect(css).toContain('.main-nav.is-open{display:flex;position:fixed;')
    expect(css).toContain('.button-gold{background:var(--gold);color:var(--ink)}')
    expect(css).toContain('.mobile-actions a:last-child{background:var(--gold);color:var(--ink)}')
  })

  it('locks page scrolling while the mobile menu is expanded', () => {
    expect(app).toContain("document.body.style.overflow = menuOpen ? 'hidden' : ''")
  })
})
