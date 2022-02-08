module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    firstName: {
      type: DataTypes.STRING,
    },
    middleName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    age: {
      type: DataTypes.INTEGER,
    },
  });

  User.associate = (models) => {
    User.hasMany(models.Post, {
      foreignKey: "creatorId",
    });
  };

  return User;
};
