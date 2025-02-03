function setUserData(userData) {
    localStorage.setItem("userData", JSON.stringify(userData));
}

function getUserData() {
    const userData = localStorage.getItem("userData");
    if (userData == "undefined") {
        return null;
    } else if (userData) {
        return JSON.parse(userData);
    } else {
        return null;
    }

}

function clearUserData() {
    localStorage.removeItem("userData")
}


function getUserToken() {
    const userData = getUserData();
    if (userData) {
        return userData?.accessToken;
    }
    return null;
}

function getUserId() {
    const userData = getUserData();
    return userData?._id;
}


function HasOwner(ownerId) {
    const id = getUserId();
    return ownerId == id;
}

export const UserHelper = {
    setUserData,
    getUserData,
    clearUserData,
    getUserToken,
    getUserId,
    HasOwner

}