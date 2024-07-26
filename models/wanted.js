const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wanted', {
    dbID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    charID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    carPlate: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    carType: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    carColor: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    playerName: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'wanted',
    timestamps: true,
    paranoid: true,
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
