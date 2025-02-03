import UserService from "./UserService.js";

export function del(ctx) {
    const id = ctx.params.id;
    UserService.DelShowRecord(id)
}