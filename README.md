# Portfolio cá nhân — Nguyễn Nhật Đăng

Website portfolio giới thiệu kỹ năng, dự án, hoạt động và các repo GitHub. Dự án được xây dựng bằng React, Vite và Tailwind CSS v4.

## Yêu cầu

- Node.js 20.19+ hoặc 22.12+
- npm

## Cài đặt và chạy

```bash
git clone https://github.com/FireHaru/Portfolio_react.git
cd Portfolio_react
npm install
npm run dev
```

Mở địa chỉ local mà Vite hiển thị trong terminal (thường là `http://localhost:5173`).

## Các lệnh thường dùng

| Lệnh | Tác dụng |
| --- | --- |
| `npm run dev` | Chạy website ở chế độ phát triển, tự cập nhật khi sửa mã nguồn |
| `npm run build` | Tạo bản build production trong thư mục `dist/` |
| `npm run preview` | Xem thử bản build production sau khi chạy `npm run build` |
| `npm run lint` | Kiểm tra mã nguồn bằng Oxlint |

## Sử dụng website

- Dùng thanh điều hướng để chuyển đến từng phần; trên màn hình nhỏ, mở menu bằng nút ba gạch.
- Chọn nút giao diện để chuyển giữa chế độ sáng và tối. Lựa chọn được lưu trong trình duyệt.
- Trong phần dự án, lọc theo thẻ, tìm kiếm theo tên/mô tả/công nghệ hoặc sắp xếp theo tên. Chọn **Khám phá dự án** để xem chi tiết.
- Trong phần số liệu, chọn điểm trên biểu đồ và dùng thanh trượt để đổi số điểm hiển thị.
- Dùng các nút mũi tên trong phần hoạt động và thành tích để xem thêm ảnh/thẻ.
- Phần Repo tải các repo công khai gần đây từ GitHub. Kết quả được lưu trong `localStorage` trong 10 phút; cần kết nối mạng khi tải dữ liệu mới.
- Biểu mẫu liên hệ gửi nội dung qua FormSubmit. Khi thay email nhận thư, cập nhật endpoint FormSubmit trong `src/components/ContactForm.jsx` và hoàn tất xác nhận của dịch vụ nếu được yêu cầu.

## Cập nhật nội dung portfolio

- Dự án: `src/data/projects.js`
- Kỹ năng, hoạt động và thành tích: `src/data/activities.js`
- Dữ liệu biểu đồ: `src/data/measurements.js`
- Tên tài khoản GitHub dùng để tải repo: `src/components/Repositories.jsx`
- Ảnh: đặt trong `public/assets/` rồi cập nhật đường dẫn ở dữ liệu hoặc component tương ứng.
- Tiêu đề và mô tả trang: `index.html`
- Màu sắc, bố cục và responsive: `src/index.css`

## Cấu trúc chính

```text
src/
├── components/   # Các phần giao diện
├── data/         # Dữ liệu dự án, kỹ năng, hoạt động và biểu đồ
├── hooks/        # React hooks dùng chung
├── lib/          # Tích hợp API GitHub
├── App.jsx       # Ghép các phần của trang
└── index.css     # Tailwind và stylesheet giao diện
public/
└── assets/       # Ảnh và tài nguyên tĩnh
```
