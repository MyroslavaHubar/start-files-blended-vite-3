import {
  Container,
  CountryList,
  Heading,
  Loader,
  SearchForm,
  Section,
} from 'components';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchByRegion } from 'service/countryApi';

export const SearchCountry = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);

  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) return;

    const fetchCountries = async () => {
      setLoading(true);
      try {
        const data = await fetchByRegion(query);
        console.log(data);
        setCountries(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchCountries();
  }, [query]);

  const getRegion = selectedRegion => {
    // console.log(selectedRegion);
    setSearchParams({
      query: selectedRegion,
    });

    // searchParams.set('query', selectedRegion);
    // setSearchParams(searchParams);
  };

  return (
    <Section>
      <Container>
        <Heading title="SearchCountry" bottom />

        <SearchForm onSubmit={getRegion} />
        {loading && <Loader />}
        {countries.length > 0 && <CountryList countries={countries} />}
      </Container>
    </Section>
  );
};
