import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

export const TitleContext = createContext();

export default function PageProvider({ children }) {
  const [title, setTitle] = useState('');

  return (
    <TitleContext.Provider
      value={{
        title,
        setTitle,
      }}
    >
      {children}
    </TitleContext.Provider>
  );
}

export function usePage() {
  const context = useContext(TitleContext);
  if (!context) throw new Error('usePage must be used whitin a PageProvider');
  const {
    title,
    setTitle,
    subTitle,
    setSubTitle,
    isBoard,
    setIsBoard,
  } = context;
  return { title, setTitle, subTitle, setSubTitle, isBoard, setIsBoard };
}

PageProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
