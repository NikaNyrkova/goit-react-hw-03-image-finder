import React, { Component } from "react";
import PropTypes from "prop-types";

import Searchbar from "./components/Searchbar";
import fetchImagesByQuery from "./servises/fetchImages";
import ImageGallery from "./components/ImageGallery";
import Button from "./components/Button";
import Modal from "./components/Modal";
import ShowLoader from "./components/Loader";

import "modern-normalize/modern-normalize.css";

class App extends Component {
  static defaultProps = {
    images: [],
    currentPage: 1,
    searchQuery: "",
    isLoading: false,
    showModal: false,
    modalImg: "",
    modalAlt: "",
    error: null,
  };

  static propTypes = {
    images: PropTypes.array,
    currentPage: PropTypes.number,
    searchQuery: PropTypes.string,
    isLoading: PropTypes.bool,
    showModal: PropTypes.bool,
    modalImg: PropTypes.string,
    modalAlt: PropTypes.string,
    error: PropTypes.string,
  };

  state = {
    images: this.props.images,
    currentPage: this.props.currentPage,
    searchQuery: this.props.searchQuery,
    isLoading: this.props.isLoading,
    showModal: this.props.showModal,
    modalImg: this.props.modalImg,
    modalAlt: this.props.modalAlt,
    error: this.props.error,
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmitForm = (e) => {
    e.preventDefault();
    const { searchQuery } = this.state;
    this.setState({ isLoading: true });

    fetchImagesByQuery(searchQuery, 1)
      .then((responce) => {
        this.setState({
          images: [...responce.data.hits],
          currentPage: 1,
        });
      })
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  handleClickLoadMore = () => {
    const { searchQuery, currentPage } = this.state;
    this.setState({ isLoading: true });

    fetchImagesByQuery(searchQuery, currentPage + 1)
      .then((responce) => {
        this.setState((prevState) => ({
          images: [...prevState.images, ...responce.data.hits],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .catch((error) => this.setState({ error }))
      .finally(() => {
        this.setState({ isLoading: false });
        window.scrollTo({
          top: document.querySelector("#imageGallery").scrollHeight,
          behavior: "smooth",
        });
      });
  };

  handleOpenModal = (e) => {
    this.setState({
      showModal: true,
      modalImg: e.target.dataset.source,
      modalAlt: e.target.dataset.alt,
    });
  };

  handleCloseModal = (e) => {
    if (e.target.nodeName !== "IMG") {
      this.setState({
        showModal: false,
        modalImg: "",
        modalAlt: "",
      });
    }
  };

  render() {
    const { searchQuery, images, showModal, modalImg, modalAlt, isLoading } =
      this.state;
    
    return (
      <div className="App">
        <Searchbar
          searchQuery={searchQuery}
          handleInputChange={this.handleInputChange}
          handleSubmitForm={this.handleSubmitForm}
        />

        <ImageGallery images={images} handleOpenModal={this.handleOpenModal} />

        {isLoading && <ShowLoader />}

        {images.length !== 0 && (
          <Button handleClickLoadMore={this.handleClickLoadMore} />
        )}
        
        {showModal && (
          <Modal
            modalImg={modalImg}
            modalAlt={modalAlt}
            handleCloseModal={this.handleCloseModal}
          />
        )}
      </div>
    );
  }
}

export default App;
