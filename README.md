# FACEIT PRO TRACKER

## Обзор проекта
**Single Page Application, разработанное на React + Typescript для отслеживания статистики и просмотра информации о матчах игроков платформы FACEIT.**

### Технологический стек
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)  ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)    ![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)  ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)  ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)  ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) ![Vitest](https://img.shields.io/badge/-Vitest-252529?style=for-the-badge&logo=vitest&logoColor=FCC72B)  ![Testing-Library](https://img.shields.io/badge/-TestingLibrary-%23E33332?style=for-the-badge&logo=testing-library&logoColor=white)

### 👉 [Ссылка](https://tsukkuku.github.io/faceit-pro-tracker/)

## Функционал

* 🔍 Поиск игроков по FACEIT никнейму
* 🏆 Топ 100 лучших игроков сезона
* 📊 Просмотр общей статистики игрока
  * 👤 Основная информация (матчи, последний результаты, K/D, ADR)
  * ⏳ ProgressBar, показывает сколько ELO нужно до следующего уровня
  * 📉 Таблица статистики игрока на всех картах из матчмейкинга
  * 🗺️ Место игрока в регионе и по стране
* 📈 Просмотр статистики игрока за последние 30 матчей
* 📋 Просмотр детальной статистики матча (игроки, карта, статистика игроков)
* 📜 История матчей с динамической подгрузкой (Flex & Grid варианты)
* 🔔 Возможность подписки на игроков
* 🌓 Смена темы (темная/светлая)
* 📱 Адаптивная верстка

## Скриншоты

<img width="1280" height="607" alt="image" src="https://github.com/user-attachments/assets/4c195bc5-97f5-4178-bafa-2340bf1c579e" />

***Главная страница***

<img width="1902" height="908" alt="image" src="https://github.com/user-attachments/assets/4363aee1-4ecd-4df0-89b4-ec7edd98954b" />

***Страница игрока 1***

<img width="1902" height="903" alt="image" src="https://github.com/user-attachments/assets/382297d5-c319-4a64-a373-335b5acb9707" />

***Страница игрока 2***

<img width="1512" height="844" alt="image" src="https://github.com/user-attachments/assets/b0c291d7-c35c-4c08-bf18-0df5f4b3651c" />

***История матчей Flex***

<img width="1464" height="714" alt="image" src="https://github.com/user-attachments/assets/e523a4bc-805a-4226-9588-cd37aead576d" />

***Комната матча***

<img width="1489" height="798" alt="image" src="https://github.com/user-attachments/assets/1c850eae-5ed6-4800-8348-05c543968ff4" />

***Статистика матча***


## Установка

1. Скачать исходный код
```bash
git clone https://github.com/tsukkuku/faceit-pro-tracker
cd faceit-pro-tracker
```

2. Установите зависимости
```bash
npm install
```

3. Создайте .env файл и вставьте туда свой API ключ FACEIT
```bash
VITE_API_KEY=API_KEY
```

## Запуск

1. Запуск на локальном сервере
```bash
npm run dev
```

2. Сборка
```bash
npm run build
```

**Собранные файлы будут в папке dist/**

3. Просмотр собранного проекта
```bash
npm run preview
```
