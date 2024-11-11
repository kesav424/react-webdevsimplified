import { useEffect, useState } from "react"

const getValue = (key: string, initalvalue: string | (() => string)) => {

    // console.log("running")
    const savedValue = localStorage.getItem(key)
    if (savedValue !== null) return JSON.parse(savedValue)

    if (initalvalue instanceof Function) return initalvalue();
    return initalvalue

}


export const useLocalStorage = (key: string, initalvalue: string) => {
    const [value, setValue] = useState(() => getValue(key, initalvalue));


    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])


    return [value, setValue]
}