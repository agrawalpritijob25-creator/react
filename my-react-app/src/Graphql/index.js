import { gql, useQuery } from "@apollo/client";

const GET_USER = gql`
query Getuser($Id : Id!){
user(id : $id){
id
name
email
}
};
`;

export default function User({ id }) {
  const { loading, error, data } = useQuery(GET_USER, { variables: { id } });
  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>Error on fetch...</p>;

  return (
    <h2 key={data.user.id}>
      {data.user.name}
      {data.user.email}
    </h2>
  );
}
