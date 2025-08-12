
// Data used to populate the page (editable)
const highlights = [
  "Kết nối CSDL dân cư & định danh điện tử trong đăng ký thuế",
  "Phân loại MST: 10 số (đơn vị độc lập) · 13 số (đơn vị phụ thuộc)",
  "Cá nhân có thể dùng Số định danh cá nhân thay MST",
  "Xử lý điện tử, thời hạn giải quyết nhanh (2–3 ngày làm việc)",
  "Có quy trình dự phòng khi hệ thống gặp sự cố"
];

const cards = [
  { title: "Đăng ký lần đầu (tổ chức)",
    body: "Nộp tại Cục Thuế nơi đặt trụ sở; cấp Giấy CN/Thông báo MST trong 03 ngày làm việc kể từ khi nhận đủ hồ sơ."
  },
  { title: "Cấp lại Giấy CN/MST",
    body: "Trường hợp mất/rách/nát... được cấp lại trong 02 ngày làm việc qua cổng TCT."
  },
  { title: "Thay đổi thông tin",
    body: "Thay đổi không đổi cơ quan thuế: cập nhật trong 02–03 ngày; đổi địa bàn: thực hiện thủ tục chuyển đi/đến theo mẫu."
  },
  { title: "Tạm ngừng/tiếp tục hoạt động",
    body: "Thông báo theo mẫu; cơ quan thuế phản hồi chấp thuận/không chấp thuận trong 02 ngày làm việc."
  },
  { title: "Chấm dứt hiệu lực MST",
    body: "Hoàn thành nghĩa vụ về hóa đơn/thuế trước khi chấm dứt; cơ quan thuế ban hành thông báo sau khi đủ điều kiện."
  },
  { title: "Khôi phục MST",
    body: "Khi có điều kiện hoạt động trở lại, nộp hồ sơ khôi phục; thông tin được công khai trên cổng TCT."
  },
];

function render(){
  const h = document.getElementById('highlights');
  highlights.forEach(t=>{
    const li = document.createElement('li');
    li.className = 'pill';
    li.textContent = t;
    h.appendChild(li);
  });

  const wrap = document.getElementById('cards');
  cards.forEach(c=>{
    const el = document.createElement('div');
    el.className = 'card';
    el.innerHTML = `<div class="title">${c.title}</div><div class="body">${c.body}</div>`;
    wrap.appendChild(el);
  });
}
document.addEventListener('DOMContentLoaded', render);
