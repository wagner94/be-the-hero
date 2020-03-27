const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const { page = 1 } = request.query;

        const ong_key = request.headers.authorization;
        
        const incidents = ong = await connection('incidents')
            .where('ong_id', ong_key)
            .select('*');
        
            return response.json(incidents);

    }
}