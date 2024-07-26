const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('groupmembers', {
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
    characterID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    rank: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    isLeader: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    dutySkin: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'groupmembers',
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
