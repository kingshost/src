import Container from '../components/Container';
import PageContent from '../components/PageContent';
import Book from '../components/Book';
import MarketLinks from '../components/MarketLinks';
import MarketLink from '../components/MarketLink';
import CallToAction from '../components/CallToAction';
import DownloadLinks from '../components/DownloadLinks';
import DownloadLink from '../components/DownloadLink';
import { bookTitle, bookOneTitle, bookOneFileName, bookOneHumanReadableFileName } from '../util/meta';

const FULL_TITLE = `${bookTitle} - ${bookOneTitle}`;
const MARKET_LINK_TITLE_PREFIX = `Read ${FULL_TITLE} on `;

const callToAction = (
  <CallToAction title="Download for free">
    <DownloadLinks>
      <DownloadLink
        title={FULL_TITLE}
        fileName={bookOneFileName}
        humanReadableFileName={bookOneHumanReadableFileName}
        format="epub"
      />
      <DownloadLink
        title={FULL_TITLE}
        fileName={bookOneFileName}
        humanReadableFileName={bookOneHumanReadableFileName}
        format="mobi"
      />
      <DownloadLink
        title={FULL_TITLE}
        fileName={bookOneFileName}
        format="pdf"
        open
      />
    </DownloadLinks>
  </CallToAction>
);

const BookOnePage = () => (
  <Container>
    <PageContent>
      <div className="content-items">
        <Book
          imgAlt={`Download ${FULL_TITLE} for free!`}
          srcPrefix="kings-host-book-one"
        >
          <div className="desktop-call-to-action">
            {callToAction}
          </div>
        </Book>
        <div className="text">
          <MarketLinks title="Get it on">
            <MarketLink
              title={`${MARKET_LINK_TITLE_PREFIX}Kobo Rakuten`}
              srcPrefix="kobo"
              href="https://www.kobo.com/ww/en/ebook/king-s-host-book-one"
            />
            <MarketLink
              title={`${MARKET_LINK_TITLE_PREFIX}Amazon Kindle`}
              srcPrefix="amazon-kindle"
              href="https://www.amazon.com/kings-host-irinel-ramona-florescu-ebook/dp/b07d1dclm6"
            />
            <MarketLink
              title={`${MARKET_LINK_TITLE_PREFIX}Google Play`}
              srcPrefix="google-play"
            />
            <MarketLink
              title={`${MARKET_LINK_TITLE_PREFIX}Apple iBooks`}
              srcPrefix="ibooks"
            />
          </MarketLinks>
          <MarketLinks title="Read it online on">
            <MarketLink
              title={`${MARKET_LINK_TITLE_PREFIX}Inkitt`}
              srcPrefix="inkitt"
              href="https://www.inkitt.com/stories/fantasy/218165"
            />
            <MarketLink
              title={`${MARKET_LINK_TITLE_PREFIX}Wattpad`}
              srcPrefix="wattpad"
            />
          </MarketLinks>
          <div className="mobile-call-to-action">
            {callToAction}
          </div>
          <p className="no-indent">
            Things were going well for Val and Kiran. They had a comfortable home in the
            countryside, a steady business that took them all over the kingdom and a small circle
            of loyal friends to return to after their long trips. Sure they were a bit of an odd
            father and son pair in the eyes of the villagers, but their trade was in need and
            people liked them for being good-natured and obliging. Perhaps Kiran’s affinity with
            living creatures was uncommon, though in truth he had always been a little different.
            Amiable and caring, but not exactly open about himself. His birth was shrouded in
            mystery and his father seemed to enjoy watching people rack their brain trying
            to solve it. It was a good thing folk were practical and, generally, more interested
            in their knowledge and skill with medicine than their peculiarities.
          </p>
          <p>
            On a beautiful autumn evening, while father and son had business in the capital, a
            small incident set off a chain of events that would entwine their future paths with
            those of two Royal Guards and turn their peaceful life upside down. And if that were
            not bad enough, one of the guards is very distrustful of Kiran and the other is all
            too friendly. And both are too sharp for comfort.
          </p>
          <p>
            A new journey, new acquaintances, resentments, secrets and a war that is about
            to break. Will Val and Kiran be able to return to their former life?
          </p>
          <p className="no-indent">
            And what is the meaning of the son’s strange dreams, anyway?…
          </p>
        </div>
      </div>
    </PageContent>
    <style jsx>{`
      .mobile-call-to-action {
        margin-top: 10px;
      }

      .desktop-call-to-action {
        display: none;
      }

      @media (min-width: 1024px) {
        .content-items {
          display: flex;
          align-items: flex-start;
        }

        .mobile-call-to-action {
          display: none;
        }

        .desktop-call-to-action {
          display: initial;
        }
      }
    `}</style>
  </Container>
);

BookOnePage.getInitialProps = () => ({
  title: `${bookOneTitle} - ${bookTitle}`,
  description: `A new journey, new acquaintances, resentments, secrets and a war that is about to break. Will Val and Kiran be able to return to their former life? Find out by reading ${FULL_TITLE} for free!`
});

export default BookOnePage;
