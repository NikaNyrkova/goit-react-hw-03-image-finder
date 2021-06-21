import React from "react";

import s from "./Searchbar.module.css";

const Searchbar = ({ searchQuery, handleInputChange, handleSubmitForm }) => {
  return (
    <header className={s.Searchbar}>
      <form className={s.SearchForm} onSubmit={handleSubmitForm}>
        <button type="submit" className={s.SearchForm_button}>
          <span className={s.SearchForm_button_label}>Search</span>
        </button>

        <input
          className={s.SearchForm_input}
          type="text"
          name="searchQuery"
          value={searchQuery}
          onInput={handleInputChange}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default Searchbar;
