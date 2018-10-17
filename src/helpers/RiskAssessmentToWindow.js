export const riskAssessmentToWindow = () => {
    const factors = window.localStorage.getItem('factors') || []

    if(!factors.length > 0) {
        window.factors = [
            {
                name: "support",
                factor: 0
            },
        ]

        try {
            window.localStorage.setItem('factors', JSON.stringify(window.factors))
        } catch (error) {
            throw new Error (error)
        }
    } else {
        try {
            // write JS in JSON to window
            window.factors = JSON.parse(window.localStorage.getItem('factors'))
        } catch (error) {
            throw new Error (error)
        }
    }
}