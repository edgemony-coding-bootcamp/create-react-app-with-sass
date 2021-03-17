import "./App.scss";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Quote from "./components/Quote";
import SubHeader from "./components/SubHeader";

function App() {
  return (
    <div className="App">
      <Header showTitle={true} />
      <SubHeader showTitle={false} />
      <Main>
        <Quote>Finchè la barca va, lasciala andare [cit. Orietta Berti]</Quote>
        <Quote>Ti aspeCto [cit. Cristiano Ronaldo]</Quote>
        <Quote>Forza INDA [cit. Suning, presidente dell'Inter]</Quote>
      </Main>
      <Footer />
    </div>
  );
}

export default App;
