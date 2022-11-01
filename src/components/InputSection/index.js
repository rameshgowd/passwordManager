import './index.css'

const InputItem = props => {
  const {itemDetails, isChecked, onDeleteItem} = props
  const {id, websiteInput, username, passwordInput} = itemDetails

  const onClickDelete = () => {
    onDeleteItem(id)
  }
  const passwordItem = isChecked ? (
    <p className="para">{passwordInput}</p>
  ) : (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png "
      alt="stars"
    />
  )
  const initial = websiteInput[0].toUpperCase()

  return (
    <li className="list-item-container">
      <div className="initial">{initial}</div>
      <div className="text-content">
        <p className="heading">{websiteInput}</p>
        <p className="para">{username}</p>
        {passwordItem}
      </div>
      <button className="delete-btn" type="button" onClick={onClickDelete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}
export default InputItem
