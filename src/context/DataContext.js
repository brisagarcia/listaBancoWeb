// contexts/DataContext.js
import React, { createContext, useState, useEffect } from 'react';
import BancoService from '../services/api';
import { getDatos, setDatos } from '../utils/storage';

export const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [lstBancos, setLstBancos] = useState([]);
  const bancoService = new BancoService();

  useEffect(() => {
    if (getDatos) {
      setLstBancos(getDatos);
    } else {
        bancoService.obtenerBancos().then((data) => {
            setDatos(data);
            setLstBancos(data);
        });
    }
  }, []);

  return (
    <DataContext.Provider value={{ lstBancos }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
