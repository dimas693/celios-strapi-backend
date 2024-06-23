'use strict';

/**
 * publish-house service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::publish-house.publish-house');
