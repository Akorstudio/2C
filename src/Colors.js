import hsl from 'hsl-to-hex';

const reHex3 = /^(#)?[0-9a-f]{3}$/i;
const reHex6 = /^(#)?([0-9a-f]{2}){3}$/i;
const reRGB = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)/i;
const reHSL = /hsl\(\s*(\d+)\s*,\s*(\d+(?:\.\d+)?%)\s*,\s*(\d+(?:\.\d+)?%)\)/i;

const HEX = (color) => {

    if (reHex3.test(color)) {
      color = color.replace('#','');
      let arr = color.split('');
      console.log(arr);
      let colors = arr.map((c)=>c+c);
      let result = `#${colors.join('')}`;
      console.log(result);
      return result;
    }
    if (reHex6.test(color)) {
      color = color.replace('#','');
      let result = `#${color}`;
      //console.log(result);
      return result;
    }
    return false;
}

const RGB = (color) => {

    if (reRGB.test(color)) {
      let item = reRGB.exec(color);
      let rgb2hex = [];
      for (let i=1; i<=3; i++) {
        if (!(item[i]>=0 && item[i]<=255)) {
          return -1;
        }
        else {
          let hex = ('00'+(item[i]*1).toString(16).toLowerCase()).slice(-2);
          rgb2hex.push(hex);
        }
      }
      //console.log(rgb2hex);
      let result = `#${rgb2hex.join('')}`;
      console.log(result);
      return result;
    }
    return false;
  }

const HSL = (color) => {

  if (reHSL.test(color)) {
    const item = reHSL.exec(color);
    item[2] = item[2].replace('%','')
    item[3] = item[3].replace('%','')
    //console.log(item);
    if (item[1]>255 || item[2]>100 || item[3]>100) {
      return -1;
    }
    let result = hsl(item[1], item[2], item[3]);
    console.log(result);
      return result;
  }
  return false;
}

export default (color) => {
  const tests = [HEX, RGB, HSL];

  if (color && color.length>0) {
    for (let i in tests) {
      let result = tests[i](color);
      if (result === -1)
        return 'Invalid color';
      if (result)
        return result;
    }
  }
  return 'Invalid color';
}
