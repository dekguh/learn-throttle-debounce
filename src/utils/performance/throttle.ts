type TFunc = (callback : () => void, time : number) => void

let timeout : NodeJS.Timeout | undefined
const throttle : TFunc = (callback, time) => {
  if(!timeout) {
    callback()
    timeout = setTimeout(() => {
      timeout = undefined
    }, time)
  }
}

export default throttle