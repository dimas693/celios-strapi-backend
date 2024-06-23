'use strict';

/**
 * op-ed service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::op-ed.op-ed');
