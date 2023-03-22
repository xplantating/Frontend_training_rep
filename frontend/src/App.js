import './App.css';
import MainWrapper from './MainWrapper';
import Personal from "./Personal";
import SearchBar from './SearchBar';
import Header from './Header';

function App() {

  return (
    <>
    <Header />
    <MainWrapper>
    <Personal />
    <SearchBar />
    </MainWrapper>
    </>
  );
}

export default App;
