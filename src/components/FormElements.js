import { Link } from "react-router-dom";


export function Form({children, handleSubmit}){
  return(
        <form
          onSubmit={handleSubmit}
          className="md:w-5/6 lg:w-2/3 flex flex-col rounded p-12 bg-white dark:bg-slate-900 rounded-sm shadow-md md:my-16"
        >
          {children}
        </form>
  )
}
export function Label({children}){
  return(
     <label className="block my-1">
        {children}
     </label>
  )
}
export function Input({ type, placeholder, value, setValue }) {
  return (
    <input
      className={`
      mt-1 block w-full px-3 py-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded text-sm shadow-sm placeholder-slate-400
      focus:outline-none dark:focus:border-sky-800 focus:border-sky-500 focus:ring-1 darK:focus:ring-sky-800 focus:ring-sky-500
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500`}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

export function Span({ text }) {
  return (
    <span className="block text-sm font-medium text-slate-700 dark:text-slate-300">
      {text}
    </span>
  );
}
export function Button({ text }) {
  return (
    <button
      className="bg-blue-500 uppercase my-4 rounded-sm py-2 px-6 text-slate-100 text-sm
          hover:opacity-80 transition-opacity "
    >
      {text}
    </button>
  );
}
export function FormLink({ text, href }) {
  return (
    <Link
      to={href}
      className="text-slate-700 dark:text-slate-300 text-sm hover:opacity-80 my-1"
    >
      {text}
    </Link>
  );
}
