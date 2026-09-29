import { RichText } from "./rich-text";

const answerClass =
  "mt-2 text-base leading-7 text-text-secondary md:text-[17px] md:leading-8";

export function ContentFaq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="mt-6 space-y-8">
      {items.map((item) => (
        <section key={item.q}>
          <h3 className="text-lg font-semibold tracking-tight text-pretty text-text">
            {item.q}
          </h3>
          <p className={answerClass}>
            <RichText text={item.a} />
          </p>
        </section>
      ))}
    </div>
  );
}
