import { useEffect } from 'react';

const SITE_URL = 'https://subbukutty.github.io/Tutypackers';

export default function usePageMeta(title, description, path = '') {
  useEffect(() => {
    if (title) document.title = title;

    if (description) {
      const desc = document.querySelector('meta[name="description"]');
      if (desc) desc.setAttribute('content', description);
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute('content', description);
      const twDesc = document.querySelector('meta[name="twitter:description"]');
      if (twDesc) twDesc.setAttribute('content', description);
    }

    if (title) {
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute('content', title);
      const twTitle = document.querySelector('meta[name="twitter:title"]');
      if (twTitle) twTitle.setAttribute('content', title);
    }

    const url = `${SITE_URL}${path}`;
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', url);
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', url);
  }, [title, description, path]);
}
