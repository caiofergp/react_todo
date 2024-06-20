'use client'
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
    <main>
      <div className="bg-purple-500">
        <h1 className="font-bold text-center">My To Do List</h1>
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-end gap-4 px-4">
            <Input
              label="Title"
              onChange={(ev) => setTitle(ev.target.value)}
              value={title}
            />
            <Button
              text="Add"
              onClick={() => addTask()}
              color="white"
            />
          </div>
          <ul className="border-[1px] border-gray-400 divide-y divide-gray-400">
            {
              tasks?.map((task, index) => (
                <li
                  key={index}
                  className={classNames("flex justify-between items-center px-4 py-2", {
                    "bg-green-500": task.checked,
                    "bg-gray-200": index % 2 === 0 && !task.checked,
                    "bg-white": index % 2 === 1 && !task.checked,
                  })}
                >
                  <div
                    className="flex-1 space-x-4 cursor-pointer"
                    onClick={() => checkTask(index)}
                  >
                    {task.checked && <span>{"✔️"}</span>}
                    <span>{task.title}</span>
                  </div>
                  <Button
                    text="Deletar"
                    onClick={() => deleteTask(index)}
                    color="red"
                  />
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </main>
  );
}
