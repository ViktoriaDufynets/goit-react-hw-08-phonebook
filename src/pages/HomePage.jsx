import homeBg from '../images/contacts.jpg';
import Container from 'components/Container';

function HomePage() {
  return (
    <Container>
      <img src={homeBg} alt="Phone book" width="2000px"/>
    </Container>
  );
}

export default HomePage;
