import getConfig from 'next/config';

const {
  publicRuntimeConfig: { domain }
} = getConfig();

const IonutCristianFlorescuLdJson = () => (
  <script
    type="application/ld+json"
    // eslint-disable-next-line react/no-danger
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'http://schema.org',
        '@type': 'Person',
        name: 'Ionut-Cristian Florescu',
        url: domain,
        sameAs: [
          'https://github.com/icflorescu',
          'https://linkedin.com/in/icflorescu',
          'https://www.facebook.com/icflorescu',
          'https://plus.google.com/+IonutCristianFlorescu'
        ]
      })
    }}
  />
);

export default IonutCristianFlorescuLdJson;
