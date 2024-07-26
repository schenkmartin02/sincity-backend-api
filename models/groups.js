const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('groups', {
    groupID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    prefix: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    type: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    balance: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    permissions: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    duty_skins: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    duty_positions: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    duty_armor: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    duty_items: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    mainLeader: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    tuneRadio: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'groups',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "groupID" },
        ]
      },
    ]
  });
};
