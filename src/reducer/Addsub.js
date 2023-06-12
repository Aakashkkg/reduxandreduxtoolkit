import { dec, inctype } from "../globalactionname"

const inital = 0
const Addsub = (state = inital, action) => {

    switch (action.type) {
        case inctype: return state + action.pay
        case dec:
            if (state > 0) {
                return state - action.pay
            }
        default: return state
    }
}
export default Addsub;