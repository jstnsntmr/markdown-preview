import { marked } from "marked";
import { useState } from "react";
import "./App.css";

function App() {
  const placeholder = `
  # Welcome to my React Markdown Previewer!

  ## This is a sub-heading...
  ### To start writing, you can edit the part on the left.
  
  You can also check this [link](https://www.markdownguide.org/cheat-sheet/) for a detailed cheat sheet on how to use markdown
  
  You can write inline codes \`code\` like so

  or even a code block

  \`\`\`
  {
    "firstName": "John",
    "lastName": "Smith",
    "age": 25
  }
  \`\`\`
  
  You can also make your text **bold** or _italic_
  
  > or put a blockquote


  You can also make a list:

  Unordered List
  - First item
    - Second item
        - Third item

  Numbered List
  1. First item
  2. Second item
  3. Third item

  Lastly you can also put an image

  ![alt text](image.jpg)
  
  `;

  marked.setOptions({
    breaks: true,
  });

  const [text, setText] = useState(placeholder);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="column col-lg-6">
            <h4>Editor</h4>
            <textarea
              name="editor"
              id="editor"
              onChange={handleChange}
              value={text}
            ></textarea>
          </div>
          <div className="column col-lg-6">
            <h4>Previewer</h4>
            <div
              id="preview"
              dangerouslySetInnerHTML={{ __html: marked(text) }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
