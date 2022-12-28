import styles from "../styles/OrderDetail.module.css";
import { useState } from "react";

function OrderDetail({ total, createOrder, setCash }) {
  const [customer, setCustomer] = useState("");
  const [address, setAddress] = useState("");

  const handleClick = () => {
    createOrder({ customer, address, total, method: 0 });
  };
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.close} onClick={() => setCash(false)}>
          X
        </div>
        <h2 className={styles.title}>You will pay $12 after delivery</h2>
        <div className={styles.item}>
          <label className={styles.label}>Name Surname </label>
          <input
            type="text"
            placeholder="John Doe"
            className={styles.input}
            onChange={(e) => setCustomer(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Phone Number</label>
          <input
            type="number"
            placeholder="+977 9812345678"
            className={styles.input}
            // onChange={(e) => setCustomer(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Address</label>
          <input
            type="text"
            placeholder="Kathmandu"
            className={styles.input}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <button className={styles.button} onClick={handleClick}>
          Order
        </button>
      </div>
    </div>
  );
}

export default OrderDetail;
