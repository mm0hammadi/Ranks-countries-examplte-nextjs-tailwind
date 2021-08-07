import CountriesTable from "../componens/CountriesTable/CountriesTable";
import Layout from "../componens/Layout/Layout";
import SearchInput from "../componens/SearchInput/SearchInput";
import styles from "../styles/Home.module.css";

export default function Home({ countries }) {
  console.log(countries);
  return (
    <Layout>
      <div className="styles.counts">Found{countries.length} countries</div>
      <SearchInput placeholder="Filter by Name, Region subRegion " />
      <CountriesTable countries={countries} />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://restcountries.eu/rest/v2/all");
  const countries = await res.json();
  return {
    props: { countries },
  };
};
