import { useEffect, useState } from 'react';
import './splash-intro.css';

const INTRO_SEEN_KEY = 'kcode-intro-seen';

export default function SplashIntro({ children }) {
  const [phase, setPhase] = useState(() => {
    try {
      return sessionStorage.getItem(INTRO_SEEN_KEY) ? 'done' : 'loading';
    } catch {
      return 'loading';
    }
  });

  useEffect(() => {
    if (phase !== 'loading') return;

    try {
      sessionStorage.setItem(INTRO_SEEN_KEY, 'true');
    } catch {
      // The intro still works when browser storage is unavailable.
    }

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let cancelled = false;
    let minimumTimer;
    let maximumTimer;
    let exitTimer;
    let handleLoad;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const minimumDuration = new Promise((resolve) => {
      minimumTimer = window.setTimeout(resolve, reducedMotion ? 0 : 1700);
    });
    const pageLoaded = new Promise((resolve) => {
      handleLoad = resolve;
      if (document.readyState === 'complete') resolve();
      else window.addEventListener('load', handleLoad, { once: true });
    });
    // A stalled external resource must never trap visitors behind the intro.
    const maximumDuration = new Promise((resolve) => {
      maximumTimer = window.setTimeout(resolve, 6000);
    });
    const resourcesReady = Promise.all([pageLoaded, document.fonts?.ready]);

    Promise.all([minimumDuration, Promise.race([resourcesReady, maximumDuration])]).then(() => {
      if (cancelled) return;
      document.getElementById('kcode-splash')?.classList.add('is-leaving');
      exitTimer = window.setTimeout(() => {
        if (cancelled) return;
        setPhase('done');
      }, reducedMotion ? 0 : 600);
    });

    return () => {
      cancelled = true;
      window.clearTimeout(minimumTimer);
      window.clearTimeout(maximumTimer);
      window.clearTimeout(exitTimer);
      window.removeEventListener('load', handleLoad);
      document.body.style.overflow = previousOverflow;
    };
  }, [phase]);

  const active = phase !== 'done';

  return (
    <>
      {active && (
        <div id="kcode-splash" className="splash-intro" role="status" aria-label="Loading KCODE.">
          <div className="splash-intro__wordmark" aria-hidden="true">
            <span className="splash-intro__initial">K</span>
            <span className="splash-intro__rest">CODE<span className="splash-intro__dot">.</span></span>
          </div>
        </div>
      )}
      <div inert={active} aria-hidden={active ? true : undefined}>
        {children}
      </div>
    </>
  );
}
