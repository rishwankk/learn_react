
import ProfilePic from './assets/pic.jpg'
const Card=()=>{
    return (    
    <div className='card'>
        <img  className='card-pic'  src={ProfilePic} alt="profile-pic" />
        <h1 className='card-title'>Rishwan</h1>
        <p className='card-text'> My Name is Rishwan K iam a Mern Stack Developer</p>
    </div>

    )
}
export default Card