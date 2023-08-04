const style =
    `#reaction-control-panel {
    position: fixed !important;
    right: 110px !important;
    bottom: -1px !important;
    z-index: 999 !important;
}`

window.addEventListener('load', () => {
    document.head.appendChild(document.createElement('style')).textContent = style
    console.log('aaaaaaaaaaaaaaaaaaa');
})