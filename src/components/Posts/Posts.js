import React, {Component} from 'react';
import axios from 'axios';
// import './App.css';
import List from "../List/List";
import { Link } from "react-router-dom";
// const apiEndpoint = 'http://mydev.sinifikant.com/headless/wp-json/';
// const apiEndpoint = 'http://mydev.sinifikant.com/headless/wp-json/wp/v2/posts/';
const apiEndpoint = 'https://techcrunch.com/wp-json/wp/v2/posts';




class Posts extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        posts: [],
      };
    }

      async componentDidMount() {
          axios.get(apiEndpoint).then(posts => {
            this.setState({
              posts: posts.data
            });
          });        
          // 
          // console.log('ici= '+this.state.posts);

      }


      createMarkup(html) {
        return { __html: html };
      }

      // handleAdd = async () => {
      //     const obj = { title: 'a', body: 'b' };
      //     const { data: post } = await axios.post(apiEndpoint, obj);
      //     const posts = [post, ...this.state.posts];
      //     this.setState({ posts });
      // };

      // handleUpdate = async post => {
      //     post.title = 'updated title';
      //     const { data } = await axios.put(apiEndpoint + '/' + post.id, post);
      //     // axios.patch(apiEndpoint + '/' + post.id, {title: post.title});
      //     const posts = [...this.state.posts];
      //     const index = posts.indexOf(post);
      //     posts[index] = post;
      //     this.setState({ posts });
      // };

      // handleDelete = async post => {
      //     await axios.delete(apiEndpoint + '/' + post.id);
      //     const posts = this.state.posts.filter(p => p.id !== post.id);
      //     this.setState({ posts });
      // };

      render() {
        const posts = this.state.posts;
        console.log('POSTS = ' + posts);


        return (
          <div>
              {/* <List articles={this.state.posts}/> */}
                {this.state.posts.map(post => (
                  <Link to={`/${post.slug}`} key={post.id}>
                    <div className="card" key={post.id}>
                      <div className="card-content">
                        <h3>{post.title.rendered}</h3>
                        <div dangerouslySetInnerHTML={this.createMarkup( post.excerpt.rendered )} />
                      </div>
                    </div>
                  </Link>
                ))}
          </div> 
        );
      }

}


export default Posts;
