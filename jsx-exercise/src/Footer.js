import React from 'react';

function Footer() {

  const today = new Date().toLocaleDateString();

  return (
    <footer>
      <p>
        {today} | Group Members: Josral Frederick, Natnael Tekli
      </p>
    </footer>
  );
}

export default Footer;

