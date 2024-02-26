import { useContext } from "react"
import { Context } from "../App"



export function Container() {
    const context = useContext(Context)
    return <div>{context.counter}</div>
  }
  