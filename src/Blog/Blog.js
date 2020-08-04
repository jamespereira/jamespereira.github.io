import React, { Component } from 'react';
import EntryImage from "./EntryImage";

const Entry040820 = () => (
    <div className="entry">
        <p className="entry-date">5 August 2020</p>
        <p>Easily the biggest motivating factor for me is achieving a goal. However small it may be, the progress inspires me to keep pushing. Yesterday, after updating the entry format I wanted this site to be live (certainly helps not having to take screen shots to share it).</p>
        <p>I had used github pages before for job interviews to host a static site for free before, so at least I had some familiarity. This was the first time deploying a react site and really it was pretty straight forward. After creating a git repo for the project all I had to do was:</p>
        <ol>
            <li>npm install gh-pages --save-dev</li>
            <li>update my package.json</li>
            <li>then npm run deploy</li>
        </ol>
        <p>Now for the scary part, sharing it. With out a doubt the best way to learn is from others and it didn't take long before I was given my first lesson:</p>
            <EntryImage imgURL = "https://i.imgur.com/fxVk0dm.png" imgAlt="Hash advice" />
        <p>My original site URL was: "https://jamespereira.github.io/#/" I had been using HashRouter which gives the '#' int he URL. Switching over to BrowserRouter cleans up the URL using the history API. Again, a quick 3 step fix:</p>

        <ol>
            <li>update HashRouter to BrowserRouter including the relevant import</li>
            <li>create a <a href="https://github.com/rafgraph/spa-github-pages/blob/gh-pages/404.html">404.html</a></li>
            <li>Add a <a href="https://github.com/rafgraph/spa-github-pages/blob/gh-pages/index.html#L58">script</a> to the index.html head </li>
        </ol>
        <p>I found a full <a href="https://raquelmsmith.com/blog/how-to-deploy-create-react-app-to-github-pages/">tutorial</a> of the whole process once I'd finished - setting up with github pages as well as BrowserRouter.</p>

    </div>
);
const Entry030820 = () => (
    <div className="entry">
        <p className="entry-date">4 August 2020</p>
        <p>After building out the very basics of my site I'd decided to flesh out the blog, it's the most logical page to work on as it holds an update for everything I do. So how do I actually create each entry?</p>
        <p>My first attempt was to create a separate 'Entry' component, and then create a Date & Entry prop that would be entered on this page. Realising quickly that my props wouldnt take any html formatting as it was all a string.</p>
        <div className="splitImgContainer">
            <EntryImage imgURL = "https://i.imgur.com/ZBaxUAU.png" imgAlt="Entry Entry code" />
            <EntryImage imgURL = "https://i.imgur.com/OxPgDPo.png" imgAlt="First Entry page"/>
        </div>
        <p> Instead I've created a variable for each entry with a unique name based on the date all within the Blog component. This allows me to write as much html as I like while still maintaining any styling for each entry.</p>
        <p>I realise that this and <i>everything</i> I do from here on out will end up changing / not be the correct method, but it's all part of the journey.</p>
    </div>
);
const Entry020820 = () => (
    <div className="entry">
        <p className="entry-date">2 August 2020</p>
        <p>Okay, so really this entry was done on the second day. My first consisted of going through a SPA tutorial found at: <a href="https://www.kirupa.com/">https://www.kirupa.com</a> and then replicating it to create my own site.</p>
        <p>I styled it to look like the react.js home page for a themed react look.
        The actual pages built were Home, Blog and Portfolio. Today I expanded upon blog and updated it to include entries - this being the first!</p>
    </div>
);

class Blog extends Component {
    render() {
        return (
            <div>
                <h2>Blog</h2>
                <p className="content-description">My on going experience throughout my react journey.</p>
                <Entry040820 />
                <Entry030820 />
                <Entry020820 />
                
            </div>
        );
    }
}

export default Blog;