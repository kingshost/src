import Container from '../components/Container';
import PageContent from '../components/PageContent';
import externalLinkProps from '../util/externalLinkProps';
import { bookTitle } from '../util/meta';

const TITLE = 'Cookies & privacy';

function CookiesAndPrivacyPage() {
  return (
    <Container>
      <PageContent>
        <h1>{TITLE}</h1>
        <p>This website is not using cookies directly.</p>
        <p>
          However, some of the analytics software we're using (or may consider using in the future) could make use of
          cookies (or start using them at some point).
        </p>
        <p>
          Cookies are not bad things—they're simply part of the internet as much as a web browser is. You can learn more
          about them{' '}
          <a href="http://www.aboutcookies.org.uk/" {...externalLinkProps}>
            here
          </a>
          .
        </p>
        <p>
          To help me improve the quality of my future work, anonymous information related to visitor demographics may be
          collected by 3rd pary analytics software.
        </p>
        <p>
          I've always been a keen supporter of privacy and civil liberties. I've taken part in the largest European{' '}
          <a
            href="https://www.theguardian.com/world/2017/feb/05/romanian-government-scraps-corruption-decree-as-opposition-continues"
            {...externalLinkProps}
          >
            protest
          </a>{' '}
          against corruption; I care <strong>a lot</strong> about my rights and will always respect yours. Therefore,{' '}
          <strong>
            none of the aforementioned information can personally identify a specific user and none of it will be shared
            with third parties
          </strong>
          .
        </p>
      </PageContent>
    </Container>
  );
}

CookiesAndPrivacyPage.getInitialProps = () => ({
  title: `${TITLE} - ${bookTitle}`,
  description: `How ${bookTitle} website deals with ${TITLE}`,
});

export default CookiesAndPrivacyPage;
