export const divWithDec = (num: number, power: number = 0) => num / 10 ** power

export function bigNumInString(value: number) {
  let tmp: number | string = value

  if (Math.abs(tmp) < 1.0) {
    var e = parseInt(tmp.toString().split('e-')[1])
    if (e) {
      tmp *= Math.pow(10, e - 1)
      tmp = Number('0.' + new Array(e).join('0') + tmp.toString().substring(2))
    }
  } else {
    var e = parseInt(tmp.toString().split('+')[1])
    if (e > 20) {
      e -= 20
      tmp /= Math.pow(10, e)
      tmp = tmp + new Array(e + 1).join('0')
    }
  }

  return String(tmp)
}
