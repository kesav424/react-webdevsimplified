import { useTheamProvider, useUpdateProvider } from "./content"


const UseContext = () => {

    const updateData = useUpdateProvider();
    const theam = useTheamProvider();

    return (
        <>
            <button onClick={updateData} className="p-6 rounded-2xl  bg-yellow-400 mt-20">Toggle theam</button>
            <div className={`w-32 h-32 border border-black m-auto flex justify-center items-center ${theam ? "bg-black" : "bg-white"}`}>
                <p className={theam ? "text-white" : "text-black"}>componets</p>
            </div>
        </>
    )
}

export default UseContext