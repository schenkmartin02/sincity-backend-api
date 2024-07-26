const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('billiard', {
    tableId: {
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
    }
  }, {
    sequelize,
    tableName: 'billiard',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "tableId" },
        ]
      },
    ]
  });
};
