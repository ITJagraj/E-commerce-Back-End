const { Model, INTEGER, DECIMAL, STRING} = require('sequelize');

//import our database connection from config.js
const sequelize = require('../config/connection.js');

class Product extends Model {}

//setup fields and rules for Product model

Product.init(
    {
        id: {
            type: INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
          },
          product_name: {
            type: STRING,
            allowNull: false
          },
          price: {
            type: DECIMAL,
            allowNull: false,
            validate: {
              isDecimal: true
            }
          },
          stock: {
            type: INTEGER,
            allowNull: false,
            defaultValue: 10,
            validate: {
              isNumeric:true
            }
          },
          category_id: {
            type: INTEGER,
            references: {
              model: 'category',
              key: 'id'
            }
          }
        },
        {
          sequelize,
          timestamps: false,
          freezeTableName: true,
          underscored: true,
          modelName: 'product',
        }
      );   

      module.exports = Product;