const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vehicles', {
    vehicleID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    model: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 400
    },
    owner: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    groupID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    health: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 1000
    },
    fuel: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 100
    },
    maxFuel: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 100
    },
    engine: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    light: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    handBrake: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    locked: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    position: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    parkedPosition: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    color: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    headLightColor: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    wheels: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    distance: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    panels: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    doors: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    tunings: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    lastOilChange: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    licensePlate: {
      type: DataTypes.STRING(8),
      allowNull: false,
      defaultValue: ""
    },
    unit: {
      type: DataTypes.STRING(120),
      allowNull: false
    },
    impound: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sirenPanel: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    canUseFuelStations: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "Y"
    },
    paintjobId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    theTicket: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    wheelClamp: {
      type: DataTypes.ENUM('N','Y'),
      allowNull: false,
      defaultValue: "N"
    }
  }, {
    sequelize,
    tableName: 'vehicles',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "vehicleID" },
        ]
      },
    ]
  });
};
