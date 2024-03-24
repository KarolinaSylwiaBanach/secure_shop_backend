import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    getUsers(): string {
        return 'Lista użytkowników z serwisu';
    }
}
