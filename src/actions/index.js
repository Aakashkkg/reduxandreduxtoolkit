import { Addtype, Deltype, dec, divdie, inctype, multi } from "../globalactionname"

export const add = (e) => {

    return {
        type: inctype,
        pay: e
    }

}

export const sub = (e) => {
    return {
        type: dec,
        pay: e
    }
}


export const div = (e) => {

    return {
        type: divdie,
        pay: e
    }

}

export const mul = (e) => {
    return {
        type: multi,
        pay: e
    }
}


export const Adata = (e) => {
    return {
        type: Addtype,
        pay: e
    }
}


export const deldata = (e) => {
    return {
        type: Deltype,
        pay: e
    }
}