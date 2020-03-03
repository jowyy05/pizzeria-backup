const User = require('../domain/user')
const UserRepository = require('../infraestructure/userrepository')
class UserService {
   async register(dto) {
        var user = User.create(dto);
        //grabar en redis
        var userRepository = new UserRepository();
        await userRepository.add(user);
        return {
            name:user.name,
            email:user.email
        }
    }
}
 
module.exports =UserService