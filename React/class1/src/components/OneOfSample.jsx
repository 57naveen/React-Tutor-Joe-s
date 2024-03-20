import PropTypes from "prop-types"

export const OneOfSample = (props) => {

  const{color} = props
  return (
    <div style={{backgroundColor:color, padding:"20px", color:"white"}}>
      <p>This component has a background color of {color}.</p>
    </div>
  )
}

                                            
OneOfSample.propTypes={
  color:PropTypes.oneOf(["Red","green","blue"]).isRequired
};