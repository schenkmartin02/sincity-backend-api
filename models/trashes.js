const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('trashes', {
    trashID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    x: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    y: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    z: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    rotation: {
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
    tableName: 'trashes',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "trashID" },
        ]
      },
    ]
  });
};
