// Shoutout to Maikel van Veen
// function that writes 'factors' to the window.localstorage
// which are empty when the page is loaded and can be overwritten by other functions 
// this in done index.js where this function will be imported
export const riskAssessmentToWindow = () => {
    const factors = window.localStorage.getItem('factors') || []

    if(!factors.length > 0) {
        window.factors = [
            {
                name: "support",
                factor: 0
            },
            {
                name: "firstname",
                factor: 0 
            },            
            {
                name: "surname",
                factor: 0
            },            
            {
                name: "email",
                factor: 0
            },            
            {
                name: "genderKid",
                factor: 0
            },            
            {
                name: "ageKid",
                factor: 0
            },
            {
                name: "help",
                factor: 0  
            },
            {
                name: "ageMotherBirth",
                factor: 0
            },
            {
                name: "ageFatherBirth",
                factor: 0   
            },
            {
                name: "ageDifference",
                factor: 0
            },
            {
                name: "ethnicity",
                factor: 0
            },
            {
                name: "education",
                factor: 0 
            },
            {
                name: "educationNow",
                factor: 0
            },
            {
                name: "educationChange",
                factor: 0   
            },
            {
                name: "dropout",
                factor: 0  
            },
            {
                name: "educationLevelFather",
                factor: 0
            },
            {
                name: "educationLevelMother",
                factor: 0
            },    
            {
                name: "housing",
                factor: 0 
            },
            {
                name: "household",
                factor: 0 
            },
            { 
                name: "seperated",
                factor: 0
            },       
            {
                name: "support",
                factor: 0
            },    
            {
                name: "socialParticipationFather",
                factor: 0
            },
            {
                name: "socialParticipationMother",
                factor: 0
            },
            {
                name: "statusFather",
                factor: 0
            },
            {
                name: "statusMother",
                factor: 0
            },    
            {
                name: "crime",
                factor: 0
            },
            {
                name: "halt",
                factor: 0
            },
            {
                name: "crimeParents",
                factor: 0
            },
            {
                name: "crimeFather",
                factor: 0
            },
            {
                name: "crimeMother",
                factor: 0
            }
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