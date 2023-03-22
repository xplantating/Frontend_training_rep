import './App.css';
import MainWrapper from './MainWrapper';
import Personal from "./Personal";
import SearchBar from './SearchBar';
import Header from './Header';
import Hello from './Hello'
function App() {

  return (
    <>
    <Header />
    <MainWrapper>
    <SearchBar />
    <Hello />
    <Personal />
    </MainWrapper>
    </>
  );
}

export default App;
