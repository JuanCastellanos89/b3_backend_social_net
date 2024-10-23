import jwt from 'jwt-simple';
import moment from 'moment';
import dotenv from 'dotenv';

// Cargar las variables de entorno
dotenv.config();

// Clave secreta obtenida desde el archivo .env
const secret = process.env.JWT_SECRET;

// Método para generar tokens
const createToken = (user) => {
  const payload = {
    userId: user._id,
    role: user.role,
    iat: moment().unix(), // fecha de emisión
    exp: moment().add(7, 'days').unix() // fecha de expiración
  }

  // Devolver el jwt token codificado
  return jwt.encode(payload, secret);
};

export {
  secret,
  createToken
};