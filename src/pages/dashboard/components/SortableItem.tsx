import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import TaskCard from './TaskCard'
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
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
      <TaskCard task={task} />
    </div>
  )
}

export default SortableItem