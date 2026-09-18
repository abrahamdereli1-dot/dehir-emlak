import { describe, expect, it } from 'vitest'
import { featuredListings } from './listings'

describe('featuredListings', () => {
  it('provides six complete properties for the homepage showcase', () => {
    expect(featuredListings).toHaveLength(6)
    expect(featuredListings.every((listing) => (
      listing.title
      && listing.category
      && listing.location
      && listing.price
      && listing.detailUrl.startsWith('https://')
      && listing.image
    ))).toBe(true)
  })
})
