export default function HomeContent() {
  return (
    <div className="home-content my-4 container">
      <aside>
        <picture className="d-lg-none">
          <img src="/images/mobile/homepageMobile.png" alt="Monochrome Mobile"/>
        </picture>

        <picture className="d-none d-lg-inline">
          <img src="/images/desktop/homepage.png" alt="Monochrome Desktop" />
        </picture>
      </aside>

      <section>
        <h1>Watches for entrepreneurs</h1>

        <p>
          But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the system, and expound the actual teachings of the great
          explorer of the truth, the master-builder of human happiness.
        </p>

        <p className="d-none d-lg-block">
          But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I
          will give you a complete account of the system, and expound the actual teachings of the great explorer of the
          truth, the master-builder of human happiness.
        </p>
      </section>
    </div>
  );
}
