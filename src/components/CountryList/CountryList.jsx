import { Link, useLocation } from "react-router-dom";
import { Grid, GridItem } from "..";

export const CountryList = ({ countries }) => {
  const location = useLocation();

  return (
    <>
    <Grid>
      {countries.map(country => (
        <GridItem key={country.id}>
          {/* <Link state={location} to={`/country/${country.id}`}> */}
          <Link state={{ from: location }} to={`/country/${country.id}`}>
            <img src={country.flag} alt={country.capital} />
          </Link>
        </GridItem>
      ))}
    </Grid>
    </>
  );
};
