import User from '../models/User';

class UserController {
    async store(req, res) {
        const userExists = await User.findOne({
            where: { email: req.body.email },
        });
        if (!userExists) {
            const {id, name, email, provider} = await User.create(req.body);
            return res.json({id, name, email, provider});
        }
        return res.status(400).json({ error: 'Email aready used' });
    }

    async index(req, res) {
        const users = await User.findAll({});
        return res.json({users});
    }

    async update(req, res) {
        return res.json({msg: 'ok'});
    }
}

export default new UserController();
