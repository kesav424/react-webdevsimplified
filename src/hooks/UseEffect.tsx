import { useEffect, useState } from "react"


const UseEffect = () => {
    const [rsource, setResource] = useState("posts");
    const [datas, setDatas] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${rsource}`)
            .then(response => response.json())
            .then(json => setDatas(json))
    }, [rsource])
    return (
        <div>
            <button onClick={() => setResource("posts")}>Post</button>
            <button onClick={() => setResource("todos")}>todos</button>
            <button onClick={() => setResource("users")}>users</button>

            {
                datas.map(data => (
                    <p>{JSON.stringify(data)}</p>
                ))
            }
        </div>
    )
}

export default UseEffect