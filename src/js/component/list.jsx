// import React, { useState } from "react";

// const List = () => {
//   const [tasks, setTasks] = useState("");
//   const [listOfTasks, setListOfTasks] = useState([]);
//   const handlerDelete = (index) => {
//     const updateTask = tasks.filter((_, i) => i !== index);
//     setTasks(updateTask);
//   };
//   return (
//     <div className="text-center mt-5 container">
//       <div className="input-group">
//         <span className="input-group-text">tasks</span>
//         <input
//           type="text"
//           className="form-control"
//           id="tasks"
//           placeholder="Enter a new task"
//           value={tasks}
//           onChange={(e) => {
//             setTasks(e.target.value);
//           }}
//           onKeyDown={(e) => {
//             console.log(e);
//             if (e.key === "Enter" && tasks !== "") {
//               setListOfTasks([...listOfTasks, tasks ]);
//               console.log(listOfTasks);
//             }
//           }}
//         />
//       </div>
//       {listOfTasks}

//       {/* {listOfTasks.map((value) => {
//       return <h1>{value}</h1>;
//     })} */}

//       <button
//         className="btn btn-danger mt-3"
//         onClick={() => handlerDelete(index)}
//       >
//         Limpiar
//       </button>
//       <ul>
//         {listOfTasks.map ((task, index)=>(
//         <li key={index}>{task}</li>))}

//       </ul>
//     </div>
//   );
// };

// export default List;

// import React, { useState } from "react";
// const List = () => {
//   const [tasks, setTasks] = useState("");
//   const [listOfTasks, setListOfTasks] = useState("");
//   return (
//     <div className="text-center mt-5 container">
//       <div className="input-group">
//         <span className="input-group-text">tasks</span>
//         <input
//           type="text"
//           className="form-control"
//           id="tasks"
//           placeholder="Enter a new task"
//           value={tasks}
//           onChange={(e) => {
//             setTasks(e.target.value);
//           }}
//           onKeyDown={(e) => {
//             console.log(e)
//             if (e.key === "Enter" && tasks !== "") {
//               setListOfTasks([...listOfTasks, <h1>{tasks}</h1>]);
//               console.log(listOfTasks);
//             }
//           }}
//         />
//       </div>
//       {listOfTasks}
//     </div>
//   );
// };
// export default List;

// <button className="btn btn-danger mt-3" onClick={() => setListOfTasks([])}>
//         Limpiar todo
//       </button>

import React, { useState } from "react";

const List = () => {
  const [tasks, setTasks] = useState("");
  const [listOfTasks, setListOfTasks] = useState([]);

  const handlerDelete = (index) => {
    const updatedTasks = listOfTasks.filter((_, i) => i !== index);
    setListOfTasks(updatedTasks);
  };

  return (
    <div className="text-center mt-5 container">
      <h1>Pending Tasks</h1>
      <div className="input-group border-opacity-25">
        <span className="input-group-text"><h3>tasks</h3></span>
        <input
          type="text"
          className="form-control"
          id="tasks"
          placeholder="Enter a new task"
          value={tasks}
          onChange={(e) => {
            setTasks(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" && tasks.trim() !== "") {
              setListOfTasks([...listOfTasks, tasks]);
              setTasks("");
            }
          }}
        />
      </div>

      <ul>
        {listOfTasks.map((task, index) => (
          <li key={index}>
            {task}
            <button
              className="btn btn-sm text-secondary ms-2"
              onClick={() => handlerDelete(index)}
            >
              <div className="icon"><i className="fa-solid fa-xmark"></i></div>
            </button>
          </li>
        ))}
      </ul>
      <button className="btn btn-light mt-3" onClick={() => setListOfTasks([])}>
        <b>Clear</b>
      </button>
    </div>
  );
};

export default List;
