export const ContactForm = () => {
  return (
    <div
      role="form"
      className="text-slate-900 bg-white caret-transparent p-4 rounded-[14px]"
    >
      <h2 className="text-xl font-bold caret-transparent leading-[30px] mb-2.5">
        Request a Quote
      </h2>
      <form className="caret-transparent gap-x-2.5 grid gap-y-2.5">
        <div className="caret-transparent">
          <label className="text-sm font-bold caret-transparent leading-[21px]">
            Your Name
          </label>
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            className="text-black text-[13.3333px] caret-transparent leading-[normal] w-full border border-indigo-200 px-3.5 py-3 rounded-xl border-solid font-arial"
          />
        </div>
        <div className="caret-transparent">
          <label className="text-sm font-bold caret-transparent leading-[21px]">
            Phone Number
          </label>
          <input
            name="phone"
            type="tel"
            placeholder="(914) 406-4474"
            className="text-black text-[13.3333px] caret-transparent leading-[normal] w-full border border-indigo-200 px-3.5 py-3 rounded-xl border-solid font-arial"
          />
        </div>
        <div className="caret-transparent">
          <label className="text-sm font-bold caret-transparent leading-[21px]">
            Service Needed
          </label>
          <input
            name="service"
            type="text"
            placeholder="e.g., Car lockout, door rekey"
            className="text-black text-[13.3333px] caret-transparent leading-[normal] w-full border border-indigo-200 px-3.5 py-3 rounded-xl border-solid font-arial"
          />
        </div>
        <div className="caret-transparent">
          <button
            type="submit"
            className="text-gray-800 text-[13.3333px] font-extrabold bg-white caret-transparent leading-[normal] text-center px-[18px] py-3 rounded-xl font-arial"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
