function StanDev(arr){

  const sum = arr.reduce((partial_sum, a) => partial_sum + a)

  const mean = sum/arr.length
  let newArr = []

  arr.forEach((el)=>{
    newArr.push(Math.pow(el-mean,2))
  })

  return Math.sqrt(newArr.reduce((partial_sum, a) => partial_sum + a)/newArr.length)

}
