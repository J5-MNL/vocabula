export default function Header(props) {
  const { handleChange } = props;

  function switchTheme() {
    document.body.classList.toggle("dark-mode");
  }

  const handleKeyPress = (e) => {
    if(e.key === 'Enter'){
      handleChange(e);
    }
  }

  return (
    <div className="header-wrapper">
      <header className="header">
        <span className="logo-title">
          v<span className='logo-title-accent'>o</span>cabula
        </span>

        <span className="material-symbols-outlined material-symbols-outlined-1" onClick={switchTheme}>
          contrast
        </span>
      </header>

      <div className="search-wrapper">
        <label className="label" htmlFor="search">What you're looking for?</label>
        <input type="search" name="" id="" placeholder="Type a word here" className="search-bar" onKeyDown={handleKeyPress} />
      </div>

      <span className="material-symbols-outlined material-symbols-outlined-2" onClick={switchTheme}>
        contrast
      </span>
    </div>
  )
}