
import PropsTypes from 'prop-types'

const Students=(props)=>{
    return (
        <>  
        <p>name:{props.name} </p>
        <p>Age:{props.rollnumber} </p>
        <p>Place:{props.place} </p>
        </>
    )

    
}

Students.defaultProps={
    name:'Raju',
    rollnumber:20,
    place:'pandikkad'
}
export default Students