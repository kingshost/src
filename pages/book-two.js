import Link from 'next/link';

import Container from '../components/Container';
import PageContent from '../components/PageContent';
import Book from '../components/Book';
import externalLinkProps from '../util/externalLinkProps';
import { bookTitle, bookOneTitle, bookTwoTitle, bookAuthorEmail } from '../util/meta';

const DESCRIPTION = `Help me write ${bookTitle} - ${bookTwoTitle}!`;

const BookTwoPage = () => (
  <Container>
    <PageContent>
      <div className="content-items">
        <Book
          title="Help me write"
          imgAlt={DESCRIPTION}
          srcPrefix="kings-host-book-two"
        >
          {/* start PayPal code */}
          <form
            className="donation-form"
            action="https://www.paypal.com/cgi-bin/webscr"
            method="post"
            target="_blank"
          >
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input type="hidden" name="hosted_button_id" value="TWACB3B43E4PY" />
            <input
              type="image"
              src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
              border="0"
              name="submit"
              alt="PayPal - The safer, easier way to pay online!"
            />
            <img
              alt=""
              border="0"
              src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
              width="1"
              height="1"
            />
          </form>
          {/* end of PayPal code */}
        </Book>
        <div className="text">
          <p className="no-indent">
            Dear reader,
          </p>

          <p className="no-indent">
            I hope you enjoyed
            reading <strong>{bookOneTitle}</strong> of <strong>{bookTitle}</strong> as much as I
            enjoyed writing it. If you have not read it yet, do not hesitate to.
            You can <Link href="/book-one"><a>get it here</a></Link>. It's free.
          </p>
          <p className="no-margin-bottom">
            What started off as an amusing personal exercise between projects, turned into taking a
            sabbatical to write the first book of <strong>{bookTitle}</strong>. A risky decision when
            you’ve never written anything before, nor have had any interest in it. But I did it
            anyway and I don't regret all the time spent carving this story. I hope that, imperfect
            and incomplete as it is, the book managed to bring a smile to your face.
          </p>
          <p className="no-margin-top no-margin-bottom">
            But, as my characters noticed, living expenses have the nasty habit of digging holes
            into one’s purse. I plan to complete the story in the future, but those bills don’t pay
            themselves, damn the little bitches. So it will take some time before the second part,
            still an embryo at the moment, will grow up into a proper book.
          </p>
          <p className="no-margin-top no-margin-bottom">
            If you enjoyed <strong>{bookOneTitle}</strong>, would you be willing to help me
            finish <strong>{bookTwoTitle}</strong> sooner? If so, please <strong>consider donating a
            small sum using the PayPal
            button <span className="mobile">above</span><span className="desktop">on the left</span></strong>.
            Your help will be much appreciated.
          </p>
          <p className="no-margin-top">
            If there are other ways you think you could help me, please feel free to drop me a line
            at <a href={`mailto:${bookAuthorEmail}`} {...externalLinkProps}>{bookAuthorEmail}</a>.
          </p>
          <p className="no-margin-bottom">
            Bear in mind that any non-monetary gifts I receive shall be monetized, to cover living
            expenses. Unless it’s a small, cosy house on the beach—say, in Crete or Malta, or
            southern Spanish coast—in which case I shall gladly sell my own apartment and move
            there, which I’m certain will do wonders for my creativity. But no cars, please, I’m a
            bad driver.
          </p>
          <p className="no-margin-top">
            I’m just saying :-)
          </p>
          <p className="no-indent">
            Thank you!
          </p>
        </div>
      </div>
    </PageContent>
    <style jsx>{`
      @import theme;

      .donation-form {
        padding-top: 6px;
      }

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
  description: DESCRIPTION
});

export default BookTwoPage;
