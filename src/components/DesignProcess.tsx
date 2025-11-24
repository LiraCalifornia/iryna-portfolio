// src/components/DesignProcess.tsx
import Image from "next/image";
import clsx from "clsx";

export type DesignProcessStep = {
  id?: number;
  title: string;
  description: string;
  image?: string | null;
};

type DesignProcessProps = {
  eyebrow?: string;
  title?: string;
  steps: DesignProcessStep[];
  className?: string;
};

export function DesignProcess({
  eyebrow = "How & Why",
  title = "Design Process",
  steps,
  className = "",
}: DesignProcessProps) {
  if (!steps || steps.length === 0) return null;

  return (
    <section
      className={clsx(
        "mt-16 border-t border-slate-200 pt-16 md:mt-24 md:pt-20",
        className
      )}
    >
      {/* Заголовок секції */}
      <header className="mb-10 md:mb-12">
        {/* CUPS 13 */}
        <p className="mb-2 text-[13px] leading-[20px] font-semibold tracking-[0.16em] uppercase text-sky-600">
          {eyebrow}
        </p>

        {/* H2 */}
        <h2 className="font-semibold tracking-tight text-slate-900 text-[32px] leading-[40px] md:text-[48px] md:leading-[56px]">
          {title}
        </h2>
      </header>

      {/* Кроки */}
      <div className="divide-y divide-slate-200">
        {steps.map((step, index) => {
          const number = step.id ?? index + 1;
          const isFirst = index === 0;

          return (
            <article
              key={number}
              className="group flex gap-6 md:gap-10 py-10 md:py-12"
            >
              {/* Ліва колонка з таймлайном */}
              <div className="flex w-[88px] items-stretch">
                {/* Коло з номером (48×48) */}
                <div className="mt-[26px] flex-shrink-0">
                  <div
                    className={clsx(
                      "flex h-12 w-12 items-center justify-center rounded-full border text-[16px] leading-[24px] font-medium transition-colors",
                      // default state
                      "border-slate-200 bg-white text-slate-900",
                      // hover state
                      "group-hover:border-slate-900 group-hover:bg-slate-900 group-hover:text-white"
                    )}
                  >
                    {number}
                  </div>
                </div>

                {/* Права частина таймлайна: лінії + мале коло */}
                <div className="ml-3 flex flex-1 flex-col items-center">
                  {/* Верхня лінія 36px: прозора для першого елемента, сіра для решти */}
                  <div
                    className={clsx(
                      "w-[2px] h-9",
                      isFirst ? "bg-transparent" : "bg-slate-200"
                    )}
                  />

                  {/* Малий індикатор (28×28) з внутрішнім колом 12×12 */}
                  <div className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 bg-white transition-colors group-hover:border-slate-900 group-hover:bg-slate-900">
                    <div className="h-3 w-3 rounded-full bg-slate-900 transition-colors group-hover:bg-white" />
                  </div>

                  {/* Нижня лінія, що тягнеться по висоті блоку */}
                  <div className="w-[2px] flex-1 bg-slate-200" />
                </div>
              </div>

              {/* Права контентна частина */}
              <div className="flex-1">
                {/* H4: 32/40 */}
                <h3 className="font-semibold tracking-tight text-slate-900 text-[32px] leading-[40px]">
                  {step.title}
                </h3>

                {/* text L: 20/32 */}
                <p className="mt-4 text-[20px] leading-[32px] text-slate-700">
                  {step.description}
                </p>

                {step.image && (
                  <div className="mt-10">
                    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/40">
                      <Image
                        src={step.image}
                        alt={step.title}
                        width={640}
                        height={340}
                        className="h-auto w-full object-cover"
                      />
                    </div>
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
