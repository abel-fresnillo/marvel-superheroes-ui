import React, { Component } from "react";

import Aux from "../../hoc/Aux/Aux";
import Modal from "../../components/UI/Modal/Modal";
import SearchHero from "../../components/SearchHero/SearchHero";

class HeroesDashboard extends Component {
  state = {
    marvelHeroes: [],
    myHeroes: [],
    heroView: false
  };

  heroViewHandler = () => {
    this.setState({ heroView: true });
  };

  heroSaveHandler = () => {
    // TODO Save hero code here
  };

  heroViewCloseHandler = () => {
    this.setState({ heroView: false });
  };

  render() {
    return (
      <Aux>
        <Modal
          show={this.state.heroView}
          modalClosed={this.heroViewCloseHandler}
        >
          <p>Hero View</p>
        </Modal>
        <SearchHero />
      </Aux>
    );
  }
}

export default HeroesDashboard;
