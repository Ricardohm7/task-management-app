import { styled } from '@mui/material'
import React from 'react'
import CardContent from '@mui/material/CardContent'
import CardComponent from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import PersonIcon from '@mui/icons-material/Person'

// Styled Card component with hover effects
const HoverCard = styled(CardComponent)(({ theme }) => ({
  transition: 'all 0.3s ease-in-out',
  cursor: 'pointer',
  '&:hover': {
    borderColor: theme.palette.grey[500],
    // boxShadow: theme.shadows[4],
  },
}))


interface CardProps {
  id: string | number;
  content: string;
  type: string;
  comments: number
}

const Card: React.FC<CardProps> = (task) => {
  return (
    <HoverCard key={task.id} sx={{ mb: 2, border: 1, borderColor: 'grey.300' }}>
      <CardContent>
        <Typography variant="body2">{task.content}</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
          <Chip
            label={task.type === 'company' ? 'Company goal' : task.type === 'team' ? 'Team goal' : ''}
            size="small"
            sx={{
              bgcolor: task.type === 'company' ? '#e0e7ff' : '#dcfce7',
              color: task.type === 'company' ? '#3730a3' : '#166534',
              display: task.type === 'default' ? 'none' : 'inline-flex'
            }}
          />
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <PersonIcon sx={{ fontSize: 16, mr: 0.5 }} />
            <Typography variant="caption">{task.comments}</Typography>
          </Box>
        </Box>
      </CardContent>
    </HoverCard>
  )
}

export default Card