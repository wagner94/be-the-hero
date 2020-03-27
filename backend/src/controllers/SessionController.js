const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const { key } = request.body;

        const ong = await connection('ongs')
            .select('name')
            .first();
        
        if (!ong) {
            return response.status(400).json({
                error: 'No ONG found with this KEY.'
            });
        }

        return response.json(ong);
    },
}