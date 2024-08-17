import { Container, CountryInfo, GoBackBtn, Loader, Section } from 'components';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchCountry } from 'service/countryApi';

export const Country = () => {
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(false);
  const { countryId } = useParams();
  
  useEffect(() => {
    const getCountry = async () => {
      try {
        setLoading(true);
        const data = await fetchCountry(countryId);
        setCountry(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }

    getCountry();
  }, [countryId]);

  return (
    <Section>
      <Container>
        {loading && <Loader />}
        <GoBackBtn  />
        <Link>Text</Link>
        {country && <CountryInfo country={country} />}
      </Container>
    </Section>
  );
};
