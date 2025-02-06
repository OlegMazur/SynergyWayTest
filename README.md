# React + TypeScript + Tailwind + Docker

## Запуск у контейнері  

### 1. Клонування репозиторію  
```sh
git clone https://github.com/OlegMazur/SynergyWayTest.git
cd SynergyWayTest
🚀 React + Docker Application

📋 Вимоги

Перед запуском переконайтеся, що у вас встановлено:

Docker

Docker Compose

🔧 Як запустити проект

1️⃣ Клонувати репозиторій

git clone https://github.com/OlegMazur/SynergyWayTest.git
cd SynergyWayTest

2️⃣ Запустити Docker-контейнер

docker compose up --build

3️⃣ Відкрити застосунок у браузері

Застосунок запускається на порту 3000:

http://localhost:3000

🛠 Команди для управління контейнерами

📌 Зупинити контейнер:

docker compose down

📌 Перезапустити контейнер:

docker compose restart

📌 Переглянути логи контейнера:

docker logs -f your-container-name

📌 Перейти всередину контейнера:

docker exec -it your-container-name sh

🔄 Оновлення коду

Якщо ви змінили код і хочете його застосувати в контейнері:

Зупиніть контейнер:

docker compose down

Очистіть кеш:

docker system prune -f

Перезапустіть контейнер:

docker compose up --build

📄 Структура проекту

/project-root
│── docker-compose.yml  # Файл для запуску контейнерів
│── Dockerfile          # Інструкції для створення Docker-образу
│── src/               # Вихідний код React-застосунку
│── package.json       # Опис залежностей
│── README.md          # Цей файл 🙂

🔗 Корисні посилання

Документація Docker

Документація React