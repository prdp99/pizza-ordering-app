import styles from "../styles/AddButton.module.css";
import { useState } from "react";
const Add = ({ setClose }) => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState(null);
  const [desc, setDesc] = useState(null);
  const [prices, setPrices] = useState([]);
  const [extra, setExtra] = useState(null);
  const [extraOptions, setExtraOptions] = useState([]);

  const handleExtraInput = (e) => {
    const { name, value } = e.target;
    setExtra({ ...extra, [name]: value });
  };
  const handleExtra = (e) => {
    console.log("handle extrab btn clicked", extraOptions);
    const { type, name, value } = e.target;
    setExtraOptions((prev) => [...prev, extra]);
  };
  const changePrice = (e, index) => {
    console.log("change price value clicked", index, prices);
    const currentPrices = prices;
    currentPrices[index] = e.target.value;
    setPrices(currentPrices);
  };
  const handleCreate = async (e) => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "uploads");
    try {
      const uploadRes = await fetch(
        "https://api.cloudinary.com/v1_1/dkptedzxy/image/upload",
        {
          method: "POST",
          body: data,
        }
      ).then((res) => res.json());
      console.log("res", uploadRes);
      const { url } = uploadRes;
      const newProduct = { title, desc, prices, extraOptions, img: url };

      const res = await fetch(`${process.env.SERVER_URL}/api/products`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
      }).then((res) => res.json());
      console.log("sending data to backend", res);
      setClose(true);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <span onClick={() => setClose(true)} className={styles.close}>
          X
        </span>
        <h1>Add new Pizza</h1>
        <div className={styles.label}>Choose an image</div>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <div className={styles.item}>
          <label className={styles.desc}>Title</label>
          <input
            className={`${styles.input} ${styles.inputSm}`}
            name="title"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className={styles.item}>
          <label className={styles.desc}>desc</label>
          <textarea
            rows={4}
            type="text"
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Prices</label>
          <div className={styles.priceContainer}>
            <input
              className={`${styles.input} ${styles.inputSm}`}
              type="number"
              placeholder="Small"
              name="small"
              onChange={(e) => changePrice(e, 0)}
            />
            <input
              className={`${styles.input} ${styles.inputSm}`}
              type="number"
              placeholder="Medium"
              name="medium"
              onChange={(e) => changePrice(e, 1)}
            />
            <input
              className={`${styles.input} ${styles.inputSm}`}
              type="number"
              placeholder="Large"
              name="large"
              onChange={(e) => changePrice(e, 2)}
            />
          </div>
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Extras</label>
          <div className={styles.extra}>
            <input
              className={`${styles.input} ${styles.inputSm}`}
              type="text"
              placeholder="Item"
              name="item"
              onChange={handleExtraInput}
            />
            <input
              className={`${styles.input} ${styles.inputSm}`}
              type="number"
              placeholder="Price"
              name="price"
              onChange={handleExtraInput}
            />
            <button className={styles.extraButton} onClick={handleExtra}>
              Add
            </button>
          </div>
          <div className={styles.extraItems}>
            {extraOptions.map((option) => (
              <span key={option.item} className={styles.extraItem}>
                {option.item}
              </span>
            ))}
          </div>
        </div>
        <button className={styles.addButton} onClick={handleCreate}>
          Create
        </button>
      </div>
    </div>
  );
};

export default Add;
