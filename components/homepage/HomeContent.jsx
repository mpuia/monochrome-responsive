export default function HomeContent() {
  return (
    <div className="home-content my-4 container">
      <aside>
        <picture className="d-lg-none">
          <img src="../public/images/mobile/homepageMobile.png" alt="Monochrome Mobile"/>
        </picture>

        <picture className="d-none d-lg-inline">
          <img src="../public/images/desktop/homepage.png" alt="Monochrome Desktop" />
        </picture>
      </aside>
    </div>
  );
}
