import { IoCreate } from "react-icons/io5";
import { MdAssignmentAdd, MdOutlineArrowRightAlt } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <section className="bg-gray-200 text-gray-700 py-10 px-16 flex flex-col gap-4 items-center">
      <div className="flex flex-col items-center gap-2">
        <h4 className="font-bold text-3xl">Features</h4>
        <span>Everything you need to manage your projects</span>
      </div>
      <div className="flex flex-wrap gap-6 justify-center">
        <Link className="border border-solid border-gray-300 rounded-lg shadow flex flex-col gap-4 p-4 bg-transparent hover:bg-white">
          <IoCreate className="text-blue-500 text-3xl" />
          <h6 className="font-semibold">Project Creation</h6>
          <p>Create and manage your projects with ease</p>
          <Link className="text-blue-500 flex gap-3 items-center">
            Start now
            <MdOutlineArrowRightAlt />
          </Link>
        </Link>
        <Link className="border border-solid border-gray-300 rounded-lg shadow flex flex-col gap-4 p-4 bg-transparent hover:bg-white">
          <MdAssignmentAdd className="text-blue-500 text-3xl" />
          <h6 className="font-semibold">Task Assignment</h6>
          <p>Assign tasks to your team members effortlessly</p>
          <Link className="text-blue-500 flex gap-3 items-center">
            Start now
            <MdOutlineArrowRightAlt />
          </Link>
        </Link>
        <Link className="border border-solid border-gray-300 rounded-lg shadow flex flex-col gap-4 p-4 bg-transparent hover:bg-white">
          <RiTeamFill className="text-blue-500 text-3xl" />
          <h6 className="font-semibold">Team Building</h6>
          <p>Build your team and collaborate effetively</p>
          <Link className="text-blue-500 flex gap-3 items-center">
            Start now
            <MdOutlineArrowRightAlt />
          </Link>
        </Link>
      </div>
    </section>
  )
}

export default Features