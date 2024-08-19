import React from 'react'
import { Menu, SvgIconProps } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import ImageIcon from '@mui/icons-material/Image'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import VisibilityIcon from '@mui/icons-material/Visibility'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import AddTaskIcon from '@mui/icons-material/AddTask'
import FlagIcon from '@mui/icons-material/Flag'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt'
import DeleteIcon from '@mui/icons-material/Delete'
import MenuItem from '@components/MenuItem'

interface TaskCardContextMenuProps {
  anchorPosition: {
    top: number;
    left: number;
  } | null;
  open: boolean;
  onClose: () => void;
  onMenuItemClick: (action: string) => void;
}

interface MenuItemConfig {
  action: string;
  icon: React.ReactElement<SvgIconProps>;
  text: string;
}

const menuItems: MenuItemConfig[] = [
  { action: 'edit', icon: <EditIcon />, text: 'Edit task name' },
  { action: 'addCover', icon: <ImageIcon />, text: 'Add cover image' },
  { action: 'markComplete', icon: <CheckCircleOutlineIcon />, text: 'Mark complete' },
  { action: 'viewDetails', icon: <VisibilityIcon />, text: 'View details' },
  { action: 'openNewTab', icon: <OpenInNewIcon />, text: 'Open in new tab' },
  { action: 'duplicate', icon: <ContentCopyIcon />, text: 'Duplicate task' },
  { action: 'copyLink', icon: <ContentCopyIcon />, text: 'Copy task link' },
  { action: 'createFollowUp', icon: <AddTaskIcon />, text: 'Create follow-up task' },
  { action: 'markMilestone', icon: <FlagIcon />, text: 'Mark as milestone' },
  { action: 'markApproval', icon: <ThumbUpAltIcon />, text: 'Mark as approval' },
  { action: 'delete', icon: <DeleteIcon />, text: 'Delete task' },
]

const TaskCardContextMenu: React.FC<TaskCardContextMenuProps> = ({
  anchorPosition,
  open,
  onClose,
  onMenuItemClick
}) => {

  const handleMenuClick = (event: React.MouseEvent) => {
    event.stopPropagation() // Prevent the click event from bubbling up
  }

  return (
    <Menu
      anchorReference="anchorPosition"
      anchorPosition={anchorPosition ?? undefined}
      open={open}
      onClose={onClose}
      onClick={handleMenuClick}
    >
      {menuItems.map((item) => (
        <MenuItem
          key={item.action}
          icon={item.icon}
          text={item.text}
          onClick={() => onMenuItemClick(item.action)}
        />
      ))
      }
    </Menu>
  )
}

export default TaskCardContextMenu
