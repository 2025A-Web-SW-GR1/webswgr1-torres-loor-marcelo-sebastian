import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    ejemplo(id: string, hola: string, xCuela: string, monto: number): string;
}
