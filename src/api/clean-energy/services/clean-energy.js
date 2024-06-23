'use strict';

/**
 * clean-energy service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::clean-energy.clean-energy');
