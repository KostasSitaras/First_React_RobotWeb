import useChapterSnap from '../useChapterSnap';
import '../story-motion.css';

export function Chapter({ children, label }) {
  return (
    <section className="story-chapter page-chapter" aria-label={label}>
      <div className="w-full">{children}</div>
    </section>
  );
}

export default function ChapterPage({ children }) {
  useChapterSnap();
  return <div className="page-shell chapter-page">{children}</div>;
}
