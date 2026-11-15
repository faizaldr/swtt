import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import defineUserModel from './user.model.js';
import definePegawaiModel from './pegawai.model.js';
import defineCutiModel from './cuti.model.js';

const User = defineUserModel(sequelize, DataTypes);
const Pegawai = definePegawaiModel(sequelize, DataTypes);
const Cuti = defineCutiModel(sequelize, DataTypes);

// Associations
User.hasOne(Pegawai, { foreignKey: 'user_id', onDelete: 'SET NULL' });
Pegawai.belongsTo(User, { foreignKey: 'user_id' });

Pegawai.hasMany(Cuti, { foreignKey: 'pegawai_id', onDelete: 'CASCADE' });
Cuti.belongsTo(Pegawai, { foreignKey: 'pegawai_id' });

export { sequelize, User, Pegawai, Cuti };
export default { sequelize, User, Pegawai, Cuti };
