-- MySQL Script generated by MySQL Workbench (and intensively modified because of syntax)
-- ven. 02 oct. 2020 16:02:19 CEST
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mondor
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mondor
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mondor` ;
USE `mondor` ;

-- -----------------------------------------------------
-- Table `mondor`.`roles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mondor`.`roles` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `type` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

INSERT INTO `mondor`.`roles` (`type`) VALUES ('admin');
INSERT INTO `mondor`.`roles` (`type`) VALUES ('subs');


-- -----------------------------------------------------
-- Table `mondor`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mondor`.`users` (
  `id` INT NOT NULL  AUTO_INCREMENT,
  `mail` VARCHAR(45) NOT NULL,
  `password` INT NOT NULL,
  `role` INT NOT NULL,
  `pseudo` VARCHAR(45) NOT NULL,
  `photo` BLOB NULL,
  `isBanned` TINYINT(1) NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`role`)
  REFERENCES `mondor`.`roles` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

INSERT INTO `mondor`.`users` (`mail`,`password`,`role`,`pseudo`,`photo`) VALUES ('a@gmail.com',1234,1,'capichef','image1');
INSERT INTO `mondor`.`users` (`mail`,`password`,`role`,`pseudo`,`photo`) VALUES ('b@gmail.com',4321,2,'donpanini','image2');


-- -----------------------------------------------------
-- Table `mondor`.`favorites`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mondor`.`favorites` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`user_id`)
  REFERENCES `mondor`.`users` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mondor`.`categories_recipes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mondor`.`categories_recipes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

INSERT INTO `mondor`.`categories_recipes` (`name`) VALUES ('entree'),('plat'),('dessert'),('boisson');

-- -----------------------------------------------------
-- Table `mondor`.`recipes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mondor`.`recipes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `description` MEDIUMTEXT NOT NULL,
  `photo` BLOB NULL,
  `prep_time` INT NOT NULL,
  `cook_time` INT NOT NULL,
  `number_persons` INT NOT NULL,
  `title` VARCHAR(45) NOT NULL,
  `user_id` INT NOT NULL,
  `creation_date` DATE NOT NULL,
  `modification_date` DATE NULL,
  `messages` VARCHAR(45) NULL,
  `id_category` INT NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`user_id`)
  REFERENCES `mondor`.`users` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
  FOREIGN KEY (`id_category`)
  REFERENCES `mondor`.`categories_recipes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mondor`.`favorite_recipes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mondor`.`favorite_recipes` (
  `id_favori` INT NOT NULL,
  `id_recipes` INT NOT NULL,
  PRIMARY KEY (`id_favori`, `id_recipes`),
  FOREIGN KEY (`id_favori`)
  REFERENCES `mondor`.`favorites` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
  FOREIGN KEY (`id_recipes`)
  REFERENCES `mondor`.`recipes` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mondor`.`ingredients`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mondor`.`ingredients` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mondor`.`ingredient_recipes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mondor`.`ingredient_recipes` (
  `id_recipes` INT NOT NULL,
  `id_ingredients` INT NOT NULL,
  `quantities` INT NOT NULL,
   FOREIGN KEY (`id_recipes`)
   REFERENCES `mondor`.`recipes` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
   FOREIGN KEY (`id_ingredients`)
   REFERENCES `mondor`.`ingredients` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mondor`.`rating_recipes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mondor`.`rating_recipes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `id_recipes` INT NOT NULL,
  `id_user` INT NOT NULL,
  `rating` INT NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`id_user`)
  REFERENCES `mondor`.`users` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
  FOREIGN KEY (`id_recipes`)
  REFERENCES `mondor`.`recipes` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mondor`.`categories_article`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mondor`.`categories_article` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mondor`.`articles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mondor`.`articles` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `description` MEDIUMTEXT NOT NULL,
  `photo` BLOB NULL,
  `title` VARCHAR(45) NOT NULL,
  `creation_date` DATE NOT NULL,
  `modification_date` DATE NULL,
  `user_id` INT NOT NULL,
  `category_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`user_id`)
  REFERENCES `mondor`.`users` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
  FOREIGN KEY (`category_id`)
  REFERENCES `mondor`.`categories_article` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mondor`.`reviews_recipe`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mondor`.`reviews_recipe` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `creation_date` DATE NOT NULL,
  `modification_date` DATE NULL,
  `recipe_id` INT NOT NULL,
  `message` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`user_id`)
  REFERENCES `mondor`.`users` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
  FOREIGN KEY (`recipe_id`)
  REFERENCES `mondor`.`recipes` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mondor`.`reviews_article`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mondor`.`reviews_article` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `creation_date` DATE NOT NULL,
  `modification_date` DATE NULL,
  `article_id` INT NOT NULL,
  `message` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`article_id`)
  REFERENCES `mondor`.`articles` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
  FOREIGN KEY (`user_id`)
  REFERENCES `mondor`.`users` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mondor`.`bookmark`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mondor`.`bookmark` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`user_id`)
  REFERENCES `mondor`.`users` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mondor`.`bookmark_recipes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mondor`.`bookmark_recipes` (
  `id_bookmark` INT NOT NULL,
  `id_articles` INT NOT NULL,
  PRIMARY KEY (`id_bookmark`, `id_articles`),
  FOREIGN KEY (`id_articles`)
  REFERENCES `mondor`.`articles` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
  FOREIGN KEY (`id_bookmark`)
  REFERENCES `mondor`.`bookmark` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

