import { bookAuthorName, bookTitle } from '../util/meta';

function HomePage() {
  return null;
}

HomePage.getInitialProps = () => ({
  title: `${bookTitle} - A book by ${bookAuthorName}`,
  description: `Start reading for free ${bookTitle} - a book by ${bookAuthorName}`,
});

export default HomePage;
