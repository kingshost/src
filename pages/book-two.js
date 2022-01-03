import Link from 'next/link';
import AmazonPricingNote from '../components/AmazonPricingNote';
import Book from '../components/Book';
import BookTwoDonationForm from '../components/BookTwoDonationForm';
import CallToAction from '../components/CallToAction';
import Container from '../components/Container';
import PageContent from '../components/PageContent';
import externalLinkProps from '../util/externalLinkProps';
import {
  bookAuthorEmail,
  bookOneTitle,
  bookTitle,
  bookTwoTitle,
  websiteAuthorEmail,
  websiteAuthorName,
} from '../util/meta';

const CALL_TO_ACTION_TITLE = 'Help me write';
const DESCRIPTION = `${CALL_TO_ACTION_TITLE} ${bookTitle} - ${bookTwoTitle}!`;

const BookTwoPage = () => (
  <Container>
    <PageContent>
      <div className="content-items">
        <Book imgAlt={DESCRIPTION} srcPrefix="kings-host-book-two">
          <CallToAction title={CALL_TO_ACTION_TITLE}>
            <BookTwoDonationForm />
          </CallToAction>
        </Book>
        <div className="text">
          <p className="no-indent">Dear reader,</p>

          <p className="no-indent">
            I hope you enjoyed reading <strong>{bookOneTitle}</strong> of <strong>{bookTitle}</strong> as much as I
            enjoyed writing it. If you have not read it yet, do not hesitate to. You can{' '}
            <Link href="/book-one">
              <a>get it here</a>
            </Link>
            . It’s free*.
          </p>
          <p className="no-margin-bottom">
            What started off as an amusing personal exercise between projects, turned into taking a sabbatical to write
            the first book of <strong>{bookTitle}</strong>. A risky decision when you’ve never written anything before,
            nor have had any interest in it. But I did it anyway and I don't regret all the time spent carving this
            story. I hope that, imperfect and incomplete as it is, the book managed to bring a smile to your face.
          </p>
          <p className="no-margin-top no-margin-bottom">
            But, as my characters noticed, living expenses have the nasty habit of digging holes into one’s purse. I
            plan to complete the story in the future, but those bills don’t pay themselves, damn the little bitches. So
            it will take some time before the second part, still an embryo at the moment, will grow up into a proper
            book.
          </p>
          <p className="no-margin-top no-margin-bottom">
            If you enjoyed <strong>{bookOneTitle}</strong>, would you be willing to help me finish{' '}
            <strong>{bookTwoTitle}</strong> sooner? If so, please{' '}
            <strong>
              consider donating a small sum using the PayPal button <span className="mobile">above</span>
              <span className="desktop">on the left</span>**
            </strong>
            . Your help will be much appreciated.
          </p>
          <p className="no-margin-top">
            If there are other ways you think you could help me, please feel free to drop me a line at{' '}
            <a href={`mailto:${bookAuthorEmail}`} {...externalLinkProps}>
              {bookAuthorEmail}
            </a>
            .
          </p>
          <p className="no-margin-bottom">
            Bear in mind that any non-monetary gifts I receive shall be monetized, to cover living expenses. Unless it’s
            a small, cosy house on the beach—say, in Crete or Malta, or southern Spanish coast—in which case I shall
            gladly sell my own apartment and move there, which I’m certain will do wonders for my creativity. But no
            cars, please, I’m a bad driver.
          </p>
          <p className="no-margin-top">I’m just saying :-)</p>
          <p className="no-indent">Thank you!</p>
          <hr />
          <AmazonPricingNote />
          <p className="no-indent no-justify">
            <strong>**Note to donors:</strong>
            <br />
            The fundraising campaign is managed by
            <br />
            {websiteAuthorName} - <a href={`mailto:${websiteAuthorEmail}`}>{websiteAuthorEmail}</a>.
          </p>
        </div>
      </div>
    </PageContent>
    <style jsx>{`
      .desktop {
        display: none;
      }

      @media (min-width: 1024px) {
        .content-items {
          display: flex;
          align-items: flex-start;
        }

        .desktop {
          display: initial;
        }
        .mobile {
          display: none;
        }
      }
    `}</style>
  </Container>
);

BookTwoPage.getInitialProps = () => ({
  title: `${bookTwoTitle} - ${bookTitle}`,
  description: DESCRIPTION,
});

export default BookTwoPage;
