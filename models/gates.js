const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gates', {
    dbID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    object: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    openposition: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    closeposition: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    movetime: {
      type: DataTypes.INTEGER,
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
    mode: {
      type: DataTypes.ENUM('key','group','code'),
      allowNull: false,
      defaultValue: "key"
    },
    groupID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'gates',
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
