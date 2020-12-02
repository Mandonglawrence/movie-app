/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.addColumns("films", {
    image_link: {
      type: "varchar(1000)",
      notNull: false,
    },
  });
};

exports.down = (pgm) => {
  pgm.dropTable("films");
};
