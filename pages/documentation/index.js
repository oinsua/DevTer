import React from 'react'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'

const documentation = () => {
    return (
        <div className={styles.documentationcontainer}>
        <div className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
           <p>
           Since version 10.0.0, Next.js has a built-in Image Component and Automatic Image Optimization.
           The Next.js Image Component, next/image, is an extension of the HTML element, evolved for the modern web.
           The Automatic Image Optimization allows for resizing, optimizing, and serving images in modern formats like WebP when the browser supports it. 
           This avoids shipping large images to devices with a smaller viewport. 
           It also allows Next.js to automatically adopt future image formats and serve them to browsers that support those formats.
           Automatic Image Optimization works with any image source. Even if the image is hosted by an external data source, like a CMS, it can still be optimized.    
           </p> 
        </div>
        <Link href="/"><a className={styles.gotohome}>Go To Home &rarr;</a></Link>
        </div>
    )
}

export default documentation;
