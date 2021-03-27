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

export function useTitle() {
  const context = useContext(TitleContext);

  const { title, setTitle } = context;
  return { title, setTitle };
}

PageProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
