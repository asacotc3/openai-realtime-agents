# Usa una imagen base oficial de Node.js
FROM node:18-alpine

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia el archivo package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias de la aplicación
RUN npm install

# Copia el resto de la aplicación
COPY . .

# Construye la aplicación
RUN npm run build --max-warnings=0

# Expone el puerto en el que la aplicación se ejecutará
EXPOSE 3000

# Define el comando para ejecutar la aplicación
CMD ["npm", "start"]