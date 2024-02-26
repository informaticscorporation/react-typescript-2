import { useContext } from "react"
import { Context } from "../App"


export function ButtonDecrement() {
    const context = useContext(Context)
    return <button disabled = {context.counter <= 0 ? true : false} onClick={context.onDecrement} >decrementa</button>
  }
  