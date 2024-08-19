import { useState } from 'react'
import { DndContext, DragOverlay, closestCorners, KeyboardSensor, PointerSensor, useSensor, useSensors, DragStartEvent, DragOverEvent, DragEndEvent } from '@dnd-kit/core'
import { arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import TaskCard from './components/TaskCard'
import { ColumnId, Task, Tasks } from './types'
import TaskModal from './components/TaskModal'
import AddIcon from '@mui/icons-material/Add'
import TaskBoard from './components/TaskBoard'
import MenuProvider from './MenuContext'

const initialTasks: Tasks = {
  drafting: [
    { id: 'task1', content: 'A task', type: 'default' },
    { id: 'task2', content: 'Reduce costs to become a profitable company by end of year', type: 'company-goal' },
    { id: 'task3', content: 'Increase self-serve ARR by $200K', type: 'team-goal' },
  ],
  pendingApproval: [
    { id: 'task4', content: 'Improve employee engagement scores (quarterly surveys)', type: 'default' },
  ],
  approved: [
    { id: 'task5', content: 'Capture 7% market share by 2025', type: 'company-goal' },
    { id: 'task6', content: 'Reduce marketing spend by $3M', type: 'team-goal' },
  ],
  created: [],
}

const columnTitles: { [key in ColumnId]: string } = {
  drafting: 'Drafting',
  pendingApproval: 'Pending approval',
  approved: 'Approved',
  created: 'Created',
}

function Dashboard() {
  const [tasks, setTasks] = useState<Tasks>(initialTasks)
  const [activeId, setActiveId] = useState<string | null>(null)
  const [openTaskModal, setOpenTaskModal] = useState(false)

  const handleOpen = () => setOpenTaskModal(true)
  const handleClose = () => setOpenTaskModal(false)


  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event
    setActiveId(active.id as string)
  }

  const handleDragOver = (event: DragOverEvent) => {
    const { active, over } = event
    if (!over) return

    const activeContainer = Object.keys(tasks).find((key) =>
      tasks[key as ColumnId].find((task) => task.id === active.id)
    ) as ColumnId | undefined
    const overContainer = (Object.keys(tasks).find((key) =>
      tasks[key as ColumnId].find((task) => task.id === over.id)
    ) || over.id) as ColumnId

    if (activeContainer && activeContainer !== overContainer) {
      setTasks((prev) => {
        const activeItems = prev[activeContainer]
        const overItems = prev[overContainer]
        const activeIndex = activeItems.findIndex((item) => item.id === active.id)
        const overIndex = overItems.findIndex((item) => item.id === over.id)

        return {
          ...prev,
          [activeContainer]: [
            ...prev[activeContainer].filter((item) => item.id !== active.id),
          ],
          [overContainer]: [
            ...prev[overContainer].slice(0, overIndex),
            activeItems[activeIndex],
            ...prev[overContainer].slice(overIndex),
          ],
        }
      })
    }
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event

    if (active.id !== over?.id) {
      const activeContainer = Object.keys(tasks).find((key) =>
        tasks[key as ColumnId].find((task) => task.id === active.id)
      ) as ColumnId | undefined
      const overContainer = (Object.keys(tasks).find((key) =>
        tasks[key as ColumnId].find((task) => task.id === over?.id)
      ) || over?.id) as ColumnId

      if (activeContainer) {
        setTasks((prev) => {
          const activeItems = prev[activeContainer]
          const overItems = prev[overContainer]
          const activeIndex = activeItems.findIndex((item) => item.id === active.id)
          const overIndex = overItems.findIndex((item) => item.id === over?.id)

          if (activeContainer === overContainer) {
            return {
              ...prev,
              [overContainer]: arrayMove(overItems, activeIndex, overIndex),
            }
          }

          return {
            ...prev,
            [activeContainer]: [
              ...prev[activeContainer].filter((item) => item.id !== active.id),
            ],
            [overContainer]: [
              ...prev[overContainer].slice(0, overIndex),
              activeItems[activeIndex],
              ...prev[overContainer].slice(overIndex),
            ],
          }
        })
      }
    }

    setActiveId(null)
  }

  const getTaskById = (id: string): Task | undefined => {
    for (const column of Object.values(tasks)) {
      const task = column.find((task) => task.id === id)
      if (task) return task
    }
  }

  return (
    <MenuProvider>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
      >
        <Grid container spacing={2}>
          {(Object.keys(tasks) as ColumnId[]).map((columnId) => (
            <Grid item xs={3} key={columnId}>
              <Paper sx={{ p: 2, height: '100%' }}>
                <Typography variant="h6" gutterBottom>
                  {columnTitles[columnId]} ({tasks[columnId].length})
                </Typography>
                {/* <SortableContext items={tasks[columnId].map(task => task.id)} strategy={verticalListSortingStrategy}>
                {tasks[columnId].map((task) => (
                  <SortableItem key={task.id} id={task.id} task={task} />
                ))}
              </SortableContext> */}
                <TaskBoard tasks={tasks[columnId]} />
                <Box mt={2}>
                  <Button
                    startIcon={<AddIcon />}
                    onClick={handleOpen}
                    color="primary"
                    sx={{
                      textTransform: 'none',
                      justifyContent: 'flex-start',
                      padding: '8px',
                      '&:hover': {
                        backgroundColor: 'rgba(0, 0, 0, 0.04)',
                      },
                    }}
                  >
                    Add task
                  </Button>
                  <TaskModal open={openTaskModal} handleClose={handleClose} />
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
        <DragOverlay>
          {activeId ? <TaskCard task={getTaskById(activeId)} /> : null}
        </DragOverlay>
      </DndContext>
    </MenuProvider>
  )
}

export default Dashboard