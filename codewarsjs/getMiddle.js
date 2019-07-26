function getMiddle(s)
{
  let result = '';
  let el = parseInt(s.length / 2);
  if(s.length % 2 == 0) {
    return s[el-1] + s[el];
  }
  return s[el];
}


// function getMiddle(s)
// {
//   return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
// }