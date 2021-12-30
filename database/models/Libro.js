module.exports = (sequelize, DataTypes) => {
    let alias = "Libro";
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            notNull: true,
            autoIncrement: true
        },
        titulo: {
            type: DataTypes.STRING(100),
            notNull: true
        },
        autor: {
            type: DataTypes.STRING(100),
            notNull: true
        },
        precio: {
            type: DataTypes.INTEGER(250),
            notNull: true
        },
        fechaLanzamiento: {
            type: DataTypes.DATE,
            notNull: true
        }
    }

    let config = {
        tableName: "libros",
        timestamps: false
    }

    const Libro = sequelize.define(alias, cols, config);

    return Libro;
}