import { DataTypes } from "sequelize";
import sequelize from "../util/database.js";

const Plant = sequelize.define('plant',{
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    require: true,
  },
  perennial: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
    require: true,
  },
  price: {
    type: DataTypes.INTEGER,
  },
});

async function setupData() {
  try{
    await sequelize.sync({force: true})
    await Plant.bulkCreate([
      {name: 'Tulopán', perennial: true, category: 'virág', price: 4590 },
      {name: 'Pipacs', perennial: false, category: 'virág', price: 2590 },
      {name: 'Orgona', perennial: true, category: 'bokor', price: 8590 },
      {name: 'Mandula', perennial: true, category: 'fa', price: 12590 },
    ])
  } catch (err) {
    console.log(`ataBase error: ${err.message}`)
  }
}
 setupData();

export default Plant;
