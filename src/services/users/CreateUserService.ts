import prismaClient from "../../prisma";
import {hash} from 'bcryptjs'

interface UserRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  async execute({ name, email, password }: UserRequest) {
    //Verificando se envio um email
    if (!email) {
      throw new Error("Email não informado");
    }

    // Verificando se ja existe um email cadastrado
    const userExists = await prismaClient.user.findFirst({
      where: {
        email: email,
      },
    });
    if (userExists) {
      throw new Error("Email já cadastrado");
    }

    //criptografando a senha
    const passwordHash = await hash(password, 8)

    const user = await prismaClient.user.create({
        data: {
          name: name,
          email: email,
          password: passwordHash,
        },
        select:{
            id:true,
            email:true,
            name: true
        }
      });
    

    return user;
  }
}

export { CreateUserService };
