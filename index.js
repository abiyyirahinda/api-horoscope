const express = require('express');
const moment = require('moment');
const app = express();
const port = 9000;

app.use(express.json());
app.get('/', (req, res) => {
    res.send('Selamat datang di API Zodiak!');
  });

// Endpoint untuk mendapatkan zodiak berdasarkan tanggal lahir
app.post('/api/zodiac', (req, res) => {
  const { birthdate } = req.body;

  if (!birthdate) {
    return res.status(400).json({ error: 'Tanggal lahir diperlukan.' });
  }

  const birthMoment = moment(birthdate, 'DDMMYYYY', true);

  if (!birthMoment.isValid()) {
    return res.status(400).json({ error: 'Format tanggal lahir tidak valid. Gunakan format DDMMYYYY.' });
  }

//   const formattedBirthdate = birthMoment.format('DDMMYYYY');

  const zodiac = getZodiacSign(birthMoment);

  res.json({  zodiac });
});

// Fungsi untuk mendapatkan zodiak berdasarkan tanggal lahir
function getZodiacSign(birthMoment) {
  const month = birthMoment.month() + 1; // Bulan dimulai dari 0

  if ((month === 3 && birthMoment.date() >= 21) || (month === 4 && birthMoment.date() <= 19)) {
    return 'Aries';
  } else if ((month === 4 && birthMoment.date() >= 20) || (month === 5 && birthMoment.date() <= 20)) {
    return 'Taurus';
  } else if ((month === 5 && birthMoment.date() >= 21) || (month === 6 && birthMoment.date() <= 20)) {
    return 'Gemini';
  } else if ((month === 6 && birthMoment.date() >= 21) || (month === 7 && birthMoment.date() <= 22)) {
    return 'Cancer';
  } else if ((month === 7 && birthMoment.date() >= 23) || (month === 8 && birthMoment.date() <= 22)) {
    return 'Leo';
  } else if ((month === 8 && birthMoment.date() >= 23) || (month === 9 && birthMoment.date() <= 22)) {
    return 'Virgo';
  } else if ((month === 9 && birthMoment.date() >= 23) || (month === 10 && birthMoment.date() <= 22)) {
    return 'Libra';
  } else if ((month === 10 && birthMoment.date() >= 23) || (month === 11 && birthMoment.date() <= 21)) {
    return 'Scorpio';
  } else if ((month === 11 && birthMoment.date() >= 22) || (month === 12 && birthMoment.date() <= 21)) {
    return 'Sagittarius';
  } else if ((month === 12 && birthMoment.date() >= 22) || (month === 1 && birthMoment.date() <= 19)) {
    return 'Capricorn';
  } else if ((month === 1 && birthMoment.date() >= 20) || (month === 2 && birthMoment.date() <= 18)) {
    return 'Aquarius';
  } else {
    return 'Pisces';
  }
}

// Jalankan server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
