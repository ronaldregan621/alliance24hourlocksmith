export type BenefitCardProps = {
  title: string;
  description: string;
};

export const BenefitCard = (props: BenefitCardProps) => {
  return (
    <article
      role="listitem"
      className="relative bg-white shadow-[rgba(2,21,69,0.04)_0px_2px_8px_0px] caret-transparent text-center border-slate-200 overflow-hidden p-5 rounded-[25px] border-[3px] border-solid before:accent-auto before:bg-[linear-gradient(90deg,rgba(0,0,0,0),rgba(59,130,246,0.08),rgba(0,0,0,0))] before:caret-transparent before:text-slate-900 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-full before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-center before:indent-[0px] before:normal-case before:visible before:w-full before:border-separate before:-left-full before:top-0 before:font-apple_system"
    >
      <h3 className="text-lg font-bold caret-transparent leading-[27px] mt-1.5 mb-2">
        {props.title}
      </h3>
      <p className="text-slate-700 text-[15px] caret-transparent leading-[22.5px]">
        {props.description}
      </p>
    </article>
  );
};
