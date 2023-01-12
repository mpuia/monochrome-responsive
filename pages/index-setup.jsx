import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <h1>
        Hello Monochrome <i className="fa-solid fa-house"></i>
      </h1>
      <button className="button button-primary">Button Primary</button>
      <button className="button button-secondary">Button Secondary</button>

      <img src="/images/desktop/banner.png" alt="banner" />
    </div>
  );
}


