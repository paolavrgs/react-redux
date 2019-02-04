import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 682fdf00d2866c94bb93c32fd201c6ac3598cfca565b15ac6ec5c2cad0d429e5'
  }
})