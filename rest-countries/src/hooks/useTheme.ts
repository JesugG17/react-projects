import { useContext } from 'react';
import { ThemeContext } from '../context/theme/ThemeContext';

export const useTheme = () => {
    const context = useContext(ThemeContext);

    if (context === undefined) {
        throw new Error('You must envolve the app into a ThemeProvider');
    }

    return context;
}
