import CountriesTable from "../componens/CountriesTable/CountriesTable";
import Layout from "../componens/Layout/Layout";
import SearchInput from "../componens/SearchInput/SearchInput";
import styles from "../styles/Home.module.css";
import { useState } from "react";

export default function Home({ countries }) {
  // console.log(countries);
  const [keyword, setKeyword] = useState("");
  const filteredCountries = countries.filter(
    (country) =>
      country.name.toLowerCase().includes(keyword) ||
      country.region.toLowerCase().includes(keyword) ||
      country.subregion.toLowerCase().includes(keyword)
  );

  const onInputChange = (e) => {
    e.preventDefault();
    setKeyword(e.target.value.toLowerCase());
  };

  return (
    <Layout>
      <div className="styles.counts">Found{countries.length} countries</div>
      <SearchInput
        onChange={onInputChange}
        placeholder="Filter by Name, Region subRegion "
      />
      <CountriesTable countries={filteredCountries} />
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
