const express = require('express');
const morgan = require('morgan');
const { sequelize } = require('./models');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(morgan('combined'));

// Adatbázis kapcsolat és modellek szinkronizálása
sequelize.authenticate()
    .then(() => {
        console.log('Adatbázis kapcsolat sikeres');
    })
    .then(() => {
        console.log('Adatbázis szinkronizálva');
    })
    .catch(err => {
        console.error('Adatbázis kapcsolat hiba:', err);
    });

// Route-ok beállítása
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const statRouter = require('./routes/statistic')

app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/stats', statRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});