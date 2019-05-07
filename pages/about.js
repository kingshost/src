import { PureComponent } from 'react';
import Link from 'next/link';
import cn from 'classnames';

import Container from '../components/Container';
import PageContent from '../components/PageContent';
import AmazonPricingNote from '../components/AmazonPricingNote';
import { bookAuthorName, bookTitle } from '../util/meta';
import assetsPath from '../util/assetsPath';
import externalLinkProps from '../util/externalLinkProps';

const AUTHOR_IMG_NAME = 'irinel-ramona-florescu';
const AUTHOR_IMG_WIDTHS = [104, 208, 416, 624];

const AUTHOR_IMG_SRC_SET = AUTHOR_IMG_WIDTHS.map(
  w => `${assetsPath}/images/${AUTHOR_IMG_NAME}-w${w}.jpg ${w}w`
).join(', ');

class AboutPage extends PureComponent {
  state = { shown: false };

  componentDidMount() {
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({ shown: false });
    this.pictureShownTimeout = setTimeout(() => {
      this.setState({ shown: true });
    }, 0);
  }

  componentWillUnmount() {
    clearTimeout(this.pictureShownTimeout);
  }

  render() {
    const { shown } = this.state;
    return (
      <Container>
        <PageContent>
          <div className="content-items">
            <div className="picture-wrapper">
              <img
                className={cn('picture', { shown })}
                alt={bookAuthorName}
                title={bookAuthorName}
                src={`${assetsPath}/images/${AUTHOR_IMG_NAME}-w52.jpg`}
                srcSet={AUTHOR_IMG_SRC_SET}
                sizes="(max-width: 500px) 104px, 208px"
              />
            </div>
            <div className="text">
              <p className="no-indent">Welcome, dear reader!</p>

              <p className="no-indent">
                I am Irinel-Ramona Florescu, the owner of this website and
                author of the book <strong>{bookTitle}</strong>. I was born and
                grew up in Bucharest, where I still reside, although as a child
                I spent many summer vacations in the countryside, whence my
                fondness for wandering the woods and hills came. I’m very
                partial to beautiful things, whether useful or not, fluffy
                animals—cats are the best, handicrafts, Japanese anime and manga
                and romance, so long as it does not give me diabetes. But ever
                since graduating from university my obsession has been with
                interior design. Until around this time last year, I was busy{' '}
                <a
                  href="https://www.behance.net/iflorescu"
                  {...externalLinkProps}
                >
                  decorating people’s homes and sharpening up my CGI skills
                </a>
                .{' '}
                <a href="https://interiordelight.cc/" {...externalLinkProps}>
                  Weaving dreams and stories through images
                </a>
                . I have never written anything besides school assignments
                before, not even a diary, nor have had any desire to do so.
                Writing has never been my cup of tea. Quite the opposite.
              </p>
              <p>
                So, what happened? Well, a nice vacation in Crete happened. A
                few amusing episodes and some short posts on social media about
                them. I very much enjoy talking to people, even when we speak
                different languages, and it was quite entertaining to reproduce
                some of the more comic conversations. And isn’t finding pleasant
                sides to it a good way to overcome a dislike?{' '}
                <em>‘Why not write a short story’</em>, my husband suggested,{' '}
                <em>
                  ‘as an exercise? You have no problem talking for hours, try to
                  put some of that in writing. Don’t fret about it being
                  something original, just write whatever makes you feel good.’
                </em>{' '}
                So, what makes me feel good? Talking to people, bantering,
                having a good laugh.
              </p>
              <p>
                There is a lot of dialogue in <strong>{bookTitle}</strong>. I
                have not checked that, but it is quite possibly in excess of the
                narration. It could not be helped, I had too much fun writing
                it. It was with dialogue that the whole exercise started,
                although I was already five or six chapters into it before I
                realized it was turning into something bigger and more serious
                than I had originally intended. And that I was enjoying it in
                ways I never expected. Around chapter twelve I realized there
                would be a{' '}
                <Link href="/book-two">
                  <a>second book</a>
                </Link>
                . For a whole year I did nothing but write and I was not done
                yet! Clearly I was losing my mind.
              </p>
              <p>
                I am{' '}
                <Link href="/book-one">
                  <a>offering you this book for free</a>
                </Link>
                * because writing it has been an incredible experience and I
                feel I should give something in return for all the things I
                learned from those sharing their knowledge, whatever their
                discipline. Writing has not become much easier than before, but
                it surely is growing on me with every sentence. I hope this book
                will bring a smile to your face and make you forget, even if
                only for a while, your daily worries. And leave you{' '}
                <Link href="/book-two">
                  <a>wanting for more</a>
                </Link>
                .
              </p>
              <hr />
              <AmazonPricingNote />
            </div>
          </div>
        </PageContent>
        <style jsx>{`
          .picture-wrapper,
          .picture {
            border-radius: 50%;
          }

          .picture-wrapper {
            width: 104px;
            margin: 0.5em auto 1.5em;
            box-shadow: inset 0 2px 6px rgba(black, 95%);
          }

          .picture {
            position: relative;
            z-index: -1;
            display: block;
            filter: brightness(25%);
            transition: filter 0.5s;
            &.shown {
              filter: brightness(100%);
            }
          }

          @media (min-width: 500px) {
            .picture-wrapper {
              width: 208px;
            }
          }

          @media (min-width: 1024px) {
            .content-items {
              display: flex;
              align-items: flex-start;
            }

            .picture-wrapper {
              margin: 1em 36px 0 0;
            }
          }
        `}</style>
      </Container>
    );
  }
}

AboutPage.getInitialProps = () => ({
  title: `About - ${bookTitle}`,
  description: `A few words about ${bookTitle} book written by ${bookAuthorName}`
});

export default AboutPage;
