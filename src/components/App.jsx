import Recipes from './recipes';
import '../asset/styles/_app.scss';
import swordpng from '../asset/images/swc-sword.png';
import swordsvg from '../asset/images/sword.svg';



const App =()=> {
    return (
        <>
        <section className='logo'></section>
        <img src={swordpng} alt="sword" width="250" />
        <img src={swordsvg} alt="sword" width="250" />
        <h1>App React</h1>
        <Recipes />
        </>
    )
}

export default App;