import { Request, Response} from 'express'
import items from '../mongodb/items'
 
class productsControllers {

  public index(req: Request, res: Response) {
    items.find().then(response => {
      return res.status(200).json(response)
    })
    .catch(err => {
      return res.status(500).json(err)
    })
  }

  public delete(req: Request, res: Response) {
    items.findByIdAndDelete(req.params.id).then(result => {
      if(result == null){
        return res.status(417).json({
          message: "Produto não Encontrado!",
        })
      }
      return res.status(200).json({
        message: "Produto Deletado!",
        id: result.id
      })
    })
    .catch(err => {
      return res.status(500).json(err)
    })
  }

  public create(req: Request, res: Response) {
    items.create(req.body).then(response => {
      return res.status(201).json({
        message: "Produto criado!",
        id: response.id
      })
    })
    .catch(err => {
      return res.status(500).json(err)
    })
  }

}

export default new productsControllers()