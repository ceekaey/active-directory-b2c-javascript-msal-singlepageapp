// Enter here the user flows and custom policies for your B2C application
// To learn more about user flows, visit https://docs.microsoft.com/en-us/azure/active-directory-b2c/user-flow-overview
// To learn more about custom policies, visit https://docs.microsoft.com/en-us/azure/active-directory-b2c/custom-policy-overview

const b2cPolicies = {
    names: {
        signUpSignIn: "B2C_1_rudolfadb2cexperiment",
        forgotPassword: "b2c_1_reset",
        editProfile: "b2c_1_edit_profile"
    },
    authorities: {
        signUpSignIn: {
            authority: "https://rudolfadb2cexperiment.b2clogin.com/rudolfadb2cexperiment.onmicrosoft.com/B2C_1_rudolfadb2cexperiment",
        },
        forgotPassword: {
            authority: "https://fabrikamb2c.b2clogin.com/fabrikamb2c.onmicrosoft.com/b2c_1_reset",
        },
        editProfile: {
            authority: "https://fabrikamb2c.b2clogin.com/fabrikamb2c.onmicrosoft.com/b2c_1_edit_profile"
        }
    },
}