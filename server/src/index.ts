import app from "./app"; // Importa la aplicación Express
import * as http from "http"; // Importa el módulo http para crear el servidor

const port = process.env.PORT || 4000; // Puedes usar una variable de entorno o un puerto por defecto

// Crea un servidor HTTP usando la aplicación Express
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
  console.log("Press Ctrl+C to quit");
});
