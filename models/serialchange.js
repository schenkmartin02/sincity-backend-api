const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('serialchange', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    accountID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    oldSerial: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    newSerial: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    reason: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    adminReason: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    adminDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'serialchange',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
