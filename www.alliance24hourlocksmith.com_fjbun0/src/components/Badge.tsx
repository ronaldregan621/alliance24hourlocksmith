export const Badge = () => {
  return (
    <div
      aria-label="24/7 emergency"
      className="font-bold items-center bg-indigo-50 caret-transparent gap-x-2 inline-flex gap-y-2 px-2.5 py-1.5 rounded-[999px]"
    >
      <img
        src="https://c.animaapp.com/mhvb8ivrIxJTsx/assets/icon-3.svg"
        alt="Icon"
        className="text-gray-800 caret-transparent h-7 w-7"
      />
      <span className="caret-transparent block">
        24/7 Emergency Dispatch • Westchester County, NY
      </span>
    </div>
  );
};
