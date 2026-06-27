import { useLocation } from 'react-router-dom'
import { getLocale } from '../utils/locale'

// Route-derived locale ('en' on /en/* paths, 'es' otherwise). Prerender-safe
// (pure, no client-only state). No Context needed — every page already routes.
export function useLocale() {
  return getLocale(useLocation().pathname)
}
