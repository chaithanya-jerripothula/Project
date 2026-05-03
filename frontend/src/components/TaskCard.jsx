import { Trash2, Edit2 } from 'lucide-react';

const TaskCard = ({ task, onDelete, onUpdateStatus }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'in-progress':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5 transition-all hover:shadow-md">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-semibold text-gray-900">{task.title}</h3>
        <span
          className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusColor(
            task.status
          )}`}
        >
          {task.status}
        </span>
      </div>
      
      {task.description && (
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{task.description}</p>
      )}
      
      <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
        <div className="flex space-x-2">
          <select
            value={task.status}
            onChange={(e) => onUpdateStatus(task._id, e.target.value)}
            className="text-sm border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 text-gray-700 bg-gray-50 px-2 py-1"
          >
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <button
          onClick={() => onDelete(task._id)}
          className="text-gray-400 hover:text-red-600 transition-colors"
          title="Delete task"
        >
          <Trash2 className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
