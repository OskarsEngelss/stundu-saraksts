import Stunda from "./Stunda.js";
import styles from "./Diena.module.css";

function Diena(props) {
    const stundasJSX = props.stundas.map((stunda, index) => {
        return <Stunda key={index} nosaukums={stunda} />
    });
    return (
        <div className={styles.diena}>
            <h2 className={styles.violets}>{props.diena}</h2>
            <ul>
                {stundasJSX}
            </ul>
        </div>
    );
}

export default Diena;