const pool = require('../queries')

const getTicker = async (req, res) => {
  try {
    console.log('----inside get ticker--------');
    const response = await pool.query('SELECT * FROM ticker_names ORDER BY id ASC')
    res.json({ message: response });
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getTicker,
}