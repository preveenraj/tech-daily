import React from 'react';

import Left from './Left';
import Middle from './Middle';
import Right from './Right';

const Home = () => {
  return (
    <div
      className="
        h-screen w-full
        box-border
        bg-noise-background flex pt-20
        font-body font-semibold"
    >
      <Left />
      <Middle />
      <Right />
    </div>
  );
};

export default Home;
