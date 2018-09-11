const data = (sequalize, DataTypes) => {
    const Data = sequalize.define('data', {
        column1: {
            type: DataTypes.STRING,
            unique: true,
        },
    });
    return Data;
};

export default data;
