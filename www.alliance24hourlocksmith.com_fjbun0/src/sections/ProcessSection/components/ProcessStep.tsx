export type ProcessStepProps = {
  stepNumber: string;
  title: string;
  description: string;
};

export const ProcessStep = (props: ProcessStepProps) => {
  return (
    <div className="bg-white shadow-[rgba(2,21,69,0.04)_0px_2px_8px_0px] caret-transparent border border-slate-200 p-4 rounded-[14px] border-solid">
      <div className="caret-transparent">
        <span className="text-gray-800 font-extrabold items-center bg-slate-200 caret-transparent inline-flex h-7 justify-center w-7 mr-2 rounded-[999px]">
          {props.stepNumber}
        </span>
        <strong className="font-bold caret-transparent">{props.title}</strong>
      </div>
      <p className="text-slate-700 caret-transparent mt-1.5 mb-4">
        {props.description}
      </p>
    </div>
  );
};
