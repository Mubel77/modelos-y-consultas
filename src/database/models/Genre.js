
module.exports = (sequelize,DataTypes) => {
    const alias = 'Genre';
    const cols = {
        id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true,
            unsigned:true
        },
       name:{
            type:DataTypes.STRING(100),
            allowNull:false,
        },
       ranking:{
            type:DataTypes.INTEGER,
            allowNull:false,
            unsigned:true,
        },
        active:{
           type:DataTypes.TINYINT(1),
           allowNull:false,
        }
       
    };
    const config = {
        tableName: 'genres',
        timestamps: false,
    };
    const genres = sequelize.define(alias,cols,config)
    return genres
}