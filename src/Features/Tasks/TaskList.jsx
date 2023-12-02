import { Link } from 'react-router-dom'
import Card from '../../ui/Card'
import { IoMdAdd } from 'react-icons/io'
import InputField from '../../ui/InputField'

const TaskList = ({tasks, deleteTask}) => {


  let content = tasks?.map((task) => {
            return (
              <div key={task.name}>
                <Card>
                  <h4 className='font-semibold p-2'>{task.name}</h4>
                  <hr />
                  <p className='text-sm p-2 h-fit'>{task.description}</p>
                  <hr />
                  <span className='text-sm p-2'>Assigned to: {task.assignedUser}</span>
                  <hr />
                  <span className='text-sm p-2'>Deadline: {task.deadline.toDate().toDateString()}</span>
                  <hr />
                  <span className='text-sm p-2'>Status: {task.isCompleted ? Completed : "In progress"}</span>
                  <hr />
                  <div className='flex p-2 flex gap-2 items-center'>
                    {/* <Link to={`${task.name}/edit`} className='bg-orange-700 w-16 h-8 p-2 rounded font-semibold flex justify-center items-center'>
                      <button className='text-white'>Edit</button>
                    </Link> */}
                    <Link 
                      className='bg-red-700 w-16 h-8 p-2 rounded p-2 font-semibold flex items-center justify-center gap-2'
                      onClick = {() => deleteTask(task)}
                    >
                      <p className='text-white'>Delete</p>
                    </Link>
                  </div>
                </Card>
              </div>
            )

  })

  return (
    <section className='w-full flex gap-3 flex-wrap'>
      {tasks ? (
        content
      ) : (
        <div className='flex flex-col w-[50%] items-center gap-8'>
          <p className='text-xl font-medium'>You have not assigned any tasks yet</p>
          <Link to="addtask" className='flex items-center gap-2 bg-[#00396B] text-white p-2 rounded'>
            <IoMdAdd />
            <span>Assign a new task</span>
          </Link>
        </div>
      )}
    
</section>
  )
}

export default TaskList