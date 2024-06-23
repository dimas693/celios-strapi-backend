// strapi-api/config/database.js
// module.exports = ({ env }) => ({
//   connection: {
//     client: "postgres",
//     connection: {
//       host: env("DATABASE_HOST", "localhost"),
//       port: env.int("DATABASE_PORT", 5432),
//       database: env("DATABASE_NAME", "celios"),
//       user: env("DATABASE_USERNAME", "postgres"),
//       password: env("DATABASE_PASSWORD", "12345678"),
//       schema: env("DATABASE_SCHEMA", "public"), // Not required
//     },
//   },
// });

module.exports = ({ env }) => {
  const client = env("DATABASE_CLIENT");

  const connections = {
    postgres: {
      connection: {
        connectionString: env("DATABASE_URL"),
        ssl: env.bool("DATABASE_SSL", false) && {
          rejectUnauthorized: env.bool(
            "DATABASE_SSL_REJECT_UNAUTHORIZED",
            true
          ),
        },
        schema: env("DATABASE_SCHEMA", "public"),
      },

      pool: {
        min: env.int("DATABASE_POOL_MIN"),
        max: env.int("DATABASE_POOL_MAX"),
      },
    },
  };

  return {
    connection: {
      client,

      ...connections[client],

      acquireConnectionTimeout: env.int("DATABASE_CONNECTION_TIMEOUT", 60000),
    },
  };
};
