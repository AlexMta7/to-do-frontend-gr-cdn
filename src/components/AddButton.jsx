import { IconPlus } from '@tabler/icons-react'

const AddButton = ({ onClick }) => {
  return (
    <button className='floating-button' onClick={onClick}>
      <h5 style={{ fontSize: '18px', margin: 0 }}>
        <IconPlus stroke={2} />
      </h5>
    </button>
  )
}

export default AddButton
