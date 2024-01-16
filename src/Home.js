import { useState } from "react";
// flutter မှာဆို stateful ဖြစ်အောင်လုပ်သလိုပဲ

const Home = () => {

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
        </div>
     );
}

export default Home;