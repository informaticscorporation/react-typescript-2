import { useContext } from "react"
import { Context } from "../App"


export function ButtonIncrement() {
    const context = useContext(Context)
    return <button onClick={context.onIncrement}>incrementa</button>
  }
  