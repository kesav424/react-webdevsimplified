import { createContext, ReactElement, useContext, useState } from "react"

const TheamProvide = createContext<boolean>(true)
const TheamUpdateContent = createContext<VoidFunction>(() => (null))


export function useTheamProvider() {
    return useContext(TheamProvide)
}

export function useUpdateProvider() {
    return useContext(TheamUpdateContent)
}


export const TheamProvider = ({ children }: { children: ReactElement }) => {
    const [dark, setDark] = useState(false)


    const handleTheamdata = () => {
        setDark(prev => !prev)
        console.log(dark)
    }

    return (
        <TheamProvide.Provider value={dark}>
            <TheamUpdateContent.Provider value={handleTheamdata}>
                {children}
            </TheamUpdateContent.Provider>
        </TheamProvide.Provider>
    )

}