export function toggleClass(el, zone, delay = 0, className = 'checked') {
    const a = el.nativeElement.querySelector('a');
    zone.runOutsideAngular(() => {
        setTimeout(() => {
            a.classList.add(className);
        }, delay);
    });
    zone.runOutsideAngular(() => {
        setTimeout(() => {
            a.classList.remove(className);
        }, 3000);
    });
}
