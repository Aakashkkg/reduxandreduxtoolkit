import { Addtype, Deltype } from "../globalactionname"

const list = []

const Todoapp = (State = list, action) => {
    switch (action.type) {
        case Addtype: {
            State.push(action.pay)
            return State;
        }
        case Deltype: {
            State.splice(action.pay, 1)
            return State;
        }
        default: return State
    }
}

export default Todoapp;