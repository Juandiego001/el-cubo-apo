-- EN CASO DE NO EXISTIR LA BASE DE DATOS.
CREATE DATABASE app_db

-- Se utiliza la db creada.
use app_db;

-- Tabla de Usuario
CREATE TABLE USUARIO(
    correo VARCHAR(100) NOT NULL PRIMARY KEY,
    contrasena VARCHAR(100) NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    instrucciones INTEGER NOT NULL DEFAULT 1,
    volumen_musica INTEGER NOT NULL DEFAULT 100 CHECK (volumen_musica BETWEEN 0 and 100),
    dificultad INTEGER NOT NULL DEFAULT 1 CHECK (dificultad BETWEEN 1 and 3),
    voz_jugador INTEGER NOT NULL DEFAULT 1 
);

-- Tabla de Nivel
CREATE TABLE NIVEL(
    id INTEGER NOT NULL PRIMARY KEY,
    correo_usuario VARCHAR(100) NOT NULL,
    estrellas INTEGER NOT NULL DEFAULT 0 CHECK (estrellas BETWEEN 0 and 3)
    -- Nota.
    -- Para la nube, no se pueden manejar llaves foráneas.
    -- Pero en local, sí se podrían hacer las pruebas. Por lo tanto para local decidir cual de las
    -- siguientes dos líneas descomentar (sugiero hacerlo igual a la nube con KEY).
    -- ,CONSTRAINT fk_correo_usuario FOREIGN KEY (correo_usuario) REFERENCES USUARIO(correo)
    ,KEY fk_correo_usuario (correo_usuario)
);

-- Inserción de usuario de prueba
INSERT INTO USUARIO(correo, contrasena, nombre) VALUES("juandiego14012003@gmail.com", "1234", "Juan Diego");

-- Intento de actualización de volumen (para verificar las restricciones).
-- En teoría no debería permitir que el volumen suba por encima de 100.
UPDATE USUARIO SET volumen_musica = 110 WHERE correo = "juandiego14012003@gmail.com";
-- Funcionó la prueba.

