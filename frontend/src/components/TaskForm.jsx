import { useState } from 'react';
import { PlusCircle } from 'lucide-react';

const TaskForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (!title) return;
    
    onAdd({ title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={onSubmit} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Add New Task</h3>
      <div className="grid grid-cols-1 gap-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Task Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
            placeholder="What needs to be done?"
            required
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description (Optional)</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={2}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
            placeholder="Add more details..."
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Task
          </button>
        </div>
      </div>
    </form>
  );
};

export default TaskForm;
