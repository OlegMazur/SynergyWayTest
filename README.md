
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

