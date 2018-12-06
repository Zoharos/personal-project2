export const session = (user) => {
    console.log("You clicked on user: ");
    return {
        type: 'USER_LOGGED_IN',
        payload: user
    }
};