import { useState } from 'react'
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import PersonIcon from '@mui/icons-material/Person'
import LabelIcon from '@mui/icons-material/Label'
import CheckBoxIcon from '@mui/icons-material/CheckBox'
import DateRangeIcon from '@mui/icons-material/DateRange'
import AttachFileIcon from '@mui/icons-material/AttachFile'
import ImageIcon from '@mui/icons-material/Image'
import ViewListIcon from '@mui/icons-material/ViewList'
import AddIcon from '@mui/icons-material/Add'
import VisibilityIcon from '@mui/icons-material/Visibility'
import FormatBoldIcon from '@mui/icons-material/FormatBold'
import FormatItalicIcon from '@mui/icons-material/FormatItalic'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'
import LinkIcon from '@mui/icons-material/Link'
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined'

interface TaskModalProps {
  open: boolean;
  handleClose: () => void
}

const TaskModal = ({ open, handleClose }: TaskModalProps) => {
  const [description, setDescription] = useState('')

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="task-modal-title"
    >
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        borderRadius: 2,
        maxHeight: '90vh',
        overflow: 'auto',
      }}>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>

        <Typography id="task-modal-title" variant="h6" component="h2" sx={{ mb: 2 }}>
          HI
        </Typography>
        <Typography variant="caption" sx={{ mb: 2, display: 'block' }}>
          in list To do
        </Typography>

        <Box sx={{ display: 'flex', mb: 2 }}>
          <VisibilityIcon sx={{ mr: 1 }} />
          <Typography variant="body2">Watch</Typography>
        </Box>

        <Typography variant="h6" sx={{ mb: 1 }}>Description</Typography>
        <Box sx={{ mb: 2, bgcolor: '#f5f5f5', p: 1, borderRadius: 1 }}>
          <Box sx={{ display: 'flex', mb: 1 }}>
            <IconButton size="small"><FormatBoldIcon fontSize="small" /></IconButton>
            <IconButton size="small"><FormatItalicIcon fontSize="small" /></IconButton>
            <IconButton size="small"><FormatListBulletedIcon fontSize="small" /></IconButton>
            <IconButton size="small"><LinkIcon fontSize="small" /></IconButton>
            <IconButton size="small"><ImageOutlinedIcon fontSize="small" /></IconButton>
          </Box>
          <TextField
            multiline
            rows={4}
            fullWidth
            variant="standard"
            placeholder="Add a more detailed description..."
            value={description}
            onChange={(e) => { setDescription(e.target.value) }}
            InputProps={{ disableUnderline: true }}
          />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <Button variant="contained" color="primary" size="small">Save</Button>
          <Button variant="text" size="small">Formatting help</Button>
        </Box>

        <Typography variant="h6" sx={{ mb: 1 }}>Activity</Typography>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Write a comment..."
          size="small"
        />

        <Box sx={{ mt: 2 }}>
          <Typography variant="h6" sx={{ mb: 1 }}>Add to card</Typography>
          <List dense>
            {[
              { icon: <PersonIcon />, text: 'Members' },
              { icon: <LabelIcon />, text: 'Labels' },
              { icon: <CheckBoxIcon />, text: 'Checklist' },
              { icon: <DateRangeIcon />, text: 'Dates' },
              { icon: <AttachFileIcon />, text: 'Attachment' },
              { icon: <ImageIcon />, text: 'Cover' },
              { icon: <ViewListIcon />, text: 'Custom Fields' },
            ].map((item, index) => (
              <ListItem button key={index}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Typography variant="h6" sx={{ mb: 1 }}>Power-Ups</Typography>
        <Button startIcon={<AddIcon />} fullWidth variant="outlined" sx={{ mb: 2 }}>
          Add Power-Ups
        </Button>

        <Typography variant="h6" sx={{ mb: 1 }}>Automation</Typography>
        <Button startIcon={<AddIcon />} fullWidth variant="outlined" sx={{ mb: 2 }}>
          Add button
        </Button>

        <Typography variant="h6" sx={{ mb: 1 }}>Actions</Typography>
        <List dense>
          {['Move', 'Copy', 'Make template', 'Archive', 'Share'].map((text, index) => (
            <ListItem button key={index}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Modal>
  )
}

export default TaskModal