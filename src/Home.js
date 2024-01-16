const Home = () => {
    
    const handleClick = (e)=>{
        console.log('hello ninjas',e);
    }

    const handleClick2 = (name,e)=>{
        console.log('hello '+name);
        console.log(e.target);
    }

    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={(e)=>{
                handleClick2('Mario',e)
            }}>Click me Again</button>
        </div>
     );
}
 
export default Home;