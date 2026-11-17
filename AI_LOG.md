# AI_LOG — Các phần có AI hỗ trợ

AI được dùng để hỗ trợ phân tích yêu cầu, đề xuất cách triển khai, sửa lỗi và rà soát dự án. Các phần cụ thể:

- **React và Tailwind:** cấu hình Tailwind CSS v4; chuyển kiểu dáng card dự án sang utility class; làm lưới responsive và menu hamburger cho màn hình nhỏ.
- **Dark mode:** tách nút đổi theme thành component, tạo hook lưu lựa chọn bằng `localStorage`, đồng bộ class `dark` với CSS.
- **GitHub repos:** tạo hook tải repo có cache 10 phút; nối vào section repo; xử lý trạng thái loading, lỗi, rỗng và skeleton.
- **Dự án và tương tác:** dùng `<dialog>` cho chi tiết dự án, đóng bằng Escape hoặc nhấn backdrop; rà soát effect để dữ liệu suy ra được tính trong lúc render.
- **Hiệu năng và truy cập:** chuyển 24 ảnh sang WebP và giảm kích thước; lazy-load ảnh gallery; bổ sung metadata tiếng Việt, ưu tiên ảnh đầu trang và tăng vùng bấm carousel.

## Kiểm tra với sự hỗ trợ của AI

- `npm run build` — thành công.
- `npm run lint` — thành công.

AI chưa đo lại điểm Lighthouse và chưa triển khai website lên Vercel. Người làm bài cần tự xem lại code, kiểm tra giao diện và bổ sung link production/ảnh chụp vào README trước khi nộp.
