import { useSelector } from "react-redux";

export default function Dashboard() {
    const user = useSelector((state) => state.auth.user);
    return (
        <div>
            <h1>Dashboardxd</h1>
            <p>Bienvenido, {user ? user.email : "Invitado"}</p>
        </div>
    );
}