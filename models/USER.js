module.exports = (sequelize, DataTypes)=>{
    const user = sequelize.define("USER",{
        id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },name: {
            type:DataTypes.STRING,
            allowNull:false,
        },email:{
            type:DataTypes.STRING,
            allowNull:false,
        },password:{
            type:DataTypes.STRING,
            allowNull:false,
        },balance:{
            type:DataTypes.INTEGER,
            default:1000
        },amit:{
            type:DataTypes.STRING
        } 
    })
    return user;
}