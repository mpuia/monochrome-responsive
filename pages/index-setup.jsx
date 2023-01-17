export default function Home() {
  return (
    <div className="text-secondary fs-2 fw-bold text-center">Monochrome
      <div className="mt-5 text-center">

        <a href="/" className="button button-primary" title="New in">New in</a>

        <a href="/" className="mx-2 button button-large" title="View all">View all</a>

        <button className="button button-primary button-secondary" type="submit" title="Submit">Submit</button>

        <button className="ms-2 button button-primary button-inverted" type="submit" title="Sign in">Sign in</button>

        <button className="ms-2 button button-primary button-inverted" type="submit" title="Register">Register</button>
      </div>

    </div>
  );
}


