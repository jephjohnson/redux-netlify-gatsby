import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Carousel from "../components/slideshow/"
import Slider from '../components/Slider.js';


export default class IndexPage extends React.Component {
  constructor (props) {
    super(props)
  }

  componentDidMount() {
    Slider.init();
  }

  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    console.log(posts)
    return (
      <section className="section">
        <div className="container">
          
          <Carousel data={posts} />

          {/* {posts
            .map(({ node: post }) => (
              <div
                className="content"
                style={{ border: '1px solid #eaecee', padding: '2em 4em' }}
                key={post.id}
              >
                <p>
                  <Link className="has-text-primary" to={post.fields.slug}>
                    {post.frontmatter.title}
                  </Link>
                  <span> &bull; </span>
                  <small>{post.frontmatter.date}</small>
                </p>
                <p>
                  {post.excerpt}
                  <br />
                  <br />
                  <Link className="button is-small" to={post.fields.slug}>
                    Keep Reading →
                  </Link>
                </p>
              </div>
            ))} */}

          <div id="box1"></div>
          <div className="wrapper">
          <div className="boxes">
            {posts
              .map(({ node: post }) => (
                  
                  <div className="box" key={post.id}>
                    <img src={post.frontmatter.image} style={{ width: '10em', height: '10em' }}  alt=''  />
                  </div>
                
              ))}
            </div>
          </div>
          <div id="viewport" className="viewport"></div>


        </div>
      </section>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            image
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
