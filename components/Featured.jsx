import styles from "../styles/Featured.module.css";
import Image from "next/image";
import { useState, useRef } from "react";
function Featured() {
  const [index, setIndex] = useState(0);

  const images = ["/img/featured-o.png", "/img/second.png", "/img/third-o.png"];
  const handleArrow = (direction) => {
    if (direction === "1") {
      setIndex(index !== 0 ? index - 1 : 2);
    }
    if (direction === "2") {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };
  console.log(index);

  return (
    <div className={styles.container}>
      <div
        className={styles.arrowContainer}
        style={{ left: 0 }}
        onClick={() => handleArrow("1")}
      >
        <Image
          src="/img/arrowl.png"
          alt=""
          fill="container"
          style={{ objectFit: "contain" }}
        />
      </div>
      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${-100 * index}vw)` }}
      >
        {images.map((img, index) => {
          return (
            <div className={styles.imgContainer} key={index}>
              <Image
                src={img}
                alt=""
                fill="container"
                style={{ objectFit: "contain" }}
              />
            </div>
          );
        })}
      </div>
      <div
        className={styles.arrowContainer}
        style={{ right: 0 }}
        onClick={() => handleArrow("2")}
      >
        <Image src="/img/arrowr.png" alt="" fill="container" />
      </div>
    </div>
  );
}

export default Featured;
