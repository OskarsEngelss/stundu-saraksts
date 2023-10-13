import Diena from "./Diena";

function App() {
    const visasStundas = [
        {
            diena: "Pirmdiena", 
            stundas: [
                "Latviešu valoda un literatūra",
                "Sociālās zinības un vēsture",
                "Sistēmu programmēšana",
                "Sistēmu programmēšana"
            ]
        },
        {
            diena: "Otrdiena", 
            stundas: [
                "Latviešu valoda un literatūra",
                "Sports",
                "Patstāvīgais Darbs",
                "Patstāvīgais Darbs"
            ]
        },
        {
            diena: "Trešdiena", 
            stundas: [
                "Valsts aizardzības mācība",
                "Valsts aizardzības mācība",
                "Valsts aizardzības mācība",
                "Valsts aizardzības mācība"
            ]
        },
        {
            diena: "Ceturtdiena", 
            stundas: [
                "Sistēmu programmēšana",
                "Patstāvīgais darbs",
                "Latviešu valoda un literatūra",
                "Sociālās zinības un vēsture"
            ]
        },
        {
            diena: "Piektdiena", 
            stundas: [
                "Fizika",
                "Sistēmu programmēšana",
                "Angļu valoda"
            ]
        }
    ];

    const dienasJSX = visasStundas.map((diena, indekss) => {
        return (
            <div class="dienasDiv">
                <Diena key={indekss} diena={diena.diena} stundas={diena.stundas} />
            </div>
        );
    });
    return (
        <>
            {dienasJSX}
        </>
    );

}

export default App;

