
module.exports = (sequelize,DataTypes) => {
    const alias = 'Movie';
    const cols = {
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            allowNull: true,
            unsigned: true,
            autoIncrement: true,
        },
        title:{
            type:DataTypes.STRING(500),
            allowNull:false,
        },
        rating:{
            type:DataTypes.INTEGER,
            allowNull:false,
            unsigned:true,
        },
        awards:{
            type:DataTypes.INTEGER,
            allowNull:false,
            unsigned : true,
        },
        release_date:{
            type:DataTypes.DATE,
            allowNull:false,
        },
        length:{
            type:DataTypes.INTEGER,
            unsigned:true,
        },
        genre_id:{
            type:DataTypes.INTEGER,
            unsigned:false,
        },
    };
    const config = {
        tableName: 'movies',
        timestamps: false
    };
    const Movie = sequelize.define(alias,cols,config)
    return Movie
}