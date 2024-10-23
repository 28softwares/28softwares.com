type Props = {
  tailwind_class: string
  label: string
  callback?: VoidFunction
}
export const RectButton = ({ tailwind_class, label, callback }: Props) => {
  return (
    <div>
      <button
        className={`btn fill-animation text-white ${tailwind_class}`}
        onClick={callback}
      >
        {label}
      </button>
    </div>
  )
}
