import React, {useState, useEffect} from "react";


const Vans = () => {
    const [vans, setVans] = useState([]);

    useEffect(() => {
        fetch("/api/vans")
            .then(response => response.json())
            .then(data => console.log(data))
    }, []);

    return (
        <h1>Vans page</h1>
    )
}

export default Vans;