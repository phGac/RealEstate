"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserModel;
(function (UserModel) {
    class User {
        constructor(id, role, firstName, lastName, email, rut, rutDv, status) {
            this.id = id;
            this.role = role;
            this.firstName = firstName;
            this.lastName = lastName;
            this.email = email;
            this.rut = rut;
            this.rutDv = rutDv;
            this.status = status;
        }
    }
    UserModel.User = User;
    function toPlainObject(user) {
        let plainObject = user.get({ plain: true });
        return new User(plainObject.id, user.role.name, plainObject.firstName, plainObject.lastName, plainObject.email, plainObject.rut, plainObject.rutDv, plainObject.status);
    }
    UserModel.toPlainObject = toPlainObject;
    ;
})(UserModel = exports.UserModel || (exports.UserModel = {}));
