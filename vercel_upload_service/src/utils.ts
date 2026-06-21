const  LEN =5 ;

export function generateid(){
  let ans = "";
  const id = "ajhfgljahlijgfhakljs1234345";
  const len =5 ;
  for (let i =0 ; i<LEN ; i++){
    ans += id[Math.floor(Math.random()*id.length)] ;
  }
  return ans;
}
