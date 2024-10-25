export default function AlternativeDefinition(props) {
  const { definition, example } = props.data;
  
  return (
    <div className="word-2">
      <div className="definition alternative-definition">
        {definition && <li> {definition ? definition : ""} </li>}
      </div>
      <div className="example alternative-example">
        {example ? example : ""}
      </div>
    </div>
  )
}