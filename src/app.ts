//RETO 1
interface UsuarioAPI {
    id: number;
    username: string;
    email: string;
    rol: 'admin' | 'editor' | 'alumno';
    token?: string;
}

const usuarioValido: UsuarioAPI = {
    id: 1,
    username: 'jesus',
    email: 'jesus@gmail.com',
    rol: 'alumno',
    token: '12345'
};

const usuarioInvalido: UsuarioAPI = {
    id: 2,
    username: 'pedro',
    email: 'pedro@gmail.com',
    rol: 'invitado'
};
//RETO 1

//RETO 2
interface Tarea {
    id: number;
    titulo: string;
    completada: boolean;
}

const misTareas: Tarea[] = [
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

function completarTarea(lista: Tarea[], idBuscar: number): Tarea[] {
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

    private iva: number = 0.21;

    constructor(
        public nombreProducto: string,
        private precioBase: number
    ) {}

    public obtenerPrecioFinal(): number {
        return this.precioBase * (1 + this.iva);
    }
}

const producto = new ProductComponent('Teclado', 100);

console.log(producto.nombreProducto);

console.log(producto.obtenerPrecioFinal());

producto.precioBase = 200;
//RETO 3

//RETO4
interface RespuestaServidor {
    status: 'success' | 'error';
    data?: string[];
    mensajeError?: string;
}

function procesarRespuesta(res: RespuestaServidor): void {

    if (res.status === 'success') {

        res.data?.forEach(elemento => {
            console.log(elemento);
        });

    } else {

        console.log(res.mensajeError);

    }
}

const respuestaCorrecta: RespuestaServidor = {
    status: 'success',
    data: ['Usuario registrado', 'Correo enviado', 'Proceso finalizado']
};

const respuestaError: RespuestaServidor = {
    status: 'error',
    mensajeError: 'No se ha podido conectar con el servidor'
};

procesarRespuesta(respuestaCorrecta);
procesarRespuesta(respuestaError);
//RETO4