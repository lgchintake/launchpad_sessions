export const loginUser = async ({ username, password }) => {
    return { status: true, data: { message: "User logged in successfully!" } };
    // try {
    //     // API call to server
       
    // } catch (error) {
    //     return { status: false, data: { message: "Please enter correct credentials!" } };
    // }
};
