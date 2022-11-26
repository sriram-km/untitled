const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))

const demo = async() => {
  console.log('2...')
  await sleep(2000)
  console.log('3...')
}

const blah = async() => {
  console.log('1...')
  await demo()
  console.log('4.')
}