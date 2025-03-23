import chefClaudeLogo from "/src/Images/chef-claude-icon.png"


function Header(){
  return(
    <header>
      <img src={chefClaudeLogo} alt="chef Image" />
      <h1>Chef Claude</h1>
    </header>
  )
}

export default Header