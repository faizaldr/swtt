export default function defineCutiModel(sequelize, DataTypes) {
  const Cuti = sequelize.define('Cuti', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    pegawai_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tgl_mulai: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    tgl_selesai: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    alasan: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('PENDING', 'APPROVED', 'REJECTED'),
      defaultValue: 'PENDING'
    }
  }, {
    tableName: 'cuti',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });

  return Cuti;
}
