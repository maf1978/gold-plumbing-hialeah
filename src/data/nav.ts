import type { Locale } from './site';
import { ui } from './site';

export function getNavLinks(locale: Locale) {
  const t = ui[locale];
  const prefix = locale === 'es' ? '/es' : '';

  return [
    { label: t.home, href: locale === 'es' ? '/es/' : '/' },
    { label: t.about, href: `${prefix}/about` },
    { label: t.services, href: `${prefix}/services` },
    { label: t.howItWorks, href: `${prefix}/#how-it-works` },
    { label: t.reviews, href: `${prefix}/reviews` },
    { label: t.contact, href: `${prefix}/contact` },
  ];
}
