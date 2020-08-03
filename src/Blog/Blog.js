import React, { Component } from 'react';
import EntryImage from "./EntryImage";

const Entry020820 = () => (
    <div className="entry">
        <p className="entry-date">2 August 2020</p>
        <p>Okay, so really this entry was done on the second day. My first consisted of going through a SPA tutorial found at: <a href="https://www.kirupa.com/" target="_blank">https://www.kirupa.com</a> and then replicating it to create my own site.</p>
        <p>I styled it to look like the react.js home page for a themed react look.
        The actual pages built were Home, Blog and Portfolio. Today I expanded upon blog and updated it to include entries - this being the first!</p>
    </div>
);
const Entry040820 = () => (
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

class Blog extends Component {
    render() {
        return (
            <div>
                <h2>Blog</h2>
                <p>My on going experience through out my react journey</p>
                <Entry040820 />
                <Entry020820 />
                
            </div>
        );
    }
}

export default Blog;