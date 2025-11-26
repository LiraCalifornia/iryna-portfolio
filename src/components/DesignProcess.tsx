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

        {/* H2 — менший на мобайлі, як на інших сторінках */}
        <h2 className="font-semibold tracking-tight text-slate-900 text-[24px] leading-[32px] sm:text-[32px] sm:leading-[40px] md:text-[48px] md:leading-[56px]">
          {title}
        </h2>
      </header>

      {/* Кроки */}
      <div>
        {steps.map((step, index) => {
          const number = step.id ?? index + 1;
          const isFirst = index === 0;
          const onlyTextBlock = !step.image;
          const isLast = index === steps.length - 1;

          return (
            <article
              key={number}
              className="group flex gap-6 md:gap-10 py-0 md:py-0"
            >
              {/* Ліва колонка з таймлайном */}
              <div className="flex w-[88px] items-stretch">
                {/* Коло з номером (48×48) з відступом 26px зверху */}
                <div className="mt-[26px] flex-shrink-0">
                  <div
                    className={clsx(
                      "flex h-12 w-12 items-center justify-center rounded-full border text-[16px] leading-[24px] font-medium transition-colors",
                      "border-slate-200 bg-white text-slate-900",
                      "group-hover:border-slate-900 group-hover:bg-slate-900 group-hover:text-white"
                    )}
                  >
                    {number}
                  </div>
                </div>

                {/* Вертикальна лінія + мале коло */}
                <div className="ml-3 flex flex-1 flex-col items-center">
                  {/* Верхня лінія (прозора для першого елемента) */}
                  <div
                    className={clsx(
                      "w-[2px] h-9",
                      isFirst ? "bg-transparent" : "bg-slate-200"
                    )}
                  />

                  {/* Малий індикатор */}
                  <div className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 bg-white transition-colors group-hover:border-slate-900 group-hover:bg-slate-900">
                    <div className="h-3 w-3 rounded-full bg-slate-900 transition-colors group-hover:bg-white" />
                  </div>

                  {/* Нижня лінія, що тягнеться по висоті блоку */}
                  <div className="w-[2px] flex-1 bg-slate-200" />
                </div>
              </div>

              {/* Права контентна частина */}
              <div className="flex-1 mt-[26px]">
                {/* H4: менший на мобайлі, 32/40 на десктопі */}
                <h3 className="font-semibold tracking-tight text-slate-900 text-[20px] leading-[30px] sm:text-[24px] sm:leading-[32px] md:text-[32px] md:leading-[40px]">
                  {step.title}
                </h3>

                {/* text L: 20/32 → адаптація для мобайлу */}
                <p className="mt-4 text-slate-700 text-[16px] leading-[28px] sm:text-[18px] sm:leading-[30px] md:text-[20px] md:leading-[32px]">
                  {step.description}
                </p>

                {/* Якщо є картинка — картка + додатковий падінг донизу для неостаннього блоку */}
                {step.image && (
                  <div className={clsx("mt-10", !isLast && "pb-10")}>
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

                {/* Якщо блок тільки текстовий і НЕ останній → дивайдер + 48px вниз */}
                {onlyTextBlock && !isLast && (
                  <div className="mt-12">
                    <div className="h-[1px] w-full bg-slate-200" />
                    <div className="mt-12" />
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
