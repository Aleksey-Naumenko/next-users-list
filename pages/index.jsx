import Link from "next/link";
import CustomHead from "../components/CustomHead";
import styles from "../styles/Home.module.css";

function HomePage() {
  return (
    <>
      <CustomHead
        title="Main Page"
        description="This is the main page"
        keywords="next main, main page, main awesome"
      />
      <h1 className={styles.title}>Home page</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
        earum.
      </p>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
        earum.
      </p>
      <Link href="/apples">
        <a className={styles.btn}>See Apples Listing</a>
      </Link>
    </>
  );
}

export default HomePage;
