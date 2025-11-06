import { useState } from "react"


export const CountPage = () => {
    const [count , setCount] = useState(0)

    const handelAddition = () => setCount(prev => prev + 1)
    const handelSubtraction = () => setCount(prev => prev - 1)


    return (

        <div className="flex flex-col min-h-screen justify-center items-center gap-4 bg-slate-400">
            <h1 className="text-4xl font-semibold ">{count}</h1>
            <div className=" flex flex-row flex-nowrap justify-around items-start gap-4 ">
            <button onClick={handelAddition} className="rounded-full p-3 font-semibold  bg-slate-900 text-white/80"> + </button>
            <button onClick={handelSubtraction} className="rounded-full p-3 font-semibold  bg-slate-900 text-white/80"> - </button>

            </div>
        </div>
    )
}