import { GetStaticProps } from "next";
import { services } from "../data";

const index = ({ services }) => {
  return (
    <div>
      <h1>qq</h1>
    </div>
  );
};

export default index;

// export default getStaticProps = async (context: GetStaticProps) => {
//   const res = await fetch("http://localhost:3000");
//   const data = await res.json();

//   return {
//     props: {
//       services: data.services,
//     },
//   };
// };
