import './index.css'

const UserProfile = props => {
  const {userDetails} = props
  const {imgUrl, name, role} = userDetails

  return (
    <li className="user-card-container">
      <img className="avatar" src={imgUrl} alt="avatar" />
      <div className="user-details-container">
        <p className="user-name">{name}</p>
        <p className="user-designation">{role}</p>
      </div>
    </li>
  )
}
export default UserProfile
