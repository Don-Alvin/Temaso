import classNames from 'classnames'

const InputField = ({value, label, placeholder, onChange, id, type, accept, ...rest}) => {

  const classes  = classNames('border rounded shadow p-2', rest.className)

  return (
    <div className='flex flex-col'>
        {label && <label htmlFor={id}>{label}</label>}
      <input
        type={type}
        id={id}
        value={value}
        className={classes}
        placeholder={placeholder}
        onChange={onChange}
        accept={accept}
      />
    </div>  
  )
}

export default InputField