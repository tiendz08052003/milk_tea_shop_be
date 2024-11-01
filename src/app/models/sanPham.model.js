import mongoose from "mongoose";

const Schema = mongoose.Schema;

const sanPhamSchema = new Schema(
  {
    tenSanPham: { type: String },
    gia: { type: Number, required: true },
    moTa: { type: String },
    chiNhanhApDung: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ChiNhanh",
      },
    ],
    trangThai: { type: Boolean, default: true },
    deXuat: { type: Boolean, default: false },
    isDel: { type: Boolean, default: false },
    loaiSanPham: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "LoaiSanPham",
      required: true,
    },
    kichThuoc: [
      {
        tenKichThuoc: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "KichThuoc",
        },
        giaThem: { type: Number, default: 0 },
      },
    ],
    hinhAnh: { type: String },
    ngot: [
      {
        type: String,
      },
    ],
    da: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const SanPham = mongoose.model("SanPham", sanPhamSchema);

export default SanPham;
