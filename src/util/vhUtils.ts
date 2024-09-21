

export const enableMvh = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--mvh', `${vh}px`);

    window.addEventListener('resize', () => {
        // We execute the same script as before
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--mvh', `${vh}px`);
    });
}