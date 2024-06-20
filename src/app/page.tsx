'use client'
import { CheckIcon } from "@/components/icons/CheckIcon";
import { XIcon } from "@/components/icons/XIcon";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import classNames from "classnames";
import { useState } from "react";

interface Tasks {
  title: string;
  checked: boolean
}

export default function Home() {
  const [title, setTitle] = useState('');
  const [tasks, setTasks] = useState<Tasks[]>([]);

  const addTask = () => {
    if (!title) return;
    setTasks((task) => {
      return [...task, { title, checked: false }]
    })
    setTitle('');
  }

  const checkTask = (index: number) => {
    setTasks(values => {
      const data = [...values];
      data[index] = { ...data[index], checked: !data[index].checked };
      return data;
    })
  }

  const deleteTask = (index: number) => {
    setTasks(value => {
      const data = [...value]
      delete data[index]
      return data.filter(isValid => isValid);
    })
  }

  return (
    <div className="flex items-start justify-center pt-20 bg-gray-100 min-h-screen">
      <div className="bg-white shadow-md max-w-xl w-full border rounded-md overflow-hidden py-6 px-4">
        <h1 className="font-bold text-center mb-4">My To Do List</h1>
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-end gap-3">
            <Input
              placeholder="Title"
              value={title}
              onChange={(ev) => setTitle(ev.target.value)}
            />
            <Button
              text="Add"
              color="white"
              onClick={addTask}
            />
          </div>
          <ul className="divide-y divide-gray-100">
            {
              tasks?.map((task, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center px-4 py-2 gap-2"
                >
                  <div 
                    className="w-6 h-6 border rounded-full cursor-pointer flex items-center justify-center"
                    onClick={() => checkTask(index)}
                  >
                    {task.checked && <CheckIcon className="h-4 w-4 text-gray-600" />}
                  </div>
                  <div 
                    className={classNames('flex-1 space-x-4 text-base', {
                      'line-through': task.checked,
                    })}
                  >
                    <span>{task.title}</span>
                  </div>
                  <button
                    className="bg-transparent p-1 rounded-full transition-all hover:bg-gray-100"
                    type="button" 
                    onClick={() => deleteTask(index)}
                  >
                    <XIcon className="h-5 w-5 text-gray-600" />
                  </button>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  );
}
