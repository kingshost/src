import Container from '../components/Container';
import PageContent from '../components/PageContent';
import { bookTitle } from '../util/meta';

const TITLE = 'Disclaimer';

function DisclaimerPage() {
  return (
    <Container>
      <PageContent>
        <h1>{TITLE}</h1>
        <p>
          <em>This feels a bit awkward, but I have to say it:</em>
        </p>
        <p>
          This is a work of fiction. Names, characters, businesses, places, events, locales, and incidents are either
          the products of the author’s imagination or used in a fictitious manner. Any resemblance to actual persons,
          living or dead, or actual events is purely coincidental.
        </p>
        <p>
          <em>This is even more awkward, but remember that:</em>
        </p>
        <p>
          This book is not intended as a substitute for the medical advice of physicians. The reader should regularly
          consult a physician in matters relating to his/her health and particularly with respect to any symptoms that
          may require diagnosis or medical attention.
        </p>
      </PageContent>
    </Container>
  );
}

DisclaimerPage.getInitialProps = () => ({
  title: `${TITLE} - ${bookTitle}`,
  description: `${TITLE} related to ${bookTitle} book`,
});

export default DisclaimerPage;
