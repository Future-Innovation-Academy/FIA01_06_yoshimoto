import React, { useState, useEffect } from "react";
 
const App = () => {
 const [input, setInput] = useState("");
 const [todoLists, setTodoLists] = useState([]);
 const [todoEditing, setTodoEditing] = useState(null);
 const [editingText, setEditingText] = useState("");
 
 useEffect(() => {
   const temp = localStorage.getItem("keepTodo");
   const loadedTodo = JSON.parse(temp);
   if (loadedTodo) {
     setTodoLists(loadedTodo);
   }
 }, []);
 
 useEffect(() => {
   const temp = JSON.stringify(todoLists);
   localStorage.setItem("keepTodo", temp);
 }, [todoLists]);
 
 const handleOnSubmit = () => {
   const newTodo = {
    // todolist.idの乱数作成？
     id: Math.floor(Math.random() * 1000),
     value: input,
   };
   if (input !== "") setTodoLists([...todoLists, newTodo]);
   setInput("");
 };
 
 const addTodo = (e) => {
   e.preventDefault();
   handleOnSubmit();
 };
 
 const deleteListButton = (id) => {
   const newArray = todoLists.filter((todoLists) => todoLists.id !== id);
   setTodoLists(newArray);
 };
 
 const submitEdits = (id) => {
   const updatedTodoLists = [...todoLists].map((todoList) => {
     if (todoList.id === id) {
       todoList.value = editingText;
     }
     return todoList;
   });
   setTodoLists(updatedTodoLists);
   setTodoEditing(null);
   setEditingText("");
 };
 
 return (
   <>
     <h1 className="text-center text-3xl font-bold mt-10">
       Todo List Practice
     </h1>
     <div className="text-center mt-7">
       <form onSubmit={addTodo}>
         <input
           type="text"
           value={input}
           onChange={(e) => setInput(e.target.value)}
           placeholder="タスクを入力"
           className=" p-3 w-4/5 border-2"
         />
         <button
           type="submit"
           className="bg-indigo-700 font-semibold text-white py-2 px-4 rounded m-6 w-3/4 container mx-auto"
         >
           追加
         </button>
       </form>
 
       {/* 以降map開始 */}
 
       <div className="mt-3 container mx-auto">
         {todoLists.map((todoList) => {
           return (
             <>
               {todoEditing === todoList.id ? (
                 <input
                   type="text"
                   placeholder="編集内容を入力"
                   className="m-7 p-3 w-4/5 border-2"
                   value={editingText}
                   onChange={(e) => setEditingText(e.target.value)}
                 />
               ) : (
                 <div>{}</div>
               )}
 
               <ul className="flex justify-between mx-20">
                 <li key={todoList.id}>{todoList.id}</li>
                 <li>{todoList.value}</li>
                 <li>
                   <button onClick={() => deleteListButton(todoList.id)}>
                     削除
                   </button>
 
                   {todoList.id === todoEditing ? (
                     <button
                       onClick={() => submitEdits(todoList.id)}
                       className="ml-7"
                     >
                       再投稿
                     </button>
                   ) : (
                     <button
                       onClick={() => setTodoEditing(todoList.id)}
                       className="ml-7"
                     >
                       編集
                     </button>
                   )}
                 </li>
               </ul>
             </>
           );
         })}
       </div>
     </div>
   </>
 );
};
 
export default App;