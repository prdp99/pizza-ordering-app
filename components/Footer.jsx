import Image from "next/image";
import styles from "../styles/Footer.module.css";
function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" fill alt="bg" />
      </div>

      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            {`"Get a slice of heaven with every bite"`}
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FID OUR RESTAURANTS</h1>
          <p className={styles.text}>
            1654 R. Pizza Street #304.
            <br />
            Kathmandu, 858022
            <br /> (977) 111 - 0101
          </p>
          <p className={styles.text}>
            1654 R. Pizza Street #304.
            <br />
            Kathmandu, 858022
            <br /> (977) 012 - 345
          </p>
          <p className={styles.text}>
            1654 R. Pizza Street #304.
            <br />
            Kathmandu, 858022
            <br /> (977) 4531 - 012
          </p>
          <p className={styles.text}>
            1654 R. Pizza Street #304.
            <br />
            Kathmandu, 858022
            <br /> (977) 867 - 1010
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 - 22:00 SATURDAY - SUNDAY
            <br /> 12:00 24:00
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
