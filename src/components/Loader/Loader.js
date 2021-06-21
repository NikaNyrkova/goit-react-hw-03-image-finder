import React from 'react';
import Loader from "react-loader-spinner";

import s from './Loader.module.css';

const ShowLoader = () => {
  return (
    <div className={s.Loader}>
      <Loader type="Hearts" color="#00BFFF" height={180} width={180} />
    </div>
  );
  
};

export default ShowLoader;