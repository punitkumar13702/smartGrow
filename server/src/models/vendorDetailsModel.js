const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Vendor = sequelize.define('vendorDetails', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  uuid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    unique: true
  },
  name: DataTypes.STRING,
  email: {
    type: DataTypes.STRING,
    unique: true
  },
  address: DataTypes.STRING,
  phone: DataTypes.STRING,
  country: DataTypes.STRING,
  password: DataTypes.STRING,
  roleId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
    validate: {
      isIn: [[1, 2, 3]]
    }
  },
  roleName: {
    type: DataTypes.VIRTUAL,
    get() {
      const roles = {
        1: "admin",
        2: "manager",
        3: "user"
      };
      return roles[this.getDataValue('roleId')] || "user";
    }
  },
  userCreateLimit: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 3
  },
  otpCode: {
    type: DataTypes.STRING,
    allowNull: true
  },
  otpExpiresAt: {
    type: DataTypes.DATE,
    allowNull: true
  },
}, {
  tableName: 'vendorDetails',
  freezeTableName: true
});

module.exports = Vendor;
