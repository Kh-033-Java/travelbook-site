export default function isAuthorized(){
    console.log(localStorage.getItem("token"));
    return !(localStorage.getItem("token") ===null);
}