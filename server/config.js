// -----------------------------
// Puerto
//-------------------------------

process.env.PORT = process.env.PORT || 3000;

// -----------------------------
// Entorno
//-------------------------------

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// -----------------------------
// Base de datos
//-------------------------------

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/Cafe'
} else {
    urlDB = 'mongodb+srv://bree:jZPPpPi9QVE6sLAW@aravis.wbqas.mongodb.net/Cafe?retryWrites=true&w=majority'
}

process.env.URLDB = urlDB;