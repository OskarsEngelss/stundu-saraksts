import styles from "./Stunda.module.css";

function Stunda(props) {
    return (
        <li className={styles.gold}>{props.nosaukums}</li>
    );
};

export default Stunda;