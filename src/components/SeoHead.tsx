import { useEffect } from 'react';
import { WHATSAPP_NUMBER } from '../data/wappshotData';
import { useLanguage } from '../i18n/LanguageContext';

const HERO_IMAGE_PATH = '/src/assets/images/hero_wappshot_workspace_1794895326381.jpg';

function upsertMeta(
  selector: string,
  attrName: 'name' | 'property',
  attrValue: string,
  content: string
) {
  let tag = document.head.querySelector<HTMLMetaElement>(selector);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attrName, attrValue);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

export function SeoHead() {
  const { lang, currentOption, t } = useLanguage();

  useEffect(() => {
    const canonicalUrl = `${window.location.origin}${window.location.pathname}`;
    const absoluteImageUrl = `${window.location.origin}${HERO_IMAGE_PATH}`;

    document.title = t.seo.title;

    // Canonical URL
    let canonicalLink = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // Localized metadata & OpenGraph tags
    upsertMeta('meta[name="description"]', 'name', 'description', t.seo.description);
    upsertMeta('meta[property="og:locale"]', 'property', 'og:locale', currentOption.ogLocale);
    upsertMeta('meta[property="og:title"]', 'property', 'og:title', t.seo.title);
    upsertMeta('meta[property="og:description"]', 'property', 'og:description', t.seo.description);
    upsertMeta('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
    upsertMeta('meta[property="og:image"]', 'property', 'og:image', absoluteImageUrl);
    upsertMeta('meta[name="twitter:title"]', 'name', 'twitter:title', t.seo.title);
    upsertMeta('meta[name="twitter:description"]', 'name', 'twitter:description', t.seo.description);
    upsertMeta('meta[name="twitter:image"]', 'name', 'twitter:image', absoluteImageUrl);

    // Rich Schema.org @graph JSON-LD synced with localized FAQ items
    const structuredData = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': `${canonicalUrl}#organization`,
          name: 'WAppShot',
          url: canonicalUrl,
          logo: `${window.location.origin}/assets/aistudio/WAppShot_fb0f63b4.png`,
          parentOrganization: {
            '@type': 'Organization',
            name: 'Vibe Hub',
          },
          contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'sales',
            telephone: `+${WHATSAPP_NUMBER}`,
            availableLanguage: ['English', 'Spanish', 'Arabic', 'Italian'],
          },
        },
        {
          '@type': 'WebSite',
          '@id': `${canonicalUrl}#website`,
          url: canonicalUrl,
          name: 'WAppShot',
          inLanguage: lang,
          publisher: {
            '@id': `${canonicalUrl}#organization`,
          },
        },
        {
          '@type': 'SoftwareApplication',
          '@id': `${canonicalUrl}#software`,
          name: 'WAppShot',
          url: canonicalUrl,
          image: absoluteImageUrl,
          inLanguage: lang,
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Web, Cloud',
          description: t.seo.description,
          publisher: {
            '@id': `${canonicalUrl}#organization`,
          },
        },
        {
          '@type': 'FAQPage',
          '@id': `${canonicalUrl}#faq`,
          inLanguage: lang,
          mainEntity: t.faq.items.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.answer,
            },
          })),
        },
      ],
    };

    let jsonLdScript = document.getElementById('wappshot-jsonld') as HTMLScriptElement | null;
    if (!jsonLdScript) {
      jsonLdScript = document.createElement('script');
      jsonLdScript.id = 'wappshot-jsonld';
      jsonLdScript.type = 'application/ld+json';
      document.head.appendChild(jsonLdScript);
    }
    jsonLdScript.textContent = JSON.stringify(structuredData);
  }, [lang, currentOption, t]);

  return null;
}
