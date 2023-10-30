
# Levantar proyecto

## Backend
### - Clonar el proyecto

`git clone https://github.com/jbpita/CRUD-REACT-DOTNER.git`

### - Ingresar a la carpeta del backend
`cd prueba backend`

### - Cambiar la cadena de coneccion en el archivo appsetting.json de acuerdo al de su base de datos en local. ejemplo:`
`"DefaultConnection": "Data Source=DESKTOP-7EB34BF\\SQLEXPRESS;Database=prueba;Integrated Security=True;TrustServerCertificate=True;MultipleActiveResultSets=true"
  },`

##### cambiar el Source segun el usuario de su base de datos

### - Crear migracion
`dotnet ef --startup-project prueba-backend.csproj migrations add InitialMigration --project prueba-backend.csproj --context SqlServerContext --verbose`

### - Ejecutar migracion
`dotnet ef database update --startup-project prueba-backend.csproj --project prueba-backend.csproj --context SqlServerContext --verbose`

### - Ejecutar los seeders de Cargo y Departamento
##### descomentar la linea 
`//Seed(serviceScope.ServiceProvider.GetService<SqlServerContext>());`
##### del archivo /Data/SqlServerContextSeed.cs y correr el proyecto. Luego volver a comentarla

## Frontend

### - Ingresar a la carpeta del Frontend
`cd frontend`
### - Instalar dependencias
`npm install`
### - Correr el proyecto
`npm run dev`
