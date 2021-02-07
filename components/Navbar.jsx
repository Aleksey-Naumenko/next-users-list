import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/logo.png" height={100} width={150} />
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/articles">
        <a>Articles</a>
      </Link>
      <Link href="/apples">
        <a>Apples List</a>
      </Link>
    </nav>
  );
};

export default Navbar;
