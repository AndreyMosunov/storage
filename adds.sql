-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: localhost:3306
-- Время создания: Янв 07 2023 г., 22:34
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
-- Структура таблицы `adds`
--

CREATE TABLE `adds` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `title` varchar(64) NOT NULL,
  `description` varchar(200) NOT NULL,
  `price` varchar(32) NOT NULL,
  `created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `adds`
--

INSERT INTO `adds` (`id`, `user_id`, `title`, `description`, `price`, `created`) VALUES
(1, 7, 'Живая карточная игра \"Властелин колец\"', 'Последняя надежда лежит на горстке избранных судьбой Героев, которым понадобится помощь друг друга, чтобы остановить силы зла...Б/у настольная игра в отличном состоянии!!!', '4000 рублей', '2023-01-06 21:01:49'),
(2, 8, 'Настольная игра \"Игра престолов\"', 'Используя стратегическое планирование, мастерскую дипломатию и умелое распоряжение доступных карт, распространите своё влияние на весь Вестерос! Б/у, в хорошем состоянии, коробка слегка потерта.', '3500 рублей', '2023-01-06 21:13:50'),
(3, 9, 'Настольная игра \"Повелитель Токио\"', 'Спасайся кто может! В Токио бесчинствуют монстры! Давненько Страна восходящего солнца не сталкивалась с таким нападением. Б/у, в отличном состоянии, отсутствует несколько жетонов.', '2500 рублей', '2023-01-06 21:18:04'),
(4, 11, 'Настольная игра \"Помидорный Джо\"', 'Вам предстоит заняться выращиванием помидоров, отбиваясь от вредителей и коварных конкурентов. Помидорная битва начинается! В отличном состоянии!', '2000 рублей', '2023-01-06 21:25:16');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `adds`
--
ALTER TABLE `adds`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `adds`
--
ALTER TABLE `adds`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
