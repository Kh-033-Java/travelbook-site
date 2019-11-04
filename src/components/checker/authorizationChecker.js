export default function isAuthorized(){
    return !(localStorage.getItem("token") ===null);
}