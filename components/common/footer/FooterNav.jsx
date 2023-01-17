import Link from "next/link";

export default function FooterNav() {
  return (
    <nav className="footer-nav">
      <header className="d-lg-none mt-4 mt-lg-0">
        <h1>How can we help?</h1>
      </header>

      <div className="my-4 my-lg-0">
        <ul>
          <li>
            <Link href="/" title="about us">about us</Link>
          </li>

          <li>
            <Link href="/" title="careers">careers</Link>
          </li>

          <li>
            <Link href="/" title="affiliates">affiliates</Link>
          </li>

          <li>
            <Link href="/" title="advertising">advertising</Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link href="/" title="style and fit">style and fit</Link>
          </li>

          <li>
            <Link href="/" title="faqs">faqs</Link>
          </li>

          <li>
            <Link href="/" title="Delivery">delivery</Link>
          </li>

          <li>
            <Link href="/" title="returns">returns</Link>
          </li>
        </ul>
      </div>

      <footer className="mb-4 d-lg-none">
        <Link href="/" title="terms & conditions">terms & conditions</Link>

        <Link href="/" title="privacy & cookies">privacy & cookies</Link>
      </footer>
    </nav>
  );
}
