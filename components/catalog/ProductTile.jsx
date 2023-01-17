export default function ProductTile() {
  return (
    <article className="product-tile">
      <header>
        <div className="product-tile-image">
          <a href="/" title="Man's cluse watch">
            <picture className="d-lg-none">
              <img src="/images/mobile/blackSoulMobile.png" alt="Man's cluse watch"></img>
            </picture>

            <picture className="d-none d-lg-block">
              <img src="/images/desktop/products/blackSoul.png" alt="Man's cluse watch"></img>
            </picture>
          </a>

          <a href="/" title="Favorites" className="product-tile-image badge">
          <i className="fa-regular fa-heart"></i>
          </a>
        </div>

        <h1 className="product-tile-title mt-2 my-lg-3">
          <a href="/" title="Monochrome">Monochrome</a>
        </h1>
      </header>

      <section className="product-tile-pricing">
        <span className="product-tile-price">$425</span>
      </section>
    </article>
  );
}
