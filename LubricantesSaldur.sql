CREATE DATABASE IF NOT EXISTS db_Lubricantes_Saldur;
USE db_Lubricantes_Saldur;

-- USE mvc_db;

-- DROP DATABASE db_Lubricantes_Saldur;

CREATE TABLE IF NOT EXISTS Roles (
  RolId INT(5) UNSIGNED NOT NULL AUTO_INCREMENT,
  Nombre VARCHAR(100) NOT NULL,
  PRIMARY KEY (RolId)
);
-- -----------------------------------------------------
-- Table Usuario
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Usuario(
  id INT(5) UNSIGNED NOT NULL AUTO_INCREMENT,
  Nombres VARCHAR(100) NOT NULL,
  Apellidos VARCHAR(100) NOT NULL,
  Email VARCHAR(100) NOT NULL UNIQUE,
  sexo VARCHAR(50),
  Ciudad VARCHAR(10) NOT NULL,
  Telefono int(10),
  Passw VARCHAR(100) NOT NULL,
  Rol INT(5) UNSIGNED NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY(Rol) REFERENCES Roles(RolId)
);

-- -----------------------------------------------------
-- Table Perfil Vendedor
-- -----------------------------------------------------
-- DROP TABLE IF EXISTS Vendedor;
CREATE TABLE IF NOT EXISTS Vendedor (
  idVendedor INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  idUsuario INT(5) UNSIGNED NOT NULL,
  Rol VARCHAR(50) NOT NULL,
  salario FLOAT(11) NOT NULL,
  PRIMARY KEY (idVendedor),
  FOREIGN KEY(idUsuario) REFERENCES Usuario(id)
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
  FOREIGN KEY(idUsuario) REFERENCES Usuario(id)
);

-- -----------------------------------------------------
-- Table Perfil Comentario
-- -----------------------------------------------------
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
CREATE TABLE IF NOT EXISTS Administrador (
  idAdministrador INT(5) UNSIGNED NOT NULL AUTO_INCREMENT,
  idUsuario INT(5) UNSIGNED NOT NULL,
  acceso BOOLEAN NOT NULL,
  PRIMARY KEY (idAdministrador),
  FOREIGN KEY(idUsuario) REFERENCES Usuario(id)
);

-- -----------------------------------------------------
-- Table Perfil Producto
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Producto (
  id INT(5) UNSIGNED NOT NULL AUTO_INCREMENT,
  Nombre VARCHAR(100) NOT NULL,
  Stock int(15) NOT NULL,
  FechaVencimiento datetime NOT NULL,
  FechaIngreso datetime NOT NULL,
  idAdministrador INT(5) UNSIGNED NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY(idAdministrador) REFERENCES Administrador(idAdministrador)
);

Insert into Roles(Nombre) values("administrador"), ("cliente");

Insert into Usuario (Nombres, Apellidos, Email, sexo, Ciudad, Telefono, Passw, Rol)
values("Katiuska", "Marín", "kmarin@espol.edu.ec", "femenino", "Guayaquil", 0960919260, "administrador", 1),
("George", "Henriquez", "ghenriqu@espol.edu.ec", "Masculino", "Guayaquil", 0999999960, "administrador", 1),
("Usuario", "cliente", "cliente@usuario.com", "Masculino", "Guayaquil", 0999999999, "cliente", 2);

Insert into Administrador (idUsuario, acceso)
values( 1, true),
( 2, true);

Insert into Producto (id, Nombre, Stock, FechaVencimiento, FechaIngreso, idAdministrador)
values ( 1, "Aceite de Carro", 55,  "2022-08-12",  "2020-07-02", 1),
( 2, "Equipo de engrase", 21, "2021-01-12", "2019-12-12", 1),
( 3, "Bomba Manual Aceitadora", 30, "2025-05-01", "2019-02-02", 1),
( 4, "Tanque de aceite", 20, "2022-06-01", "2019-06-02", 1),
( 5, "Bomba Automatica Aceitadora", 30, "2025-05-01", "2019-02-02", 1),
( 6, "Aceite Semi-sintetico", 100, "2023-03-01", "2020-03-02", 1),
( 7, "Neumaticos", 500, "2022-03-01", "2020-03-02", 1),
( 8, "Neumaticos Bus", 300, "2025-03-01", "2021-01-02", 1),
( 9, "Parche sintetico", 432, "2024-05-01", "2020-12-02", 1);

Select*from Usuario;
Select*from Producto;

Select*from Administrador;
