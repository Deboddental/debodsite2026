// NOTE: The dental-tourism landings that used to live here (english-speaking
// dentist, dental implants, veneers & smile design) have been promoted to rich
// pages and now live in src/data/dentalTourism.js, rendered by
// src/pages/DentalTourismPage.jsx. This file is kept as the data source for the
// generic /en/:enSlug/ catch-all (EnLandingPage), currently empty.

export const enLandings = []

export const getEnLanding = (slug) => enLandings.find((l) => l.slug === slug)
export default enLandings
