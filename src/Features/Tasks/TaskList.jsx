import { Link } from 'react-router-dom'
import Card from '../../ui/Card'

const TaskList = ({tasks}) => {

  let content = tasks?.map((task) => {
            return (
              <div key={task.name}>
                <Card>
                  <h4 className='font-semibold p-2'>{task.name}</h4>
                  <div className='h-[1px] w-full bg-gray-700'></div>
                  <p className='text-sm p-2'>{task.description}</p>
                  <div className='h-[1px] w-full bg-gray-700'></div>
                  <span className='text-sm p-2'>Deadline: {task.deadline.toDate().toDateString()}</span>
                  <span className='text-sm p-2'>Status: {task.isCompleted ? Completed : "In progress"}</span>
                  <div className='h-[1px] w-full bg-gray-700'></div>
                  <div className='flex'>
                    <Link to="editproject" className='p-2 font-semibold flex items-center gap-2 '>
                      <button className='border p-1 rounded text-white bg-orange-700'>Edit</button>
                    </Link>
                    <Link className='p-2 font-semibold flex items-center gap-2 '>
                      <button className='border p-1 rounded text-white bg-red-700'>Delete</button>
                    </Link>
                  </div>
                </Card>
              </div>
            )

  })

  return (
    <section>
      {!tasks && <p>There are no tasks for this project</p>}
      {content}
    </section>
  )
}

export default TaskList