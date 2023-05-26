let defaultState = {
    name:"",
    surname:"",
    email:"",
    id:"",
    token:"",
}


export type Client = {
    name:string,
    surname:string,
    email:string,
    id:string,
    token:string,
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