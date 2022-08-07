import React, { useEffect, useState } from 'react'
import './App.css'

// MUIS
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { DataGrid } from '@mui/x-data-grid'

// COMPONENTS
import Layout from './components/Layout'

// SERVICES
import { getListData } from './utils/services'

// UTILS
import debounce from './utils/performance/debounce'
import throttle from './utils/performance/throttle'

// CLASSES
const classes = {
  titleBlock: {
    marginBottom: '12px'
  },
  searchWrap: {
    marginBottom: '12px'
  },
  tableWrap: {
    flex: 1,
  }
}

function App() {
  const [dataTable, setDataTable] = useState<Array<{
    userId: number;
    id: number;
    title: string;
    body: string;
  }>>([])
  const [search, setSearch] = useState('')
  const [totalClicked, setTotalClicked] = useState(0)
  const [totalRefetch, setTotalRefetch] = useState(0)

  const fetchDataTable = async () => {
    const fetching = await getListData()
    setDataTable(fetching.rows)
  }

  useEffect(() => {
    fetchDataTable()
  }, [])

  return (
    <Layout>
      <Box>
        <Typography>button clicked {totalClicked}</Typography>
        <Typography>total refetch {totalRefetch}</Typography>
        <Button
          variant='contained'
          onClick={() => {
            setTotalClicked(current => current + 1)
            throttle(() => {
              fetchDataTable()
              setTotalRefetch(current => current + 1)
            }, 400)
          }}
        >
          refetch
        </Button>
      </Box>

      <Box sx={classes.searchWrap}>
        <Typography sx={classes.titleBlock} variant='h5'>Debounce</Typography>
        <TextField
          label='pencarian'
          size='small'
          fullWidth
          onChange={(event) => {
            debounce(() => {
              setSearch(event.target.value)
            }, 500)
          }}
        />
      </Box>
      
      <Box sx={classes.tableWrap}>
        <DataGrid
          rows={dataTable.length ? dataTable.filter(item => item.title.includes(search)) : []}
          columns={[
            { field: 'id', headerName: 'ID', width: 90 },
            {
              field: 'title',
              headerName: 'Judul',
              width: 150,
            },
            {
              field: 'body',
              headerName: 'Deskripsi',
              flex: 1,
            }
          ]}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
      </Box>

    </Layout>
  )
}

export default App
