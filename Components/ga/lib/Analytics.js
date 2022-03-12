export const pageview = (url) => {
    if (window && window.gtag) {
        window.gtag('config', 'G-YTTEVZPJ1G', {
            page_path: url,
        })
    }
}

export const event = ({ action, params }) => {
    window.gtag('event', action, params)
}