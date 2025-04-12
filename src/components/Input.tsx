
interface InputProp {
    placeholder: string;
    inputType?: "string" | "password"
    ref?: any;
    required ?: boolean
  }

export const Input = ( { placeholder , inputType , ref , required} : InputProp ) => {
    return <div >
        <input className="w-full px-4 py-2 outline-hidden rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200" ref={ref} type={inputType} required={required} placeholder={ placeholder } />
    </div>
}