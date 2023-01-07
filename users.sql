-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: localhost:3306
-- Время создания: Янв 07 2023 г., 22:35
-- Версия сервера: 5.7.24
-- Версия PHP: 7.4.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `database`
--

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(32) NOT NULL,
  `email` varchar(256) NOT NULL,
  `teleph_num` bigint(100) NOT NULL,
  `password` varchar(64) NOT NULL,
  `created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `teleph_num`, `password`, `created`) VALUES
(7, 'Иванов Иван Иванович', 'ivanov.1978@inbox.ru', 89270076231, 'qtwrqtrwjss', '2023-01-02 19:45:34'),
(8, 'Федоров Игорь Петрович', 'fedorIP@mail.com', 89173452453, 'shjdhshdh', '2023-01-03 00:17:08'),
(9, 'Сайпулов Тимур Рашидович', 'saipul82@yandex.ru', 89875298342, 'weuqiueiwuq', '2023-01-04 21:45:55'),
(11, 'Григорьев Василий Алибабаевич', 'grigvas90@mail.ru', 78282882666, 'weushdjs', '2023-01-04 21:46:31');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNQ_PASSWORD` (`email`),
  ADD KEY `IDX_NAME` (`name`),
  ADD KEY `IDX_TEL` (`teleph_num`),
  ADD KEY `IDX_PASS` (`password`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
