const user = require("../model/user")

class ServiceUser {
    async FindAll() {
        return user.model.findAll()
    }

    async FindById(id){
        return user.model.findByPk(id) // Pk é primmary Key, que é onde tá o id.
    }

    async Create(name, email, password) {
        if(!name){
            throw new Error ("Please inform the name")
        } else if(!email){
            throw new Error ("Please inform the email")
        } else if(!password){
            throw new Error ("Please inform the password")
        }

        await user.model.create({
            name, email, password
        })
    }

    async Update(id, name, email, password) {
        // Preciso pegar o usuário anterior para fazer o update
        const oldUser = await this.FindById(id)

        // Pegando os valores antigos do usuário e colocando os novos do parametro.
        // Coloca um novo nome/email/password ou mantém o anterior (oldUser) com ||
        oldUser.name = name || oldUser.name
        oldUser.email = email || oldUser.email
        oldUser.password = password || oldUser.password

        // Depois salva os novos valores
        oldUser.save()

        // E retorna o usuário completo
        return oldUser
    }

    async Delete(id) {
        const oldUser = await this.FindById(id)

        // Destuir usuário do banco
        oldUser.destroy()
    }
}

module.exports = new ServiceUser()