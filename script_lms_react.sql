-- MySQL Script generated by MySQL Workbench
-- Mon Apr 14 18:01:06 2025
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `mydb` ;

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
SHOW WARNINGS;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `categories`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `categories` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `categories` (
  `id` INT NOT NULL,
  `nom` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `contenu`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `contenu` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `contenu` (
  `id` INT NOT NULL,
  `titre` MEDIUMTEXT NULL,
  `description` LONGTEXT NULL,
  `objectifs_id` INT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `corrections`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `corrections` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `corrections` (
  `id` INT NOT NULL,
  `description` LONGTEXT NULL,
  `consigne` MEDIUMTEXT NULL,
  `exercices_id` INT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `cours`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `cours` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `cours` (
  `id` INT NOT NULL,
  `titre` VARCHAR(45) NULL,
  `description` LONGTEXT NULL,
  `categories_id` INT NOT NULL,
  PRIMARY KEY (`id`, `categories_id`))
ENGINE = InnoDB;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `exemples`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `exemples` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `exemples` (
  `id` INT NOT NULL,
  `description` LONGTEXT NULL,
  `contenu_id` INT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `exercices`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `exercices` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `exercices` (
  `id` INT NOT NULL,
  `description` LONGTEXT NULL,
  `consignes` MEDIUMTEXT NULL,
  `contenu_id` INT NOT NULL,
  `roles_id` INT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `modules`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `modules` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `modules` (
  `id` INT NOT NULL,
  `titre` VARCHAR(45) NULL,
  `cours_id` INT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `objectifs`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `objectifs` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `objectifs` (
  `id` INT NOT NULL,
  `titre` MEDIUMTEXT NULL,
  `modules_id` INT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `ressources`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `ressources` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `ressources` (
  `id` INT NOT NULL,
  `nom_fichier` VARCHAR(45) NULL,
  `type` VARCHAR(45) NULL,
  `contenu_id` INT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `roles`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `roles` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `roles` (
  `cours_id` INT NULL,
  `utilisateurs_id` INT NULL,
  `id` INT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `utilisateurs`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `utilisateurs` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `utilisateurs` (
  `id` INT NOT NULL,
  `Nom` VARCHAR(45) NULL,
  `prenom` VARCHAR(45) NULL,
  `tel` VARCHAR(45) NULL,
  `mail` VARCHAR(45) NULL,
  `mdp` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SHOW WARNINGS;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
