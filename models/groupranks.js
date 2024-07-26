const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('groupranks', {
    index: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    groupID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    rankID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    rankName: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    rankPayment: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'groupranks',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "index" },
        ]
      },
    ]
  });
};
