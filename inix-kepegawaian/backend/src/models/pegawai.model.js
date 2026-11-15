export default function definePegawaiModel(sequelize, DataTypes) {
  const Pegawai = sequelize.define('Pegawai', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nip: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true
    },
    nama_lengkap: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    jabatan: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('aktif', 'nonaktif'),
      defaultValue: 'aktif'
    },
    kuota_cuti: {
      type: DataTypes.INTEGER,
      defaultValue: 12,
      allowNull: false
    }
  }, {
    tableName: 'pegawai',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });

  return Pegawai;
}
