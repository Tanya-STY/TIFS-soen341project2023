import { extendObservable } from "mobx";

class UserStore{
    constructor() {
        extendObservable(this, {
            loading: true,
            isLoggedIn: false,
            fullname: ""
        })
    }
}

export default new UserStore();