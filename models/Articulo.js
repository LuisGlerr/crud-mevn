import mongoose, {Schema} from 'mongoose';

const articuloSchema = new Schema({
    categoria: {type: Schema.ObjectId, ref: 'categoria'},
    codigo: {type: String},
    nombre: {type: String, required: true},
    descripcion: {type: String},
    precio_venta: {type: Number, required: true},
    stock: {type: Number, required: true},
    estado: {type: Number, default: 1},
    createAt: {type: Date, default: Date.now}
})

const Articulo = mongoose.model('articulo', articuloSchema);

export default Articulo;