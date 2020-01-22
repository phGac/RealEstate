export module UserModel {

    export class User {
        id: number;
        role: string;
        firstName: string;
        lastName: string;
        email: string;
        rut: number;
        rutDv: string;
        status: number;
    
        constructor(id: number, role: string, firstName: string, lastName: string, email: string, rut: number, rutDv: string, status: number) {
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

    export function toPlainObject(user: any) : User {
        let plainObject = user.get({ plain: true });
        return new User(
            plainObject.id,
            user.role.name,
            plainObject.firstName,
            plainObject.lastName,
            plainObject.email,
            plainObject.rut,
            plainObject.rutDv,
            plainObject.status
        );
    };
}