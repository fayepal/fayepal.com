/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const Bio = () => {
  return (
    <div>
      <p style={{
        marginBottom: rhythm(2.5),
      }}>
         <p>Hi! I'm Faye. A Filipino community manager based in Munich, Germany. I love being involved with tech communities so much that I decided to help others build their own.</p>
         
         <p>I currently work as the Checkmk Community Manager at tribe29. A significant amount of my experience in tech community building came from volunteering with Mozilla, where I helped build local and student communities in my free time.</p>

         <p>Would be happy to answer questions about community management especially in open source, and how to properly cook rice. DMs open!</p>
      
         <p>Opinions are my own, please don't use it to generalize my culture, my employer, and all the organizations I am associated with.</p>

        <p>You may also read my <a href="/blog">blog</a>.</p>

        <p>Let's connect on <a href="https://www.linkedin.com/in/fayetandog/">LinkedIn</a> or <a href="https://twitter.com/fayetandog">Twitter</a>!</p>
      </p>
    </div>
  )
}

export default Bio
