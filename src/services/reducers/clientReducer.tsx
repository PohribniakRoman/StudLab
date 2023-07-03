let defaultState = {
    firstName:"",
    lastName:"",
    email:"",
    id:"",
    token:"",
    isEditing:false,
}


export const client = (state = defaultState,action:any) => {
    switch (action.type) {
        case "LOAD_CLIENT":{
            return({...state,...action.payload});
        };
        case "CLEAR_CLIENT":{
            return({...state,...defaultState})
        }
        case "SET_EDIT":{
            return ({...state,isEditing:action.payload})
        }
        default:{
            return state;
        }
    }
}