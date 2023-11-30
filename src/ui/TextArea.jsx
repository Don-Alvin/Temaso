import classNames from "classnames"

const TextArea = ({id, cols, name, rows, placeholder, value, onChange, ...rest}) => {

  const classes = classNames('border rounded shadow p-4 bg-white placeholder:text-gray-700', rest.className)

  return (
    <textarea
     className={classes}
     name={name} 
     id={id} 
     cols={cols} 
     rows={rows} 
     placeholder={placeholder}
     value={value}
     onChange={onChange}
    /> 
  )
}

export default TextArea