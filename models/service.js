const { Schema, Types, model } = require('mongoose');
const paginate = require('mongoose-paginate-v2');

const serviceSchema = new Schema({
  id: Schema.Types.String,
  imgsrc: Schema.Types.String,
  title: Schema.Types.String,
  description: Schema.Types.String,
});

serviceSchema.plugin(paginate);

const Service = model('Service', serviceSchema);
module.exports = Service;
