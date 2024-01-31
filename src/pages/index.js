// pages/index.js
import React from 'react';
import DataContextProvider from '../context/DataContext';
import BankList from '../components/BankList';

const Home = () => {
  return (
    <DataContextProvider>
      <div>
        <BankList />
      </div>
    </DataContextProvider>
  );
};

export default Home;
