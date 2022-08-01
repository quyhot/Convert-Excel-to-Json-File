const readXlsxFile = require('read-excel-file/node')
const fs = require('fs');

categories = {
    "Đăng ký tài khoản": 1,
    "Các hình thức thanh toán": 2,
    "Hóa đơn giá trị gia tăng": 3,
    "Thông tin dịch vụ": 4,
    "Tư vấn": 5,
    "Test": 6
}

// File path.
readXlsxFile('./test1.xlsx').then((rows) => {
    const result = []
    for (let i = 1; i < rows.length; i++) {
        result.push({
            'id': rows[i][0],
            'cate_id': categories[rows[i][1]],
            'name': rows[i][2],
            'answer': rows[i][3]
        })
    }
    fs.writeFileSync('test.json', JSON.stringify(result))
    // `rows` is an array of rows
    // each row being an array of cells.
})
