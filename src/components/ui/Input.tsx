'use client'
import classNames from "classnames";
import { InputHTMLAttributes } from "react"

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  password?: boolean;
}

export const Input = ({ label, error, password, type, className, ...props }: Props) => {
  return (
    <div className="w-full">
      <label className="flex flex-col relative">
        <span className="font-bold text-sm">{label}</span>
        <input
          {...props}
          className={classNames("border-2 border-gray-200 p-1 rounded-lg outline-none", className)}
          placeholder={label}
        />
      </label>
      {error && <span className="text-red-500">{error}</span>}
    </div>
  );
};