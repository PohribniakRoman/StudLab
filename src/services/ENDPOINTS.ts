const hostname = "https://stud-lab-api.onrender.com/api/v1/";
export const ENDPOINTS = {
    isVerified:hostname+"auth/check-status",
    login:hostname+"auth/login",
    authorize:hostname+"auth/sign-up",
    verify:hostname+"auth/verify",
    join:hostname+"auth/join",
    logout:hostname+"auth/logout",
    person:hostname+"student/personal-info",
    vacancies:hostname+"vacancies/all",
    events:hostname+"events/all",
    favourites:hostname+"favourites/getFavourite",
    params:{
        mode: "cors" as RequestMode,
        headers:{"Content-Type":"application/json"}
    } as RequestInit
}