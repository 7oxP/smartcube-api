A. Prerequiesites
versi node 16.20.1
versi typescript 5.2.2
versi npm 8.19.4

B. Setup Your Service In GCP
1. create google storage bucket
2. create firebase cloud messaging
3. create smtp email
4. create mqtt broker / or using public mqtt broker (in this project we used our own mqtt broker and using ssl connection.
5. generate one service account for all the services above

B. Run Project

1. npm install

2. copy db.config.example.json to db.config.json in folder src/database

3. in "development" config object set your username, password, database, host, port and dialect

4. run npx sequelize-cli db:migrate

5. create .env file and fill out the env:

APP_ENV=local
APP_PORT=
DB_HOST=
DB_PORT=
DB_USER=
DB_PASSWORD=
DB_NAME=
DB_DIALECT=mysql

JWT_SECRET_KEY=
VERIFICATION_SECRET_KEY=
RESET_TOKEN_SECRET_KEY=
GOOGLE_APPLICATION_CREDENTIALS="/home/ucup/Projects/bangkit academy/smartcube-api/service_accounts/google_all_service.json"
BUCKET_NAME=""

SMTP_HOST=sandbox.smtp.mailtrap.io
SMTP_PORT=465
SMTP_USER=
SMTP_PASS=

MQTT_PROTOCOL=mqtts
MQTT_HOST=
MQTT_PORT="8883"
MQTT_CA_CERT="./mqtt-ssl.crt"
MQTT_USERNAME=
MQTT_PASSWORD=

npm run dev (for development)

npm run build (for production_
