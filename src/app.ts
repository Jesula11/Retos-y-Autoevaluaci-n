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