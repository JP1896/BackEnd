# Backend

* [Canciones](#Canciones)
    * [Agregar](#Agregar-Canciones)
    * [Obtener](#Obtener-Canciones)
    * [Actualizar](#Actualizar-Canciones)
    * [Borrar](#Borrar-Canciones)
* [Libros](#Libros)
    * [Agregar](#Agregar-Libros)
    * [Obtener](#Obtener-Libros)
    * [Actualizar](#Actualizar-Libros)
    * [Borrar](#Borrar-Libros)


## Canciones

### Agregar Canciones

Este servicio se utiliza para agregar canciones a nuestra base de datos.

* endpoint: `/canciones/agregarCancion`
* método: `POST`
* body: 
```json
{
    "nombre": "Bad",
    "autor": ["Don Diablo","Zak Abel"],
    "album": "FOREVER"
}
```

* validaciones:

| Campo     | Validación                                    |
| --------- | ---------------------------------------       |
| Nombre    | Tiene que ser un string                       |
| Autor(es) | Tiene que ser un string o arreglo de strings  |
| Album     | Tiene que ser un string                       |

* errores:

| Codigo                | Mensaje                                       | HTTP  |
| --------------------- | ---------------------------------------       | ----- |
| BadRequest            | No se escribieron todos los campos requeridos | 400   |
| InvalidBodyException  | El campo debe ser un string                   | 422   |

* respuesta: HTTP 201 
```json
{
    "nombre": "Nombre de la canción",
    "autor": ["Autor1","Autor2","Autor3","etc"],
    "album": "Nombre del album",
    "Operación": "Canción agregada correctamente"
}
```

* respuesta con error:  HTTP 422
```json
{
    "Operación": "Error al agregar canción"
}
```

### Obtener Canciones

Este servicio se utiliza para obtener las canciones de nuestra base de datos.

* endpoint: `/canciones/obtenerCancion`
* método: `GET`
* respuesta: HTTP 200
```json
{   
    "Operación": "Canciones encontradas",
    "Canciones": [
        {
            "nombre": "Nombre de la canción 1",
            "autor": ["Autor1","Autor2","Autor3","etc"],
            "album": "Nombre del album 1"
        },
        {
            "nombre": "Nombre de la canción 2",
            "autor": ["Autor1","Autor2","Autor3","etc"],
            "album": "Nombre del album 2"
        }
    ]
    
}
```

### Actualizar Canciones

Este servicio se utiliza para actualizar canciones de nuestra base de datos al ingresar el nombre de la canción y los parámetros a actualizar.

* endpoint: `/canciones/actualizarCancion`
* método: `POST`
* body: 
```json
{
    "nombre": "My Life",
    "cambio": {
        "autor": "ZHU",
        "album": "RINGOS DESERT"
    }
}
```

* validaciones:

| Campo     | Validación                                    |
| --------- | ---------------------------------------       |
| Nombre    | Tiene que ser un string                       |
| Autor(es) | Tiene que ser un string o arreglo de strings  |
| Album     | Tiene que ser un string                       |

* errores:

| Codigo                | Mensaje                                       | HTTP  |
| --------------------- | ---------------------------------------       | ----- |
| BadRequest            | No se escribieron todos los campos requeridos | 400   |
| InvalidBodyException  | El campo debe ser un string                   | 422   |
| SongNotFoundException | No existe la canción                          | 500   |

* respuesta: HTTP 201 
```json
{
    "nombre": "Nombre de la canción actualizada",
    "autor": ["Autor1 actualizado","Autor2 actualizado","etc"],
    "album": "Nombre del album actualizado",
    "Operación": "Canción actualizada correctamente"
}
```

* respuesta con error:  HTTP 422
```json
{
    "Operación": "Error al actualizar la canción"
}
```


### Borrar Canciones

Este servicio se utiliza para borrar canciones en nuestra base de datos.

* endpoint: `/canciones/borrarCancion`
* método: `POST`
* body: 
```json
{
    "nombre": "All On Me"
}
```

* validaciones:

| Campo     | Validación               |
| --------- | ------------------------ |
| Nombre    | Tiene que ser un string  |

* errores:

| Codigo                | Mensaje                                       | HTTP  |
| --------------------- | ---------------------------------------       | ----- |
| Bad Request           | No se escribieron todos los campos requeridos | 400   |
| InvalidBodyException  | El campo debe ser un string                   | 422   |
| SongNotFoundException | No existe la canción                          | 500   |

* respuesta: HTTP 201 
```json
{
    "nombre": "Nombre de la canción borrada",
    "autor": ["Autor1 borrado","Autor2 borrado","etc"],
    "album": "Nombre del album borrada",
    "Operación": "Canción borrada correctamente"
}
```

* respuesta con error:  HTTP 422
```json
{
    "Operación": "Error al borrar canción"
}
```

## Libros

### Agregar Libros

Este servicio se utiliza para agregar libros a nuestra base de datos.

* endpoint: `/libros/agregarLibro`
* método: `POST`
* body: 
```json
{
    "nombre": "El hobbit",
    "autor": "J.R.R. Tolkien",
    "paginas": 310
}
```

* validaciones:

| Campo     | Validación                      |
| --------- | ------------------------        |
| Nombre    | Tiene que ser un string         |
| Autor     | Tiene que ser un string         |
| Páginas   | Tiene que ser un número entero  |

* errores:

| Codigo                | Mensaje                                       | HTTP  |
| --------------------- | ---------------------------------------       | ----- |
| BadRequest            | No se escribieron todos los campos requeridos | 400   |
| InvalidBodyException  | El campo debe ser un string                   | 422   |
| InvalidBodyException  | El campo debe ser un número entero            | 422   |

* respuesta: HTTP 201 
```json
{
    "nombre": "Nombre del libro",
    "autor": "Nombre del Autor",
    "paginas": "Numero de páginas",
    "Operación": "Libro agregado correctamente"
}
```

* respuesta con error:  HTTP 422
```json
{
    "Operación": "Error al agregar libro"
}
```

### Obtener Libros

Este servicio se utiliza para obtener los libros de nuestra base de datos.

* endpoint: `/libros/obtenerLibro`
* método: `GET`
* respuesta: HTTP 200
```json
{   
    "Operación": "Libros encontrados",
    "Canciones": [
        {
            "nombre": "Nombre de libro 1",
            "autor": "Autor",
            "paginas": "Numero de páginas"
        },
        {
            "nombre": "Nombre de libro 2",
            "autor": "Autor",
            "paginas": "Numero de páginas"
        }
    ]
    
}
```

### Actualizar Libros

Este servicio se utiliza para actualizar libros de nuestra base de datos al ingresar el nombre del libro y los parámetros a actualizar.

* endpoint: `/libros/actualizarLibro`
* método: `POST`
* body: 
```json
{
    "nombre": "1984",
    "cambio": {
        "autor": "George Orwell",
        "paginas": 326
    }
}
```

* validaciones:

| Campo     | Validación                      |
| --------- | ------------------------        |
| Nombre    | Tiene que ser un string         |
| Autor     | Tiene que ser un string         |
| Páginas   | Tiene que ser un número entero  |

* errores:

| Codigo                | Mensaje                                       | HTTP  |
| --------------------- | ---------------------------------------       | ----- |
| BadRequest            | No se escribieron todos los campos requeridos | 400   |
| InvalidBodyException  | El campo debe ser un string                   | 422   |
| InvalidBodyException  | El campo debe ser un número entero            | 422   |
| SongNotFoundException | No existe el libro                            | 500   |

* respuesta: HTTP 201 
```json
{
    "nombre": "Nombre del libro actualizado",
    "autor": "Nombre del Autor actualizado",
    "paginas": "Número de páginas actualizadas",
    "Operación": "Libro actualizado correctamente"
}
```

* respuesta con error:  HTTP 422
```json
{
    "Operación": "Error al actualizar libro"
}
```


### Borrar Canciones

Este servicio se utiliza para borrar libros en nuestra base de datos.

* endpoint: `/libros/borrarLibro`
* método: `POST`
* body: 
```json
{
    "nombre": "Drácula"
}
```

* validaciones:

| Campo     | Validación               |
| --------- | ------------------------ |
| Nombre    | Tiene que ser un string  |

* errores:

| Codigo                | Mensaje                                       | HTTP  |
| --------------------- | ---------------------------------------       | ----- |
| Bad Request           | No se escribieron todos los campos requeridos | 400   |
| InvalidBodyException  | El campo debe ser un string                   | 422   |
| SongNotFoundException | No existe el libro                            | 500   |

* respuesta: HTTP 201 
```json
{
    "nombre": "Nombre del libro borrado",
    "autor": "Nombre del autor borrado",
    "paginas": "Número de páginas borradas",
    "Operación": "Libro borrado correctamente"
}
```

* respuesta con error:  HTTP 422
```json
{
    "Operación": "Error al borrar libro"
}
```


