const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "users_email_unique"
    },
    email_verified_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    two_factor_secret: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    two_factor_recovery_codes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    two_factor_confirmed_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    remember_token: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    current_team_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true
    },
    profile_photo_path: {
      type: DataTypes.STRING(2048),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'users',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "users_email_unique",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "email" },
        ]
      },
    ]
  });
};
