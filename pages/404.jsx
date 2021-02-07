import Link from "next/link";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>.....Ooooppppps</h1>
      <h2>Page not found</h2>
      <div>
        Go back to the{" "}
        <Link href="/">
          <a>Home Page</a>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
