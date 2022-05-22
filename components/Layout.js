import Link from "next/link";

function Layout({ children }) {
  return (
    <>
      <header>
        <nav>
          <Link href="/" passHref>
            <li style={{ display: "flex" }}>
              <div className="logo"> Donate Via UPI</div>
            </li>
          </Link>
        </nav>
      </header>
      <section>{children}</section>

      <footer className="footer responsive">
        <div className="flex column responsive" style={{ gap: "20px" }}>
          <a
            href="https://twitter.com/biomathcode"
            target="_blank"
            rel="noopener noreferrer"
          >
            Created by
            {"\u2002Pratik Sharma "}
          </a>
          <a
            href="https://github.com/pratiksharm/pay-via-upi"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Github Repo
          </a>
        </div>
        <div className="flex center">© Copyright 2022</div>
      </footer>
    </>
  );
}

export default Layout;
