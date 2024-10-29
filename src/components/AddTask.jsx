const AddTask = ({ onClick, setAddTask }) => {
  const addTask = () => {
    const txtText = document.getElementById('txtText')
    if (txtText.value.trim() === '') {
      alert('Please enter a title')
      return
    }

    onClick(txtText.value)
    txtText.value = ''
  }

  return (
    <div className='card add-card' style={{ width: '32rem' }}>
      <div className='card-body d-flex gap-2'>
        <input
          type='text'
          className='form-control'
          id='txtText'
          autoComplete='off'
          placeholder='Title'
        />
        <button className='btn text-nowrap btn-primary w-25' onClick={addTask}>
          Add
        </button>
        <button
          className='btn text-nowrap btn-dark w-25'
          onClick={() => setAddTask(false)}
        >
          Cancel
        </button>
      </div>
    </div>
  )
}

export default AddTask
