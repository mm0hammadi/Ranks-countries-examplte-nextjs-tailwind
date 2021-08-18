import Layout from "../../componens/Layout/Layout";
import styles from "./country.module.css";
import { useState } from "react";
import { useEffect } from "react";

const getCountry = async (id) => {
  const res = await fetch(`https://restcountries.eu/rest/v2/alpha/${id}`);
  const country = await res.json();
  return country;
};

const Country = ({ country }) => {
  const [borders, setborders] = useState([]);
  const getBorders = async () => {
    const borders = await Promise.all(
      country.borders.map((border) => getCountry(border))
    );
    setborders(borders);
  };

  useEffect(() => {
    getBorders();
  }, []);

  console.log(Country, "c");

  return (
    <Layout title={country.name}>
      <div className={styles.container}>
        <div className={styles.container_left}>
          <div className={styles.overview_panel}>
            <img src={country.flag} alt={country.name}></img>
            <h1 className={styles.overview_name}>{country.name}</h1>
            <div className={styles.overview_region}>{country.region}</div>
          </div>
          <div className={styles.overview_numbers}>
            <div className={styles.overview_population}>
              <div className={styles.overview_value}>{country.population}</div>
              <div className={styles.overview_lable}>population</div>
            </div>
            <div className={styles.overview_area}>
              <div className={styles.overview_value}>{country.area}</div>
              <div className={styles.overview_lable}>area</div>
            </div>
          </div>
        </div>
        <div className={styles.container_right}>
          <div className={styles.details_panel}>
            <h4 className={styles.details_panel_heading}>Details</h4>
            <div className={styles.details_panel_row}>
              <div className={styles.details_panel_label}>Capital</div>
              <div className={styles.details_panel_value}>
                {country.capital}
              </div>
            </div>
            <div className={styles.details_panel_row}>
              <div className={styles.details_panel_label}>Subrigions</div>
              <div className={styles.details_panel_value}>
                {country.subregion}
              </div>
            </div>
            <div className={styles.details_panel_row}>
              <div className={styles.details_panel_label}>Languages</div>
              <div className={styles.details_panel_value}>
                {country.languages.map(({ name }) => name).join(".")}
              </div>
            </div>
          </div>
          <div className={styles.details_panel_row}>
            <div className={styles.details_panel_label}>Currencies</div>
            <div className={styles.details_panel_value}>
              {country.currencies.map(({ name }) => name).join(".")}
            </div>
          </div>
          <div className={styles.details_panel_row}>
            <div className={styles.details_panel_label}>Native name</div>
            <div className={styles.details_panel_value}>
              {country.nativeName}
            </div>
          </div>
          <div className={styles.details_panel_row}>
            <div className={styles.details_panel_label}>gini</div>
            <div className={styles.gini}>{country.gini}%</div>

            <div className={styles.details_panel_borders}>
              <div className={styles.details_panel_borders_label}>
                Neighbouring Countries
              </div>
              <div className={styles.details_panel_borders_conainer}>
                {borders.map(({ flag, name }) => (
                  <div className={styles.details_panel_borders_country}>
                    <img src={flag} alt={name}></img>
                    <div className={styles.details_panel_borders_name}>
                      {name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Country;

export const getServerSideProps = async ({ params }) => {
  const country = await getCountry(params.id);
  return {
    props: {
      country,
    },
  };
};
