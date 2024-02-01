import Details from "./Details.js";
import CommentsContainer from "./CommentsContainer.js";

import video from "../data/video.js";

const { embedUrl, createdAt, downvotes, id, title, upvotes, views, comments} = video

function App() {

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <Details 
        title={title} 
        upvotes={upvotes}
        downvotes={downvotes}
        createdAt={createdAt}
        views={views}
      />
      <CommentsContainer comments={comments} />
    </div>
  );
}

export default App;
