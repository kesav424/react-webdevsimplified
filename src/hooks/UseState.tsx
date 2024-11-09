import { useState } from "react"


const UseState = () => {

    const [count, setCount] = useState(0);

    const handleIncreament = () => {
        setCount(prev => prev + 1)
    }

    const handleDecreament = () => {
        if (count == 0) {
            alert("Reached min value please increament")
            return
        }
        setCount(prev => prev - 1)

    }

    return (
        <>
            <button onClick={handleDecreament}>-</button>
            <h2>{count}</h2>
            <button onClick={handleIncreament}>+</button>
        </>
    )
}

export default UseState