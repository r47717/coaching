import {Block, Container} from "./styled";
import Header from "../Header";
import About from "../About";
import Clients from "../Clients";
import Coaching from "../Coaching";
import Enroll from "../Enroll";
import Products from "../Products";
import Footer from "../Footer";

function Index() {
  return (
    <Container>
      <Header/>
      <a id="about"><Block><About/></Block></a>
      <a id="products"><Block><Products/></Block></a>
      <a id="clients"><Block><Clients/></Block></a>
      <a id="coaching"><Block><Coaching/></Block></a>
      <a id="enroll"><Block><Enroll/></Block></a>
      <a id="contacts"><Footer/></a>
    </Container>
  );
}

export default Index;
