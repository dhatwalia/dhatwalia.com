function ToggleTheme() {
    const temp = getComputedStyle(document.documentElement).getPropertyValue('--primary');
    document.documentElement.style.setProperty('--primary', getComputedStyle(document.documentElement).getPropertyValue('--secondary'));
    document.documentElement.style.setProperty('--secondary', temp);
}

export default ToggleTheme;
