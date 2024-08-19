import React from 'react'
import { Menu, MenuItem, ListItemIcon, ListItemText } from '@mui/material'
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

interface TaskCardContextMenuProps {
  anchorPosition: {
    top: number;
    left: number;
  } | undefined;
  open: boolean;
  onClose: () => void;
  onMenuItemClick: (action: string) => void;
}

const CustomContextMenu: React.FC<TaskCardContextMenuProps> = ({
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
      anchorPosition={anchorPosition}
      open={open}
      onClose={onClose}
      onClick={handleMenuClick}
    >
      <MenuItem onClick={() => onMenuItemClick('edit')}>
        <ListItemIcon>
          <EditIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Edit task name</ListItemText>
      </MenuItem>
      <MenuItem onClick={() => onMenuItemClick('addCover')}>
        <ListItemIcon>
          <ImageIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Add cover image</ListItemText>
      </MenuItem>
      <MenuItem onClick={() => onMenuItemClick('markComplete')}>
        <ListItemIcon>
          <CheckCircleOutlineIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Mark complete</ListItemText>
      </MenuItem>
      <MenuItem onClick={() => onMenuItemClick('viewDetails')}>
        <ListItemIcon>
          <VisibilityIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>View details</ListItemText>
      </MenuItem>
      <MenuItem onClick={() => onMenuItemClick('openNewTab')}>
        <ListItemIcon>
          <OpenInNewIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Open in new tab</ListItemText>
      </MenuItem>
      <MenuItem onClick={() => onMenuItemClick('duplicate')}>
        <ListItemIcon>
          <ContentCopyIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Duplicate task</ListItemText>
      </MenuItem>
      <MenuItem onClick={() => onMenuItemClick('copyLink')}>
        <ListItemIcon>
          <ContentCopyIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Copy task link</ListItemText>
      </MenuItem>
      <MenuItem onClick={() => onMenuItemClick('createFollowUp')}>
        <ListItemIcon>
          <AddTaskIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Create follow-up task</ListItemText>
      </MenuItem>
      <MenuItem onClick={() => onMenuItemClick('markMilestone')}>
        <ListItemIcon>
          <FlagIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Mark as milestone</ListItemText>
      </MenuItem>
      <MenuItem onClick={() => onMenuItemClick('markApproval')}>
        <ListItemIcon>
          <ThumbUpAltIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Mark as approval</ListItemText>
      </MenuItem>
      <MenuItem onClick={() => onMenuItemClick('delete')}>
        <ListItemIcon>
          <DeleteIcon fontSize="small" />
        </ListItemIcon>
        <ListItemText>Delete task</ListItemText>
      </MenuItem>
    </Menu>
  )
}

export default CustomContextMenu
