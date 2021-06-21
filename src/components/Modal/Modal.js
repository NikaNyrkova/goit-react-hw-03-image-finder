import React, { Component } from "react";
// import PropTypes from "prop-types";

import s from "./Modal.module.css";

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handlePressEsc);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handlePressEsc);
  }

  handlePressEsc = (e) => {
    if (e.key === "Escape") {
      this.props.handleCloseModal(e);
    }
  };

  render() {
    return (
      <div className={s.Overlay} onClick={this.props.handleCloseModal}>
        <div className={s.Modal}>
          <img src={this.props.modalImg} alt={this.props.modalAlt} />
        </div>
      </div>
    );
  }
}

export default Modal;
