const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('characters', {
    charID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    accID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    name: {
      type: DataTypes.STRING(40),
      allowNull: false,
      defaultValue: ""
    },
    skin: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 24
    },
    position: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    rotation: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    interior: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    dimension: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    health: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 100
    },
    armor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 100
    },
    hunger: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 100
    },
    thirst: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 100
    },
    money: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    bankMoney: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    job: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    injured: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    jailed: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    houseInterior: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    customInterior: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    actionbarItems: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    lastOnline: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    playedMinutes: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    playTimeForPayday: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    vehicleLimit: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 3
    },
    interiorLimit: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 5
    },
    bulletDamages: {
      type: DataTypes.STRING(512),
      allowNull: true
    },
    lastNameChange: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Colt45_skill: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    Silenced_skill: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    Deagle_skill: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    Shotgun_skill: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    Sawed_off_skill: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    Combat_Shotgun_skill: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    Uzi_skill: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    MP5_skill: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    Tec9_skill: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    AK47_skill: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    M4_skill: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    Rifle_skill: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    Sniper_skill: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'characters',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "charID" },
        ]
      },
    ]
  });
};
