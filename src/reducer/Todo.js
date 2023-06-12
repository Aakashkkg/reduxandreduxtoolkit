import { Addtype, Deltype } from "../globalactionname"

const list = []

const Todoapp = (State = list, action) => {
    switch (action.type) {
        case Addtype: return State.push(action.pay)
        case Deltype: return State.splice(action.pay, 1)
        default : return State
    }
}

export default Todoapp;