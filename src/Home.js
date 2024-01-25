import { useState } from "react";
import BlogList from "./BlogList";
// flutter မှာဆို stateful ဖြစ်အောင်လုပ်သလိုပဲ

const Home = () => {
    const [blogs,setBlogs] = useState([
        { title: 'My new Website', body: 'lorem ......kljsdl ', author: 'mario', id:1 },
        { title: 'Welcome Party', body: 'lorem ......kljsdl ', author: 'yoshi', id:2 },
        { title: 'Tips and Tricks', body: 'lorem ......kljsdl ', author: 'tsu', id:3 }
    ]);    

    const [name, setName] = useState('mario'); //useState ထဲ ဘာ data ဖြစ်ဖြစ်ရ
    const [age, setAge] = useState(25);
    //let name = "Thae Su Paing";

    const handleClick = (e)=>{
        setName('luigi');
        setAge(21);
        // console.log('hello ninjas',e);
        // name = "Saw Su Shin";
    }

    const handleClick2 = (name,e)=>{
        console.log('hello '+name);
        console.log(e.target);
    }

    return (
        
        <div className="home">
            <h2>Home Page</h2>
            <p>{ name } is { age } years old.</p>
            {/* handleClick() q=ဆိုပီး parenthesis နဲ့ရေးလိုက်ရင် click မှမဟုတ်ပဲ page load တာနဲ့ အလုပ်လုပ် */}
            <button onClick={handleClick}>Click Me</button>
            {/* parameter ကနေ data ကို pass ချင်တဲ့ခါ */}
            <button onClick={(e)=>{
                handleClick2('Mario',e)
            }}>Click me Again</button>
            
    {/* {blogs.map((b)=>(
        <div className="blog-preview" key={b.id}>
            <h2>{b.title}</h2>
            Written by {b.author}
        </div>
    ))} */}

    <BlogList blogs={blogs} title="All Blogs"/>
        </div>
     );
}

export default Home;