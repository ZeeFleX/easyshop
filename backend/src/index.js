const { MongooseAdapter: Adapter } = require('@keystonejs/adapter-mongoose');
const { Keystone } = require('@keystonejs/keystone');
const models = require('./models');

const adapterConfig = { mongoUri: 'mongodb://localhost/unit' };

const keystone = new Keystone({
    adapter: new Adapter(adapterConfig),
});

models.forEach(model => {
    keystone.createList(model.name, model.options)
});

module.exports = {
    keystone
};