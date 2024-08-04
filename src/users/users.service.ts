import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.model';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
// import { Role } from 'src/roles/roles.model';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

    // async createUser(userDto: CreateUserDto) {
    //     const found = await this.userRepo.findOneBy({email: userDto.email});
    //     if (found) {
    //         throw new HttpException('User already exists', HttpStatus.CONFLICT);
    //     }

    //     let roles: Role[] = [];
        
    //     for (const roleValue of dto.roles) {
    //         const role = await this.roleService.getRoleByValue(roleValue);
    //         if (role) {
    //             roles.push(role);
    //         }
    //     }

    //     if (roles.length === 0) {
    //         const defaultRole = await this.roleService.getRoleByValue('user');
    //         roles.push(defaultRole);
    //     }

    //     let passHash = await bcryptjs.hash(dto.password, 5);

    //     const user = this.userRepo.create({
    //         ...dto,
    //         roles: roles,
    //         password: passHash
    //     });

    //     await this.userRepo.save(user);

    //     delete user.password;

    //     return user;
    // }
}
