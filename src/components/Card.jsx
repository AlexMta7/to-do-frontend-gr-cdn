import { IconDeviceFloppy, IconEdit, IconTrash, IconX } from '@tabler/icons-react'
import { useEffect, useState } from 'react'

const Card = ({ tasks, setTasks, item, editTask, deleteTask }) => {
  const [edit, setEdit] = useState(false)
  const [title, setTitle] = useState(item?.title)

  useEffect(() => {
    setTitle(item?.title)
  }, [tasks, item])

  const handleTitleChange = (e) => {
    setTitle(e.target.value)
    setTasks(
      tasks.map((task) => {
        if (task.id === item.id) {
          return { ...task, title: e.target.value }
        }
        return task
      })
    )
  }

  const showEdit = () => {
    setEdit(!edit)
  }

  const handleEdit = (item) => {
    if (edit) {
      const txtText = document.getElementById(`txtText-${item?.id}`)
      if (txtText.value.trim() === '') {
        alert('Please enter a title')
        return
      }

      item.title = txtText.value
      editTask(item)
      setEdit(!edit)
    } else {
      const txtText = document.getElementById(`txtText-${item?.id}`)
      txtText.value = item.title
    }
  }

  return (
    <div className='card' style={{ width: '24rem' }}>
      <div className='card-body d-flex align-items-center gap-2'>
        {!edit ? (
          <>
            <input
              className='form-check-input'
              type='checkbox'
              value=''
              checked={item?.completed ? true : false}
              id={`check-${item?.id}`}
              onChange={() => {
                item.completed = !item.completed
                editTask(item)
              }}
            />
            <h5 className='card-title m-0'>{item?.title}</h5>
            {/* Edit */}
            <span
              className='ms-auto'
              style={{ cursor: 'pointer' }}
              onClick={() => showEdit()}
            >
              <IconEdit stroke={1.5} color='#0056b3' />
            </span>
            {/* Delete */}
            <span
              className='ms-2'
              style={{ cursor: 'pointer' }}
              onClick={() => deleteTask(item?.id)}
            >
              <IconTrash stroke={1.5} color='red' />
            </span>
          </>
        ) : (
          <>
            <input
              type='text'
              className='form-control'
              id={`txtText-${item?.id}`}
              placeholder='Title'
              value={title}
              onChange={handleTitleChange}
            />
            <span
              className='ms-auto'
              style={{ cursor: 'pointer' }}
              onClick={() => handleEdit(item)}
            >
              <IconDeviceFloppy stroke={1.5} color='#0056b3' />
            </span>
            <span
              className='ms-auto'
              style={{ cursor: 'pointer' }}
              onClick={() => showEdit()}
            >
              <IconX stroke={1.5} color='red' />
            </span>
          </>
        )}
      </div>
    </div>
  )
}

export default Card
