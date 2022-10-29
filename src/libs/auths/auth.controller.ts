import { Body, Controller, Post } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { Account } from '../models';

@Controller()
export class AuthController {

    @Post()
    public login(@Body() request: Account): Observable<any> {
        return of(null);
    }
}
