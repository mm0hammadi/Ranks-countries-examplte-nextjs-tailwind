import Layout from "../componens/Layout/Layout";
import SearchInput from "../componens/SearchInput/SearchInput";

export default function Home({ countries }) {
  console.log(countries);
  return (
    <Layout>
      {/* <div className="styles.counts">Found{countries.length} countries</div> */}
      <SearchInput />
    </Layout>
  );
}

// export const getStaticProps = async () => {
//   const res = await fetch("https://restcountries.eu/rest/v2/all");
//   const countries = await res.json();
//   return {
//     props: { countries },
//   };
// };
