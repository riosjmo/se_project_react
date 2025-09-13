import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ element: Component, ...props }) {
    const isLoggedIn = localStorage.getItem('jwt');
    return isLoggedIn ? <Component {...props} /> : <Navigate to="/login" />;
}