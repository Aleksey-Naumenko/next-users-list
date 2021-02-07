import CustomHead from "../../components/CustomHead";
import Link from "next/link";
import styles from "../../styles/Apples.module.css";

const Apples = ({ apples }) => {
  return (
    <>
      <CustomHead
        title="Ninja super Page"
        keywords="about, about awesome, about us, about company"
      />
      <h1>All Apples</h1>
      {apples.map(app => (
        <Link href={`/apples/${app.id}`} key={app.id}>
          <a className={styles.single}>
            <h3>{app.name}</h3>
          </a>
        </Link>
      ))}
    </>
  );
};

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const apples = await res.json();

  return {
    props: {
      apples
    }
  }
};

export default Apples;
