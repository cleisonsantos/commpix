import Navbar from './components/Navbar'

import Routes from "./routes"

import styled from 'styled-components';

export const Main = styled.main`
  margin-top: 0px;
  display: block;
  padding: 1rem;
  color: #444;

  @media(min-width: 1600px) {
        padding: 2rem 20%;
    }
`;


function App() {
  return (
    <div className="App">
      <Navbar />
      <Main>
        <Routes />
      </Main>
    </div>
  );
}

export default App;
