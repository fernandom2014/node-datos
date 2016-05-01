"use strict";

module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
            userid: {
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER
            },
            username: DataTypes.TEXT,
            password: DataTypes.TEXT,
            token: DataTypes.TEXT
        }, {
            schema: "public",
            tableName: "tblusers"
        });

    return User;
};