'use strict';

/**
 * top-city service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::top-city.top-city');
