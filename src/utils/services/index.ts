import axios from 'axios'

export const getListData = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return {
      status: 'success',
      rows: response.data
    }
  } catch (err) {
    return {
      status: 'error',
      rows: []
    }
  }
}