import { UserHelper } from "./Utility.js";
import { DataService } from './DataService.js';

export async function Logout() {
    await DataService.logout();
    UserHelper.clearUserData();
    window.location.href = "/";

}