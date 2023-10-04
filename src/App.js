import Diena from "./Diena";

function App() {
    const pirmdienasStundas = [
        "Sports",
        "Dabaszinības",
        "Vēsture",
        "Krievu valoda"
    ]
    const otrdienasStundas = [
        "Matemātika",
        "Klases stunda",
        "Vēsture",
        "Krievu valoda"
    ]
    return (
        <>
            <div>
                <Diena diena="Pirmdiena" stundas={pirmdienasStundas} />
                <Diena diena="Otrdiena" stundas={otrdienasStundas} />
            </div>
        </>
    );
}

export default App;

