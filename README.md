# EFI React - Frontend

Este proyecto es la interfaz de usuario de **EFI Sportia**, una tienda en línea que permite navegar por un catálogo de productos, gestionar un carrito de compras, y realizar procesos de compra. Además, incluye un sistema de autenticación para usuarios y administradores. Con una cuenta de administrador, es posible gestionar productos y usuarios, incluyendo la creación, edición y eliminación de registros. El frontend fue desarrollado con **React**, **NextUI**, **Tailwind CSS**, **PrimeReact**, y **Feather Icons**.

> **Nota**: Este repositorio contiene solo el frontend del proyecto. Para un funcionamiento completo, es necesario configurar también el backend, disponible en el repositorio de backend: [EFI Backend](https://github.com/tom1mvp/EFI_Backend.git)

## Tabla de Contenidos
1. [Instalación](#instalación)
2. [Configuración de la Base de Datos](#configuración-de-la-base-de-datos)
3. [Guía de Uso](#guía-de-uso)
4. [Funciones Principales](#funciones-principales)

---

## Instalación

Sigue los siguientes pasos para clonar y ejecutar el proyecto en tu entorno local:

### Paso 1: Clonar el Repositorio

1. Abre una terminal y crea un nuevo directorio: 
    ```bash
    mkdir <nombre_del_directorio>
    ```
2. Accede al directorio recién creado:
    ```bash
    cd <nombre_del_directorio>
    ```
3. Clona el repositorio del frontend:
    ```bash
    git clone git@github.com:MarcosAyrton/EFI-Front.git
    ```

### Paso 2: Instalar Dependencias

1. Asegúrate de tener **Node.js** y **npm** instalados en tu sistema.
2. Instala las dependencias del proyecto ejecutando:
    ```bash
    npm install
    ```

> Este paso descargará e instalará todos los paquetes necesarios para ejecutar el proyecto, incluyendo NextUI, Tailwind CSS y PrimeReact.

## Configuración de la Base de Datos

Para la base de datos, sigue estos pasos:

1. Inicia los servicios de **XAMPP** (Apache y MySQL).
2. Abre [http://localhost](http://localhost) en tu navegador.
3. En **phpMyAdmin**, crea una base de datos llamada `db_sportia`.

> Asegúrate de tener el backend configurado y en funcionamiento para que el frontend pueda comunicarse con la base de datos.

---

## Guía de Uso

Una vez que hayas instalado las dependencias y configurado la base de datos, sigue estos pasos para iniciar la aplicación:

1. En la terminal, ejecuta:
    ```bash
    npm run dev
    ```
   Este comando iniciará el servidor de desarrollo y podrás acceder a la aplicación en [http://localhost:3000](http://localhost:3000).

2. Accede a la aplicación en tu navegador e inicia sesión o crea una cuenta. Si utilizas una cuenta con permisos de administrador, tendrás acceso a funciones adicionales para gestionar usuarios y productos.

---

## Funciones Principales

A continuación, se describen las funcionalidades principales de la aplicación:

### 1. Catálogo de Productos

- **Descripción**: Permite a los usuarios ver todos los productos disponibles, con detalles como el nombre, la descripción, el precio y la imagen.
- **Uso**: Desde la página principal, los usuarios pueden navegar por el catálogo y filtrar productos por categoría o búsqueda.

### 2. Carrito de Compras

- **Descripción**: Los usuarios pueden agregar productos a su carrito y ver los productos seleccionados antes de proceder al pago.
- **Uso**: Cada producto tiene un botón de "Agregar al carrito". Al hacer clic, el producto se añade al carrito, que es accesible desde el ícono de carrito en la esquina superior de la pantalla.

### 3. Proceso de Compra

- **Descripción**: Permite a los usuarios revisar los productos en su carrito, ajustar cantidades, y realizar el pago.
- **Uso**: En el carrito, los usuarios pueden ver todos los artículos agregados, modificar las cantidades o eliminar productos. Luego, al hacer clic en "Comprar", el sistema los guía a través de los pasos de pago.

### 4. Inicio de Sesión y Registro

- **Descripción**: Los usuarios pueden registrarse e iniciar sesión para acceder a funciones personalizadas, como el carrito y el historial de compras.
- **Uso**: Los formularios de inicio de sesión y registro se encuentran en la sección de usuario. El registro requiere datos como el nombre de usuario y la contraseña.

### 5. Funcionalidades de Administrador

Al iniciar sesión con una cuenta de administrador, se activan las siguientes funcionalidades adicionales:

- **Gestión de Usuarios**: Crear, editar y eliminar usuarios. Los administradores pueden ver una lista completa de usuarios registrados y realizar ajustes en sus cuentas.
- **Gestión de Productos**: Crear, editar y eliminar productos del catálogo. Los administradores pueden acceder a una vista de administración donde pueden añadir nuevos productos o modificar los existentes, y también eliminarlos según sea necesario.

---

Este README proporciona los pasos necesarios para poner en funcionamiento el frontend de EFI Sportia. Asegúrate de que el backend también esté configurado correctamente para una experiencia completa.
