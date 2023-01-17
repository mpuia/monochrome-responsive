import Header from '../components/common/header/Header';
import Footer from '../components/common/footer/Footer';
import HomeCatalogPreview from '../components/homepage/HomeCatalogPreview';
import HomeContent from '../components/homepage/HomeContent';
import BannerMain from '../components/homepage/BannerMain';



export default function Home() {
  return (
    <div>
      <header className="header mt-lg-0">
        <Header></Header>
      </header>

      <main className="content-main">
        <BannerMain></BannerMain>

        <HomeCatalogPreview></HomeCatalogPreview>
        <HomeCatalogPreview></HomeCatalogPreview>

        <HomeContent></HomeContent>

        <HomeCatalogPreview></HomeCatalogPreview>
        <HomeCatalogPreview></HomeCatalogPreview>
      </main>

      <footer className="footer">
        <Footer></Footer>
      </footer>
      </div>
  );
}
