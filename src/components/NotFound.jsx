import { TbError404 } from 'react-icons/tb'

const NotFound = () => {
  return (
    <div className="flex flex-col items-center gap-5 mt-16 text-gray-400">
      <h4 className="text-4xl">Page Not Found</h4>
      <TbError404 size={120} />
    </div>
  )
}

export default NotFound
