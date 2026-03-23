const DATA = [
  {
    "province": "กรุงเทพมหานคร",
    "districts": [
      "พระนคร",
      "ดุสิต",
      "บางรัก",
      "ปทุมวัน",
      "จตุจักร"
    ]
  },
  {
    "province": "เชียงใหม่",
    "districts": [
      "เมืองเชียงใหม่",
      "แม่ริม",
      "สันทราย",
      "หางดง",
      "ดอยสะเก็ด"
    ]
  },
  {
    "province": "ชลบุรี",
    "districts": [
      "เมืองชลบุรี",
      "ศรีราชา",
      "บางละมุง",
      "สัตหีบ",
      "พนัสนิคม"
    ]
  },
  {
    "province": "ขอนแก่น",
    "districts": [
      "เมืองขอนแก่น",
      "ชุมแพ",
      "บ้านไผ่",
      "น้ำพอง",
      "พล"
    ]
  },
  {
    "province": "นครราชสีมา",
    "districts": [
      "เมืองนครราชสีมา",
      "ปากช่อง",
      "สูงเนิน",
      "โนนสูง",
      "สีคิ้ว"
    ]
  },
  {
    "province": "ภูเก็ต",
    "districts": [
      "เมืองภูเก็ต",
      "กะทู้",
      "ถลาง",
      "รัษฎา",
      "วิชิต"
    ]
  },
  {
    "province": "สงขลา",
    "districts": [
      "เมืองสงขลา",
      "หาดใหญ่",
      "สะเดา",
      "ระโนด",
      "สทิงพระ"
    ]
  }
]

const province = document.querySelector('#province')
const district = document.querySelector('#district')

// ใช้ event change ไม่ใช่ click

province.addEventListener('change', hdlProvinceChange)


function hdlProvinceChange() {
  // when select a province..
}