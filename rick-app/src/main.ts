// src/app/app.config.ts

import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router'; // Se suas rotas estiverem aqui
import { provideHttpClient } from '@angular/common/http'; // <-- Importe este!

import { routes } from './app/app.routes'; // Supondo que suas rotas estão definidas aqui

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), // Geralmente já vem com a configuração de rotas
    provideHttpClient() // <-- ADICIONE ESTA LINHA AQUI!
    // Outros provedores de serviços globais (ex: provideStore para NgRx, etc.)
  ]
};
