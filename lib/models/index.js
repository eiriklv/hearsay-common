exports = module.exports = function (mongoose) {
    return {
        Entry: require('./entry')(mongoose)
    };
};
