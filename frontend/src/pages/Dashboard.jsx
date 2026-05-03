import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import api from '../services/api';
import TaskForm from '../components/TaskForm';
import TaskCard from '../components/TaskCard';
import { CheckSquare } from 'lucide-react';

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }

    const fetchTasks = async () => {
      try {
        const response = await api.get('/tasks');
        setTasks(response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, [user, navigate]);

  const handleAddTask = async (taskData) => {
    try {
      const response = await api.post('/tasks', taskData);
      setTasks([response.data, ...tasks]);
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await api.delete(`/tasks/${taskId}`);
      setTasks(tasks.filter((task) => task._id !== taskId));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const handleUpdateStatus = async (taskId, newStatus) => {
    try {
      const response = await api.put(`/tasks/${taskId}`, { status: newStatus });
      setTasks(tasks.map(task => 
        task._id === taskId ? response.data : task
      ));
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 flex items-center">
          <CheckSquare className="h-8 w-8 text-blue-600 mr-3" />
          <h1 className="text-3xl font-bold text-gray-900">Your Dashboard</h1>
        </div>
        
        <TaskForm onAdd={handleAddTask} />

        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            My Tasks 
            <span className="ml-2 bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
              {tasks.length}
            </span>
          </h2>
          
          {tasks.length === 0 ? (
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 text-center">
              <p className="text-gray-500">You don't have any tasks yet. Create one above!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tasks.map((task) => (
                <TaskCard
                  key={task._id}
                  task={task}
                  onDelete={handleDeleteTask}
                  onUpdateStatus={handleUpdateStatus}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
