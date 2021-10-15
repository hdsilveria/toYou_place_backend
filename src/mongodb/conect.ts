import mongoose from 'mongoose'

const mongoose_conect = mongoose.connect('mongodb://localhost/toyouplace', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() =>{
    console.log("Sucesso ao conectar no mongoDB;")
})
.catch(err  => {
    console.log(`Erro: ${err}`)
})

export default mongoose_conect