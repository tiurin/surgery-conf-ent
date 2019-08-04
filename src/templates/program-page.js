import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export const ProgramPageTemplate = ({
  title,
  content,
  contentComponent,
  main
}) => {
  const PageContent = contentComponent || Content

  return (
    <div className="content">
      <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section">
                <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                  {title}
                </h2>
                <PageContent className="content" content={content} />
              </div>
            </div>
          </div>
          <div className="tile is-ancestor">
            <div className="tile is-vertical">
              <div className="tile">
                <div className="tile is-parent is-vertical">
                  <article className="tile is-child">
                    <PreviewCompatibleImage imageInfo={main.image1} />
                  </article>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child">
                    <PreviewCompatibleImage imageInfo={main.image2} />
                  </article>
                </div>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child">
                  <PreviewCompatibleImage imageInfo={main.image3} />
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

ProgramPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const ProgramPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <ProgramPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        main={post.frontmatter.main}
      />
    </Layout>
  )
}

ProgramPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ProgramPage

export const programPageQuery = graphql`
  query ProgramPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        main {
          image1 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image2 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image3 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 1075, quality: 72) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
