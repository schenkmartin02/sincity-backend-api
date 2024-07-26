const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('shop_peds', {
    pedId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    posX: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    posY: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    posZ: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    rotZ: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    interior: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    dimension: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    skinId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    balance: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    itemList: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'shop_peds',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "pedId" },
        ]
      },
    ]
  });
};
