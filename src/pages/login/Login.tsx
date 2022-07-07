import { Box, Button } from "@mui/material";
import { useAppThemeContext } from '../../shared/contexts/ThemeContext';
import './login.css';

export const Login = () => {
    const { toggleTheme } = useAppThemeContext();

    return (
        <Box color="primary" height="100vh">
            <div className="body-template">
                <Button variant="contained" color="secondary" onClick={toggleTheme}>
                    login
                </Button>
            </div>
        </Box>
    );
};
