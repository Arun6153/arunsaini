export const monthDiff = (d2P:any)=>{
  //CAREER STARTING DATE
  let d1 = new Date("2020-03-16");
  let d2 = new Date(d2P);
  let months = null;
  months = (d2.getFullYear() - d1.getFullYear()) * 12;
  months -= d1.getMonth();
  months += d2.getMonth();
  return (months/12).toFixed(1);
}
