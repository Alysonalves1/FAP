module.exports = (sequelize, Datatypes) => {
    const Produto = sequelize.define('Produto', {
        nome: {
            type: Datatypes.STRING,
            allowNull: false
        },
        preco: {
            type: Datatypes.DECIMAL(10,2),
            allowNull: false
        },
        descricao: {
            type: Datatypes.TEXT,
            allowNull: true

        }
    });
    return Produto;
};