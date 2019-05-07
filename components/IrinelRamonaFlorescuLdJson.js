import getConfig from 'next/config';

const {
  publicRuntimeConfig: { domain }
} = getConfig();

const IrinelRamonaFlorescuLdJson = () => (
  <script
    type="application/ld+json"
    // eslint-disable-next-line react/no-danger
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'http://schema.org',
        '@type': 'Person',
        name: 'Irinel-Ramona Florescu',
        url: domain,
        sameAs: [
          'http://www.interiordelight.ro',
          'https://www.behance.net/iflorescu',
          'https://www.facebook.com/irinel.florescu',
          'https://linkedin.com/in/iriflorescu',
          'https://plus.google.com/+IrinelRamonaFlorescu'
        ]
      })
    }}
  />
);

export default IrinelRamonaFlorescuLdJson;
