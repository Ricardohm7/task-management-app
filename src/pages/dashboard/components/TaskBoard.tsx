// TaskBoard.tsx
import React, { useEffect, useRef } from 'react'
import { useMenu } from '../MenuContext'
import { Task } from '../types'
import SortableItem from './SortableItem'

interface TaskBoardProps {
  tasks: Task[];
}

const TaskBoard: React.FC<TaskBoardProps> = ({ tasks }) => {
  const { activeMenu, setActiveMenu } = useMenu()
  const boardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleGlobalClick = (event: MouseEvent) => {
      if (activeMenu && boardRef.current && !boardRef.current.contains(event.target as Node)) {
        setActiveMenu(null)
      }
    }

    document.addEventListener('mousedown', handleGlobalClick)

    return () => {
      document.removeEventListener('mousedown', handleGlobalClick)
    }
  }, [activeMenu, setActiveMenu])

  return (
    <div ref={boardRef}>
      {tasks.map(task => (
        <SortableItem key={task.id} id={task.id} task={task} />
      ))}
    </div>
  )
}

export default TaskBoard