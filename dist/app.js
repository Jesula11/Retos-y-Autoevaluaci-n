"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const usuarioValido = {
    id: 1,
    username: 'jesus',
    email: 'jesus@gmail.com',
    rol: 'alumno',
    token: '12345'
};
const usuarioInvalido = {
    id: 2,
    username: 'pedro',
    email: 'pedro@gmail.com',
    rol: 'invitado'
};
const misTareas = [
    {
        id: 1,
        titulo: 'Estudiar TypeScript',
        completada: false
    },
    {
        id: 2,
        titulo: 'Practicar Angular',
        completada: false
    },
    {
        id: 3,
        titulo: 'Entregar ejercicios',
        completada: true
    }
];
function completarTarea(lista, idBuscar) {
    return lista.map(tarea => {
        if (tarea.id === idBuscar) {
            return {
                ...tarea,
                completada: true
            };
        }
        return tarea;
    });
}
const nuevasTareas = completarTarea(misTareas, 2);
console.log('Original:', misTareas);
console.log('Nuevo:', nuevasTareas);
//RETO 2
//RETO 3
class ProductComponent {
    nombreProducto;
    precioBase;
    iva = 0.21;
    constructor(nombreProducto, precioBase) {
        this.nombreProducto = nombreProducto;
        this.precioBase = precioBase;
    }
    obtenerPrecioFinal() {
        return this.precioBase * (1 + this.iva);
    }
}
const producto = new ProductComponent('Teclado', 100);
console.log(producto.nombreProducto);
console.log(producto.obtenerPrecioFinal());
producto.precioBase = 200;
function procesarRespuesta(res) {
    if (res.status === 'success') {
        res.data?.forEach(elemento => {
            console.log(elemento);
        });
    }
    else {
        console.log(res.mensajeError);
    }
}
const respuestaCorrecta = {
    status: 'success',
    data: ['Usuario registrado', 'Correo enviado', 'Proceso finalizado']
};
const respuestaError = {
    status: 'error',
    mensajeError: 'No se ha podido conectar con el servidor'
};
procesarRespuesta(respuestaCorrecta);
procesarRespuesta(respuestaError);
//RETO 4
//RETO 5
class ServicioDatos {
    endpoint;
    constructor(endpoint) {
        this.endpoint = endpoint;
    }
    conectar() {
        console.log('Conectando a ' + this.endpoint);
    }
}
class ServicioUsuarios extends ServicioDatos {
    entidad = 'usuarios';
    constructor(endpoint) {
        super(endpoint);
    }
}
const servicio = new ServicioUsuarios('https://api.ejemplo.com');
servicio.conectar();
console.log(servicio.endpoint);
console.log(servicio.entidad);
//RETO 5
//# sourceMappingURL=app.js.map