import React, { useState, useEffect, useRef } from 'react'
import { Card, CardContent, Typography } from '@mui/material'
import CustomContextMenu from './TaskCardContextMenu'
import { Task } from '../types'

interface ContextMenuPosition {
  mouseX: number | null;
  mouseY: number | null;
}

interface TaskCardProps {
  task: Task | undefined;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const [contextMenu, setContextMenu] = useState<ContextMenuPosition>({
    mouseX: null,
    mouseY: null,
  })
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleTouchStart = (event: TouchEvent) => {
      if (event.touches.length === 2) {
        event.preventDefault()
        const touch = event.touches[0]
        setContextMenu({
          mouseX: touch.clientX - 2,
          mouseY: touch.clientY - 4,
        })
      }
    }

    const currentCard = cardRef.current
    if (currentCard) {
      currentCard.addEventListener('touchstart', handleTouchStart, { passive: false })
    }

    return () => {
      if (currentCard) {
        currentCard.removeEventListener('touchstart', handleTouchStart)
      }
    }
  }, [])

  const mouseDownTimeRef = useRef<number | null>(null)

  useEffect(() => {
    const handleMouseDown = () => {
      mouseDownTimeRef.current = Date.now()
    }

    const handleMouseUp = (event: MouseEvent) => {
      const mouseUpTime = Date.now()
      const timeDiff = mouseDownTimeRef.current ? mouseUpTime - mouseDownTimeRef.current : 0

      if (contextMenu.mouseX !== null &&
        cardRef.current &&
        !cardRef.current.contains(event.target as Node) &&
        timeDiff < 500) { // Check if it's a quick click (less than 500ms)
        setContextMenu({ mouseX: null, mouseY: null })
      }
      mouseDownTimeRef.current = null
    }

    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mouseup', handleMouseUp)

    return () => {
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [contextMenu])

  const handleContextMenu = (event: React.MouseEvent<HTMLDivElement>) => {
    console.log('clicked!', event)
    event.preventDefault()
    event.stopPropagation() //Prevent the click event from bubbling up
    setContextMenu({
      mouseX: event.clientX - 2,
      mouseY: event.clientY - 4,
    })
  }

  const handleCloseContextMenu = () => {
    setContextMenu({ mouseX: null, mouseY: null })
  }

  const handleMenuItemClick = (action: string) => {
    console.log(`Action ${action} clicked for task: ${task?.id}`)
    handleCloseContextMenu()
    // Implement the action here
  }

  return (
    <>
      <Card
        ref={cardRef}
        style={{ cursor: 'context-menu' }}
        onContextMenu={handleContextMenu}
      >
        <CardContent>
          <Typography variant="h6">{task?.type}</Typography>
          <Typography variant="body2">{task?.content}</Typography>
        </CardContent>
      </Card>
      <CustomContextMenu
        open={contextMenu.mouseY !== null}
        onClose={handleCloseContextMenu}
        anchorPosition={
          contextMenu.mouseY !== null && contextMenu.mouseX !== null
            ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
            : undefined
        }
        onMenuItemClick={handleMenuItemClick}
      />
    </>
  )
}

export default TaskCard