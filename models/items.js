const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('items', {
    dbID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    itemId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    slot: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    data1: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    data2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    data3: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ownerType: {
      type: DataTypes.STRING(8),
      allowNull: false
    },
    ownerId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'items',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "dbID" },
        ]
      },
    ]
  });
};
