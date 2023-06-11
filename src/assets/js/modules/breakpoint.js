export const breakpoint = () => {
    return window.getComputedStyle(document.body, ':before').content.replace(/\"/g, '')
}