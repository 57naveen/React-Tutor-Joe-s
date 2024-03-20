import PropTypes from "prop-types"

export const FunctionSample = (props) => {

  const {handleClick}= props
  return (
    <div>
      <p>This is function component.</p>
      <button onClick={handleClick}>click me</button>
    </div>
  )
}


FunctionSample.propTypes={
  handleClick:PropTypes.func.isRequired,
}