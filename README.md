# 🛒 E-Commerce Platform - Auth System (React + Express + Prisma + MySQL)

En este es un proyecto Full-Stack que implementa un sistema de autenticación modular e interactivo (Login y Registro) con una estética oscura premium inspirada en plataformas de streaming. El proyecto está estructurado como un **Monorrepisitorio**, dividiendo de forma clara la lógica de la interfaz (Frontend) y los servicios del servidor (Backend).

---

## Estructura del Proyecto

```text
mi-proyecto-ecommerce/
│
├── backend/               # Servidor API REST (Node.js + Express)
│   ├── prisma/            # ORM - Esquema y migraciones de MySQL
│   │   └── schema.prisma  # Modelos de base de datos (User, Product, Carrito...)
│   ├── src/               # Código fuente del servidor
│   ├── .env               # Variables de entorno 
│   └── package.json
│
└── frontend/              # Interfaz de Usuario (React.js + Vite)
    ├── src/
    │   ├── components/    # Componentes modulares y reutilizables (Button, InputField)
    │   ├── routes/        # Configuración nativa de rutas (React Router DOM)
    │   ├── views/         # Páginas / Vistas independientes (Login, Register)
    │   │   ├── Login/
    │   │   └── Register/
    │   ├── App.jsx        # Proveedor de rutas principal
    │   └── main.jsx
    └── package.json
```

---

## Tecnologías Utilizadas

### Frontend
* **React.js (Vite)**: Entorno ágil de desarrollo y renderizado por componentes.
* **React Router DOM (v6+)**: Gestión nativa de navegación mediante URLs (`/login`, `/register`).
* **CSS3**: Diseño *Glassmorphism* oscuro con degradados dinámicos y animaciones cinemáticas.

### Backend & Base de Datos
* **Node.js & Express**: Servidor HTTP y manejo de endpoints API REST.
* **Prisma ORM**: Modelado y mapeo de datos tipado para consultas eficientes.
* **MySQL**: Base de datos relacional para el almacenamiento persistente de usuarios

---

## Flujo de Autenticación (¿Qué pasa al presionar los botones?)

### 1. Registro de Usuario (`/register`)
1. El usuario completa sus datos en el formulario.
2. Al enviar, la función `handleSubmit` ejecuta un `fetch` hacia el backend (`POST /api/users/register`).
3. El servidor Express recibe la petición y, mediante **Prisma ORM**, impacta un registro `INSERT` en la tabla `User` de MySQL.
4. Tras confirmarse la creación, React Router redirige de manera automática al usuario hacia el `/login`.

### 2. Inicio de Sesión (`/login`)
1. El usuario introduce sus credenciales (`email` y `password`).
2. React envía los datos mediante una petición segura `POST /api/users/login`.
3. El backend busca el registro con `prisma.user.findUnique()` y valida los datos.
4. Tras verificar la identidad, el servidor autoriza el acceso a la plataforma.

---

##  Instalación y Configuración Local

Sigue estos pasos para poner a correr el entorno de desarrollo en tu máquina local:

### Requisitos Previos
* Tener instalado [Node.js](https://nodejs.org)
* Tener un servidor local de [MySQL](https://mysql.com) activo (ej: XAMPP, Laragon o MySQL Workbench).

---

### Paso 1: Configurar el Backend

1. Entra a la carpeta del servidor e instala las dependencias:
   ```bash
   cd backend
   npm install
   ```

2. Configura tu archivo `.env` en la raíz de la carpeta `backend` con tus credenciales de MySQL:
   ```env
   DATABASE_URL="mysql://TU_USUARIO:TU_CONTRASEÑA@localhost:3306/nombre_tu_base_de_datos"
   ```

3. Sincroniza tus modelos de Prisma con la base de datos de MySQL:
   ```bash
   npx prisma db push
   ```

4. Genera el cliente de Prisma para habilitar las consultas en código:
   ```bash
   npx prisma generate
   ```

5. Inicia el servidor de Express:
   ```bash
   npm start
   ```
   *(El backend quedará escuchando habitualmente en el puerto `http://localhost:3000`)*

---

### Paso 2: Configurar el Frontend

1. En una nueva terminal, navega hacia la carpeta del cliente:
   ```bash
   cd frontend
   ```

2. Instala todas las dependencias requeridas (incluyendo `react-router-dom`):
   ```bash
   npm install
   ```

3. Enciende el servidor de desarrollo de Vite:
   ```bash
   npm run dev
   ```

4. Abre tu navegador en la dirección indicada por la consola (por defecto `http://localhost:5173/`) para visualizar la plataforma.

---

## 🔒 Próximas Mejoras y Escalabilidad
* 🔑 **Encriptación de Contraseñas**: Implementación de `bcrypt` en Express para almacenar contraseñas mediante hashing seguro en MySQL.
* 🎫 **Tokens JWT**: Generación de *JSON Web Tokens* al loguearse para proteger rutas del frontend (Dashboard/Home) y mantener sesiones activas.
* 🛒 **Manejo del Carrito**: Desarrollo de las funciones CRUD para que los usuarios logueados agreguen artículos al esquema de `CarritoItem`.
