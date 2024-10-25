export default function Error(props) {
  const { title, message, resolution } = props.data;
  
  return (
    <section className="error">
      <div className="error-wrapper">
        <p className="error-title">{title}</p>
        <p className="error-message">{message}</p>
      </div>
      <p className="error-resolution">{resolution}</p>
    </section>
  )
}

/* 
  The goal with the CSS is to center everything inside the container and just show the text send by the API:

  request.title, request.message and request.resolution
*/

// .header,
// .search-wrapper {
//   min-height: 17.5vh;
// }

// .main {
//   border: 1px solid var(--accent);
//   display: flex;
//   min-height: 63.725vh;
// }