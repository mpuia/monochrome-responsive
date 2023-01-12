import Link from "next/link";

export default function HeaderPrimary() {
  return (
    <>
    <div className="container">
      <ul className="d-lg-none">
      <li>
        <Link href="/" title="Menu">
            <i className="fa-solid fa-bars"></i>
        </Link>
      </li>

      <li>
        <form className="header-search">
          <input type="text" name="search" placeholder="Search"/>
          <button type="submit">
          <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      </li>
      </ul>

      <nav className="d-none d-lg-block">
        <ul>
          <li>
            <Link href="/" title="New Arrivals">New Arrivals</Link>
          </li>

          <li>
            <Link href="/" title="Brands">Brands</Link>
          </li>

          <li>
            <Link href="/" title="Men's">Men's</Link>
          </li>

          <li>
            <Link href="/" title="Women's">Women's</Link>
          </li>

          <li>
            <Link href="/" title="Accessories">Accessories</Link>
          </li>

          <li>
            <Link href="/" title="Lookbook">Lookbook</Link>
          </li>
        </ul>
      </nav>
    </div>
    </>
  );
}
