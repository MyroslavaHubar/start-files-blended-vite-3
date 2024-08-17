import { Container, CountryList, Section } from 'components';
import { useEffect, useState } from 'react';
import { getCountries } from 'service/countryApi';

export const Home = () => {
  const [countries, setCountries] = useState([]);

  const fetchCountries = async () => {
    try {
      const data = await getCountries();
      console.log(data);
      setCountries(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <Section>
      <Container>
        <CountryList countries={countries} />
      </Container>
    </Section>
  );
};
