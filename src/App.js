// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './App.css'; 

// const App = () => {
//   const [tasks, setTasks] = useState([]);
//   const [appointments, setAppointments] = useState([]);
//   const [newTask, setNewTask] = useState('');
//   const [newAppointment, setNewAppointment] = useState('');

//   useEffect(() => {
//     const getTasks = async () => {
//       const response = await axios.get('http://localhost:5000/tasks');
//       setTasks(response.data);
//     };
//     getTasks();

//     const getAppointments = async () => {
//       const response = await axios.get('http://localhost:5000/appointments');
//       setAppointments(response.data);
//     };
//     getAppointments();
//   }, []);

//   const handleAddTask = async (e) => {
//     e.preventDefault();
//     const newTaskData = { text: newTask, day: '', reminder: false, id: Math.random() };
//     await axios.post('http://localhost:5000/tasks', newTaskData);
//     setTasks([...tasks, newTaskData]);
//     setNewTask('');
//   };

//   const handleAddAppointment = async (e) => {
//     e.preventDefault();
//     const newAppointmentData = { text: newAppointment, day: '', reminder: false, id: Math.random() };
//     await axios.post('http://localhost:5000/appointments', newAppointmentData);
//     setAppointments([...appointments, newAppointmentData]);
//     setNewAppointment('');
//   };

//   const handleDeleteTask = async (id) => {
//     await axios.delete(`http://localhost:5000/tasks/${id}`);
//     setTasks(tasks.filter((task) => task.id !== id));
//   };

//   const handleDeleteAppointment = async (id) => {
//     await axios.delete(`http://localhost:5000/appointments/${id}`);
//     setAppointments(appointments.filter((appointment) => appointment.id !== id));
//   };

//   const getRecommendations = () => {
//     // TO DO: implement recommendation logic based on tasks and appointments
//     return 'Recommendations will be displayed here';
//   };

//   return (
//     <div className="chatbot-container">
//       <div className="chatbot-header">
//         <h1>Task and Appointment Bot</h1>
//       </div>
//       <div className="chatbot-body">
//         <div className="chatbot-task-form">
//           <form onSubmit={handleAddTask}>
//             <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder="Add a new task" />
//             <button type="submit">Add Task</button>
//           </form>
//           <ul>
//             {tasks.map((task) => (
//               <li key={task.id}>
//                 {task.text} - {task.day} - {task.reminder ? 'Reminder' : ''}
//                 <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div className="chatbot-appointment-form">
//           <form onSubmit={handleAddAppointment}>
//             <input type="text" value={newAppointment} onChange={(e) => setNewAppointment(e.target.value)} placeholder="Add a new appointment" />
//             <button type="submit">Add Appointment</button>
//           </form>
//           <ul>
//             {appointments.map((appointment) => (
//               <li key={appointment.id}>
//                 {appointment.text} - {appointment.day} - {appointment.reminder ? 'Reminder' : ''}
//                 <button onClick={() => handleDeleteAppointment(appointment.id)}>Delete</button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//       <div className="chatbot-footer">
//         <p>{getRecommendations()}</p>
//       </div>
//     </div>
//   );
// };

// export default App;


import React from 'react';
import './App.css';

const App = () => {
  return (
      <div className="chat-container">
          <div className="chat-header">
              <h2>Chat Room</h2>
          </div>
          <div className="chat-messages">
              <div className="message received">Hello! How are you?</div>
              <div className="message sent">I'm good, thanks! How about you?</div>
              <div className="message received">I'm doing well, thank you!</div>
          </div>
          <div className="chat-input">
              <input type="text" placeholder="Type a message..." />
              <button>Send</button>
          </div>
      </div>
  );
};

export default App;