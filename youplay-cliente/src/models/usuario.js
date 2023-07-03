export default class Usuario {
    constructor(nombre, email, password, dni, fecha_nacimiento, direccion, admin){
        this.nombre = nombre;
        this.email = email;
        this.password = password;
        this.dni = dni;
        this.fecha_nacimiento = fecha_nacimiento;
        this.direccion = direccion;
        this.admin = admin;
    }
}