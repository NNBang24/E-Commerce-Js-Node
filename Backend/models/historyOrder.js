'use strict' ;
const { Model, DataTypes } = require('sequelize') ;

module.exports = (sequelize , DataTypes) => {
    class HistoryOrder extends Model {
        static associate(models) {
            HistoryOrder.belongsTo(models.User ,{
                foreignKey : 'userId' ,
                as : 'user'
            }) ;
            HistoryOrder.hasMany(models.OrderItem, {
                foreignKey: 'orderId',
                as: 'orderItems'
            });
        }
    }
    HistoryOrder.init ( 
        {
            userId : {
                type: DataTypes.INTEGER,
            },
            totalPrice : {
                type: DataTypes.DECIMAL(10, 2),
                defaultValue: 0,
            } ,
            orderStatus : {
                type: DataTypes.ENUM("Đang chờ xử lý", "Đã giao hàng", "Hoàn thành"),
                allowNull: false,
                defaultValue: "Đang chờ xử lý"
            },
            shippingAddress : {
                type: DataTypes.TEXT,
            },

        },
        {
            sequelize , 
            modelName: "HistoryOrder" ,
            tableName: 'historyOrders' ,
            timestamps : true
        }
    )
    return HistoryOrder;
}