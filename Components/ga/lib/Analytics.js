export const pageview = (url) => {
    if (window && window.gtag) {
        window.gtag('config', 'G-M5H5W79JZV', {
            page_path: url,
        })
    }
}

export const event = ({ action, params }) => {
    window.gtag('event', action, params)
}