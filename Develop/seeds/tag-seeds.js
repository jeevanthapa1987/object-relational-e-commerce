
const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'Technology'
  },
  {
    tag_name: 'Fashion'
  },
  {
    tag_name: 'Programming'
  },
  {
    tag_name: 'Toys'
  },
  {
    tag_name: 'Books'
  }
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
