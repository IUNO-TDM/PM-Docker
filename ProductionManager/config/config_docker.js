/**
 * Created by beuttlerma on 18.04.17.
 */

const path =  require('path');

var self = {};

self.HOST_SETTINGS = {
    ADDITIVE_MACHINE_SERVICE: {
        HOST: 'ams',
        PORT: 3007,
        PROTOCOL: 'http'
    },
    OAUTH_SERVER: {
        HOST: 'auth',
        PORT: 3005,
        PROTOCOL: 'http'
    },
    ULTIMAKER: {
        PORT: 80,
        PROTOCOL: 'http'
    }
};

// ---- CONFIGURATION EXPORT ----

self.MONGODB = {
    HOST: 'pm_mongodb',
    PORT: 27017,
    DATABASE: 'iuno_production_manager'
};

self.TMP_DIR = path.resolve(__dirname, '../tmp');
self.FILE_DIR = path.resolve(__dirname, '../files');


module.exports = self;
