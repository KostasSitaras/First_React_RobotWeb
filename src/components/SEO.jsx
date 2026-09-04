import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE_URL = 'https://kostassitaras.github.io/First_React_RobotWeb/';
const SOCIAL_IMAGE = 'https://github.com/KostasSitaras.png?size=1200';

const defaultMeta = {
  title: 'Konstantinos Sitaras | Junior Software Engineer',
  description:
    'Portfolio of Konstantinos Sitaras, a Junior Software Engineer and Full-Stack Developer based in Thessaloniki, Greece. Explore projects, skills, certifications and contact details.',
};

const routeMeta = {
  '/': defaultMeta,
  '/about': {
    title: 'About | Konstantinos Sitaras',
    description:
      'Learn about Konstantinos Sitaras, his Applied Informatics background, technical skills, experience and certifications.',
  },
  '/projects': {
    title: 'Projects | Konstantinos Sitaras',
    description:
      'Explore software projects by Konstantinos Sitaras, including a React developer portfolio and an Airbnb property management platform.',
  },
  '/contact': {
    title: 'Contact | Konstantinos Sitaras',
    description:
      'Contact Konstantinos Sitaras for Junior Software Engineer, front-end and full-stack development opportunities.',
  },
  '/privacy': {
    title: 'Privacy Policy | Konstantinos Sitaras',
    description: 'Privacy and analytics information for the Konstantinos Sitaras developer portfolio.',
  },
  '/terms': {
    title: 'Terms of Use | Konstantinos Sitaras',
    description: 'Terms of use for the Konstantinos Sitaras developer portfolio.',
  },
  '/faq': {
    title: 'FAQ | Konstantinos Sitaras',
    description: 'Frequently asked questions about Konstantinos Sitaras, his projects, skills and availability.',
  },
};

const setMeta = (selector, attribute, value) => {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement('meta');
    const match = selector.match(/meta\[(name|property)="([^"]+)"\]/);
    if (match) element.setAttribute(match[1], match[2]);
    document.head.appendChild(element);
  }

  element.setAttribute(attribute, value);
};

const SEO = () => {
  const location = useLocation();

  useEffect(() => {
    const meta = routeMeta[location.pathname] || {
      title: 'Page not found | Konstantinos Sitaras',
      description: 'The requested page could not be found on the Konstantinos Sitaras portfolio.',
    };

    document.title = meta.title;
    setMeta('meta[name="description"]', 'content', meta.description);
    setMeta('meta[property="og:title"]', 'content', meta.title);
    setMeta('meta[property="og:description"]', 'content', meta.description);
    setMeta('meta[property="og:url"]', 'content', SITE_URL);
    setMeta('meta[property="og:image"]', 'content', SOCIAL_IMAGE);
    setMeta('meta[property="og:image:alt"]', 'content', 'Konstantinos Sitaras developer portfolio');
    setMeta('meta[name="twitter:title"]', 'content', meta.title);
    setMeta('meta[name="twitter:description"]', 'content', meta.description);
    setMeta('meta[name="twitter:image"]', 'content', SOCIAL_IMAGE);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = SITE_URL;
  }, [location.pathname]);

  return null;
};

export default SEO;
