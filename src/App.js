import { useState, useEffect } from "react";

import Diena from "./Diena";

function App() {
    const [lessons, setLessons] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getLessons() {
            const response = await fetch("https://cheese-cake.onthewifi.com/api/lessons");
            const data = await response.json();
            
            setLessons(data["IPb22"])
            setLoading(false);
        }

        getLessons();
    }, []);

    const lessonsJSX = lessons.map((singleDay, index) => {
        return (
            <>
                {index == 5 ? <h3>Nākamā nedēļā</h3> : ""}
                <Diena key={index} {...singleDay}/>
            </>
        )
    })

    return (
        <>
            {loading === false ? lessonsJSX : "Loading"}
        </>
    );

}

export default App;

