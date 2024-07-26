const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('adminjails', {
    dbID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    accountID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    jailTimestamp: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    reason: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    adminName: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'adminjails',
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
