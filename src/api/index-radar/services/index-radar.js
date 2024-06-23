'use strict';

/**
 * index-radar service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::index-radar.index-radar');
