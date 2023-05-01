let defaultState = {
    name:"",
    surname:"",
    email:"",
}

export const client = (state = defaultState,action:any) => {
    switch (action.type) {
        case "LOAD_CLIENT":{
            return({...action.payload});
        };
        case "CLEAR_CLIENT":{
            return({...defaultState})
        }
        default:{
            return state;
        }
    }
}