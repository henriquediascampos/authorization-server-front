import { Navigate, Route, Routes } from 'react-router-dom';
import { Login } from '../pages/login/Login';

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />

            <Route path="/sign-up" element={<p>login</p>} />
            <Route path="/logout" element={<p>login</p>} />
            <Route path="/email-confirmation" element={<p>login</p>} />

            <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
    );
}
