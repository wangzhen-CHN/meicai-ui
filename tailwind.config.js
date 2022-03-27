/**
 * @param num 个数
 * @param interval 间隔
 * @param start 起始值
 */
function getPx(num, interval, start) {
  const result = {}
  const arr = [...Array(num).keys()]
  arr.forEach((item) => (result[item * interval + start] = `${item * interval + start}px`))
  return result
}
module.exports = {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'], // 打包时去除未使用的class
  theme: {
    extend: {
      fontSize: {
        base: '12px',
        12: '12px',
        13: '13px',
        14: '14px',
        16: '16px',
        18: '18px',
        20: '20px',
        24: '24px'
      }
    },
    spacing: {
      ...getPx(40, 1, 0), // 0px,1px...39px
      ...getPx(13, 5, 40), // 40px,45px...100px
      ...getPx(10, 100, 100) // 100px,200px...1000px
    }
  },
  plugins: []
}
