import { Card, CardContent, Typography, Chip } from '@mui/material'
import { Task } from '../types'

interface TaskCardProps {
  task: Task | undefined;
}

function TaskCard({ task }: TaskCardProps) {
  return (
    <Card sx={{ marginBottom: 1, cursor: 'grab' }}>
      <CardContent>
        <Typography variant="body2">{task?.content}</Typography>
        {task?.type !== 'default' && (
          <Chip
            label={task?.type === 'company-goal' ? 'Company goal' : 'Team goal'}
            size="small"
            color={task?.type === 'company-goal' ? 'primary' : 'secondary'}
            sx={{ mt: 1 }}
          />
        )}
      </CardContent>
    </Card>
  )
}

export default TaskCard