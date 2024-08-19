import React, { useState, useRef } from 'react'
import { Card, CardContent, Typography } from '@mui/material'
import TaskCardContextMenu from './TaskCardContextMenu'
import { Task } from '../types'
import { useMenu } from '../MenuContext'

interface TaskCardProps {
  task: Task | undefined;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const { activeMenu, setActiveMenu } = useMenu()
  const [menuPosition, setMenuPosition] = useState<{ top: number, left: number } | null>(null)

  const cardRef = useRef<HTMLDivElement>(null)

  const handleContextMenu = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault()
    event.stopPropagation() //Prevent the click event from bubbling up
    setMenuPosition({ top: event.clientY, left: event.clientX })
    setActiveMenu(task?.id ?? null)
  }

  const handleCloseMenu = () => {
    setActiveMenu(null)
    setMenuPosition(null)
  }

  return (
    <>
      <Card
        ref={cardRef}
        style={{ cursor: 'grab' }}
        onContextMenu={handleContextMenu}
      >
        <CardContent>
          <Typography variant="h6">{task?.type}</Typography>
          <Typography variant="body2">{task?.content}</Typography>
        </CardContent>
      </Card>
      <TaskCardContextMenu
        open={activeMenu === task?.id && menuPosition !== null}
        onClose={handleCloseMenu}
        anchorPosition={menuPosition}
        onMenuItemClick={() => {
          handleCloseMenu()
        }}
      />
    </>
  )
}

export default TaskCard