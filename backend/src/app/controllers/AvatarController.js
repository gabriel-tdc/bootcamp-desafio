import Avatar from '../models/Avatar';
// import Deliveryman from '../models/Deliveryman';

class AvatarController {
  async store(req, res) {
    const { originalname: name, filename: path } = req.file;

    const avatar = await Avatar.create({
      name,
      path,
    });

    // Não está atualizando na tabela do usuario
    console.log('atualizar');

    // const { id: id_avatar } = avatar;

    // const deliveryman = await Deliveryman.findByPk(req.body.id);
    // const teste = await deliveryman.update({ id_avatar: 3 });

    return res.json(avatar);
  }
}

export default new AvatarController();
