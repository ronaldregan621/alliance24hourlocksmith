export type TrustItemProps = {
  iconSrc: string;
  title: string;
  description: string;
};

export const TrustItem = (props: TrustItemProps) => {
  return (
    <div className="items-center bg-slate-100 caret-transparent gap-x-3 flex gap-y-3 border border-slate-200 p-3 rounded-xl border-solid">
      <img
        src={props.iconSrc}
        alt="Icon"
        className="text-gray-800 caret-transparent h-7 w-7"
      />
      <div className="caret-transparent">
        <strong className="font-bold caret-transparent block">
          {props.title}
        </strong>
        <span className="caret-transparent">{props.description}</span>
      </div>
    </div>
  );
};
