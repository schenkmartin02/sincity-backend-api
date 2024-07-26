const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('accounts', {
    accountID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    serial: {
      type: DataTypes.STRING(512),
      allowNull: true,
      defaultValue: "0"
    },
    suspended: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    username: {
      type: DataTypes.STRING(48),
      allowNull: false,
      defaultValue: ""
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    adminLevel: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    adminNick: {
      type: DataTypes.STRING(48),
      allowNull: false,
      defaultValue: ""
    },
    adminDutyTime: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    registerTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    lastLoggedIn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    maxCharacter: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    adminJail: {
      type: DataTypes.STRING(512),
      allowNull: false,
      defaultValue: "N"
    },
    adminJailTime: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    premiumPoints: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    online: {
      type: DataTypes.ENUM('N','Y'),
      allowNull: false,
      defaultValue: "N"
    },
    helperLevel: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
    }
  }, {
    sequelize,
    tableName: 'accounts',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "accountID" },
        ]
      },
      {
        name: "suspended",
        using: "BTREE",
        fields: [
          { name: "suspended" },
        ]
      },
      {
        name: "email",
        type: "FULLTEXT",
        fields: [
          { name: "email" },
        ]
      },
    ]
  });
};
