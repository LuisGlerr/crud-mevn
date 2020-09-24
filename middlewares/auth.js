import tokenService from '../services/token';

export default {

    verifyUsuario: async (req, res, next) =>{
        if(!req.headers.token) {
            return res.status(404).send({
                message: 'No hay token'
            });
        }
        const usuario = await tokenService.decode(req.headers.token);
        if(usuario.rol == 'Administrador' || usuario.rol == 'Almacenero' || usuario.rol == 'Vendedor'){
            next();
        
        } else {
            return res.status(403).send({
                message: 'Usuario sin rol, no autorizado'
            });
        } 
    },

    verifyAdministrador: async (req, res, next) =>{
        if(!req.headers.token) {
            return res.status(404).send({
                message: 'No hay token'
            });
        }
        const usuario = await tokenService.decode(req.headers.token);
        if(usuario.rol == 'Administrador'){
            next();
        
        } else {
            return res.status(403).send({
                message: 'Usuario sin rol, no autorizado'
            });
        } 
    },

    verifyAlmacenero: async (req, res, next) =>{
        if(!req.headers.token) {
            return res.status(404).send({
                message: 'No hay token'
            });
        }
        const usuario = await tokenService.decode(req.headers.token);
        if(usuario.rol == 'Administrador' || usuario.rol == 'Almacenero'){
            next();
        
        } else {
            return res.status(403).send({
                message: 'Usuario sin rol, no autorizado'
            });
        } 
    },

    verifyVendedor: async (req, res, next) =>{
        if(!req.headers.token) {
            return res.status(404).send({
                message: 'No hay token'
            });
        }
        const usuario = await tokenService.decode(req.headers.token);
        if(usuario.rol == 'Administrador' || usuario.rol == 'Vendedor'){
            next();
        
        } else {
            return res.status(403).send({
                message: 'Usuario sin rol, no autorizado'
            });
        } 
    }

}