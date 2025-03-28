import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  standalone: true,
  template: `
    <!-- Contenedor principal del formulario de login -->
    <div class="login-container">
      <!-- Encabezado con título y subtítulo -->
      <h1 class="login-title">Empresa</h1>
      <p class="login-subtitle">©2025 Empresa. | <a href="https://empresa.com/privacy" class="privacy-link">Políticas de privacidad</a></p>
      <!-- Formulario de login con manejo de evento submit -->
      <form (ngSubmit)="onSubmit()">
        <!-- Campo de email -->
        <div class="form-group">
          <label class="form-label">Nombre de usuario</label>
          <input 
            type="email" 
            class="form-input" 
            placeholder="Escribir email aquí"
            [(ngModel)]="email"
            name="email"
          >
        </div>
        <!-- Campo de contraseña -->
        <div class="form-group">
          <label class="form-label">Contraseña</label>
          <input 
            type="password" 
            class="form-input" 
            placeholder="Mínimo 8 dígitos entre letras, números y símbolos."
            [(ngModel)]="password"
            name="password"
          >
        </div>   
        <!-- Opción de recordar sesión -->
        <div class="remember-me">
          <input 
            type="checkbox" 
            id="remember" 
            [(ngModel)]="rememberMe"
            name="remember"
          >
          <label for="remember">Recordar sesión aquí</label>
        </div>
        <!-- Enlace para recuperar contraseña -->
        <a href="#" class="forgot-password">¿Has olvidado tú contraseña?</a>
        <!-- Botón principal de login -->
        <button type="submit" class="login-button">
          Login
        </button>
        <!-- Botón de acceso con certificado digital -->
        <button type="button" class="digital-cert-button">
          Acceso con Certificado Digital
        </button>
        <!-- Separador con mensaje de bienvenida -->
        <div class="separator"><span>¿no es cliente?</span></div>
        <!-- Sección de prueba gratuita -->
        <p class="trial-text">Inicie su prueba gratuita hoy mismo.<br>Sin compromiso. Prueba 100% gratuita.</p>
        <!-- Botón de acceso a prueba gratuita -->
        <button type="button" class="digital-cert-button free-trial-button">
          Acceso Gratuito por 14 días
        </button>
      </form>
    </div>
  `
})
export class App {
  // Variables para almacenar los datos del formulario
  email: string = '';
  password: string = '';
  rememberMe: boolean = false;
  // Método que se ejecuta al enviar el formulario
  onSubmit() {
    console.log('Form submitted', {
      email: this.email,
      password: this.password,
      rememberMe: this.rememberMe
    });
  }
}
// Inicialización de la aplicación Angular
bootstrapApplication(App);
