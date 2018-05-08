import { PureComponent } from 'react';
import memoize from 'lodash/memoize';

import Container from '../components/Container';
import PageContent from '../components/PageContent';
import Book from '../components/Book';
import MarketLinks from '../components/MarketLinks';
import MarketLink from '../components/MarketLink';
import { bookTitle, bookOneTitle, bookOneFileName, bookOneHumanReadableFileName } from '../util/meta';
import assetsPath from '../util/assetsPath';

const FULL_TITLE = `${bookTitle} - ${bookOneTitle}`;
const MARKET_LINK_TITLE_PREFIX = `Read ${FULL_TITLE} on `;

class BookOnePage extends PureComponent {
  static getInitialProps = () => ({
    title: `${bookOneTitle} - ${bookTitle}`,
    description: `A new journey, new acquaintances, resentments, secrets and a war that is about to break. Will Val and Kiran be able to return to their former life? Find out by reading ${FULL_TITLE} for free!`
  })

  componentWillUnmount() {
    this.onRequestBookClick.cache.clear();
  }

  onRequestBookClick = memoize(format => () => {
    if (global.ga) global.ga('send', 'event', 'Book View Request', 'request', format);
  })

  render() {
    return (
      <Container>
        <PageContent>
          <div className="content-items">
            <Book
              title="Download for free"
              imgAlt={`Download ${FULL_TITLE} for free!`}
              srcPrefix="kings-host-book-one"
            >
              <div className="download-links">
                <a
                  className="download-link"
                  title={`Download ${FULL_TITLE} as EPUB for free!`}
                  href={`${assetsPath}/${bookOneFileName}.epub`}
                  download={`${bookOneHumanReadableFileName}.epub`}
                  onClick={this.onRequestBookClick('epub')}
                >EPUB</a>
                <a
                  className="download-link"
                  title={`Download ${FULL_TITLE} as MOBI for free!`}
                  href={`${assetsPath}/${bookOneFileName}.mobi`}
                  download={`${bookOneHumanReadableFileName}.mobi`}
                  onClick={this.onRequestBookClick('mobi')}
                >MOBI</a>
                <a
                  className="download-link"
                  title={`Open ${FULL_TITLE} as PDF for free!`}
                  href={`${assetsPath}/${bookOneFileName}.pdf`}
                  onClick={this.onRequestBookClick('pdf')}
                  target="_blank"
                >PDF</a>
              </div>
            </Book>
            <div className="text">
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
                those of two Royal Guards and turn their peaceful life upside down.
              </p>
              <p>
                A new journey, new acquaintances, resentments, secrets and a war that is about
                to break. Will Val and Kiran be able to return to their former life?
              </p>
              <p className="no-indent">
                And what is the meaning of the son’s strange dreams, anyway?…
              </p>
              <MarketLinks>
                <MarketLink title={`${MARKET_LINK_TITLE_PREFIX}Amazon`} srcPrefix="amazon" />
                <MarketLink title={`${MARKET_LINK_TITLE_PREFIX}Google Play`} srcPrefix="google-play" />
                <MarketLink title={`${MARKET_LINK_TITLE_PREFIX}Inkitt`} srcPrefix="inkitt" />
              </MarketLinks>
            </div>
          </div>
        </PageContent>
        <style jsx>{`
          @import theme;

          .download-links {
            display: flex;
          }

          .download-link {
            font-weight: bold;
            line-height: 38px;
            text-decoration: none;
            color: rgba(black, 90%);
            background: darken(saturation(color-link, 100%), 30%);;
            flex: 1 1 33.33%;
            margin-left: 1px;
            &:first-child {
              margin-left: 0;
              border-top-left-radius: 2px;
              border-bottom-left-radius: 2px;
            }
            &:last-child {
              border-top-right-radius: 2px;
              border-bottom-right-radius: 2px;
            }
            &:hover {
              background: color-link-current;
            }
          }

          @media (min-width: 1024px) {
            .content-items {
              display: flex;
              align-items: flex-start;
            }

            .download-link {
              line-height: 24px;
            }
          }
        `}</style>
      </Container>

    );
  }
}

export default BookOnePage;
