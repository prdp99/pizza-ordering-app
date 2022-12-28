import Image from "next/image";
import styles from "../styles/PizzaCard.module.css";
import Link from "next/link";
function PizzaCard({ pizza }) {
  console.log("pizza", pizza[0]);
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Link href={`/product/${pizza._id}`}>
          <Image
            src={pizza.img}
            alt=""
            fill
            style={{
              objectFit: "contain",
            }}
          />
        </Link>
      </div>

      <h1 className={styles.title}>{pizza.title}</h1>
      <p className={styles.desc}>{pizza.desc}</p>

      {/* <span className={styles.price}>{pizza.prices[0]}</span> */}
    </div>
  );
}

export default PizzaCard;
