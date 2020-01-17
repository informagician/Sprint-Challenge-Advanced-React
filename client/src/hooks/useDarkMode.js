import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage('darkmode');

    let body = document.body;

    if(darkMode) {
        body.classList.add('dark');
    } else {
        body.classList.remove('dark');
    }

    return [darkMode, setDarkMode]
} 