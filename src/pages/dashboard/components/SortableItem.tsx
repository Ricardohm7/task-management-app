import React from 'react'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { Card, CardContent, Typography, Chip } from '@mui/material'
import { Task } from '../types'

interface SortableItemProps {
  id: string;
  task: Task;
}

function SortableItem({ id, task }: SortableItemProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    marginBottom: 8,
    cursor: 'grab',
  }

  return (
    <Card
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
      <CardContent>
        <Typography variant="body2">{task.content}</Typography>
        {task.type !== 'default' && (
          <Chip
            label={task.type === 'company-goal' ? 'Company goal' : 'Team goal'}
            size="small"
            color={task.type === 'company-goal' ? 'primary' : 'secondary'}
            sx={{ mt: 1 }}
          />
        )}
      </CardContent>
    </Card>
  )
}

export default SortableItem