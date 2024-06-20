import classNames from "classnames";
import { ButtonHTMLAttributes } from "react"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  transparent?: boolean;
  color?: string;
  textColor?: string;
}

export const Button = ({ text, transparent, color, textColor, ...props }: Props) => {
  return (
    <button
      {...props}
      className={classNames(
        'p-1 rounded-lg font-bold border-2 border-gray-200',
        { 'bg-opacity-100': transparent },
      )}
      style={{
        borderColor: color ? color : '',
        color: textColor ? textColor : '',
        backgroundColor: color ? color : '',
      }}
    >
      {text}
    </button>
  );
};