import React, {Component} from "react";

const ArticleForm = (props) => {


function handleSubmit(evt) {
  evt.preventDefault();
  const article = {
    "title": evt.target.title.value,
    "text": evt.target.text.value,
    "datePublished": evt.target.datePublished.value,
    "image": evt.target.image.value,
    "journalist": evt.target.journalist.value
  }
  this.props.saveArticle(article);
}
const journalistOptions = props.journalists.map((journalist, index) => {
  return <option key = {index} value = {journalist._links.self.href}>{journalist.name}</option>
});

  return (
    <div>
    <form onSubmit = {this.handleSubmit} >
    <input type = "text" placeholder = "Add a title" name = "title" />
    <br/>
    <input type = "text" placeholder = "Add some text" name = "text" />
    <br/>
    <input type = "text" placeholder = "Add a date" name = "datePublished" />
    <br/>
    <select name = "journalist">
    {journalistOptions}
    </select>
    <button type = "submit"> Save </button>
    </form>
    </div>
  )

}

export default ArticleForm;