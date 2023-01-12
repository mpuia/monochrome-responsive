import Link from 'next/link';

export default function Footer() {
  return (
    <section className="footer mt-11">
      <div className="footer-inner container">
    <section className="footer-contact d-none d-lg-block">
    <ul>
      <li>
        <a href="tel:+44 (0)10 2345 6789" title="Call us">
          call us <span>+44 (0)10 2345 6789</span>
        </a>
      </li>
    </ul>
    </section>
      </div>
    </section>
  );
}
