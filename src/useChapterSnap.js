import { useEffect } from 'react';
import { getChapterSnapTarget } from './chapterSnapTarget';

export default function useChapterSnap() {
  useEffect(() => {
    const root = document.documentElement;
    const header = document.querySelector('header');
    const updateHeaderHeight = () => {
      if (header) root.style.setProperty('--story-header-height', `${header.getBoundingClientRect().height}px`);
    };
    updateHeaderHeight();
    root.classList.add('story-motion-enabled');
    const headerObserver = new ResizeObserver(updateHeaderHeight);
    if (header) headerObserver.observe(header);

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let timer;
    let frame;
    let userScrolling = false;
    let pointerDown = false;
    let touching = false;
    let gestureStart = window.scrollY;
    let lastPosition = window.scrollY;
    let direction = 0;

    const cancel = () => {
      window.clearTimeout(timer);
      window.cancelAnimationFrame(frame);
    };

    const settle = () => {
      if (!userScrolling || pointerDown || touching || reducedMotion.matches || document.activeElement?.closest('form') || document.querySelector('[aria-controls="mobile-navigation"][aria-expanded="true"]')) return;
      userScrolling = false;

      const start = window.scrollY;
      const headerHeight = document.querySelector('header')?.getBoundingClientRect().height ?? 0;
      const viewport = window.innerHeight - headerHeight;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const clamp = (value) => Math.max(0, Math.min(maxScroll, value));
      const ranges = Array.from(document.querySelectorAll('.story-chapter')).map((chapter) => {
        const rect = chapter.getBoundingClientRect();
        const top = clamp(start + rect.top - headerHeight);
        const bottom = clamp(start + rect.bottom - window.innerHeight);
        return { top, bottom: Math.max(top, bottom) };
      });
      ranges.push({ top: maxScroll, bottom: maxScroll });
      const target = getChapterSnapTarget(ranges, start, gestureStart, direction, viewport);
      const distance = target - start;
      if (Math.abs(distance) < 2) return;

      const duration = 1100;
      const startedAt = performance.now();
      const animate = (now) => {
        const progress = Math.min(1, (now - startedAt) / duration);
        // Start promptly, then decelerate into a long, soft landing.
        const eased = 1 - (1 - progress) ** 4;
        window.scrollTo({ top: start + distance * eased, behavior: 'instant' });
        if (progress < 1) frame = window.requestAnimationFrame(animate);
      };
      frame = window.requestAnimationFrame(animate);
    };

    const onScroll = () => {
      const position = window.scrollY;
      const movement = position - lastPosition;
      if (userScrolling && Math.abs(movement) > 0.5) {
        const nextDirection = Math.sign(movement);
        if (direction && direction !== nextDirection) gestureStart = lastPosition;
        direction = nextDirection;
      }
      lastPosition = position;
      window.clearTimeout(timer);
      if (userScrolling && !pointerDown && !touching) timer = window.setTimeout(settle, 120);
    };
    const onInput = (event) => {
      cancel();
      if (event?.target instanceof Element && event.target.closest('form, [role="dialog"], #mobile-navigation')) {
        userScrolling = false;
        return;
      }
      if (!userScrolling) {
        gestureStart = window.scrollY;
        lastPosition = window.scrollY;
        direction = 0;
      }
      userScrolling = true;
      onScroll();
    };
    const onKey = (event) => {
      if (event.target instanceof Element && event.target.closest('input, textarea, select, [contenteditable="true"]')) return;
      if (event.target instanceof Element && event.target.closest('button, a, summary, [role="dialog"]')) return;
      if (['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', ' '].includes(event.key)) onInput(event);
      else {
        cancel();
        userScrolling = false;
      }
    };
    const onPointerDown = () => {
      cancel();
      pointerDown = true;
      userScrolling = false;
    };
    const onPointerUp = () => {
      pointerDown = false;
      onScroll();
    };
    const onTouchStart = () => {
      cancel();
      touching = true;
      userScrolling = false;
    };
    const onTouchEnd = (event) => {
      touching = event.touches.length > 0;
      if (!touching) pointerDown = false;
      onScroll();
    };
    const reset = () => {
      cancel();
      userScrolling = false;
    };

    const listeners = [
      ['scroll', onScroll], ['wheel', onInput], ['touchmove', onInput],
      ['touchstart', onTouchStart], ['touchend', onTouchEnd], ['touchcancel', onTouchEnd],
      ['keydown', onKey], ['pointerdown', onPointerDown],
      ['pointerup', onPointerUp], ['pointercancel', onPointerUp], ['resize', reset], ['focusin', reset],
    ];
    listeners.forEach(([type, listener]) => window.addEventListener(type, listener, { passive: true }));
    reducedMotion.addEventListener('change', reset);
    return () => {
      cancel();
      headerObserver.disconnect();
      root.classList.remove('story-motion-enabled');
      root.style.removeProperty('--story-header-height');
      listeners.forEach(([type, listener]) => window.removeEventListener(type, listener));
      reducedMotion.removeEventListener('change', reset);
    };
  }, []);
}
