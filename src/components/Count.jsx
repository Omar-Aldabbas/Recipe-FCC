import { useState } from "react"
import { CountChild } from "./CountChild";


export const Count = ( ) => {
    const [count, setCount] =useState(0);

    return (
        <div className="bg-slate-500 min-h-[40vh] space-y-6 p-12">
            <h1>This Count is in Child</h1>

            <CountChild count={count} />
            <button onClick={() => setCount(prev => prev + 1)} className="block rounded-full tect-xl p-3 bg-red-800 text-white"> + </button>
            <button onClick={() => setCount(prev => prev - 1)} className="block rounded-full tect-xl p-3 bg-indigo-500 text-white"> - </button>
        </div>
    )
}