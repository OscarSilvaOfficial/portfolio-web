import { Component } from "react";
import Menu from './components/Menu/Menu'
import Hero from './components/Hero/Hero'
import Main from './components/Main/Main'


class App extends Component {
  render() {
    return(
      <>
        <Menu/>
        <Hero/>
        <Main/>
      </>
    )
  }
}

export default App;
