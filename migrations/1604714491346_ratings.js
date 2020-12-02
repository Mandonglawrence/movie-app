/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable("ratings", {
    id: {
      type: "uuid",
      notNull: true,
      primaryKey: true,
      default: pgm.func("uuid_generate_v4()"),
      comment: "The unique id of the user",
    },
    films_id: {
      type: "uuid",
      notNull: true,
      references: '"films"',
      onDelete: "cascade",
    },
    rating: {
      type: "integer",
      notNull: false,
    },
    total_rated_users: {
      type: "integer",
      notNull: false,
    },
  });
};

exports.down = (pgm) => {
  pgm.dropTable("ratings");
};
