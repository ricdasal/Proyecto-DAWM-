CREATE DATABASE IF NOT EXISTS db_Lubricantes_Saldur;
USE db_Lubricantes_Saldur;

-- DROP DATABASE db_Lubricantes_Saldur;
-- -----------------------------------------------------
-- Table Usuario
-- -----------------------------------------------------
-- DROP TABLE IF EXISTS Usuario;

CREATE TABLE IF NOT EXISTS Usuario(
  idUsuario INT(5) UNSIGNED NOT NULL AUTO_INCREMENT,
  Nombres VARCHAR(100) NOT NULL,
  Apellidos VARCHAR(100) NOT NULL,
  Email VARCHAR(100) NOT NULL UNIQUE,
  sexo VARCHAR(50),
  Ciudad VARCHAR(10) NOT NULL,
  Telefono int(10),
  PRIMARY KEY (idUsuario)
);

-- -----------------------------------------------------
-- Table Perfil Vendedor
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Vendedor (
  idVendedor INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  idUsuario INT(5) UNSIGNED NOT NULL,
  Rol VARCHAR(50) NOT NULL,
  salario FLOAT(11) NOT NULL,
  PRIMARY KEY (idVendedor),
  FOREIGN KEY(idUsuario) REFERENCES Usuario(idUsuario)
);

-- -----------------------------------------------------
-- Table Perfil Cliente
-- -----------------------------------------------------
-- DROP TABLE IF EXISTS Cliente;
CREATE TABLE IF NOT EXISTS Cliente (
  idCliente INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  idUsuario INT(5) UNSIGNED NOT NULL,
  FechaNacimiento datetime NOT NULL,
  Provincia varchar(50) NOT NULL,
  Ciudad varchar(50) NOT NULL,
  Promociones boolean NOT NULL,
  PRIMARY KEY (idCliente),
  FOREIGN KEY(idUsuario) REFERENCES Usuario(idUsuario)
);

-- -----------------------------------------------------
-- Table Perfil Comentario
-- -----------------------------------------------------
-- DROP TABLE IF EXISTS Comentario;
CREATE TABLE IF NOT EXISTS Comentario (
  idCliente INT(10) UNSIGNED,
  idComentario INT(5) UNSIGNED NOT NULL AUTO_INCREMENT,
  Descripcion Varchar(500) NOT NULL,
  PRIMARY KEY (idComentario),
  FOREIGN KEY(idCliente) REFERENCES Cliente(idCliente)
);

-- -----------------------------------------------------
-- Table Perfil Administrador
-- -----------------------------------------------------
-- DROP TABLE IF EXISTS Administrador;
CREATE TABLE IF NOT EXISTS Administrador (
  idAdministrador INT(5) UNSIGNED NOT NULL AUTO_INCREMENT,
  idUsuario INT(5) UNSIGNED NOT NULL,
  Rol VARCHAR(50) NOT NULL,
  acceso BOOLEAN NOT NULL,
  PRIMARY KEY (idAdministrador),
  FOREIGN KEY(idUsuario) REFERENCES Usuario(idUsuario)
);

-- -----------------------------------------------------
-- Table Perfil Producto
-- -----------------------------------------------------
-- DROP TABLE IF EXISTS Producto;
CREATE TABLE IF NOT EXISTS Producto (
  idProducto INT(5) UNSIGNED NOT NULL AUTO_INCREMENT,
  Nombre VARCHAR(100) NOT NULL,
  Stock int(15) Not Null,
  FechaVencimiento datetime NOT NULL,
  FechaIngreso datetime NOT NULL,
  idAdministrador INT(5) UNSIGNED NOT NULL,
  PRIMARY KEY (idProducto),
  FOREIGN KEY(idAdministrador) REFERENCES Administrador(idAdministrador)
);

Insert into Usuario (Nombres, Apellidos, Email, sexo, Ciudad, Telefono)
values("Katiuska", "Marín", "kmarin@espol.edu.ec", "femenino", "Guayaquil", 0960919260);

Insert into Administrador (idAdministrador, idUsuario, Rol, acceso)
values( 1, 1, "master", true);

Insert into Producto (idProducto, Nombre, Stock, FechaVencimiento, FechaIngreso, idAdministrador)
values ( 1, "Aceite de Carro", 55,  "2022-08-12",  "2020-07-02", 1),
( 2, "Equipo de engrase", 21, "2021-01-12", "2019-12-12", 1),
( 3, "Bomba Manual Aceitadora", 30, "2025-05-01", "2019-02-02", 1),
( 4, "Tanque de aceite", 20, "2022-06-01", "2019-06-02", 1),
( 5, "Bomba Manual Aceitadora", 30, "2025-05-01", "2019-02-02", 1),
( 6, "Aceit Semi-sintetico", 100, "2023-03-01", "2020-03-02", 1);


