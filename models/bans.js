const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bans', {
    dbID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    playerSerial: {
      type: DataTypes.STRING(512),
      allowNull: true,
      defaultValue: "0"
    },
    playerName: {
      type: DataTypes.STRING(48),
      allowNull: false,
      defaultValue: ""
    },
    playerAccountId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    banReason: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    adminName: {
      type: DataTypes.STRING(48),
      allowNull: false,
      defaultValue: ""
    },
    banTimestamp: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 0
    },
    expireTimestamp: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 0
    },
    isActive: {
      type: DataTypes.ENUM('Y','N'),
      allowNull: false,
      defaultValue: "Y"
    }
  }, {
    sequelize,
    tableName: 'bans',
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
