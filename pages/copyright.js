import Link from 'next/link';

import Container from '../components/Container';
import PageContent from '../components/PageContent';
import IrinelRamonaFlorescuLdJson from '../components/IrinelRamonaFlorescuLdJson';
import IonutCristianFlorescuLdJson from '../components/IonutCristianFlorescuLdJson';
import externalLinkProps from '../util/externalLinkProps';
import { bookAuthorName, websiteAuthor, bookTitle, websiteAuthorKeybaseUrl } from '../util/meta';

const TITLE = 'Copyright & attribution';

const CopyrightPage = () => (
  <Container>
    <PageContent>
      <h1>{TITLE}</h1>
      <h2>The book</h2>
      <p>
        The book is distributed under CC BY-NC-ND 4.0 license.
      </p>
      <img
        alt="Creative Commons License"
        src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png"
      />
      <p>
        This means you are free to share (copy and redistribute) the material in any medium or
        format under the following terms:
      </p>
      <ul>
        <li>
          <strong>Attribution</strong>
          <br />
          You must give appropriate credit, provide a link to the license, and indicate if
          changes were made. You may do so in any reasonable manner, but not in any way that
          suggests the licensor endorses you or your use.
        </li>
        <li>
          <strong>Non-Commercial</strong>
          <br />
          You may not use the material for commercial purposes.
        </li>
        <li>
          <strong>No-Derivatives</strong>
          <br />
          If you remix, transform, or build upon the material, you may not distribute the
          modified material.
        </li>
      </ul>
      <p>
        The above is a human-readable summary of (and by no means a substitute)
        the <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/legalcode" {...externalLinkProps}>license</a>.
      </p>
      <p><em>
        Failure to comply with the aforementioned terms will attract severe repercussions:
        I will hunt you down, slowly cut your belly, eat your liver while you're still alive,
        then kill you, sell your kidneys, bury you deep in the forest, exhume your body after
        a week and live it to dry out in the sun for a whole year.
      </em></p>
      <p><em>
        Just kidding. But, since I made an effort to write and publish the first volume for FREE,
        I'll be very upset (and WILL enforce copyright) if you try to use it for commercial
        purposes. So please don't. <Link href="/book-two"><a>Help me</a></Link> write the second one instead.
      </em></p>
      <h2>The book cover pictures</h2>
      <p>
        The book covers were rendered and post-processed by me ({bookAuthorName}). In case
        you didn't know, I'm also a CG Artist. You can see some of my
        work <a href="http://www.interiordelight.ro" {...externalLinkProps}>here</a> and <a href="https://www.behance.net/iflorescu" {...externalLinkProps}>here</a>.
      </p>
      <h2>The website</h2>
      <p>
        This website was built with JS, CSS, React, Next.js, Dragon's Blood resin and various
        other peculiar dark magic powders
        by <a href="https://github.com/icflorescu" {...externalLinkProps}>{websiteAuthor}</a>.
        He's a nice guy and an outstanding web developer.
      </p>
      <h2>Identity proof</h2>
      <p>{websiteAuthor}: <a href={`https://${websiteAuthorKeybaseUrl}`} {...externalLinkProps}>{websiteAuthorKeybaseUrl}</a></p>
      <IrinelRamonaFlorescuLdJson />
      <IonutCristianFlorescuLdJson />
    </PageContent>
  </Container>
);

CopyrightPage.getInitialProps = () => ({
  title: `${TITLE} - ${bookTitle}`,
  description: `${TITLE} in relation to ${bookTitle} book`
});

export default CopyrightPage;
