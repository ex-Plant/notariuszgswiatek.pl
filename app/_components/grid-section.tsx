type Props = {
  rail: React.ReactNode;
  children: React.ReactNode;
  railSide?: "left" | "right";
  borderTop?: boolean;
};

const stackedSeparator =
  "mt-10 pt-10 border-t border-ink/12 md:mt-0 md:pt-0 md:border-t-0";

export function GridSection({
  rail,
  children,
  railSide = "right",
  borderTop = true,
}: Props) {
  const railClass =
    railSide === "right"
      ? `md:col-span-5 md:col-start-8 lg:col-start-9 lg:col-span-4 md:border-l md:border-ink/12 md:pl-8 ${stackedSeparator}`
      : "md:col-span-5 lg:col-span-4 md:border-r md:border-ink/12 md:pr-8";

  const contentClass =
    railSide === "right"
      ? "md:col-span-7"
      : `md:col-span-7 md:col-start-6 ${stackedSeparator}`;

  return (
    <section className="pl-6 pr-10 md:px-12">
      <div
        className={`py-10 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-x-8${
          borderTop ? " border-t border-ink/12" : ""
        }`}
      >
        {railSide === "left" && <div className={railClass}>{rail}</div>}
        <div className={contentClass}>{children}</div>
        {railSide === "right" && <div className={railClass}>{rail}</div>}
      </div>
    </section>
  );
}
