import { memo } from "react"

export const ShowIncrement = memo (({ increment }) => {
    console.log("first")
    return (

        <button className="btn btnprimary"
        onClick={() => {increment(2)}}
        >Incrementar</button>

    )
})