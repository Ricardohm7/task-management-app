import { useState } from 'react'
import {
  Box,
  Grid,
  Paper,
  Typography,
  IconButton
} from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import AddIcon from '@mui/icons-material/Add'

import Card from './components/Card'
import ColumnMenu from './components/ColumnMenu'


// Dummy data
const columns = [
  {
    title: 'Drafting',
    tasks: [
      { id: 1, content: 'A task', type: 'default', comments: 1 },
      { id: 2, content: 'Reduce costs to become a profitable company by end of year', type: 'company', comments: 2 },
      { id: 3, content: 'Increase self-serve ARR by $200K', type: 'team', comments: 2 },
    ]
  },
  {
    title: 'Pending approval',
    tasks: [
      { id: 4, content: 'Improve employee engagement scores (based on quarterly surveys)', type: 'default', comments: 5 },
    ]
  },
  {
    title: 'Approved',
    tasks: [
      { id: 5, content: 'Capture 7% market share by 2025', type: 'company', comments: 7 },
      { id: 6, content: 'Reduce marketing spend by $3M', type: 'team', comments: 7 },
    ]
  },
  {
    title: 'Created',
    tasks: []
  }
]

const Dashboard = () => {
  const [tasks] = useState(columns)
  const [menuAnchor, setMenuAnchor] = useState<HTMLButtonElement | null>(null)

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setMenuAnchor(event.currentTarget)
  }

  const handleMenuClose = () => {
    setMenuAnchor(null)
  }

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid container spacing={2}>
        {tasks.map((column) => (
          <Grid item xs={3} key={column.title}>
            <Paper sx={{ p: 2 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant="h6">{column.title} {column.tasks.length}</Typography>
                <Box>
                  <IconButton size="small"><AddIcon /></IconButton>
                  <IconButton size="small" onClick={(e) => handleMenuOpen(e)}><MoreHorizIcon /></IconButton>
                </Box>
              </Box>
              {column.tasks.map((task) => (
                <Card id={task.id} type={task.type} comments={task.comments} content={task.content} />
              ))}
              {column.tasks.length === 0 && (
                <Typography variant="body2" sx={{ textAlign: 'center', color: 'text.secondary' }}>
                  + Add task
                </Typography>
              )}
            </Paper>
          </Grid>
        ))}
      </Grid>
      <ColumnMenu
        handleMenuClose={handleMenuClose}
        menuAnchor={menuAnchor}
      />
    </Box>
  )
}

export default Dashboard