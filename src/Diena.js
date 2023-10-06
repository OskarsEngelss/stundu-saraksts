import Stunda from "./Stunda.js";

function Diena(props) {
    const stundasJSX = props.stundas.map((stunda, index) => {
        return <Stunda key={index} nosaukums={stunda} />
    });
    return (
        <>
            <h2>{props.diena}</h2>
            <ul>
                {stundasJSX}
            </ul>
        </>
    );
}

export default Diena;