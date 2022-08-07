type TFunc = (callback : () => void, time : number) => void

let timeout : NodeJS.Timeout
const debounce : TFunc = (callback, time = 500) => {
  clearTimeout(timeout)
  timeout = setTimeout(callback, time)
}

export default debounce