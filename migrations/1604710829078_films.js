/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable("films", {
    id: {
      type: "uuid",
      notNull: true,
      primaryKey: true,
      default: pgm.func("uuid_generate_v4()"),
      comment: "The unique id of the user",
    },
    name: {
      type: "varchar(100)",
      notNull: true,
    },
    description: {
      type: "varchar(1000)",
      notNull: true,
    },
    genre: {
      type: "varchar(100)",
      notNull: true,
    },
    release_date: {
      type: "timestamp",
      notNull: true,
      default: pgm.func("current_timestamp"),
    },
    ticket_price: {
      type: "integer",
      notNull: true,
    },
    country: {
      type: "varchar(100)",
      notNull: true,
    },
    image_links: {
      type: "varchar(100)",
      notNull: false,
    },
  });
};

exports.down = (pgm) => {
  pgm.dropTable("films");
};
