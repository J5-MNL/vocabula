import AlternativeDefinition from "./AlternativeDefinition";

export default function Main(props) {
  function assignAudio() {
    for (let i = 0; i < props.data[0].phonetics.length; ++i) {
      if(props.data[0].phonetics[i].audio) {
        return props.data[0].phonetics[i].audio;
      } 
    }
  }

  function playAudio() {
    const newAudio = new Audio(assignAudio())
    newAudio.play()
  }

  const response= props.data[0];

  const { word, meanings, phonetic } = response;
  const { partOfSpeech, definitions } = meanings[0]; 
  const { definition, example } = definitions[0];

  let key = 0;

  // Error 404 returns an object with just 3 properties: title, message and resolution

  // const { title, message, resolution } = props.data;

  return(
    <>
      <main className="main">
        <div className="section-1">
          <div className="wrapper-flex">
            <div>
              <div className="word-wrapper">
                <div className="word">
                  {response ? word : ""}
                </div>
                <div className="partOfSpeech">
                  {response ? `(${partOfSpeech})` : ""}
                </div>
              </div>
              <div className="phoneme">
                {response ? phonetic : ""}
              </div>
            </div>
            
            <span className="material-symbols-outlined pronunciation" onClick={playAudio}>
              play_circle
            </span>
          </div>

          <div className="word-1">
            <div className="definition">
              {response ? definition : ""}
            </div>
            <div className="example">
              {example ? example : ""}
            </div>
          </div>
          <a className="source-url source-url-1" target="_blank" href={response ? response.sourceUrls[0] : ""}>
          {response ? response.sourceUrls[0] : ""}
        </a>
        </div>

        <div className="section-2">
          {<div className="partOfSpeech alternativePartOfSpeech">
            {meanings[1] ? meanings[1].partOfSpeech : ""}
          </div>}
          {meanings[1] ? 
            <ol className="definitions-list">
              {meanings[1].definitions.map(definition => {
                return <AlternativeDefinition key={key++} data={definition} />
              })}
            </ol> : ""
          }
        </div>

        <a className="source-url source-url-2" target="_blank" href={response ? response.sourceUrls[0] : ""}>
          {response ? response.sourceUrls[0] : ""}
        </a>
      </main>
    </>
  )
}