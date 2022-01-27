import Link from 'next/link';
import Container from '../components/Container';
import IrinelRamonaFlorescuLdJson from '../components/IrinelRamonaFlorescuLdJson';
import PageContent from '../components/PageContent';
import externalLinkProps from '../util/externalLinkProps';
import { bookAuthorEmail } from '../util/meta';

function ContactPage() {
  return (
    <Container>
      <PageContent>
        <h1>Contact</h1>
        <p>
          Are you a reader?
          <br />
          Are you an editor or a publisher?
        </p>
        <p>
          This is my first book and hopefully won't be the last.
          <br />
          I'll be grateful for any suggestion on how to improve my work and how to turn this passion into a profitable
          activity.
        </p>
        <p>
          So, if you think you can help me, please don't hesitate to drop me a line at{' '}
          <a href={`mailto:${bookAuthorEmail}`} {...externalLinkProps}>
            {bookAuthorEmail}
          </a>
          .
        </p>
        <p>Thank you!</p>
        <p>
          <em>
            P.S. Don't forget to{' '}
            <Link href="/book-two">
              <a>support the writing</a>
            </Link>{' '}
            of Book Two :-)
          </em>
        </p>
        <IrinelRamonaFlorescuLdJson />
      </PageContent>
    </Container>
  );
}

ContactPage.getInitialProps = () => ({
  title: 'Contact',
  description:
    "I'll be grateful for any suggestion on how to improve my work and how to turn the passion for writing into a profitable activity.",
});

export default ContactPage;
