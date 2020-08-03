import React from 'react';

const Header = ({tittle}) => {
  return (
    <header>
      <h1 className = 'text-center'>{tittle}</h1>
    </header>
  );
};

export default Header;