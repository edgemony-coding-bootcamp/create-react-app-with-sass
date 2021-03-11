import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Quote from "./components/Quote";

function App() {
  return (
    <div className="App">
      <Header showTitle={true} />
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
