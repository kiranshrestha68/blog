import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Home from "./containers/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from "./containers/contactus/Contact";
import Post from "./containers/post/Post";
import AboutUs from "./containers/about-us/AboutUs";

function App() {
  return (
    <Router>
      {" "}
      <div className="App">
        <Header />
        <Hero />

        <Route exact path="/" component={Home} />
        <Route exact path="/contactus" component={Contact} />
        <Route exact path="/post" component={Post}/>
        <Route exact path="/aboutus" component={AboutUs}/>
      </div>
    </Router>
  );
}

export default App;
