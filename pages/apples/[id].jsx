const Details = ({ apple }) => {
  return ( 
    <div>
      <h3>Worker Information</h3>
      <h1>Name: { apple.name }</h1>
      <p>Email: { apple.email }</p>
      <p>User's website: { apple.website }</p>
      <p>Current address: { apple.address.city }</p>
    </div>
   );
};

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map(user => {
    return {
      params: {
        id: user.id.toString()
      }
    }
  })

  return {
    paths,
    fallback: false
  }
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();

  return {
    props: {
      apple: data
    }
  }
}
 
export default Details;