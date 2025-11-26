export const FooterContent = () => {
  return (
    <div className="items-center caret-transparent gap-x-2.5 flex flex-wrap justify-between gap-y-2.5">
      <div className="caret-transparent">
        <strong className="font-bold caret-transparent">
          Alliance 24hr Locksmith
        </strong>
        <div className="caret-transparent">Westchester County, NY</div>
        <div className="caret-transparent">
          <a
            href="tel://+19144064474"
            className="font-bold caret-transparent underline"
          >
            (914) 406-4474
          </a>
        </div>
      </div>
      <nav aria-label="footer" className="caret-transparent">
        <a
          href="/emergency-locksmith/"
          className="text-blue-100 caret-transparent mr-3"
        >
          Emergency
        </a>
        <a
          href="/car-lockout/"
          className="text-blue-100 caret-transparent mr-3"
        >
          Car Lockout
        </a>
        <a
          href="/house-lockout/"
          className="text-blue-100 caret-transparent mr-3"
        >
          House Lockout
        </a>
        <a href="/price-list/" className="text-blue-100 caret-transparent mr-3">
          Price List
        </a>
        <a href="/contact/" className="text-blue-100 caret-transparent">
          Contact
        </a>
        <a
          href="https://instagram.com/alliance24hourlocksmith"
          aria-label="Instagram: alliance24hourlocksmith"
          className="text-blue-100 caret-transparent underline ml-3"
        >
          Instagram
        </a>
      </nav>
      <small className="text-blue-100 text-[13.3333px] caret-transparent block leading-5">
        © <span className="caret-transparent">2025</span>
        Alliance 24hr Locksmith. All rights reserved.
      </small>
    </div>
  );
};
