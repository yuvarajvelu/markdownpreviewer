import React from 'react';
import marked from 'marked';
import './App.css';
let markedText = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: markedText}; 
    this.handleChange = this.handleChange.bind(this);
    this.markdown = this.markdown.bind(this);
  }
  handleChange(event) {
    this.setState({
      text : event.target.value
    })
  }
   markdown() {
     marked.setOptions({
     breaks: true
   })
     let rawMarkup = marked(this.state.text);
   
   return {__html: rawMarkup}
   }
 render() {
  
   return (
     <div id="markdown">
       <h1 class="title">MarkDown Previewer</h1>
       <div class="edit">
         <h4 class="editor">Editor</h4>
         <textarea id="editor" rows="10" cols="20" class="editor-text" value={this.state.text} onChange={this.handleChange}></textarea>
       </div>
       <div class="display-preview">
         <h4 class="display">Preview</h4>
         <section id="preview" dangerouslySetInnerHTML={this.markdown()} />
       </div>
     </div>
     
   );
 }
}


export default App;
