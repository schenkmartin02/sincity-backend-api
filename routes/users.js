const express = require('express');
const { accounts, characters, bans, kicks, adminjails, characternamechanges, serialchange } = require('../models');
const authenticateToken = require('../middleware/auth');

const router = express.Router();

// Védett route a felhasználók lekérdezéséhez
router.get('/me/account', authenticateToken, async (req, res) => {
    try {
        const user = await accounts.findOne({ where: { accountID: req.user.id } });
        if (!user) {
            return res.status(404).json({ message: 'Felhasználó nem található' });
        }

        res.json(user);
    } catch (err) {
        console.error('Hiba a felhasználó lekérdezésekor:', err);
        res.status(500).send('Adatbázis hiba');
    }
});

router.get('/me/all', authenticateToken, async (req, res) => {
    try {
        const user = await accounts.findOne({ where: { accountID: req.user.id } });
        if (!user) {
            return res.status(404).json({ message: 'Felhasználó nem található' });
        }

        const character = await characters.findOne({ where: { accID: user.accountID}})

        if (!character) {
            return res.status(404).json({ message: 'Karakter nem található'});
        }

        const ban = await bans.findAll({ where: { playerAccountId: user.accountID } })

        const kick = await kicks.findAll({ where: { playerAccountId: user.accountID } })

        const jail = await adminjails.findAll({ where: { accountID: user.accountID } })

        const namechange = await characternamechanges.findAll({ where: { accountID: user.accountID } })

        const serialchanges = await serialchange.findAll({ where: { accountID: user.accountID } })

        const data = {user, character, ban, kick, jail, namechange, serialchanges}
        res.json(data);
    } catch (err) {
        console.error('Hiba a felhasználó lekérdezésekor:', err);
        res.status(500).send('Adatbázis hiba');
    }
});

module.exports = router;