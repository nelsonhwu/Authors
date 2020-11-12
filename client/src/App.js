import logo from './logo.svg';
import './App.css';
import Main from './views/Main';
import NewAuthor from './views/NewAuthor';
import UpdateAuthor from './views/UpdateAuthor';
import NewQuote from './views/NewQuote';
import AuthorDetail from './views/AuthorDetail';
import { Router } from '@reach/router';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <NewAuthor path="/new/" />
        <UpdateAuthor path="/edit/:id" />
        <AuthorDetail path="/authors/:id" />
        <NewQuote path="/write/:id" />
      </Router>
      
    </div>
  );
}

export default App;
