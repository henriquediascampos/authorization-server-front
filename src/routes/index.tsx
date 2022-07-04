import { Button } from '@mui/material';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAppThemeContext } from '../shared/contexts/ThemeContext';

export function AppRoutes() {
    const { toggleTheme } = useAppThemeContext();

    return (
        <Routes>
            <Route
                path="/login"
                element={
                    <Button variant="contained" color="primary" onClick={toggleTheme}>
                        login
                    </Button>
                }
            />
            <Route path="/sign-up" element={<p>login</p>} />
            <Route path="/logout" element={<p>login</p>} />
            <Route path="/email-confirmation" element={<p>login</p>} />

            <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
    );
}
