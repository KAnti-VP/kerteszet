import Sequelize from "sequelize";

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./data/database.sqlite",
  define: {
    timestamps: false,
  },
  logging: false,
});

export default sequelize;
