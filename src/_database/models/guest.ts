import { Model, DataTypes } from 'sequelize';
import sequelize from '../db';

export class Guest extends Model {
  public id!: number;
  public firstName!: string;
  public lastName!: string;
  public email!: string;
  public arriveDate!: Date;
  public departDate!: Date;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Guest.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    arriveDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    departDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Guest',
    tableName: 'Guests',
    timestamps: true,
  }
);

export default Guest;
