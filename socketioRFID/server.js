const express = require('express');
const mysql = require('mysql');
const SerialPort = require('serialport');
const socketIO = require('socket.io');

const app = express();
const port = 3000;

// Conexión a la base de datos MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'yourusername',
  password: 'yourpassword',
  database: 'yourdatabase'
});

// Configuración del puerto serie
const serialPort = new SerialPort('COM3', {
  baudRate: 9600
});

// Iniciar el servidor web
const server = app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

// Configuración de Socket.io
const io = socketIO(server);

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static('public'));

io.on('connection', (socket) => {
  console.log('New client connected');

  // Escuchar el evento 'unlock' para desbloquear la cerradura
  socket.on('unlock', () => {
    // Aquí iría el código para desbloquear la cerradura, posiblemente enviando un comando al Arduino
  });
});

// Escuchar datos del puerto serie
serialPort.on('data', (data) => {
  const rfid = data.toString('utf8').trim();
  console.log(`RFID read: ${rfid}`);

  // Aquí podrías buscar más detalles del usuario en la base de datos antes de emitir el evento
  const userDetails = {
    username: 'John Doe',  // Esto sería una búsqueda en la base de datos normalmente
    isOutsideOfNormalHours: false  // Esto también
  };

  // Actualizar la base de datos
  updateDatabase(rfid);

  // Emitir el evento 'newRFID' a todos los clientes conectados
  io.emit('newRFID', { rfid, userDetails });
});

// Función para actualizar la base de datos
function updateDatabase(rfid) {
  const query = 'INSERT INTO access_log (rfid, timestamp) VALUES (?, NOW())';
  db.query(query, [rfid], (err, results) => {
    if (err) throw err;
    console.log('Data inserted:', results);
  });
}
