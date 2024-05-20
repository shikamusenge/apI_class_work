-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 20, 2024 at 12:52 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `todo`
--

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `customer_id` int(11) NOT NULL,
  `names` varchar(50) NOT NULL,
  `email` varchar(30) NOT NULL,
  `phone` varchar(14) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`customer_id`, `names`, `email`, `phone`) VALUES
(1, 'John Doe', 'john@test.com', '0783636363'),
(4, 'Mucyo Patrick', 'mucyo@test.com', '0784589448'),
(5, 'Mucyo Patrick', 'mucyo@test.com', '0784589448'),
(6, 'Mucyo Patrick', 'mucyo@test.com', '0784589448'),
(7, 'Mucyo Patrick', 'mucyo@test.com', '0784589448'),
(8, 'Mucyo Patrick', 'mucyo@test.com', '0784589448'),
(9, 'Mucyo Patrick', 'mucyo@test.com', '0784589448'),
(10, 'Mucyo Patrick', 'mucyo@test.com', '0784589448'),
(11, 'Mucyo Patrick', 'mucyo@test.com', '0784589448'),
(14, 'shikamusenge', '720@gmail.com', '0784589448'),
(15, 'shikamusenge', '720@gmail.com', '0784589448'),
(16, 'Ruganzu shikamusenge', '720@gmail.com', '0784589448'),
(17, 'Ruganzu shikamusenge', '720@gmail.com', '0784589448');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`customer_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `customer_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
