import { divdie, multi } from "../globalactionname";


const inital = 5;
const Divmul = (state = inital, action) => {

    switch (action.type) {

        case divdie: return state / action.pay;

        case multi: return state * action.pay;
        default: return state;

    }

}

export default Divmul;

