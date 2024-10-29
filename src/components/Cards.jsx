import Card from './Card'

const Cards = ({ tasks, setTasks, editTask, deleteTask }) => {
  return (
    <>
      {/* Array se sustituirá por el array de datos que venga */}
      {tasks.map((item, index) => (
        <Card
          key={index}
          tasks={tasks}
          setTasks={setTasks}
          item={item}
          editTask={editTask}
          deleteTask={deleteTask}
        />
      ))}
    </>
  )
}

export default Cards
