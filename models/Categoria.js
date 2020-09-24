import mongoose, {Schema} from 'mongoose';

// Creacion de Schema para estructura guardar datos
const CategoriaSchema = new Schema({
    nombre: {type: String, unique: true, required: true},
    descripcion: {type: String, maxlength: 255},
    estado: {type: Number, default: 1},
    createAt: {type: Date, default: Date.now}
})

const Categoria = mongoose.model('categoria', CategoriaSchema)

export default Categoria;