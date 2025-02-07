const ApiError = require("../helpers/ApiError");

class CrudOps {
    constructor(model) {
        this.model = model;
    }

    async Create(data) {
        return this.model.create(data);
    }

    async Get(id = null) {
        if (id) {
            return this.model.findByPk(id);
        }
        return this.model.findAll();
    }

    async Update(id, data) {
        if (!id || !data) {
            {
                throw new ApiError('Please provide an id and data to update');
            }
        }
        return this.model.update(data, {
            where: {
                id
            }
        });
    }

    async delete(id) {
        if (!id) {
            throw new ApiError('Please provide an id to delete');
        }
        return this.model.destroy({
            where: {
                id
            }
        })
    }

}


module.exports = CrudOps;