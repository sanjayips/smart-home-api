import mongoose from 'mongoose';

const nodeMcuSchema = mongoose.Schema({
  serial_number: {
    type: String,
    require: true,
  },
  last_online_at: {
    type: Number,
    require: true,
  },
});

const NodeMcu = mongoose.model('nodeMcu', nodeMcuSchema);

export default NodeMcu;
