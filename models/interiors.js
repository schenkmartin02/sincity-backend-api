const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('interiors', {
    interiorId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    flag: {
      type: DataTypes.ENUM('static','dynamic'),
      allowNull: false,
      defaultValue: "dynamic"
    },
    ownerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    type: {
      type: DataTypes.ENUM('building','house','garage','rentable','door'),
      allowNull: false,
      defaultValue: "building"
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    gameInterior: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    entrance_position: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    entrance_rotation: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    entrance_interior: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    entrance_dimension: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    exit_position: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    exit_rotation: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    exit_interior: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    exit_dimension: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    locked: {
      type: DataTypes.ENUM('Y','N'),
      allowNull: false,
      defaultValue: "N"
    },
    dummy: {
      type: DataTypes.ENUM('Y','N'),
      allowNull: false,
      defaultValue: "N"
    },
    renewalTime: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'interiors',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "interiorId" },
        ]
      },
    ]
  });
};
