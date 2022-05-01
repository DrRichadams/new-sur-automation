const initState = {
    isDisplayed: false
}

const NavbarReducer = (state = initState, action) => {
    switch(action.type) {
        case "SHIFT_NAV_DISPLAY":
            if(action.param === "logged_in") {
                return{
                    ...state,
                    isDisplayed: true,
                }
            } else if(action.payload === "logged_out") {
                return{
                    ...state,
                    isDisplayed: false,
                }
            } break
        default: 
        return state
    }
}

export default NavbarReducer