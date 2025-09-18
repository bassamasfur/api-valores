const axios = require('axios');

exports.obtenerIndicadores = async (req, res) => {
  try {
    const response = await axios.get('https://mindicador.cl/api');
    const { uf, utm } = response.data;

    res.status(200).json({
      fecha: uf.fecha,
      uf: uf.valor,
      utm: utm.valor
    });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener indicadores económicos' });
  }
};
