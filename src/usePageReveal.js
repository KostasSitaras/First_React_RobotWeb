import { useEffect } from 'react';

export default function usePageReveal(pathname) {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    });

    const getRevealElements = (root = document) =>
      Array.from(root.querySelectorAll?.('[data-reveal]') ?? []);

    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const showRevealElements = () => {
        getRevealElements().forEach((element) => element.classList.add('is-visible'));
      };

      showRevealElements();

      const fallbackMutationObserver = new MutationObserver(showRevealElements);
      fallbackMutationObserver.observe(document.body, { childList: true, subtree: true });

      return () => fallbackMutationObserver.disconnect();
    }

    const isStory = ['/', '/about', '/projects', '/contact'].includes(pathname);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (isStory) {
            if (entry.isIntersecting) entry.target.classList.add('is-visible');
          } else {
            entry.target.classList.toggle('is-visible', entry.isIntersecting);
          }
        });
      },
      {
        // Tall text sections must also reveal on short mobile viewports.
        threshold: 0,
        rootMargin: isStory ? `0px 0px -${Math.round(window.innerHeight * 0.12)}px 0px` : '-2% 0px -8% 0px',
      },
    );

    const exitObserver = isStory ? new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) entry.target.classList.remove('is-visible');
      });
    }, { rootMargin: '64px 0px', threshold: 0 }) : null;

    const observeElement = (element) => {
      observer.observe(element);
      exitObserver?.observe(element);
    };

    const observeRevealElements = (root = document) => {
      if (root instanceof Element && root.matches('[data-reveal]')) {
        observeElement(root);
      }

      getRevealElements(root).forEach(observeElement);
    };

    observeRevealElements();

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof Element) {
            observeRevealElements(node);
          }
        });
      });
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      mutationObserver.disconnect();
      observer.disconnect();
      exitObserver?.disconnect();
    };
  }, [pathname]);
}
