import Link from 'next/link';
import FooterConnect from "./FooterConnect";
import FooterContact from './FooterContact';
import FooterNav from './FooterNav';

export default function Footer() {
  return (
    <section className="footer mt-11">
      <div className="footer-inner py-lg-5 gap-10 container">
        <FooterContact></FooterContact>

        <FooterNav></FooterNav>

        <FooterConnect></FooterConnect>
      </div>
    </section>
  );
}
