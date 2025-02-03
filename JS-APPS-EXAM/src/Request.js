import { UserHelper } from "./Utility.js";

async function requster(method, url, data) {

    const option = {
        method,
        headers: {}
    };

    UserHelper.setUserData(data);
    const accessToken = UserHelper.getUserToken()

    if (accessToken) {
        option.headers["Authorization"] = `Bearer ${accessToken}`;
    }

    option.headers["Content-Type"] = "application/json";

    if (data) {
        option.body = JSON.stringify(data);
    }

    try {
        const response = await (fetch(url, option));


        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message);
        }

        return await response.json();

    } catch (error) {
        throw (error)
    }

}


async function get(Url) {
    return requster("GET", Url);
}

async function post(Url, data) {
    return requster("POST", Url, data);
}

async function put(Url, data) {
    return requster("PUT", Url, data);
}

async function del(Url) {
    return requster("DELETE", Url);
}

export const api = {
    get,
    post,
    put,
    del
}