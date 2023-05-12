const hostname = "https://stud-lab-api.onrender.com/api/v1/";
export const ENDPOINTS = {
    login:hostname+"auth/login",
    authorize:hostname+"auth/sign-up",
    verify:hostname+"auth/verify",
    join:hostname+"auth/join",
    logout:hostname+"auth/logout",
    params:{
        mode: "cors",
        headers:{"Content-Type":"application/json"}
    }
}