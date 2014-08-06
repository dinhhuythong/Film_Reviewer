-- phpMyAdmin SQL Dump
-- version 4.1.12
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Aug 05, 2014 at 11:49 AM
-- Server version: 5.6.16
-- PHP Version: 5.5.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `filmreviewer`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE IF NOT EXISTS `admin` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `passcode` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `film`
--

CREATE TABLE IF NOT EXISTS `film` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `director` varchar(150) COLLATE utf8_unicode_ci DEFAULT NULL,
  `cast` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `releaseDate` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `information` text COLLATE utf8_unicode_ci,
  `category` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `digital` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `trthai` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `images` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `rate` int(11) NOT NULL,
  `likes` int(11) NOT NULL,
  `comment` int(11) NOT NULL,
  `runningTime` varchar(150) COLLATE utf8_unicode_ci NOT NULL,
  `summary` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=3 ;

--
-- Dumping data for table `film`
--

INSERT INTO `film` (`id`, `name`, `director`, `cast`, `releaseDate`, `information`, `category`, `digital`, `trthai`, `images`, `rate`, `likes`, `comment`, `runningTime`, `summary`) VALUES
(1, 'ATMOS GUARDIANS OF THE GALAXY', 'James Gunn', 'Chris Pratt, Vin Diesel, Bradley Cooper, Zoe Saldana', 'CGV circuit: 01/08/2014', 'In the far reaches of space, an American pilot named Peter Quill finds himself the object of an unrelenting bounty hunt after stealing a mysterious orb coveted by Ronan, a powerful villain with ambitions that threaten the entire universe. To evade the ever-persistent Ronan, Quill is forced into an uneasy truce with a quartet of disparate misfits-Rocket, a gun-toting raccoon, Groot, a tree-like humanoid, the deadly and enigmatic Gamora and the revenge-driven Drax the Destroyer. But when Quill discovers the true power of the orb and the menace it poses to the cosmos, he must do his best to rally his ragtag rivals for a last, desperate stand-with the galaxy''s fate in the balance.', 'Action, Adventure, Science Fiction/Fantasy', '3D', '1', 'image/poster/vebinhdainganha.jpg', 0, 0, 0, '2 hours and 2 minutes', 'In the far reaches of space, an American pilot named Peter Quill finds himself...'),
(2, 'HERCULES', 'Brett Ratner', 'Dwayne Johnson, John Hurt, Ian McShane', 'CGV circuit: 25/07/2014', 'Having endured his legendary twelve labors, Hercules, the Greek demigod, has his life as a sword-for-hire tested when the King of Thrace and his daughter seek his aid in defeating a tyrannical warlord.', 'Action, Adventure', '4DX', '1', 'image/poster/sukhoidaucuahanhtinhkhi.jpg', 0, 0, 0, '1 hour and 38 minutes', 'Having endured his legendary twelve labors, Hercules, the Greek demigod, has his life as a sword-for-hire...');

-- --------------------------------------------------------

--
-- Table structure for table `image`
--

CREATE TABLE IF NOT EXISTS `image` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `url` varchar(150) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `url` (`url`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=4 ;

--
-- Dumping data for table `image`
--

INSERT INTO `image` (`id`, `url`) VALUES
(1, 'image/template/comment.png'),
(2, 'image/template/like.png'),
(3, 'image/template/rate.png');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;