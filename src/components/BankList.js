// components/BankList.js
import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";
import styles from "../css/BankList.module.css";

const BankList = () => {
  const { lstBancos } = useContext(DataContext);

  return (
    <div>
      <h1 className={styles.title}>Lista de Bancos</h1>

      <div className={styles.banklistcontainer}>
        {lstBancos?.map((bank, index) => (
          <div key={index} className={styles.item}>
            <div>
              <label className={styles.bankname}>{bank.bankName}</label>
            </div>
            <div>
              <label className={styles.description}>{bank.description}</label>
            </div>
            <div>
              <label className={styles.age}>Años {bank.age}</label>
            </div>
            <div>
              <img
                className={styles.bankimage}
                src={bank.url}
                alt={bank.bankName}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BankList;
