import './App.css';
import {Switch, Route, NavLink} from "react-router-dom"
import {BrowserRouter as Router} from "react-router-dom"
import Pictures from "./components/pictures/pictures.jsx"
import Posts from "./components/posts/posts.jsx"
import Contacts from "./components/contacts/Contacts/contracts.js"

function Main() {
  return (
      <div className="main_text">Мяу! Жми кнопки для навигации!</div>
  )
}


function App() {
  return (
    <div className="App">
      <Router>
        <nav>
        <NavLink exact activeClassName={"selected"} to="/">Главная</NavLink>
        <NavLink  activeClassName={"selected"} to="/pictures">Мемы</NavLink>
        <NavLink activeClassName={"selected"} to="/posts">Посты</NavLink>
        <NavLink activeClassName={"selected"} to="/contacts">Контакты</NavLink>
        </nav>      
<Switch>
  <Route exact path="/" component={Main} />
  <Route exact path="/pictures" component={Pictures} />
  <Route exact path="/posts" component={Posts} />
  <Route exact path="/contacts" component={Contacts} />
</Switch>
</Router>
    </div>
  );
}

export default App;
